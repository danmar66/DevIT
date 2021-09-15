const btn = document.querySelector('.btn');
const password = document.querySelector('.password');
const email = document.querySelector('.email');
const userName = document.querySelector('.name');
const lastName = document.querySelector('.last__name');
const age = document.querySelector('.age');
const avatar = document.querySelector('.avatar');

let examMail = false;
let examName = false;
let examLastName = false;
let examAge = false;
let examPas = false;

let errMessage = document.createElement('span');



function examEmail() {

}

function examPassword() {
    const pas= document.querySelector('.password').value;

    const num = '0123456789';
    const symb = '!@#$%^&*()_-+=\|/.,:;[]{}';
    const low = 'qwertyuiopasdfghjklzxcvbnm';
    const up = 'QWERTYUIOPLKJHGFDSAZXCVBNM';
    let resNum = false;
    let resSym = false;
    let resLow = false;
    let resUp = false;

    if(pas.length >= 8) {
        for(let i = 0; i < pas.length; i++) {
            if(num.indexOf(pas[i]) != -1) {
                resNum = true;
            } else if (symb.indexOf(pas[i]) != -1) {
                resSym = true;
            } else if (low.indexOf(pas[i]) != -1) {
                resLow = true;
            } else if (up.indexOf(pas[i]) != -1) {
                resUp = true;
            }
        }
    }

    if(resNum && resSym && resLow && resUp) {
        examPas = true;
        errMessage.innerHTML = '';
    } else if (pas.length == 0) {
        examPas = false;
        errMessage.innerHTML = '';
    } else {
        examPas = false;
        errMessage.innerHTML = 'Пароль должен быть минимум 8 символов и содержать буквы нижнего/верхнего регистра, цифры и хотя бы 1 спец символ.';
        password.insertAdjacentElement('afterend', errMessage);
    }


    if(examMail && examName && examLastName && examAge && examPas) {
        btn.removeAttribute('disabled')
    } else {
        btn.setAttribute('disabled', 'disabled');
    }
}

function examEmail() {
    let mail = email.value;


    if(mail.match(/\S+@\S+\.\S+/)) {
        examMail = true;
        errMessage.innerHTML = '';
    } else if(mail.length == 0) {
        errMessage.innerHTML = '';
        examMail = false;
    } else {
        examMail = false;
        errMessage.innerHTML = 'Не корректный адрес почты';
        email.insertAdjacentElement('afterend', errMessage);
    }


    if(examMail && examName && examLastName && examAge && examPas) {
        btn.removeAttribute('disabled')
    } else {
        btn.setAttribute('disabled', 'disabled');
    }
}

function examUserName() {
    if(userName.value.length > 0) {
        examName = true;
        errMessage.innerHTML = '';
    } else {
        examName = false;
        errMessage.innerHTML = 'Введите имя';
        userName.insertAdjacentElement('afterend', errMessage);
    }


    if(examMail && examName && examLastName && examAge && examPas) {
        btn.removeAttribute('disabled')
    } else {
        btn.setAttribute('disabled', 'disabled');
    }
}

function examUserLastName() {
    if(lastName.value.length > 0) {
        examLastName = true;
        errMessage.innerHTML = '';
    } else {
        examLastName = false;
        errMessage.innerHTML = 'Введите фамилию';
        lastName.insertAdjacentElement('afterend', errMessage);
    }


    if(examMail && examName && examLastName && examAge && examPas) {
        btn.removeAttribute('disabled')
    } else {
        btn.setAttribute('disabled', 'disabled');
    }
}

function examUserAge() {
    if(age.value.length > 0) {
        examAge = true;
        errMessage.innerHTML = '';
    } else {
        examAge = false;
        errMessage.innerHTML = 'Введите ваш возраст';
        age.insertAdjacentElement('afterend', errMessage);
    }


    if(examMail && examName && examLastName && examAge && examPas) {
        btn.removeAttribute('disabled')
    } else {
        btn.setAttribute('disabled', 'disabled');
    }
}


password.addEventListener('input', examPassword);
email.addEventListener('input', examEmail);
userName.addEventListener('input', examUserName);
lastName.addEventListener('input', examUserLastName);
age.addEventListener('input', examUserAge);

btn.addEventListener('click', function() {
})
