var imgbox = document.querySelector(".img-box");
var imgwrap = document.querySelector(".img-wrap");
var originalimg = document.getElementById("originalimg");
var line = document.getElementById("line");

originalimg.style.width=imgbox.offsetWidth + "px";

var leftSpace = imgbox.offsetLeft;

imgbox.onmousemove = function(e){
    var boxwidth = (e.pageX - leftSpace) + "px";
    imgwrap.style.width = boxwidth;
    line.style.left = boxwidth;
}