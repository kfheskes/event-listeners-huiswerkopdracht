// 1. op de pagina heb ik div met daarin een form nodig waarin het inloggen en registeren ingevuld kan worden.
// 2. de standaard *{
// 	Margin: 0;
// 	Padding: 0:
// 	Box-sizing: border-box;
// } invoegen.
// 3. binnen het form, een titel, gebruikersnaam invoerveld maak gebruik van input type='text' name='username' id='username-field', wachtwoord invoer veld maak gebruik van input type='password' name='password' id='password-field'
// 4. de grote van registreren veld en background, kleur van de tekst.
// 5. een functie schrijven handleClick
// 6. Gebruikersnaam event listerener maken. door eerst een referentie op te slaan. const buttonElement = document.getElementById('username-field');
// 7. event toevoegen signUpButton.addEvenlistener ('keyup', username-field);
// 8. anonimie funcite toevoegen() => {}); met if '@' dan console log else username
// 9. in de console log gebruik maken van e.target.value


const userNameField = document.getElementById('username-field');
const passwordInput = document.getElementById('password-field');

const warningUserName = document.getElementById('form-warning-username');
const waringPassword = document.getElementById('form-warning-password')

userNameField.addEventListener('keyup', inputUserName);
passwordInput.addEventListener('keyup', inputPassword)

function inputUserName(e) {
    if (e.target.value.includes('@')) {
        warningUserName.textContent = 'Gebruikersnaam mag geen @ bevatten'
    } else {
        warningUserName.textContent = '';
    }
}

function inputPassword(e) {
    if (e.target.value === '' || e.target.value.length > 6) ;
    {
        waringPassword.textContent = '';}
else
    {
        waringPassword.textContent = 'Wachtwoord is te kort, gebruik minimaal 6 tekens'
    }
}

