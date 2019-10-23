const fs = require('fs');

const getNotes = function () {
    return 'Your notes..';
}

const addNote = function (title, body) {
const notes = loadNotes();
const duplicateNotes = notes.filter(function(note) {
    return note.title === title;
})
if(duplicateNotes.length === 0) {
    notes.push({
        title: title,
        body: body
    })
    saveNotes(notes);
    console.log('New note added');
}
else {
    console.log('Note title taken!')
    }
}

const saveNotes = function(notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function () {
    try{
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
    }

    catch(e) {
        return [];
    }
}

const removeNote = function(title) {
    const notes = loadNotes();
    const duplicatedNotes = notes.filter(function(note) {
        return note.title !== title;
    })

    if(duplicatedNotes.length < notes.length) {
        saveNotes(duplicatedNotes)
        console.log('found delete')
        }

    else {
        console.log('Note not found');
    }
}

const listNotes = function() {
    const notes = loadNotes();
    notes.forEach(note => {
        console.log(note.title);
    });
}

const readNote = function(title) {
    const notes = loadNotes();
    let index = notes.findIndex(note => note.title == title)
    console.log(notes[index].body);
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}