drag(document.getElementById("drag"));
drag(document.getElementById("drag1"));
drag(document.getElementById("drag2"));
drag(document.getElementById("drag3"));
drag(document.getElementById("drag4"));
drag(document.getElementById("drag5"));
drag(document.getElementById("drag7"));
drag(document.getElementById("drag8"));
drag(document.getElementById("drag9"));
drag(document.getElementById("drag10"));
drag(document.getElementById("drag11"));
drag(document.getElementById("drag12"));
drag(document.getElementById("drag13"));
drag(document.getElementById("drag14"));
drag(document.getElementById("drag15"));
drag(document.getElementById("drag16"));
drag(document.getElementById("drag17"));
drag(document.getElementById("drag18"));
drag(document.getElementById("drag19"));
drag(document.getElementById("drag20"));
drag(document.getElementById("drag21"));
drag(document.getElementById("drag22"));
drag(document.getElementById("drag23"));
drag(document.getElementById("drag24"));
drag(document.getElementById("drag25"));
drag(document.getElementById("drag26"));
drag(document.getElementById("drag27"));
drag(document.getElementById("drag28"));
drag(document.getElementById("drag29"));
drag(document.getElementById("drag30"));
drag(document.getElementById("drag31"));


  
  
function drag(elmnt) {
 
  var position1 = 0, position2 = 0, position3 = 0, position4 = 0;
  if (document.getElementById(elmnt.id)) {
   elmnt.onmousedown = dragImage;
  } 

  function dragImage(click) {
    click = click || window.event;
    click.preventDefault();
    position3 = click.clientX;
    position4 = click.clientY;
    document.onmouseup = lockPosition;
    document.onmousemove = newPosition;
  }

  function newPosition(click) {
    click = click || window.event;
    click.preventDefault();
    position1 = position3 - click.clientX;
    position2 = position4 - click.clientY;
    position3 = click.clientX;
    position4 = click.clientY;
    elmnt.style.top = (elmnt.offsetTop - position2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - position1) + "px";
  }

  function lockPosition() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  
  
  
}


function caseStudy1() {
  document.getElementById("cs1").style.display = "block";
}

function caseStudy2() {
  document.getElementById("cs2").style.display = "block";
}

function caseStudy3() {
  document.getElementById("cs3").style.display = "block";
}

function aboutMe() {
  document.getElementById("am").style.display = "block";
}

function contactMe() {
  document.getElementById("cm").style.display = "block";
}



$(document).ready(function(){
	var divCount = 200; 
	for(var i = 0; i < divCount; i++){
		divWidth = Math.floor(Math.random()*(250)+25); 
		divHeight = Math.floor(Math.random()*(250)+25); 
		divTop = Math.floor(Math.random()*(screen.height-325)) 
		divLeft = Math.floor(Math.random()*(screen.width-250))
		$('<div></div>').appendTo('#collage').css({
			"width":divWidth,
			"height":divHeight,
			"position":"absolute",
			"top": divTop,
			"left": divLeft,
			"border":"2px solid",
      "border-color":"LawnGreen"
		});

	}

})

