const marketingToggle = (selector) => {
    let marketingElmts = document.querySelectorAll(selector);
    marketingElmts.forEach($btn=>{
        const el = document.getElementById($btn.dataset.marketingToggle);
        $btn.addEventListener('click', (e) => {
            console.log(el)
            e.preventDefault();
            el.classList.toggle('is-open')

        });
    })
}