/* Fetching and displaying the latest recipees*/

const url = "https://headlesscms.linnwilhelmsen.net/wp-json/wp/v2/posts/?per_page=100";
const latestRecipeesContainer = document.querySelector(".recipees");


async function fetchRecipees() {

    try {
        const response = await fetch(url);
        const results = await response.json();
 
        console.log(results);
        const recipees = results;

        

        for(i = 0; i < recipees.length; i++) {
            /*if (recipees.categories[i] !== 46) {
                continue;
            }*/
            if(i >= 10) {
                break;
            }
            latestRecipeesContainer.innerHTML += `<a href="specificblogpost.html?id=${recipees[i].id}" class="card">
                                                <div class="card-img" style="background-image: url(${recipees[i].better_featured_image.source_url});">
                                                    
                                                        <h3 class="recipe-title">${recipees[i].title.rendered}</h3>
                                                    
                                                </div>
                                            </a>`

        }
    }
    catch(error) {
        console.log(error);
    }
}

fetchRecipees();

/*For loading-button*/
const loadButton = document.querySelector(".load-button");
const loadMoreContainer = document.querySelector(".more-recipees");


async function fetchMoreRecipees() {

    try {
        const response = await fetch(url);
        const results = await response.json();
 
        
        const moreRecipees = results;
        console.log(moreRecipees);

        for(i = 0; i < moreRecipees.length; i++) {
            if(i <= 10) {
                continue;
                
            }
            loadMoreContainer.innerHTML += `<a href="specificblogpost.html?id=${moreRecipees[i].id}" class="card">
                                                <div class="card-img" style="background-image: url(${moreRecipees[i].better_featured_image.source_url});">
                                                    
                                                        <h3 class="recipe-title">${moreRecipees[i].title.rendered}</h3>
                                                    
                                                </div>
                                            </a>`

        }
    }
    catch(error) {
        console.log(error);
    }
}


