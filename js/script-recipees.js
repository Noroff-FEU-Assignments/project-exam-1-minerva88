/* Fetching and displaying the latest recipees*/

const url = "https://headlesscms.linnwilhelmsen.net/wp-json/wp/v2/posts/";
const latestRecipeesContainer = document.querySelector(".recipees");

async function fetchRecipees() {

    try {
        const response = await fetch(url);
        const results = await response.json();
 
        console.log(results);
        const recipees = results;
        /*createCards(recipees);*/

        for(i = 0; i < recipees.length; i++) {
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

