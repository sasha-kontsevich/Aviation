function randomArticle() {
    length = 0;
    for (key in Articles.articles) {
        length++;
    }
    number = Math.floor(Math.random() * length);
    n = 0;
    for (key in Articles.articles) {
        if (n == number) {
            document.location.href = "article.php?article=" + key;
        }
        n++;
    }
}