var Q = require('q');
var fs = require('fs-extra');
var path = require('path');
var _ = require('lodash');
var npmi = require('npmi');
var npm = require('npm');
var tmp = require('tmp');
var color = require('bash-color');
var parsedArgv = require('optimist').argv;

var config = require('./config');
var tags = require('./tags');

// Return a list of all available versions on this system
function listVersions() {
    var folders = fs.readdirSync(config.VERSIONS_ROOT);
    var latest = null;

    return _.chain(folders)
        .map(function(tag) {
            // Verison matches requirements?
            if (!tags.isValid(tag)) return null;

            // Read package.json to determine version
            var versionFolder = path.resolve(config.VERSIONS_ROOT, tag);
            var stat = fs.lstatSync(versionFolder);
            var pkg;

            try {
                pkg = require(path.resolve(versionFolder, 'package.json'));
            } catch(e) {
                return null;
            }

            // Is it gitbook?
            if (pkg.name != 'gitbook') return null;

            return {
                // The name associated in the folder
                name: tag,

                // The real absolute version
                version: pkg.version,

                // Location of this version
                path: versionFolder,

                // Location if it's a symlink
                link: stat.isSymbolicLink()? fs.readlinkSync(versionFolder) : null,

                // Type of release, latest, beta, etc ?
                tag: tags.getTag(pkg.version)
            };
        })
        .compact()

        // Sort by the version
        .sort(function(a, b) {
            return tags.sort(a.version, b.version);
        })
        .value();
}

// Return path to a specific version
function versionRoot(version) {
    return path.resolve(config.VERSIONS_ROOT, version);
}

// Resolve a version using a condition
function resolveVersion(condition) {
    var versions = listVersions();
    var version = _.chain(versions)
        .find(function(v) {
            return tags.satisfies(v.name, condition);
        })
        .value();

    if (!version) return Q.reject(new Error('No version match: '+condition));
    return Q(version);
}

// Remove an installed version of gitbook
function removeVersion(version) {
    if (!version) return Q.reject(new Error('No version specified'));
    var outputFolder = versionRoot(version);

    return Q.nfcall(fs.lstat.bind(fs), outputFolder)
    .then(function(stat) {
        if (stat.isSymbolicLink()) {
            return Q.nfcall(fs.unlink.bind(fs), outputFolder);
        }
        return Q.nfcall(fs.remove.bind(fs), outputFolder);
    });
}

// Load a gitbook version
function loadVersion(version) {
    return Q(_.isString(version)? resolveVersion(version) : version)
    .then(function(resolved) {
        var gitbook;

        try {
            gitbook = require(resolved.path);
        } catch (err) {
            console.log(color.red('Error loading version '+resolved.tag+': '+(err.stack || err.message || err)));
            return null;
        }

        if (!gitbook) throw new Error('GitBook Version '+resolved.tag+' is corrupted');
        return gitbook;
    });
}

// Link a folder to a tag
function linkVersion(name, folder) {
    if (!name) return Q.reject(new Error('Require a name to represent this GitBook version'));
    if (!folder) return Q.reject(new Error('Require a folder'));
    var outputFolder = versionRoot(name);

    return Q.nfcall(fs.symlink.bind(fs), folder, outputFolder);
}

module.exports = {
    load: loadVersion,
    resolve: resolveVersion,
    versions: listVersions,
    remove: removeVersion,
    link: linkVersion
};
