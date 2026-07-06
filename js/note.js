window.addEventListener('load', async () => {
    try{
        const notejson = await fetch('/note.json');
        const noteData = await notejson.json();
        console.log('noteData:', noteData);
        const bottomContainer = document.querySelector('#flex_box_bottom');
        // clear notes
        bottomContainer.innerHTML = '';
        for (const note of noteData) {
            const noteElement = document.createElement('div');
            noteElement.classList.add('bottom_son');
            noteElement.setAttribute('data-name', 'note');
            noteElement.setAttribute('data-id', note.id);
            noteElement.innerHTML = `
                <h3>${note.title}</h3>
                <p>${note.content}</p>
            `;
            bottomContainer.appendChild(noteElement);
        }
    }catch(err){
        console.error('Error fetching note data:', err);
    }finally{
        addevent();
        console.log('Event listeners added to note elements.');
    }
})