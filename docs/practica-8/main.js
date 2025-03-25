document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencias a los elementos del DOM
    const formulario = document.getElementById('registro-form');
    const nombreInput = document.getElementById('nombre');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    const nombreError = document.getElementById('nombre-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');

    const loader = document.getElementById('loader');
    const successMessage = document.getElementById('success-message');
    const submitButton = formulario.querySelector('.btn-submit');

    // Escuchar el evento de envío del formulario
    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevenir el envío por defecto

        resetErrors(); // Resetear mensajes de error

        // Validar todos los campos
        const nombreValido = validarNombre();
        const emailValido = validarEmail();
        const passwordValido = validarPassword();
        const confirmPasswordValido = validarConfirmPassword();

        // Si todos los campos son válidos, proceder con el envío
        if (nombreValido && emailValido && passwordValido && confirmPasswordValido) {
            simularEnvio();
        }
    });

    // Función para resetear todos los mensajes de error
    function resetErrors() {
        [nombreError, emailError, passwordError, confirmPasswordError].forEach(error => {
            error.textContent = '';
        });
    }

    // Función genérica para mostrar errores
    function mostrarError(elemento, mensaje) {
        elemento.textContent = mensaje;
    }

    // Validación del nombre
    function validarNombre() {
        const valor = nombreInput.value.trim();
        if (valor === '') {
            mostrarError(nombreError, 'El nombre es obligatorio');
            return false;
        }
        const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
        if (!regex.test(valor)) {
            mostrarError(nombreError, 'El nombre solo debe contener letras y espacios');
            return false;
        }
        return true;
    }

    // Validación del email
    function validarEmail() {
        const valor = emailInput.value.trim();
        if (valor === '') {
            mostrarError(emailError, 'El correo electrónico es obligatorio');
            return false;
        }
        const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!regex.test(valor)) {
            mostrarError(emailError, 'Ingresa un correo electrónico válido');
            return false;
        }
        return true;
    }

    // Validación de la contraseña
    function validarPassword() {
        const valor = passwordInput.value;
        if (valor === '') {
            mostrarError(passwordError, 'La contraseña es obligatoria');
            return false;
        }
        if (valor.length < 8) {
            mostrarError(passwordError, 'La contraseña debe tener al menos 8 caracteres');
            return false;
        }
        const mayuscula = /[A-Z]/.test(valor);
        const minuscula = /[a-z]/.test(valor);
        const numero = /[0-9]/.test(valor);
        const caracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(valor);

        if (!mayuscula || !minuscula || !numero || !caracterEspecial) {
            let mensaje = 'La contraseña debe incluir al menos:';
            if (!mayuscula) mensaje += ' una mayúscula,';
            if (!minuscula) mensaje += ' una minúscula,';
            if (!numero) mensaje += ' un número,';
            if (!caracterEspecial) mensaje += ' un carácter especial,';
            mensaje = mensaje.slice(0, -1) + '.';
            mostrarError(passwordError, mensaje);
            return false;
        }
        return true;
    }

    // Validación de la confirmación de contraseña
    function validarConfirmPassword() {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        if (confirmPassword === '') {
            mostrarError(confirmPasswordError, 'La confirmación de contraseña es obligatoria');
            return false;
        }
        if (password !== confirmPassword) {
            mostrarError(confirmPasswordError, 'Las contraseñas no coinciden');
            return false;
        }
        return true;
    }

    // Función que simula el envío del formulario con un loader
    function simularEnvio() {
        formulario.style.display = 'none';
        loader.style.display = 'block';
        setTimeout(function () {
            loader.style.display = 'none';
            successMessage.style.display = 'block';
        }, 5000);
    }

    // Validaciones en tiempo real
    [nombreInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => {
        input.addEventListener('input', function () {
            validarNombre();
            validarEmail();
            validarPassword();
            validarConfirmPassword();
        });
    });
});