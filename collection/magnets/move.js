var offset = 0;
var moveable = document.getElementsByClassName("moveable");
for (var i = 0; i < moveable.length; i++) {
    dragElement(moveable[i]);
    moveable[i].style.left = offset + "px";
    offset = offset + moveable[i].offsetWidth + moveable.length + 10;
}

var offset1 = 0;
var moveable1 = document.getElementsByClassName("moveable1");
for (var i = 0; i < moveable1.length; i++) {
    dragElement(moveable1[i]);
    moveable1[i].style.left = offset1 + "px";
    offset1 = offset1 + moveable1[i].offsetWidth + moveable1.length + 10;
}

var offset2 = 0;
var moveable2 = document.getElementsByClassName("moveable2");
for (var i = 0; i < moveable2.length; i++) {
    dragElement(moveable2[i]);
    moveable2[i].style.left = offset2 + "px";
    offset2 = offset2 + moveable2[i].offsetWidth + moveable2.length + 10;
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}