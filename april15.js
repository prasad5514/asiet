let email = document.getElementById("email");

let pwd = document.getElementById("pwd");
function validate()    //A-za-z_==\w
{       
        let regexp1=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
        var regexp2=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
        if(regexp1.test((email.value))&&(regexp2.test(pwd.value)))
        {
            error.innerHTML="email and password is valid";
            error.style.color="green";
            return true;
        }
        else
        {
            error.innerHTML="password or email is invalid";
            error.style.color="red";
            return false;
        }
        // if(email.value.trim()=="")
        // {
        //     alert("email field can not be empty");
        //     return false;
        // }
        // else if(pwd.value.trim()=="")
        // {
        //     alert("password field can not be empty");
        //     return false;
        // }
        // else if(pwd.value.length.trim()<=5)
        // {
        //     alert("password is too short");
        //     pwd.style.border="5px solid red";
        //     return false;
        // }
        // else(1==1)
        // {
        //     return true;
        // }

}
