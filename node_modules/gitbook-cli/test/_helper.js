var path = require('path');
var fs = require('fs-extra');
var manager = require('../lib');

// Use tmp folder for testing
before(function() {
    var gitbookFolder = path.resolve(__dirname, '../.tmp');
    fs.removeSync(gitbookFolder);
    manager.setRoot(gitbookFolder);
    manager.init();
});
