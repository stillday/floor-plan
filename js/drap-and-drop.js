function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("image");
    var target = ev.target;
    // while (" "+target.className+" ".indexOf(" working-space ") == -1) target = target.parentNode;
    ev.target.appendChild(document.getElementById(data));
    // target.appendChild(document.getElementById(data));
}

function drag(ev) {
    ev.dataTransfer.setData("image", ev.target.id);
    ev.dataTransfer.effectAllowed = 'copy';
}

// var elem = document.getElementById('plan-area');
// elem.addEventListener('mousemove', drag);
// elem.addEventListener('mouseup', dragstop);	
  
//    //Das Objekt, das gerade bewegt wird.
//     var dragobjekt = null;

//     // Position, an der das Objekt angeklickt wurde.
//     var dragx = 0;
//     var dragy = 0;

//    // Mausposition
//    var posx = 0;
//    var posy = 0;


// function dragstart(element) {
//    //Wird aufgerufen, wenn ein Objekt bewegt werden soll.

//   dragobjekt = element;
//   dragx = posx - dragobjekt.offsetLeft;
//   dragy = posy - dragobjekt.offsetTop;
// }


// function dragstop() {
//   //Wird aufgerufen, wenn ein Objekt nicht mehr bewegt werden soll.

//   dragobjekt=null;
// }


// function drag(ereignis) {
//   //Wird aufgerufen, wenn die Maus bewegt wird und bewegt bei Bedarf das Objekt.

//   posx = document.all ? window.event.clientX : ereignis.pageX;
//   posy = document.all ? window.event.clientY : ereignis.pageY;
//   if(dragobjekt != null) {
//     dragobjekt.style.left = (posx - dragx) + "px";
//     dragobjekt.style.top = (posy - dragy) + "px";
//   }
// }