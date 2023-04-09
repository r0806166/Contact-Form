// De validateForm-functie wordt aangeroepen wanneer de gebruiker op de submit-knop klikt
function validateForm() {
    // Maak een array om foutmeldingen op te slaan
    let errors = [];
  
    // Controleer of alle vereiste velden zijn ingevuld en voeg eventuele foutmeldingen toe aan de array errors
    checkEmptyField(document.getElementById("voornaam"), "Het veld voornaam is vereist.", errors);
    checkEmptyField(document.getElementById("naam"), "Het veld naam is vereist.", errors);
    checkEmptyField(document.getElementById("gebruikersnaam"), "Het veld gebruikersnaam is vereist.", errors);
    checkEmptyField(document.getElementById("adres"), "Het veld adres is vereist.", errors);
    checkEmptyField(document.getElementById("land"), "Het veld land is vereist.", errors);
    checkEmptyField(document.getElementById("provincie"), "Het veld provincie is vereist.", errors);
  
    // Controleer of het e-mailadres geldig is en voeg indien nodig een foutmelding toe aan de array errors
    let email = document.getElementById("email").value;
    if (!validateEmail(email)) {
      errors.push("E-mailadres is niet correct.");
    }
  
    // Controleer of beide wachtwoordvelden zijn ingevuld en of ze overeenkomen. Voeg indien nodig foutmeldingen toe aan de array errors.
    let password1 = document.getElementById("wachtwoord").value;
    let password2 = document.getElementById("herhaalwachtwoord").value;
    if (password1 === "") {
      errors.push("Het veld wachtwoord is vereist.");
    }
    if (password2 === "") {
      errors.push("Het veld herhaal wachtwoord is vereist.");
    }
    if (password1.length < 8) {
      errors.push("Het wachtwoord moet minstens 8 karakters lang zijn.");
    }
    if (password1 !== password2) {
      errors.push("De wachtwoorden komen niet overeen.");
    }
  
    // Controleer of de gebruikersnaam aan de vereisten voldoet en voeg indien nodig een foutmelding toe aan de array errors
    let username = email.split("@")[0];
    if (username === "" || !/^[a-zA-Z0-9_]+$/.test(username) || /^[.-]/.test(username)) {
      errors.push("De gebruikersnaam van het e-mailadres is niet geldig.");
    }
  
    // Controleer of het domein van het e-mailadres aan de vereisten voldoet en voeg indien nodig een foutmelding toe aan de array errors
    let domain = email.split("@")[1];
    if (!/^[a-zA-Z0-9][a-zA-Z0-9.-]*[a-zA-Z0-9]$/.test(domain)) {
      errors.push("Het domein van het e-mailadres is niet geldig.");
    }
  
    // Als er foutmeldingen zijn, toon ze dan aan de gebruiker en stop met het indienen van het formulier
    if (errors.length > 0) {
      let errorMessage = "Er zijn fouten gevonden in het formulier:\n- " + errors.join("\n- ");
      alert(errorMessage);
      return false;
    }
}  