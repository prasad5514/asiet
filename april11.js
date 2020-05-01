var item=document.getElementById("imageitem")
var divelem=document.querySelector("#divitem")
function hide()
{
    item.setAttribute("hidden","true")
}
function reset()
{
    item.removeAttribute("hidden","true")
}
function changer()
{
    divelem.innerHTML="<p>your image is missing</p>"
}
function changerimage()
{
    item.removeAttribute("src","ala1.jpg")
    item.setAttribute("src","ala2.jpg")
}
function resetimage()
{
    item.removeAttribute("src","ala2.jpg")
    item.setAttribute("src","ala1.jpg")
}