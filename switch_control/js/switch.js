// Checkbox status.
let status = 'off';

// Document elements.
let page = document.getElementById('page');
let task = document.getElementById('task');
let output = document.getElementById('output');

// Initializing.
function init()
{
    // Focus the notch.
    document.getElementById("notch").focus();

    // Set default values.
    page.className = 'light';
    task.innerHTML = '<p class="light">Switch to dark mode!</p>';
    output.innerHTML = '<p class="light">' + status + '</p>';
}

// Toggle checkbox status.
function switchStatus()
{
    // Is checkbox toggled?
    if (status === 'off') // No.
    {
        // Show dark mode.
        status = 'on';
        page.className = 'dark';
        task.innerHTML = '<p class="dark">Switch to light mode!</p>';
        output.innerHTML = '<p class="dark">' + status + '</p>';
    }
    else if (status === 'on') // Yes.
    {
        // Show light mode.
        status = 'off';
        page.className = 'light';
        task.innerHTML = '<p class="light">Switch to dark mode!</p>';
        output.innerHTML = '<p class="light">' + status + '</p>';
    }
}