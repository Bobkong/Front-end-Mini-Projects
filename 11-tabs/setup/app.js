const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');

btns.forEach(btn => {
    btn.addEventListener('click', handleClickBtn);
})

function handleClickBtn(e) {
    let clickBtn = e.target.getAttribute('data-id');
    btns.forEach(btn => {
        if(btn.getAttribute('data-id') === clickBtn) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    articles.forEach(article => {
        if(article.id === clickBtn) {
            article.classList.add('active');
        } else {
            article.classList.remove('active');
        }
    })
}