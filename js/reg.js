const email = document.getElementById('email');
const name = document.getElementById('nombre');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const invalid = document.getElementById('invalid')
const form = document.querySelector('.form')

var expresionesregulares = {
    email1: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    name1: /^[A-Z\s]{10,80}$/,
    passwordexp: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,16}$/,
}

function validarRegistro(email, name, password1, password2) {
    form.addEventListener('submit', (e) => e.preventDefault())
    let testemail = expresionesregulares.email1.test(email.value)
    let testname = expresionesregulares.name1.test(name.value)
    let testpassword = expresionesregulares.passwordexp.test(password1.value)
    let testpassword2 = expresionesregulares.passwordexp.test(password2.value)

    if (testemail === true) {
        email.style.border = '1px solid hsl(0, 80%, 86%)'

    }
    else {
        email.style.border = '2px solid red'
        invalid.textContent = 'El correo ingresado es incorrecto'
        invalid.className = 'text-danger'
    }
    if (testname === true) {
        name.style.border = '1px solid hsl(0, 80%, 86%)'
    }
    else {
        name.style.border = '2px solid red'
        invalid.textContent = 'Ingresar nombre correcto (MAYUSCULAS)'
        invalid.className = 'text-danger'
    }
    if (testpassword === true) {
        password1.style.border = '1px solid hsl(0, 80%, 86%)'
    }
    else {
        password1.style.border = '2px solid red'
        invalid.textContent = 'La contraseña es incorrecta'
        invalid.className = 'text-danger'
    }
    if (testpassword2 === true) {
        password2.style.border = '1px solid hsl(0, 80%, 86%)'
    }
    else {
        password2.style.border = '2px solid red'
        invalid.textContent = 'Las contraseñas deben coincidir'
        invalid.className = 'text-danger'
    }
    if (testemail && testname && testpassword && testpassword2 == true && password1.value === password2.value) {
        invalid.style.display = 'block'
        invalid.textContent = 'Se han validado los datos'
        invalid.className = 'text-success'
    }
    else {
        invalid.style.display = 'block'
        invalid.textContent = 'Error: intente otra vez'
        invalid.className = 'text-danger'
    }
}