const getChildren = (n, skipMe) => {
    let r = []
    for (; n; n = n.nextSibling) {
        if (n.nodeType === 1 && n !== skipMe) {
            r.push(n)
        }
    }
    return r
}
const getSiblings = (n) => {
    return getChildren(n.parentNode.firstChild, n)
}
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
const tabs = (selector) => {
    const buttons = document.querySelectorAll(selector);
    const $view = document.querySelector('.w-slds-panel-window');
    const $panel = document.querySelector('.w-slds-panel-box');
    const $close = document.querySelector('.w-slds-panel-close');
    const $html = document.querySelector('html');
    buttons.forEach($button => {
        $button.addEventListener('click', (e) => {
            e.preventDefault()
            $html.classList.add('is-open-w-slds-panel');
            $view.classList.add('is-open');
            $panel.style.paddingRight = getScrollbarWidth() + 'px'
            const $tab = document.getElementById($button.dataset.tab.substr(1))
            const sBtns = getSiblings($button)
            const sTabs = getSiblings($tab)
            $button.classList.add('is-active');
            $tab.classList.add('is-visible');
            sBtns.forEach($sBtn => {
                $sBtn.classList.remove('is-active');
            });
            sTabs.forEach($sTab => {
                $sTab.classList.remove('is-visible');
            })
        })
    });
    $close.addEventListener('click', (e) => {
       e.preventDefault();
        $html.classList.remove('is-open-w-slds-panel');
        $view.classList.remove('is-open');
        $panel.style.paddingRight =  '0px'
        const tabsBtnsActive = document.querySelectorAll('.w-slds-tab.is-visible, .w-slds-panel-box-btn.is-active');
        tabsBtnsActive.forEach($el => {
            $el.classList.remove('is-active');
            $el.classList.remove('is-visible');
        });
    });
}
tabs('[data-tab]')
marketingToggle('[data-marketing-toggle]');
