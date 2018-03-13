var coin = {
    state: 0,
    flip: function() {
        // randomly set this.state to be either 0 or 1
        this.state = Math.floor(Math.random()*2)
    },
    toString: function() {
        // return “H” or “T” depending on whether this.state is 0 or 1
        return (this.state === 1 ? "H" : "T");
    },
    toHTML: function() {
        var img = document.createElement("img");
        // set the properties of the image element to show either heads or tails
        img.src = this.state === 1 ? "heads.jpeg" : "tails.jpg";
        img.style.width = "50px";
        img.style.height = "50px";
        return img;
    }
};


function flipToString(){
    var result = document.getElementById("contentarea");
    var flipResult = "";
    for (let i=1; i<=20; i++){
        coin.flip();
        if (i < 20){
            flipResult += coin.toString() + ", ";   
        } else {
            flipResult += coin.toString();
        }
        
    }
    result.innerHTML = flipResult;
}

function flipToHTML(){
    var result = document.getElementById("contentarea");
    while ( result.firstChild ) {
        result.removeChild( result.firstChild );
    }
    var flipResult;
    for (let i=1; i<=20; i++){
        coin.flip();
        result.appendChild(coin.toHTML());
    }
}