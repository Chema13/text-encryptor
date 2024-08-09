const pattern = /^[a-z\s]+$/;

function encriptar() {
  const getText = document.getElementById("firstText").value.toLowerCase();

  if (!pattern.test(getText)) {
    showAlert("Solo se puede ingresar letras minúsculas");
    return;
  }

  const replacements = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };

  const cifratedText = getText.replace(
    /[eioua]/g,
    (match) => replacements[match]
  );

  displayResult(cifratedText);
}

function desencriptar() {
  const getText = document.getElementById("firstText").value.toLowerCase();

  if (!pattern.test(getText)) {
    showAlert("Solo se puede ingresar letras minúsculas");
    return;
  }

  const replacements = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };

  const decryptedText = getText.replace(
    /enter|imes|ai|ober|ufat/g,
    (match) => replacements[match]
  );

  displayResult(decryptedText);
}

function displayResult(text) {
  document.getElementById("card_image_p").textContent = text;
  document.getElementById("card_image_p").className = "showed";
  document.getElementById("btn_copy").style.display = "inline";
  document.getElementById("image_search").style.display = "none";
  document.getElementById("card_image_h2").style.display = "none";
}

function showAlert(message) {
  const alertElement = document.getElementById("alert");
  alertElement.textContent = message;
  setTimeout(() => {
    alertElement.textContent = "";
  }, 3500);
}

function copiedText() {
  const copyText = document.getElementById("card_image_p").textContent;
  navigator.clipboard.writeText(copyText);
  const resultElement = document.getElementById("card_parrafo_result");
  resultElement.textContent = "Texto copiado al portapapeles";
  resultElement.style.display = "inline";
  resultElement.className = "message_alert";
  setTimeout(() => {
    resultElement.style.display = "none";
  }, 3500);
}
