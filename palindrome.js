var x=121;
var y=x;
rev=0;
rem=0;
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