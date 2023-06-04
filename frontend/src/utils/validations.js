function validate(name, value) {
    switch (name) {
        case 'cnpj':
            return validateCnpj(value);
        case 'cep':
            return validateCep(value);
        case 'addressCity':
            return validateNonNumericString(value);
        default:
            return validateNonEmptyString(value);
    }
}

function validateNonEmptyString(str) {
    return str.trim().length > 0;
}

function validateCnpj(cnpj) {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj.length !== 14) {
        return false;
    }

    if (/^(\d)\1+$/.test(cnpj)) {
        return false;
    }

    let sum = 0;
    let multiply = 2;

    for (let i = 11; i >= 0; i--) {
        sum += parseInt(cnpj.charAt(i)) * multiply;
        multiply = multiply === 9 ? 2 : multiply + 1;
    }

    const mod = sum % 11;
    const checkDigit1 = mod < 2 ? 0 : 11 - mod;

    if (parseInt(cnpj.charAt(12)) !== checkDigit1) {
        return false;
    }

    sum = 0;
    multiply = 2;

    for (let i = 12; i >= 0; i--) {
        sum += parseInt(cnpj.charAt(i)) * multiply;
        multiply = multiply === 9 ? 2 : multiply + 1;
    }

    const checkDigit2 = mod < 2 ? 0 : 11 - (sum % 11);

    return parseInt(cnpj.charAt(13)) === checkDigit2;
}

function validateCep(cep) {
    cep = cep.replace(/\D/g, '');

    return cep.length === 8;
}

function validateNonNumericString(str) {
    return /^[^0-9]*$/.test(str) && validateNonEmptyString(str);
}


export const validationUtils = {
    validate
};