const addNote = document.querySelector('.add-note')
const noteWindow = document.querySelector('.notes')

addNote.addEventListener('click', () =>{
    addNotes()
})
function addNotes(){
    noteWindow.innerHTML += `<div class="note-body">
                                <textarea class="head"></textarea>
                                <textarea class="note"></textarea>
                            </div>`
}