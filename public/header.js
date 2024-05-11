
var opened = false;

function discord(){
    var link = 'https://discord.gg/rvBK7jkJPu';
    window.open(link); 
}

window.onload = resize();

function resize(){
    var x = window.innerWidth;

    if (x <850){
        if (!opened) {
            document.getElementById("menu").style.display = "none";
            document.getElementById("hamburger").style.display = "block";
        }
    }else{
        opened = false
        document.getElementById("ham").setAttribute("src", "public/ham.png");
        document.getElementById("menu").style.display = "block";
        document.getElementById("hamburger").style.display = "none";
        document.getElementById("header").style.height = "100px";
        document.getElementById("menu").style.width = "auto";
    }

}




var open;

function clickList(){
    if (!opened){
        document.getElementById("header").style.height = "240px";
        document.getElementById("ham").setAttribute("src", "public/x.png");
        document.getElementById("menu").style.display = "block";
        document.getElementById("menu").style.width = "140px";
        opened = true;

    }else{
        document.getElementById("header").style.height = "100px";
        document.getElementById("ham").setAttribute("src", "public/ham.png");
        document.getElementById("menu").style.display = "none";
        document.getElementById("menu").style.width = "auto";
        opened = false;
    }
}