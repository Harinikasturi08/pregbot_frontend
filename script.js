function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");

  if (input.value.trim() === "") return;

  const userMessage = `<div><strong>You:</strong> ${input.value}</div>`;
  chatBox.innerHTML += userMessage;

  // Placeholder bot response
  const botResponse = `<div><strong>Pregbot:</strong> Thank you for your message! I'm here to help.</div>`;
  chatBox.innerHTML += botResponse;

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
