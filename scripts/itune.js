const itune = {
    choice : "",
    name: "",
    init(){
        if (this.choice === "song"){
            getSongs(this.name);
        }
        else if (this.choice === "album"){
            getAlbums(this.name);
        }
    },
    change : function(changed, named){
        this.name = named;
        this.choice = changed;
        this.init();
    }
}

const getAlbums = async(name) => {
    reset();

    let list = [];
    const response = await fetch(`https://itunes.apple.com/search?entity=album&limit=50&term=${name}`)
    if (response.ok){
        const results = await response.json(); 
        for (let i = 0;i < results["results"].length; i++){
            list.push(results["results"][i]["collectionName"]);
        }
        for (let i = 0; i < list.length; i++){
            
            let article = document.createElement("article");
        
            let image = document.createElement("img")
            image.setAttribute("src","images/Note.png");
        
            image.alt = "Music note";
        
            let title = document.createElement("h4");
            title.textContent = list[i];
            
            article.appendChild(image);
            article.appendChild(title);
            
            document.querySelector("#songs").appendChild(article);
                console.log(list[i]);
        }
    };
};

const reset = function(){
    document.querySelector("#songs").textContent = " ";
}
const getSongs = async(name) => {
    reset();
    let list = [];
    const response = await fetch(`https://itunes.apple.com/search?entity=song&limit=100&term=${name}`)
    if (response.ok){
        const results = await response.json(); 
        for (let i = 0;i < results["results"].length; i++){
            list.push(results["results"][i]["trackName"]);
        }
        for (let i = 0; i < list.length; i++){
            let article = document.createElement("article");
            
        
            let image = document.createElement("img")
            image.setAttribute("src","../images/Note.png");
        
            image.alt = "Music note";
        
            let title = document.createElement("h4");
            title.textContent = list[i];
            
            article.appendChild(image);
            article.appendChild(title);

            document.querySelector("#songs").appendChild(article);
                console.log(list[i]);
        }
    };
}

export default itune;
