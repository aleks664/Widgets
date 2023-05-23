
const getScrollbarWidth = () => {
    const outer = document.createElement('div');
    outer.style.visibility = 'hidden';
    outer.style.overflow = 'scroll';
    outer.style.msOverflowStyle = 'scrollbar';
    document.body.appendChild(outer);
    const inner = document.createElement('div');
    outer.appendChild(inner);
    const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    outer.parentNode.removeChild(outer);

    return scrollbarWidth;
}
const panelChat = (selector) => {
    const buttons = document.querySelectorAll(selector);
    const $view = document.querySelector('.w-slds-panel-chat-window');
    const $html = document.querySelector('html');
    const $panel = document.querySelector('.w-slds-panel-chat-box');
    buttons.forEach($button => {
        $button.addEventListener('click', (e) => {
            e.preventDefault()
            $html.classList.toggle('is-open-w-slds-panel-chat');
            $view.classList.toggle('is-open');
            if ($button.dataset.toggleTxt) {
                let txt = ! $view.classList.contains('is-open') ? $button.dataset.toggleTxt.split('/')[0]: $button.dataset.toggleTxt.split('/')[1];
                $button.textContent = txt;
            }
            if ($view.classList.contains('is-open')) {
                $panel.style.paddingRight = getScrollbarWidth() + 'px'
            } else {
                $panel.style.paddingRight =  '0px'
            }
        })
    });
}
panelChat('[data-chat-toggle]')
marketingToggle('[data-marketing-toggle]');
