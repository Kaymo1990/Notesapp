const yargs = require('yargs');
const command = process.argv[2];

yargs.command({
command: 'add',
describe: 'Add a new note',
builder: {
    title: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    }
},
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
    builder: {
        title: {
            describe: 'Note title'
        }
    },
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