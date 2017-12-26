/*
 * Toggle article visibility
 */

var button = document.querySelector('.action');
var article = document.querySelector('.article');

if (button) {
    button.onclick = function() {
        if (article.classList.contains("hidden")) {
            article.classList.remove("hidden");
            button.innerHTML = "Fermer l'article";
        }
        else {
            article.classList.add("hidden");
            button.innerHTML = "Ouvrir l'article";
        }
    };
};



/*
 * Scroll reveal
 */

window.sr = ScrollReveal({ reset: true, mobile: false });
sr.reveal('.imgContainer');
sr.reveal('.title', { delay: 200 });
sr.reveal('.lifetime', { delay: 200 });
sr.reveal('.resume', { delay: 100 });
sr.reveal('.quoteGroup', { delay: 100 });
sr.reveal('.shareBox', { delay: 100 }, 100);
sr.reveal('.dataGroup', { delay: 100 });
sr.reveal('.line', { delay: 100 });
