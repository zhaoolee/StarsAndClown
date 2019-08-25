var _ = require('lodash');

// Helper function for print help
// indented output by spaces
function indent_output(n, name, description) {
    if (!n) {
        n = 0;
    }
    
    console.log(
        _.repeat('    ', n)
        + name
        + _.repeat(' ', 32 - n * 4 - name.length)
        + description
    );
}

// Print help for a list of commands
// It prints the command and its description, then all the options
function help(commands) {
    _.each(commands, function(command) {
        indent_output(1, command.name, command.description);
        _.each(command.options || [], function(option) {
            var after = [];

            if (option.defaults !== undefined) after.push("Default is "+option.defaults);
            if (option.values) after.push("Values are "+option.values.join(", "));

            if (after.length > 0) after = "("+after.join("; ")+")";
            else after = "";

            var optname = '--';
            if (typeof option.defaults === 'boolean') optname += '[no-]';
            optname += option.name;
            indent_output(2, optname, option.description + ' ' + after);
        });
        console.log('');
    });
}

// Execute a command from a list
// with a specific set of args/kwargs
function exec(commands, command, args, kwargs) {
    var cmd = _.find(commands, function(_cmd) {
        return _.first(_cmd.name.split(" ")) == command;
    });

    // Command not found
    if (!cmd) throw new Error('Command '+command+' doesn\'t exist, run "gitbook help" to list commands.');

    // Apply defaults
    _.each(cmd.options || [], function(option) {
        kwargs[option.name] = (kwargs[option.name] === undefined)? option.defaults : kwargs[option.name];
        if (option.values && !_.includes(option.values, kwargs[option.name])) {
            throw new Error('Invalid value for option "'+option.name+'"');
        }
    });

    return cmd.exec(args, kwargs);
}

module.exports = {
    help: help,
    exec: exec
};
