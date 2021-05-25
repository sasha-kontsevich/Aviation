currentSection = document.getElementById("data").getAttribute("data-section");
if (currentSection) {
    if ($('#sidebar div.' + currentSection)[0]) {
        $('#sidebar div.' + currentSection)[0].classList.add('current-' + currentSection);
    } else {
        currentArticle = document.getElementById("data").getAttribute("data-article");
        $('#sidebar div.' + Articles.articles[currentArticle].topic.section.name)[0].classList.add('current-' + Articles.articles[currentArticle].topic.section.name);
    }
}