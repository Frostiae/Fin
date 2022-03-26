const remote = require('electron').remote;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var today = new Date();
var day = String(today.getDate()).padStart(2, '0');
var month = months[today.getMonth()];

const date = document.getElementById('date');
date.innerHTML = month + ' ' + day;

const list = document.getElementById('todo-list');
const tasks = document.getElementById('tasks');
const newButton = document.getElementById('add-new');

const body = document.querySelector('body');
body.style.backgroundColor = "rgb(27, 27, 29, 0.8)";

function closeApp() {
    var window = remote.getCurrentWindow();
    window.close();
}

function minimizeApp() {
    var window = remote.getCurrentWindow();
    window.minimize();
}

function setTransparency(value) {
    body.style.backgroundColor = `rgb(27, 27, 29, ${value})`;
}

function newTask() {
    const item = document.createElement('li');
    item.classList.add('task');
    item.classList.add('placeholder');

    const input = document.createElement('input');
    input.type = 'text';
    
    item.appendChild(input);
    list.insertBefore(item, newButton);
    input.focus();

    input.addEventListener('keydown', (e) => {
        if (e.code == "Enter") {
            const value = input.value;

            const task = document.createElement('li');
            task.classList.add('task');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.name = value;
            checkbox.id = value;

            const label = document.createElement('label');
            label.htmlFor = value;
            label.innerHTML = value;

            const hr = document.createElement('hr');

            task.appendChild(checkbox);
            task.appendChild(label);

            tasks.appendChild(task);
            tasks.appendChild(hr);
            //list.insertBefore(task, newButton);
            //list.insertBefore(hr, newButton);

            item.remove();
        }
    })
}