var os = require('os');
var npmi = require('../npmi');

describe('npmi', function () {
    this.timeout(30000); // increase timeout because drone container is a bit slow
    it('should install kevoree-node-javascript:latest', function (done) {
        npmi({
            name: 'kevoree-node-javascript',
            version: 'latest',
            path: os.tmpdir()
        }, function (err) {
            if (err) {
                throw err;
            } else {
                done();
            }
        });
    });

    it('should install kevoree-node-javascript:0.6.0', function (done) {
        npmi({
            name: 'kevoree-node-javascript',
            version: '0.6.0',
            path: os.tmpdir()
        }, function (err) {
            if (err) {
                throw err;
            } else {
                done();
            }
        });
    });
});
