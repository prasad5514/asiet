function pal(x)
{
    var rem=0;
    var rev=0;
    while(x>0)
    {
        rem=x%10;
        rev=rev*10+rem;
        x=parseInt(x/10);
    }
    if(rev==y)
{
    console.log("palindrome")
}
else{
    console.log("not palindrome")
}
}
var y=123;
pal(y);