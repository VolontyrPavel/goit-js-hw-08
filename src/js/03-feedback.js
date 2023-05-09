import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const refs = document.querySelector('.feedback-form');

refs.addEventListener('input', throttle(onInput, 500));
refs.addEventListener('submit', onUserDataSubmit);

textInMemory(JSON.parse(localStorage.getItem(STORAGE_KEY)));

function textInMemory(data) {
    if (data) {
        refs.email.value = data.email;
        refs.message.value = data.message;
    }
}

function onInput(e) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(setUser()));
}

function onUserDataSubmit(e) {
    e.preventDefault();
    console.log(setUser());
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function setUser() {
    return {
        email: refs.email.value,
        message: refs.message.value,
    };
}

//!//
