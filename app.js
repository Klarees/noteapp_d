const add = require('./add')
const read = require('./read')
const write = require('./write')

const data = process.argv
//write(data)

var note = {}

if(data[2] == 'add') {
   
    note = {
        id: data[3],
        title: data[4],
        body: data[5]
    }
   
    var oldNote = read()
   
    add(note, oldNote);
}
if(data[2] == 'read') {
    
    const present = require('./present')

    present(read())
}