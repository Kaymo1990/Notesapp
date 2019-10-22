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
    },
    body: {
        describe: 'Note body',
        demandOption: true,
        type: 'string'
    }
},
handler: function(argv) {
    console.log('Title: '+ argv.title);
    console.log('Body: ' + argv.body);
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