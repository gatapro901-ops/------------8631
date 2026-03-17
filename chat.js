const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send-button');
const chatLog = document.getElementById('chat-log');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    // Send message to server
    console.log(message);
    // Clear input field
    messageInput.value = '';
});