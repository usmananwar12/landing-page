document.addEventListener("DOMContentLoaded", function () {
    const chatBtn = document.getElementById("chatBtn");
    const chatPopup = document.getElementById("chatPopup");
    const closeChat = document.getElementById("closeChat");
    chatBtn.addEventListener("click", function () {
        chatPopup.style.display = "block";
    });

    closeChat.addEventListener("click", function () {
        chatPopup.style.display = "none";
    });
});

