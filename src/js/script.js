/*
 * Toggle article visibility
 */

var button = document.querySelector('.action');
var article = document.querySelector('.article');

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