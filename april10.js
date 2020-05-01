         var item=document.getElementById("imageitem")
         var divelem=document.querySelector("#divitem")
         function changer()
         {
             divelem.innerHTML = "<p>your item is missing<p>"
         }
         function reset()
        {
            //var item=document.getElementById("imageitem")
            item.removeAttribute("hidden","true")
        }
        function hide()
        {
            //var item=document.getElementById("imageitem")
            item.setAttribute("hidden","true")
        }
        function changerimage()
        {
            item.removeAttribute("src","ala1.jpg");
            item.setAttribute("src","ala2.jpg");
        }
        function resetimage()
        {
            item.removeAttribute("src","ala2.jpg");
            item.setAttribute("src","ala1.jpg");
        }