const btn = document.getElementById('w-slds-chat-btn')
const step1 = document.getElementById('w-slds-step1');
const step2 = document.getElementById('w-slds-step2');
btn.addEventListener('click', () => {
    if (!step1.classList.contains('hide')) {
        step1.classList.add('hide')
        step2.classList.remove('hide')
    }
})
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

const tabs = (selector) => {
    const buttons = document.querySelectorAll(selector);
    const $view = document.getElementById('w-slds-chat-view');
    const $close = document.getElementById('w-slds-chat-view-close');
    buttons.forEach($button => {
        $button.addEventListener('click', (e) => {
            e.preventDefault()
            $view.classList.add('is-open');
            const $tab = document.getElementById($button.dataset.tab.substr(1))
            const sBtns = getSiblings($button)
            const sTabs = getSiblings($tab)
            $button.classList.add('is-active');
            $tab.classList.add('is-visible');
            buttons.forEach($btn => {
                if ($button.dataset.tab === $btn.dataset.tab) {
                    $btn.classList.add('is-active');
                }
            });
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
        $view.classList.remove('is-open');
        step1.classList.remove('hide');
        step2.classList.add('hide');
        const tabsBtnsActive = document.querySelectorAll('.w-slds-tab.is-visible, .w-slds-btn.is-active');
        tabsBtnsActive.forEach($el => {
            $el.classList.remove('is-active');
            $el.classList.remove('is-visible');
        });
    });
}
tabs('[data-tab]')
marketingToggle('[data-marketing-toggle]');
