import throttle from 'lodash.throttle';

const user = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}

const STORAGE_KEY = 'feedback-form-state';

cleanTextInMemory();

refs.form.addEventListener('submit', onUserDataSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));


function onUserDataSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(user);
}

function onTextareaInput(e) {
    user[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

function cleanTextInMemory() {
    const textInMemory = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(textInMemory);
    if (textInMemory) {
        refs.email.value = textInMemory.email || '';
        console.log(refs.email);
        refs.textarea.value = textInMemory.message || '';
        console.log(refs.textarea);
    }
}