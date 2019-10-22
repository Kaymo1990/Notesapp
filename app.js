const yargs = require('yargs');
const command = process.argv[2];

yargs.command({
command: 'add',
describe: 'Add a new note',
handler: function() {
    console.log('Adding a new note');
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removing the note');
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists notes',
    handler: function() {
        console.log('Listing notes');
    }
})

yargs.command({
    command: 'read',
    describe: 'Reads notes',
    handler: function() {
        console.log('Reading notes');
    }
})

console.log(yargs.argv);