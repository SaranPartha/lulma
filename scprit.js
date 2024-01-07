const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav= document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
/*Single product code*/
// var MainImg=document.getElementById("MainImg");
// var smalImg=document.getElementsByClassName("small-img");
// smalImg[0].onclick= function(){
//  MainImg.src=smalImg[0].src;
// }
// smalImg[1].onclick= function(){
//  MainImg.src=smalImg[1].src;
// }
// smalImg[2].onclick= function(){
//  MainImg.src=smalImg[2].src;
// }
// smalImg[3].onclick= function(){
//  MainImg.src=smalImg[3].src;
// }