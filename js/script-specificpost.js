/*For fetching rendered data for the post*/

const url = "https://headlesscms.linnwilhelmsen.net/wp-json/wp/v2/posts/" + id;
const recipeContainer = document.querySelector(".recipe");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);


async function getRecipe(){

    try{
        const response = await fetch(url);
        const recipe = await response.json();
    
        createHTML(recipe);
        
    }
    catch(error){
        console.log(error);
    }
}

getRecipe();

function createHTML(recipe) {
    recipeContainer.innerHTML = `<h1>${recipe.title}</h1>
                                    <div class="recipe-img" style="background-image: url(${recipe.better_featured_image.source_url});"></div>
                                    <div class="description">${recipe.excerpt.rendered}</div>
                                    <div class="full-recipe">${recipe.content.rendered}</div>`
}