document.getElementById("send-button").addEventListener("click", function() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        addMessage(userInput, "user");
        getBotResponse(userInput);
        document.getElementById("user-input").value = "";
    }
});

document.getElementById("user-input").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        let userInput = document.getElementById("user-input").value;
        if (userInput.trim() !== "") {
            addMessage(userInput, "user");
            getBotResponse(userInput);
            document.getElementById("user-input").value = "";
        }
    }
});

function addMessage(message, sender) {
    let messageElement = document.createElement("div");
    messageElement.classList.add("message", sender === "user" ? "user-message" : "bot-message");
    messageElement.textContent = message;
    document.getElementById("chat-log").appendChild(messageElement);
    document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
}

function getBotResponse(userInput) {
    let botResponse = "";

    switch (userInput.toLowerCase()) {
        case "hi":
        case "hello":
            botResponse = "Hello! How can I help you today?";
            break;
        case "how are you?":
            botResponse = "I'm just a bot, but I'm doing great! How about you?";
            break;
        case "what is your name?":
            botResponse = "I'm a simple chatbot created to assist you.";
            break;
        case "what are you doing?":
            botResponse = "I'm chatting with you";
            break;
        default:
            botResponse = "I'm not sure how to respond to that. Can you please ask something else?";
            break;
    }

    addMessage(botResponse, "bot");
}
