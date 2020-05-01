//atleast 8 chars, atleast-1 lower case, 1 upper case, 1 number, 1 among[!@#$%&*] and no blank spaces
let regExPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*])(?=.*[0-9])(?!.*\s).{8,}$/
function validate()
{
    if(regExPassword.test(pwd.value))       // password test
{
    document.getElementById("error2").textContent = "Looks Good";
    document.getElementById("error2").classList.remove("wrong");
    document.getElementById("error2").classList.add("good");
    validateFlagPassword = false;
}
else
{
    document.getElementById("error2").textContent = "must include atleast 8 characters including lowercase uppercase and any among !@#$%&*";
    document.getElementById("error2").classList.remove("good");
    document.getElementById("error2").classList.add("wrong");
    validateFlagPassword = false;
}
}
