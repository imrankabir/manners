const options = document.getElementsByName('option');
const container = document.querySelector('.container');

const get = (k, d) => JSON.parse(localStorage.getItem(`manners-${k}`)) ?? d;
const set = (k, v) => localStorage.setItem(`manners-${k}`, JSON.stringify(v));

const changeOption = e => {
    const option = e.target.value;
    console.log({option});
    set('option', {option});
    markOptionSelected(option);
};

const markOptionSelected = option => {
    document.querySelectorAll('.option').forEach(option => option.classList.add('hide'));
    document.querySelector(`.option-${option}`).classList.remove('hide');
};

options.forEach(option => option.addEventListener('click', changeOption));

(e => {
    const { option } = get('option', {option: 1});
    document.querySelector(`#option-${option}`).setAttribute('checked', true);
    markOptionSelected(option);
    console.log({option});
})();