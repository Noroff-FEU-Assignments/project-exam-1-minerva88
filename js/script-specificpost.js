/*For fetching rendered data for the post*/


const recipeContainer = document.querySelector(".recipe");
const modalContainer = document.querySelector(".modal");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://headlesscms.linnwilhelmsen.net/wp-json/wp/v2/posts/" + id;


async function getRecipe(){

    try{
        const response = await fetch(url);
        const recipe = await response.json();
    
        createHTML(recipe);
        createModal(recipe);
        
    }
    catch(error){
        console.log(error);
    }
}

getRecipe();

function createHTML(recipe) {
    recipeContainer.innerHTML = `<h1>${recipe.title.rendered}</h1>
                                    <img class="recipe-img" id="open-imagemodal" src="${recipe.better_featured_image.source_url} alt="${recipe.title.rendered}"">
                                    
                                    <div class="full-recipe">${recipe.content.rendered}</div>`
}

function createModal(recipe) {
    modalContainer.innerHTML = `<img src="${recipe.better_featured_image.source_url}">`
}