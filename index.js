import { log, chats } from "./chats";
const button = document.getElementById("enable-button");
button.addEventListener("click", () => {
    window.supportAI.enableAutoReply();
});
log(chats);
