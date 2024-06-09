document.getElementById('sendButton').addEventListener('click', function() {
    var messageInput = document.getElementById('Mensagem-Input');
    var message = messageInput.value;
    messageInput.value = '';

    var messageElement = document.createElement ('p');
    messageElement.textContent = message;
    messageElement.className = 'chat-texto';
    document.getElementById('chatlogs').appendChild(messageElement);
});
