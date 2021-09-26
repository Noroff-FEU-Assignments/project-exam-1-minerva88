/*For fetching rendered data for the article*/


const articleContainer = document.querySelector(".article");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://headlesscms.linnwilhelmsen.net/wp-json/wp/v2/posts/" + id;


async function getArticle(){

    try{
        const response = await fetch(url);
        const article = await response.json();
    
        createHTML(article);
        
    }
    catch(error){
        console.log(error);
    }
}

getArticle();

function createHTML(article) {
    articleContainer.innerHTML = `<h1>${article.title.rendered}</h1>
                                <div class="full-article">${article.content.rendered}</div>`
}