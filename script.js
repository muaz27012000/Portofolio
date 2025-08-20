// Event sapaan di Hero Section
function sayHello() {
  alert("Halo, saya Aziz! Senang bertemu denganmu 😎");
}

// Form Contact
function sendMessage(event) {
  event.preventDefault();
  let nama = document.getElementById("nama").value;
  let email = document.getElementById("email").value;
  let pesan = document.getElementById("pesan").value;

  let status = document.getElementById("status");
  status.innerHTML = `Terima kasih ${nama}, pesanmu sudah terkirim!`;

  // Reset form
  document.getElementById("nama").value = "";
  document.getElementById("email").value = "";
  document.getElementById("pesan").value = "";
}