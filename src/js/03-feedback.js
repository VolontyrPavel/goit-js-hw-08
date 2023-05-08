import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}

const user = {
    email: refs.email.value,
    message: refs.textarea.value,
};

const STORAGE_KEY = 'feedback-form-state';

cleanTextInMemory();

refs.form.addEventListener('input', throttle(onInput, 500));
refs.form.addEventListener('submit', onUserDataSubmit);

function onUserDataSubmit(e) {
    e.preventDefault();
    e.currentTarget.reset();
    console.log(user);
    localStorage.removeItem(STORAGE_KEY);
}

function onInput(e) {
    user[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

function cleanTextInMemory() {
    const textInMemory = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(textInMemory);
    if (textInMemory) {
        refs.email.value = textInMemory.email;
        refs.textarea.value = textInMemory.message;
    }
}