export function validateNotEmpty(value: unknown) {
    if (value === "" || value === null || value === undefined) {
        return "Campo requerido."
    }

    return null
}

export function validateAlphanumeric(value: unknown) {
    const regex = /^[a-zA-Z0-9]+$/

    if (typeof value === "string") {
        if (value === "") {
            return "Campo requerido."
        }

        if (value.match(/[ \-/.]+/)) {
            return "Sin espacios, guiones o puntos."
        }

        if (!regex.test(value)) {
            return "Solo se permiten letras y números."
        }
    }

    return null
}

export function validateCheck(value: unknown) {
    if (value !== true) {
        return "Campo requerido."
    }

    return null
}

export function validateEmail(value: unknown) {
    const regex = /^[a-zA-Z]+[a-zA-Z0-9&*._-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})$/

    if (typeof value === "string") {
        if (!regex.test(value)) {
            return "Correo no válido."
        }
    }

    return null
}

// NUMBERS

export function validateNumber(value: unknown) {
    if (value && typeof value === "string" && value !== "-0") {
        if (!isNaN(Number(value))) {
            return null
        }

        return "Solo debe contener números."
    }

    return "Número no válido."
}

export function validatePositiveNumber(value: unknown) {
    if (value && typeof value === "string" && value !== "-0") {
        const number = Number(value)

        if (!isNaN(number)) {
            if (number < 0) return "Solo números positivos."

            return null
        }

        return "Solo debe contener números."
    }

    return "Número no válido."
}

export function validatePhoneNumber(value: unknown) {
    if (
        typeof value === "string" &&
        value.match(/^\+[0-9]{1,3} [0-9]{7,10}$/)
    ) {
        return null
    }

    return "Número de teléfono inválido."
}

// PASSWORD

export function validatePassword(value: unknown) {
    if (typeof value === "string") {
        if (value.length < 8) return "Mínimo 8 caracteres."
    }

    return null
}
