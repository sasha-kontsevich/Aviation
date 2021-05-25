let currentArticle = document.getElementById("data").getAttribute("data-article");
document.title = Articles.articles[currentArticle].topic.title + '. ' + Articles.articles[currentArticle].title;

let alsoTopicWrapper = document.getElementById('alsoTopicWrapper');
let alsoTopic = document.getElementById('alsoTopic');

count = 0;
for (key in Articles.articles) {
    const element = Articles.articles[key];
    if (element.topic.name == Articles.articles[currentArticle].topic.name && element.name != Articles.articles[currentArticle].name) {
        alsoTopic.innerHTML += "<a href='article.php?article=" + element.name + "'><div>" + element.title + "</div></a>";
        count++;
    }
}
if (count == 0) {
    alsoTopicWrapper.innerHTML = '';
}