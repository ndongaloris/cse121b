/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Loris Jared Ndonga",
    photo: "images/My_photo.jpg",
    favoriteFood: ["Peanut butter sauce","Burger","Beans"],
    hobbies: ["Anime", "Coding", "Basketball", "Dance"],
    placeLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placeLived.push(
    {
        place: "Brazzaville, Congo",
        length: "18 years"
    },
    {
        place: "Krugersdorp, South Africa",
        length: "2 years",
    },
    {
        place: "Kinshasa, DRC",
        length: "3 days"
    },
    {
        place: "Abidjan, Cote D'ivoire",
        length: "20 months"
    }
);
/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
document.querySelector("#photo").setAttribute("src", myProfile.photo);
/* Favorite Foods List*/
myProfile.favoriteFood.forEach(food => {
    let bullets =  document.createElement("li");
    bullets.textContent = food;
    document.querySelector("#favorite-foods").appendChild(bullets);   
});
/* Hobbies List */
myProfile.hobbies.forEach(hobby=> {
    let bullets = document.createElement("li");
    bullets.textContent = hobby;
    document.querySelector("#hobbies").appendChild(bullets);
})
/* Places Lived DataList */
myProfile.placeLived.forEach(places=>{
    let place = document.createElement("dt");
    place.textContent = places.place;
    document.querySelector("#places-lived").appendChild(place);
    
    let length = document.createElement("dd");
    length.textContent = places.length;
    document.querySelector("#places-lived").appendChild(length);
})

