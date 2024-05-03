// Function to save text to local storage
function saveTextToLocalStorage(text) {
    localStorage.setItem('userText', text);
}

// Function to display text from local storage
function displayTextFromLocalStorage() {
    const userText = localStorage.getItem('userText');
    if (userText) {
        document.getElementById('textInput').value = userText;
        document.getElementById('displayArea').innerText = userText;
    }
}

// Function to clear local storage data
function clearLocalStorage() {
    localStorage.removeItem('userText');
    document.getElementById('textInput').value = '';
    document.getElementById('displayArea').innerText = '';
}

// Event listener for form submission
document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const textInput = document.getElementById('textInput').value;
    saveTextToLocalStorage(textInput);
    document.getElementById('displayArea').innerText = textInput;
});

// Event listener for clear button
document.getElementById('clearButton').addEventListener('click', function() {
    clearLocalStorage();
});

// Display any existing text when the page loads
window.addEventListener('load', function() {
    displayTextFromLocalStorage();
});
