document.getElementById("nocopy").addEventListener("copy", function (event) {
  event.preventDefault();
  resultMessage.textContent = "No se puede copiar el código. 😞";
  resultMessage.classList.add("shake-animation"); // Aplica la animación
  setTimeout(function () {
    resultMessage.classList.remove("shake-animation"); // Remueve la clase de animación después de un tiempo
  }, 400);
});
function openChallenge() {
  var codeChallenge = document.getElementById("codeChallenge");
  if (codeChallenge.classList.contains("init")) {
    // Si tiene la clase "init", cambiarla a "under"
    codeChallenge.classList.remove("init");
    codeChallenge.classList.add("under");
  } else {
    // Si no tiene la clase "init", añadirla
    codeChallenge.classList.add("init");
  }
}
function closeChallenge() {
  var codeChallenge = document.getElementById("codeChallenge");
  codeChallenge.classList.remove("init");
  codeChallenge.classList.add("under");
}

function checkAnswer() {
  var answer = document.getElementById("answerInput").value.trim();
  var correctAnswer = "12"; // Respuesta correcta
  var resultMessage = document.getElementById("resultMessage");
  if (answer === correctAnswer) {
    // La respuesta es correcta, permitir la descarga
    document
      .getElementById("downloadLink")
      .setAttribute("href", "src/docs/cv-MarlonRalda.pdf");
    document.getElementById("downloadLink").setAttribute("target", "_blank");
    document
      .getElementById("downloadLink")
      .setAttribute("download", "CV-Marlon-Ralda");
    document
      .getElementById("downloadLink")
      .setAttribute("onclick", "closeChallenge()");
    downloadLink.textContent = "Descargar CV";
    resultMessage.textContent = "¡Correcto! Haz clic en 'Descargar CV'.";
    answerInput.value = "";
  } else {
    // La respuesta es incorrecta, mostrar mensaje de error
    answerInput.value = "";
    resultMessage.textContent =
      "Respuesta incorrecta. Por favor, inténtalo de nuevo.";
    resultMessage.classList.add("shake-animation"); // Aplica la animación
    setTimeout(function () {
      resultMessage.classList.remove("shake-animation"); // Remueve la clase de animación después de un tiempo
    }, 400);
  }
}

window.show.addEventListener("click", () => {
  window.dialog.showModal();
  console.log("Ping 😎");
});

window.hide.addEventListener("click", () => {
  window.dialog.close();
  console.log("Pong. 👋");
});
