/* To-do List */
//Create a close button and append it to each list item

let myNodeList = document.getElementsByTagName("LI");
for (let i = 0; i<closeBTN.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7") // \u00D7 is multiplication sign
    span.className = "close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}

// Close button to hide/delete current item
let close = document.getElementsByClassName("close");
for (let i = 0; i<close.length; i++) {
    close[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Checked symbol uppon clicking on item

let list = document.querySelector('ul');
list.addEventListener ('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false)

// create new item from Add button

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("MyInput").value;
    let t =  document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("The item can't be empty.");
    } else {
        document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createElement("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}


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