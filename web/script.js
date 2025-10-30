function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

function sendMessage(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  document.getElementById(
    "success-message"
  ).innerText = `Terima kasih, ${name}! Pesanmu sudah kami terima.`;
  event.target.reset();
}
