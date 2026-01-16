import { log, chats } from "./chats";
const button = document.getElementById("enable-button");
button.addEventListener("click", () => {
    // @ts-ignore
    window.supportAI.enableAutoReply();
});
log(chats);
