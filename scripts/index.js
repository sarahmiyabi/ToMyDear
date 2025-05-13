document.getElementById("secretForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const enteredCode = document.getElementById("pass").value;
    const person = peopleData.find(p => p.code === enteredCode);

    if (person) {
        if (person.letters.length > 0) {
            window.location.href = `./letters/${person.letters[0]}`;
        } else {
            alert(`Bonjour ${person.name}, tu n'as pas encore reçu de lettre.`);
        }
    } else {
        alert("Code incorrect. Réessaie !");
    }
});