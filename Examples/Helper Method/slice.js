const boxes = document.querySelectorAll('.box');

var boxArray = Array.prototype.slice.call(boxes);

boxArray.foreach(function(e){
  e.style.backgroundColor = 'red';
})