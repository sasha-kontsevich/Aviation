document.getElementById('headerAdditionally').innerHTML = '';
let sections = document.getElementById('sections');
let topics = document.getElementById('topics');
let articles = document.getElementById('articles');
$('#headerCatalog').addClass('selected');

var currentTab = 0;

let currentSection = document.getElementById("data").getAttribute("data-section");
let currentTopic = document.getElementById("data").getAttribute("data-topic");
let currentArticle = "";

function load() {
    let topicsResultList = [];
    topics.innerHTML = '';

    for (const key in Articles.topics) {
        if (Object.hasOwnProperty.call(Articles.topics, key)) {
            const element = Articles.topics[key];
            if (element.section.name == currentSection) {
                topicsResultList.push(element);
            }

        }
    }
    if (topicsResultList.length > 0) {
        topicsResultList.forEach(element => {
            sel = currentTopic == element.name ? `selectedTopic` : ``;
            topics.innerHTML += `
            <a href="catalog.php?section=` + currentSection + `&topic=` + element.name + `">
                <div class="item ` + sel + `">
                    <div class="image" style="background-image: url(images/` + element.name + `.jpg)">
    
                    </div>
                    <div class="topic-title">
                        ` + element.title + `
                    </div>    
                </div>
            </a>
                    `;
        });
    }

    if (currentTopic) {
        let articlesResultList = [];
        articles.innerHTML = '';

        for (const key in Articles.articles) {
            if (Object.hasOwnProperty.call(Articles.articles, key)) {
                const element = Articles.articles[key];
                if (element.topic.name == currentTopic) {
                    articlesResultList.push(element);
                }
            }
        }
        if (articlesResultList.length > 0) {
            articlesResultList.forEach(element => {
                articles.innerHTML += `
                    <div class = "item"   onclick="show('` + element.name + `')">
                        <div class="title">` + element.title + `</div>
                        <div class="inner-content  ` + addCurrentArticleClass() + `" id="` + element.name + `">
                            <div class="d-flex justify-content-center"><div class = "image" style="background-image: url(images/` + element.name + `_main.jpg)"></div></div>
                            <p>
                                ` + element.articlePreview + `
                            </p>
                            <div class="button-line">
                                <a href="article.php?article=` + element.name + `">
                                    <div class="button">Читать</div>
                                </a>
                            </div>
                        </div>
                    </div>
                `;
                changeCurrentArticle();
            });
        }

    }
}

function addCurrentArticleClass() {
    if (!currentArticle) {
        return 'current-article';
    }
    return '';
}

function changeCurrentArticle() {
    currentArticle = $('.current-article')[0];
}

function show(elem) {
    $('.inner-content').removeClass('current-article');
    $('#' + elem).addClass('current-article');
    $('.inner-content').slideUp(400, complete());
    $('.current-article').slideDown(400, complete());
}

function complete() {
    $('.current-article').stop();
}

load();
$('.inner-content').hide();
$('.current-article').slideDown(400);

if (!currentSection) {
    topics.innerHTML = '<div class="help"><i class="fas fa-arrow-left"></i> Выберите раздел</div>';
}
if (!currentTopic && currentSection) {
    articles.innerHTML = '<div class="help"><i class="fas fa-arrow-left"></i> Выберите тему</div>';
}

function sectionsTab() {
    if (getWidth() < 750) {
        $('#sections').slideDown()
        $('#topics').slideUp()
        $('#articles').slideUp()

    }
}

function topicsTab() {
    if (getWidth() < 750) {

        $('#sections').slideUp()
        $('#topics').slideDown()
        $('#articles').slideUp()
    }
}

function articlesTab() {
    if (getWidth() < 750) {

        $('#sections').slideUp()
        $('#topics').slideUp()
        $('#articles').slideDown()
    }
}
if (getWidth() < 750) {
    if (currentTopic != '') {
        currentTab = 2;
        $('#sections').slideUp()
        $('#topics').slideUp()
        $('#articles').slideDown()


    } else if (currentSection != '') {
        currentTab = 1;
        $('#sections').slideUp()
        $('#topics').slideDown()
        $('#articles').slideUp()


    } else {
        currentTab = 0;
        $('#sections').slideDown()
        $('#topics').slideUp()
        $('#articles').slideUp()

    }
}

window.addEventListener('resize', function() {
    if (getWidth() >= 750) {
        $('#sections').show()
        $('#topics').show()
        $('#articles').show()
    }
})

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