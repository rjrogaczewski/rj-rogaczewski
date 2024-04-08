var messageArray = [];

var messageType = {
    in: 'inbound-message',
    out: 'outbound-message',
    unknown: 'unknown-message'
};

function Message(type, user, message) {
    this.type = type;
    this.user = user;
    this.message = message;
}

function createMessageElement(message) {
    var messageContent = document.createTextNode (
        message.user + ': ' + message.message
    );

    var messageElement = document.createElement ('div')
    messageElement.appendChild(messageText);

    messageElement.className = message.type;
    return messageElement;
}

function addMessageHandler(event) {
    var user, type;
    var messageInput = document.getElementById('message-input');
    var messageContainerElement = document.getElementById('message-container');
    switch (event.target.id){
        case 'send-button':
            user = 'RJ';
            type = messageType.out;
            break;
        case 'reply-button':
            user = 'Albert';
            type = messageType.in;
            break;
        default:
            user = 'unknown';
            type = messageType.unknown;
        }
        if (messageInput.value != '') {
            var message = new Message(type, user, messageInput.value);
            messageArray.push(message);
            var element = createMessageElement(message);
            messageContainerElement.appendChild(element);
            messageInput.value = '';
        }
}

var messageContainerElement = document.getElementById('message-container');

for (var i = 0; i < messageArray.length; i++) {
    var message = messageArray[i];
    var element = createMessageElement(message);
    messageContainerElement.appendChild(element);
}

var initialize = function() {
    document.getElementById('send-button').onclick = addMessageHandler;
    document.getElementById('reply-button').onclick = addMessageHandler;
};

initialize();