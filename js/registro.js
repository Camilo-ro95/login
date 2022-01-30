var aName = [],
    aLast = [],
    aAge = [],
    aMail = [],
    aPass = [];

var elBtnRegistrar = document.querySelector('#btnRegistrar');

elBtnRegistrar.addEventListener('click', registrarUsuario);

function registrarUsuario() {
    var sName = document.querySelector('#txtName').value,
        sLast = document.querySelector('#txtLast').value,
        nAge = document.querySelector('#txtAge').value,
        sMail = document.querySelector('#txtMail').value,
        sPass = document.querySelector('#txtPass').value;

    aName.push(sName);
    aLast.push(sLast);
    aAge.push(nAge);
    aMail.push(sMail);
    aPass.push(sPass);

    localStorage.setItem('name_usuario', JSON.stringify(aName));
    localStorage.setItem('last_usuario', JSON.stringify(aLast));
    localStorage.setItem('age_usuario', JSON.stringify(aAge));
    localStorage.setItem('mail_usuario', JSON.stringify(aMail));
    localStorage.setItem('pass_usuario', JSON.stringify(aPass));
}