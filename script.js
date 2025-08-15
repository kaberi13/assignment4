const scrn = document.getElementById("mainbox");
let img1 = "url('images/img1.jpeg')"
let colour1 = "#f2ecdf"
let img2 = "url('images/img2.jpeg')"
let colour2 = "#a4a8a7"
let img3 = "url('images/img3.jpeg')"
let colour3 = "#eeebe4"
let img4 = "url('images/img4.jpeg')"
let colour4 = "#fefffe"
let img5 = "url('images/img5.jpeg')"
let colour5 = "#f9f9f9"

function bgchange(z,x){
    scrn.style.backgroundImage = z;
    scrn.style.backgroundSize = "contain";
    scrn.style.backgroundRepeat = "no-repeat";
    scrn.style.backgroundColor = x;
    scrn.style.backgroundPosition = "center";
}


var y;
const i1 = pic1.getAttribute("id");
const i2 = pic2.getAttribute("id");
const i3 = pic3.getAttribute("id");
const i4 = pic4.getAttribute("id");
const i5 = pic5.getAttribute("id");

const clickregister = (e) => {
    y = e.target.id;
    if (y==i1){
bgchange(img1,colour1);
    }
    else if (y==i2){
       bgchange(img2,colour2); 
    }
    else if(y==i3){
        bgchange(img3,colour3);
    }
    else if(y==i4){
        bgchange(img4,colour4);
    }
    else if(y==i5){
        bgchange(img5,colour5);
    }
}
document.addEventListener("click",clickregister)