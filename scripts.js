
function toggleChatbot() {
    const chatbot = document.getElementById('chatbotWindow');
    chatbot.style.display = (chatbot.style.display === 'flex') ? 'none' : 'flex';
}


const responses = {
    "hello": "Hi there! How can I assist you today?",
    "Hi": "Hi, How are you today?",
    "how are you": "I'm just a bot, but I'm here to help!",
    "what is your name": "I'm CarboRobo.",
    "help": "I can assist with general questions. What do you need help with?",
    "bye": "Goodbye! Have a great day!",
    "Who is the Chairman?": "Sivaani J is the Chairwoman.",
    "default": "I don't understand. Please Try Again."

};


function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();

    if (message) {
        displayMessage("You", message);
        input.value = "";
        generateResponse(message);
    }
}


function displayMessage(sender, message) {
    const chatBody = document.getElementById('chatbotBody');
    chatBody.innerHTML += `<p><strong>${sender}:</strong> ${message}</p>`;
    chatBody.scrollTop = chatBody.scrollHeight;
}


function generateResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    let botResponse = responses.default;

    for (const key in responses) {
        if (lowerMessage.includes(key)) {
            botResponse = responses[key];
            break;
        }
    }

    displayMessage("Bot", botResponse);
}