function ajax()
{
    //creating an XHR object
var xhttp=new XMLHttpRequest();
//eventlistener
xhttp.onreadystatechange=function()
{
    //condition
    if(this.readyState==4&&this.status==200)
    {
        //document.getElementById("demo").innerHTML=this.responseText;
        var response=JSON.parse(this.responseText);
        
        //var jpeople=response.people;//. operater to access the array
        
       
        //console.log(output);
        document.getElementById("demo").innerHTML=response.text_out;

    }
}
//xhttp.open("GET","https://jsonplaceholder.typicode.com/posts",true);//ajax.txt/april26json.json
xhttp.open("GET","http://www.randomtext.me/api/lorem/ul-5/5-15",true);//ajax.txt/april26json.json
xhttp.send();  
}      