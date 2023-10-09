/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples"); 
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        // Create an HTML <article> element (createElement).
        let article = document.createElement("article");
        // Create an HTML <h3> element and add the temple's templeName property to this new element.
        let title = document.createElement("h3")
        title.innerHTML = temple["templeName"];
        // Create an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's location property to the alt attribute.
        let image = document.createElement("img");
        image.setAttribute("src", temple["imageUrl"]);
        image.setAttribute("alt", temple["location"])
        // Append the <h3> element and the <img> element to the <article> element as children. (appendChild
        article.appendChild(title);
        article.appendChild(image);
        // Append the <article> element to the global templesElement variable declared in Step 2.
        templesElement.appendChild(article);
    });
}
/* async getTemples Function using fetch()*/
// Create another function expression called getTemples. Make it an async anonymous, arrow function.
const getTemples = async () => {
    // declare a const variable named response that awaits the built-in fetch method calling the temple data
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    // Convert your fetch response into a JavaScript object (.json) and assign the result to the templeList global array 
    if (response.ok){
        templeList = await response.json();
        //  calls the displayTemples function and passes it the list of temples (templeList).
        displayTemples(templeList);
    }
}
/* reset Function */
// Declare a function expression named reset that clears all of the <article> elements from the templesElement
let reset = function(){
    templesElement.textContent = " ";
}   
/* sortBy Function */
let sortBy = function (temples){
    reset();
    let filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple["location"].includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple["location"].includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple["dedicated"]) <= new Date(1950, 0, 1)));
                
            break;       
        default:
            displayTemples(temples);
            break;
    }
}


getTemples();
/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => {sortBy(templeList)});