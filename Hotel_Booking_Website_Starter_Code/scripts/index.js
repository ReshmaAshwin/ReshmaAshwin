function f1()
{
    
    if(document.getElementById("view").innerHTML=="View More")
    {
        document.getElementById("images1").style.display="block";
        document.getElementById("view").innerHTML="View Less";
    }
    else{
        document.getElementById("images1").style.display="none";
        document.getElementById("view").innerHTML="View More";
    }
    
}
