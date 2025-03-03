document.getElementById("send-button").addEventListener("click", sendMessage);
document.getElementById("message-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") sendMessage();
});

function sendMessage() {
    let input = document.getElementById("message-input");
    let messageText = input.value.trim();

    if (messageText === "") return;

    // Criando a mensagem do usuário
    let userMessage = document.createElement("div");
    userMessage.classList.add("message", "user-message");
    userMessage.textContent = messageText;

    document.getElementById("chat").appendChild(userMessage);
    input.value = "";
    document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;

    // Simulando resposta do bot
    setTimeout(() => {
        botResponse("Essa é uma resposta automática ! 😊");
    }, 1000);
}

function botResponse(text) {
    let botMessage = document.createElement("div");
    botMessage.classList.add("message", "bot-message");
    botMessage.textContent = text;

    document.getElementById("chat").appendChild(botMessage);
    document.getElementById("chat").scrollTop = document.getElementById("chat").scrollHeight;
}
