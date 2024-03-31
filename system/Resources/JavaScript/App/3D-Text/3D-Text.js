//3D-Text JavaScript

var background=true;
function Background(){
    if(background==true)    background=false;
    else background=true;

    if(background==true){
        document.getElementById('body').style.background='white';
        document.getElementById('text').style.color='black';
    }
    else{
        document.getElementById('body').style.background='#666';
        document.getElementById('text').style.color='white';
    }
}

var big=true;
function S3D(){
    if(background==true)    background=false;
    else background=true;

    if(background==true){
        document.getElementById('text').style.transform='scale(3)';
    }
    else{
        document.getElementById('text').style.transform='rotate3d(1, -1, 0, 45deg)';
    }
    
}

function Main(){
    S3D();
}
