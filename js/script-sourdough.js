const url = "https://headlesscms.linnwilhelmsen.net/wp-json/wp/v2/posts?categories=19";
const recipeContainer = document.querySelector(".recipees-sourdough");

async function fetchRecipees() {

    try {
        const response = await fetch(url);
        const results = await response.json();
 
        console.log(results);
        const recipees = results;
        createCards(recipees);
    }
    catch(error) {
        console.log(error);
    }

function createCards(recipees){
    recipees.forEach(function(recipe){
        recipeContainer.innerHTML += `<a href="specificpost.html?id=${recipe.id}" class="card">
                                                <div class="card-img" style="background-image: url(${recipe.better_featured_image.source_url});">
                                                    
                                                        <h3 class="recipe-title">${recipe.title.rendered}</h3>
                                                    
                                                </div>
                                            </a>`
    })
}
}

fetchRecipees();

