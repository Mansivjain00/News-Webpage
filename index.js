console.log("News Webpage");

// initialise the variables(news parameters)
let source = 'bbc-news';
let api_key= 'fb9ba0ac90c44c5d8ce94c285df0839a';

//Grab the news container
let news_card =document.getElementById('news-card');
// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${api_key}`,true);
xhr.onload = function () {
    // 200 -->success
    // 404 -->not found
    if(this.status === 200){
        let json=JSON.parse(this.responseText);
        console.log(json);
        let articles = json.articles;
        console.log(articles);
        let newsHtml="";
        articles.forEach(function(element,index) {
            newsHtml = newsHtml + `<p>
                <button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapseExample">
                <b>${index+1}: </b>${element["title"]}
                </button>
                </p>
                <div class="collapse" id="collapse${index}">
                <div class="card card-body">
                ${element["content"]} . <a href='${element['url']}' style="text-decoration:none;" target="_blank">Read more...</a>
                </div>
                </div>`;
        });       
        news_card.innerHTML=newsHtml;
    }
    else{
        console.error("Error occured");
    }
}

xhr.send();



