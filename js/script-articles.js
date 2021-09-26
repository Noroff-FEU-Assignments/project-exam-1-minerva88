/* Fetching and displaying articles*/

const url = "https://headlesscms.linnwilhelmsen.net/wp-json/wp/v2/posts?categories=46"; /*place category at url-end*/
const articleContainer = document.querySelector(".articles-container");

async function fetchArticles() {

    try {
        const response = await fetch(url);
        const results = await response.json();
 
        console.log(results);
        const articles = results;
        

        for(i = 0; i < articles.length; i++) {
            if(i >= 10) {
                break;
            }
            articleContainer.innerHTML += `<h2 class="article-title">${articles[i].title.rendered}</h2>
                                            <a href="specificarticle.html?id=${articles[i].id}" class="article">
                                                <img class="article-img" src="${articles[i].better_featured_image.source_url}">
                                                <div class="excerpt">${articles[i].excerpt.rendered}</div>
                                                    
                                                        
                                                    
                                                
                                            </a>`

        }
    }
    catch(error) {
        console.log(error);
    }
}

fetchArticles();