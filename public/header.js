
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
        document.getElementById("ham").setAttribute("src", "https://cdn.discordapp.com/attachments/1190393386822271077/1227685110711717949/ham.png?ex=66294ddb&is=6616d8db&hm=0abc8dbbb26c141a0e2a03d7687f59f356ad6adaf528d4d51184c7dbe268b4a0&");
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
        document.getElementById("ham").setAttribute("src", "https://cdn.discordapp.com/attachments/1190393386822271077/1227685321936994404/x.png?ex=66294e0e&is=6616d90e&hm=bbf143ed465d1f657cd85c787593bc53c53615429d65237d168dc3d12b7bbd9b&");
        document.getElementById("menu").style.display = "block";
        document.getElementById("menu").style.width = "140px";
        opened = true;

    }else{
        document.getElementById("header").style.height = "100px";
        document.getElementById("ham").setAttribute("src", "https://cdn.discordapp.com/attachments/1190393386822271077/1227685110711717949/ham.png?ex=66294ddb&is=6616d8db&hm=0abc8dbbb26c141a0e2a03d7687f59f356ad6adaf528d4d51184c7dbe268b4a0&");
        document.getElementById("menu").style.display = "none";
        document.getElementById("menu").style.width = "auto";
        opened = false;
    }
}