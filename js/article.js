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
document.getElementById('headerAdditionally').innerHTML = '';
currentSection = Articles.articles[currentArticle].topic.section.name;
$('.' + currentSection).addClass('current-' + currentSection)
window.addEventListener('resize', onWindowResize, false);

function onWindowResize() {
    $('.' + currentSection).addClass('current-' + currentSection)

    if (getWidth() < 750) {
        if (!document.getElementById('headerAdditionally').innerHTML) {
            document.getElementById('headerAdditionally').innerHTML = document.getElementsByClassName('sidebar-wrapper')[0].innerHTML;
            $('#headerAdditionally').show();
            document.getElementsByClassName('sidebar-wrapper')[0].innerHTML = '';
        }
    } else {
        if (!document.getElementsByClassName('sidebar-wrapper')[0].innerHTML) {
            document.getElementsByClassName('sidebar-wrapper')[0].innerHTML = document.getElementById('headerAdditionally').innerHTML;
            $('#headerAdditionally').hide();
            document.getElementById('headerAdditionally').innerHTML = '';
        }
    }
}
onWindowResize();

topicArticles = [];
articleNumber = 0;
n = 0;
for (const key in Articles.articles) {
    if (Object.hasOwnProperty.call(Articles.articles, key)) {
        const element = Articles.articles[key];
        if (element.topic.name == Articles.articles[currentArticle].topic.name) {
            topicArticles.push(element);
            if (element.name == currentArticle) {
                articleNumber = n;
            }
            n++;

        }
    }
}

if (topicArticles[articleNumber - 1]) {
    document.getElementById('articleControls').innerHTML += `
    <a href="article.php?article=` + topicArticles[articleNumber - 1].name + `">
        <div class="button">Предыдущая</div>
        </a>
    `
}
if (topicArticles[articleNumber + 1]) {
    document.getElementById('articleControls').innerHTML += `
    <a href="article.php?article=` + topicArticles[articleNumber + 1].name + `">
        <div class="button">Следующая</div>
        </a>

    `
}

function getWidth() {
    xWidth = null;
    if (window.screen != null)
        xWidth = window.screen.availWidth;

    if (window.innerWidth != null)
        xWidth = window.innerWidth;

    if (document.body != null)
        xWidth = document.body.clientWidth;

    return xWidth;
}