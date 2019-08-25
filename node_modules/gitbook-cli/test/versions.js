var path = require('path');
var should = require('should');

var manager = require('../lib');

describe('Versions', function() {
    this.timeout(100000);

    describe('.available()', function() {
        var result;

        before(function() {
            return manager.available()
            .then(function(versions) {
                result = versions;
            });
        });

        it('should correctly return a list of versions', function() {
            result.should.have.properties('versions');
            result.versions.should.be.an.Array();
        });

        it('should correctly return a map of tags', function() {
            result.should.have.properties('tags');
            result.tags.should.have.properties('latest');
        });
    });

    describe('.install()', function() {
        var result;

        before(function() {
            return manager.install('2.0.0')
            .then(function(version) {
                result = version;
            });
        });

        it('should correctly return the installed version', function() {
            result.should.be.a.String();
            result.should.equal('2.0.0');
        });
    });

    describe('.ensure()', function() {
        it('should correctly return installed version', function() {
            return manager.ensure(__dirname)
            .then(function(v) {
                v.should.have.properties('version', 'path');
                v.version.should.equal('2.0.0');
            });
        });

        it('should correctly install version specified', function() {
            return manager.ensure(path.resolve(__dirname, 'fixtures/book1'))
            .then(function(v) {
                v.should.have.properties('version', 'path');
                v.version.should.equal('3.0.0-pre.2');
            });
        });
    });

    describe('.list()', function() {
        var result;

        before(function() {
            result = manager.versions();
        });

        it('should correctly return the installed version', function() {
            result.should.be.an.Array();
            result.should.have.lengthOf(2);
            result[0].should.have.properties('name', 'tag', 'version', 'path');
            result[0].version.should.equal('3.0.0-pre.2');
            result[1].should.have.properties('name', 'tag', 'version', 'path');
            result[1].version.should.equal('2.0.0');
        });
    });

    describe('.link()', function() {
        var localGitbook = path.resolve(__dirname, '../node_modules/gitbook');

        before(function() {
            return manager.link('latest', localGitbook);
        });

        it('should correctly list latest version', function() {
            var result = manager.versions();
            result.should.have.lengthOf(3);
            result[1].should.have.properties('version', 'path');
            result[1].tag.should.equal('beta');
            result[1].name.should.equal('latest');
            result[1].link.should.equal(localGitbook);
        });

        it('should correctly return latest version as default one', function() {
            return manager.get(__dirname)
            .then(function(version) {
                version.name.should.equal('latest');
            });
        });
    });

    describe('.ensureAndLoad()', function() {
        it('should correctly return gitbook instance', function() {
            return manager.ensureAndLoad(__dirname)
            .then(function(gitbook) {
                gitbook.should.be.an.Object();
                gitbook.should.have.properties('commands');
                gitbook.commands.should.be.an.Array();
            });
        });
    });

    describe('.uninstall()', function() {
        it('should correctly remove a specific version', function() {
            return manager.uninstall('2.0.0')
            .then(function() {
                var result = manager.versions();
                result.should.have.lengthOf(2);
            });
        });

        it('should correctly remove a version by tag', function() {
            return manager.uninstall('latest')
            .then(function() {
                var result = manager.versions();
                result.should.have.lengthOf(1);
            });
        });
    });
});
