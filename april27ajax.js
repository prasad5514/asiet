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
        var response=JSON.parse(this.responseText);//responseText holding content from people.json   
        //console.log(response);
        var jpeople=response.people;//. operater to access the array
        //console.log(jpeople);
        var output="";
        for(var i=0;i<jpeople.length;i++)
        {
            output+="<li>"+jpeople[i].name;+"</li>"
        }
        //console.log(output);
        document.getElementById("demo").innerHTML=output;

    }
}
xhttp.open("GET","april27people.json",true);//april27ajax.txt/april26json.json,three object in an array
xhttp.send();  
}      