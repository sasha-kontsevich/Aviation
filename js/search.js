let maxResults = 10;
let search = document.getElementById('search');
let results = document.getElementById('search-results');
let resultList = [];
let data = document.getElementById("data");

search.addEventListener('input', function() {
    resultList = [];
    results.innerHTML = '';
    if (search.value != '') {
        for (const key in Articles.articles) {
            if (Object.hasOwnProperty.call(Articles.articles, key)) {
                const element = Articles.articles[key];
                var b = (element.title.toLocaleLowerCase().indexOf(search.value.toLocaleLowerCase()) > -1) ||
                    (element.topic.title.toLocaleLowerCase().indexOf(search.value.toLocaleLowerCase()) > -1);
                if (b) {
                    resultList.push(element);
                }
            }
        }
        if (resultList.length > 0) {
            showSearchResult()
            resultList.forEach(element => {
                results.innerHTML += `
                <a href="` + data.getAttribute("data-path") + `article.php?article=/` + element.name + `">
                    <div class = "item">
                        <div class = "image" style="background-image: url(images/` + element.name + `_main.jpg)"></div>
                        <div class="title">
                            <span>` + element.topic.title + `. <br></span>` + element.title + `
                        </div>
                    </div>
                </a>
                `;
            });
        } else {
            hideSearchResult()
        }

    } else {
        hideSearchResult()
    }
});

search.addEventListener('focus', function() {
    if (resultList.length > 0) {
        showSearchResult();
    }
});

search.addEventListener('blur', function() {
    setTimeout(function() {
        hideSearchResult()
    }, 1000);
});

function hideSearchResult() {
    results.classList.add('hidden');
    results.classList.remove('visible');

}

function showSearchResult() {
    results.style.top = search.offsetTop + 30 + 'px';
    results.style.left = search.offsetLeft + 'px';
    results.classList.add('visible');
    results.classList.remove('hidden');
}