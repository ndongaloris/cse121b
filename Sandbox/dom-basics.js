const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript";
document.body.appendChild(newParagraph);

const newImage = document.createElement("Img");
newImage.setAttribute("src", "https://picsum.photos/200");
document.body.appendChild(newImage);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>"
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>CSE 121b</h2><p?>Welcome to Javascript Language</p?";
document.body.appendChild(newSection);