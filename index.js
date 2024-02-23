let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];
count = 0
let sendMsgBtnEl = document.getElementById("sendMsgBtn")
let userInputEl = document.getElementById("userInput")
let chatContainerEl = document.getElementById("chatContainer")
chatContainerEl.classList.add("chat-container")
sendMsgBtnEl.onclick = function() {
    let userInputElValue = userInputEl.value
    let messageContainerEl = document.createElement("div")
    messageContainerEl.classList.add("msg-to-chatbot-container")
    chatContainerEl.appendChild(messageContainerEl)

    let usermsg = document.createElement("span")
    usermsg.textContent = userInputElValue
    usermsg.classList.add("msg-to-chatbot")
    messageContainerEl.appendChild(usermsg)

    userInputEl.value = ""
    replayFromChatBot()
}

function replayFromChatBot() {
    let noOfMsg = chatbotMsgList.length
    let chatbotmsg = chatbotMsgList[Math.ceil(Math.random() * noOfMsg - 1)]

    let messageContainerEl = document.createElement("div")
    messageContainerEl.classList.add("msg-from-chatbot-container")
    chatContainerEl.appendChild(messageContainerEl)

    let chatbotmsg1 = document.createElement("span")
    chatbotmsg1.textContent = chatbotmsg
    chatbotmsg1.classList.add("msg-from-chatbot")
    messageContainerEl.appendChild(chatbotmsg1)

}
// console.log(chatContainerEl)