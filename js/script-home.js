/*Fetching latest posts carousel*/

const url = "https://headlesscms.linnwilhelmsen.net/wp-json/wp/v2/posts";
const latestContainer = document.querySelector(".latest");

let imagesArray = [];

async function getLatestPosts(){
    try{
        const response = await fetch(url);
        const getResults = await response.json();
        
        for(i = 0; i < getResults.length; i++) {
            if(i >= 6){
                break;
            }
            imagesArray.push(getResults[i].better_featured_image.source_url);
        }
    }

    catch(error){
        console.log(error);
    }
}

getLatestPosts();


/*Previous and next button functions*/

let num = 0;

function next() {
    
    const slider = document.getElementById('slide');
    num++;

    if(num >= imagesArray.length){
        num = 0;
    }
    slider.src = imagesArray[num];
}

function previous() {

    const slider = document.getElementById('slide');
    num--;

    if(num < 0) {
        num = imagesArray.length-1;
    }
    slider.src = imagesArray[num];
}





