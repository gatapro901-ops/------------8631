const groupButton = document.getElementById('group-button');
const agentButton = document.getElementById('agent-button');
const secretaryButton = document.getElementById('secretary-button');
const operationsButton = document.getElementById('operations-button');

// Add event listeners to buttons
groupButton.addEventListener('click', () => {
    // Open group page
    window.location.href = 'group.html';
});

agentButton.addEventListener('click', () => {
    // Open agent page
    window.location.href = 'agent.html';
});

secretaryButton.addEventListener('click', () => {
    // Open secretary page
    window.location.href = 'secretary.html';
});

operationsButton.addEventListener('click', () => {
    // Open operations page
    window.location.href = 'operations.html';
});