
const button2 = document.getElementById('botao2');
let left = 40;
button2.addEventListener('mouseover', function() {
  if(left == 40){
    left = 44;
  }else{
    left = 40;
  }
  this.style.left = left + '%';
});


function changeImage() {
    var image = document.getElementById('myImage');
     if (image.src.match("hug")) {
        image.src = "thanks.gif";
    }
}


document.getElementById('botao1').addEventListener('click', function() {
    changeImage();
    alert('Yesss! love ya✨');
    });