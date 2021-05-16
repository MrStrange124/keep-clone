const addbtn = document.querySelector(".addicon");
const updateLSData = () => {
    const textAreaData = document.querySelectorAll('textarea');
    const notes = [];
    textAreaData.forEach((note) => {
        return notes.push(note.value);
    });
    localStorage.setItem('notes', JSON.stringify(notes));
}

const addNewNode = (text2 = '') => {
    // console.log((text2));
    const note = document.createElement('div');
    note.classList.add('note');
    const htmlData = `<div class="icon">
    <i class="far fa-edit fa-2x editicon"></i>
    <i class="fas fa-trash-alt fa-2x deleteicon"></i>
    </div>
    <div class="content ${text2 ? "" : "hidden"}">${text2}</div>
    <textarea class="type ${text2 ? "hidden" : ""}">${text2}</textarea>`;
    note.insertAdjacentHTML('afterbegin', htmlData);

    //getting reference
    const editbtn = note.querySelector('.editicon');
    const deleteBtn = note.querySelector('.deleteicon');
    const maindiv = note.querySelector('.content');
    const textarea = note.querySelector('textarea');

    //deleting note
    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLSData();

    })
    // toggle editbtn
    editbtn.addEventListener('click', () => {
        maindiv.classList.toggle('hidden');
        textarea.classList.toggle('hidden');
        // updateLSData();
    })
    textarea.addEventListener('change', (event) => {
        const value = event.target.value;
        maindiv.innerHTML = value;
        updateLSData();
    })

    document.body.appendChild(note);
}
//retriving data from local storage
const notes = JSON.parse(localStorage.getItem('notes'));
// console.log(notes)
if (notes) {
    notes.forEach((note) => {
        console.log(note);
        addNewNode(note);
    });
}

addbtn.addEventListener('click', () => addNewNode());