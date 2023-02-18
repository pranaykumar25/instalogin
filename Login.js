function vis()
{
    document.getElementById("a").removeAttribute("type")
    document.getElementById("b").setAttribute("src","../")
}
function hid()
{
    document.getElementById("b")/setAttribute("src","../")
    document.getElementById("a").setAttribute("type","password")
}
function auth()
{
    var password="123"
    var email="pranaykumar25@gmail.com"
    var userpass=document,getElementById("a").value 
    var useremail=document.getElementById("email").value
    if (useremail==email && userpass==password)
    {
        document.getElementById("frm").setAttribute("action","./index.html")
        document.getElementById("log").setAttribute("type","submit")
        document.getElementById("para").innerHTML=" "
    }
    else if(useremail==email && userpass!=password)
    {
        document.getElementById("div").style.borderColor="red"
        document.getElementById("para").innerHTML="entered the wrong password"
    }
    else{
        document.getElementById("email").style.borderColor="red"
        document.getElementById("div").style.borderColor="red"
        document.getElementById("para").innerHTML="entered the wrong password"
    }
}