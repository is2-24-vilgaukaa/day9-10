document.body.addEventListener("mousemove", getClickPosition, false);
function getClickPosition (e) { 
let picture = document.querySelector("#avatar");
let parentPosition = getPosition(e.currentTarget);
let xPosition = e.clientX - parentPosition.x - (picture.clientWidth / 2);
let yPosition = e.clientY - parentPosition.y - (picture.clientHeight / 2);
picture.style.left = xPosition + "px";
picture.style.top = yPosition + "px";
}

function getPosition(element) { 
let xPos = 0;
let yPos = 0;
while (element) {
if (element.tagName == "BODY") {
let xScroll = element.scrollLeft || document.documentElement.scrollLeft;
let yScroll = element.scrollTop || document.documentElement.scrollTop;
xPos += (element.offsetLeft - xScroll + element.clientLeft);
yPos += (element.offsetTop - yScroll + element.clientTop);
} 
else {
xPos += (element.offsetLeft - element.scrollLeft + element.clientLeft);
yPos += (element.offsetTop - element.scrollTop + element.clientTop);
}
element = element.offsetParent;
}
return { x: xPos, y: yPos };
}