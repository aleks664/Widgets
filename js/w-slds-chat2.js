const btn = document.getElementById('w-slds-chat-btn')
const close = document.getElementById('w-slds-chat-btn')
const $view = document.getElementById('w-slds-chat-view')
const $close = document.getElementById('w-slds-chat-view-close');
btn.addEventListener('click', () => {
    $view.classList.add('is-open');
})
$close.addEventListener('click', (e) => {
    e.preventDefault();
    $view.classList.remove('is-open');
});
marketingToggle('[data-marketing-toggle]');
