var Q = require('q');
var fs = require('fs-extra');
var npmi = require('npmi');
var npm = require('npm');
var tmp = require('tmp');
var _ = require('lodash');
var path = require('path');

var tags = require('./tags');
var config = require('./config');

// Initialize NPM before usage
var initNPM = _.memoize(function() {
    return Q.nfcall(npm.load, {
        silent: true,
        loglevel: 'silent'
    });
});

// Return a list of versions available in the registry (npm)
function availableVersions() {
    return initNPM()
    .then(function() {
        return Q.nfcall(npm.commands.view, ['gitbook', 'versions', 'dist-tags'], true);
    })
    .then(function(result) {
        result = _.chain(result).values().first().value();
        result = {
            versions: _.chain(result.versions)
                .filter(function(v) {
                    return tags.isValid(v);
                })
                .sort(tags.sort)
                .value(),
            tags: _.chain(result['dist-tags'])
                .omit(function(tagVersion, tagName) {
                    return !tags.isValid(tagVersion);
                })
                .value()
        };

        if (result.versions.length == 0) throw new Error('No valid version on the NPM registry');
        return result;
    });
}

// Resolve a version name or tag to an installable absolute version
function resolveVersion(version) {
    var _version = version;

    return availableVersions()
    .then(function(available) {
        // Resolve if tag
        if (available.tags[version]) version = available.tags[version];

        version = _.find(available.versions, function(v) {
            return tags.satisfies(v, version, {
                // Tag is resolved from npm dist-tags
                acceptTagCondition: false
            });
        });

        // Check version
        if (!version) throw new Error('Invalid version or tag "'+_version+'", see available using "gitbook ls-remote"');
        return version;
    });
}

// Install a specific version of gitbook
function installVersion(version, forceInstall) {
    return resolveVersion(version)
    .then(function(_version) {
        version = _version;
        return Q.nfcall(tmp.dir.bind(tmp));
    })
    .spread(function(tmpDir) {
        var options = {
            name: 'gitbook',
            version: version,
            path: tmpDir,
            forceInstall: !!forceInstall,
            npmLoad: {
                loglevel: 'silent',
                loaded: false,
                prefix: tmpDir
            }
        };
        console.log('Installing GitBook', version);
        return Q.nfcall(npmi.bind(npmi), options).thenResolve(tmpDir);
    })
    .then(function(tmpDir) {
        var gitbookRoot = path.resolve(tmpDir, 'node_modules/gitbook');
        var packageJson = fs.readJsonSync(path.resolve(gitbookRoot, 'package.json'));
        var version = packageJson.version;

        var outputFolder = path.resolve(config.VERSIONS_ROOT, version);

        if (!tags.isValid(version)) throw 'Invalid GitBook version, should satisfies '+config.GITBOOK_VERSION;

        // Copy to the install folder
        return Q.nfcall(fs.copy.bind(fs), gitbookRoot, outputFolder)
        .thenResolve(version);
    });
}

module.exports = {
    versions: availableVersions,
    resolve: resolveVersion,
    install: installVersion
};
