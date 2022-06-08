/* To-do List */
//Create the buttons

const btnCreate = document.querySelector('.btn-main');
const btnToggle = document.querySelector('.btn-toggle');
const btnRemove = document.querySelector('.btn.remove');

// Function to add new Task

btnCreate.addEventListener('click', () => {
    const input = document.querySelector('.input-main');
    const list = document.querySelector('ul');

    list.insertAdjacentHTML(
        'afterbegin',
        `<li>${input.value}</li>`
    );
    input.value = '';
})

// Function to hide list

btnToggle.addEventListener('click', () => {
    const listContainer = document.querySelector('.list-container');

    if (listContainer.style.display === 'none') {
        btnToggle.textContent = 'Hide List';
        listContainer.removeAttribute('style');
    } else {
        btnToggle.textContent = 'Show List';
        listContainer.style.display = 'none';
    }

})

// Function to remove items

btnRemove.addEventListener('click', () => {
    const lastItem = document.querySelector('li:last-child');
    lastItem.remove;close
})


/* Checked symbol uppon clicking on item

let list = document.querySelector('ul');
list.addEventListener ('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false) */

/*In VS Code, which uses the Electron environment, 
the prompt function is not support as it is UI blocking. 
See this issue for more info(answers from the 'issue' hyperlink):

Prompt blocks the thread while inputting data from the user so i guess that is the main reason.

There is no native prompt dialogs in most GUI toolkits, 
so implementing prompt in atom-shell would require writing the prompt dialog from ground up on all platforms. 
Due to the rare use of prompt, I think it doesn't deserve to do all the work, 
and it is very easy to use a web implemented solution for this.

So I'm closing this as won't fix.

You will need to run your example in a browser*/

/*
 - Execute Javascript with Node
 - Execute Javascript in JSBIN.com
 - Execute Javascript in browser as HTML file
 - Execute Javascript in Google Chrome console
*/