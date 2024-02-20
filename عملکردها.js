function sendMessage() {
    var senderInput = document.getElementById("sender-input");
    var contentInput = document.getElementById("content-input");

    var sender = senderInput.value;
    var content = contentInput.value;

    if (sender.trim() === "" || content.trim() === "") {
        alert("فیلدهای نام فرستنده و متن پیام نمی‌تواند خالی باشد.");
        return;
    }

    var messageDiv = document.createElement("div");
    messageDiv.classList.add("message");

    var senderDiv = document.createElement("div");
    senderDiv.classList.add("sender");
    senderDiv.textContent = sender;

    var contentDiv = document.createElement("div");
    contentDiv.classList.add("content");
    contentDiv.textContent = content;

    messageDiv.appendChild(senderDiv);
    messageDiv.appendChild(contentDiv);

    var messageContainer = document.getElementById("message-container");
    messageContainer.appendChild(messageDiv);

    senderInput.value = "";
    contentInput.value = "";
}