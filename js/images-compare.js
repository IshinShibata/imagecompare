var compareblock = document.getElementById('compareblock');
var line = document.getElementById('compare-line');
var frontimg = document.getElementById('compare-front-img');
var tryangle_left = document.querySelector('.left_tryangle')
var tryangle_right = document.querySelector('.right_tryangle')

var move_flg = false;


function dragevent(e){

  move_flg = true;

  dragMoveFunc = function(e){ mousemove(e) }
  document.body.addEventListener('mousemove', dragMoveFunc , false);
}

function dragEnd(){
  move_flg = false;
  document.body.removeEventListener('mousemove', dragMoveFunc, false);
}

function loadFunc(){
    var w = frontimg.clientWidth;
    frontimg.style.width = `${250}px`;
    line.style.left =`${250}px`;
}

function mousemove(e){
  if( move_flg ){
  e.preventDefault()
  var compareblockposition = compareblock.getBoundingClientRect();
  var mouseposition = e.clientX;
  var x = mouseposition - compareblockposition.x;
    if(x > 0 && x < 500){
    console.log(frontimg.style.width)
    frontimg.style.width = `${x}px`;
    line.style.left = `${x}px`;
    tryangle_left.style.left = `${x - 45}px`;
    tryangle_right.style.left = `${x + 20}px`;
    e.stopImmediatePropagation();
    }
  }
}

line.addEventListener('mousedown', dragevent, false);
document.body.addEventListener('mouseup', dragEnd, false);
window.addEventListener("load", loadFunc, false);
