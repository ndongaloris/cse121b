import itune from "./itune.js";
document.querySelector("#search").addEventListener("click", () => {
    itune.change(document.querySelector("#sortBy").value, 
    document.querySelector("#name").value)}
    );

document.getElementById("year").innerHTML = new Date().getFullYear();

