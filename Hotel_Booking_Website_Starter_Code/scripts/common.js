 //Header
    var refToHeader = document.getElementById("header-common");
    refToHeader.style.top="0";
    refToHeader.style.height="10vh";
    refToHeader.style.width="100%";
    refToHeader.style.backgroundColor="rosybrown";
    refToHeader.style.position="fixed";
    refToHeader.style.display="flex";
    refToHeader.style.justifyContent="space-between";
    refToHeader.style.zIndex="30"
    
    // function generateHeader(){
    //     var refToHeader = document.getElementById("header-common");
    //     refToHeader.innerHTML = `<div style="height : 10vh; width : 100%; top:0;background-color:yellow;position:fixed;z-index:30;display:flex;justifyContent:space-between;">
    //     <div id="log"><img src="../assests/images/logo.png"></div>
    // <div id="but"><button onclick="f2()" class="btn btn-light" id="info">LOGIN</button></div>
    //     </div>`
    // }
    // generateHeader();
    
        
    // var bttnLogin = document.createElement('button');//light button
    // bttnLogin.id="mybtn";
    // bttnLogin.innerText='LOGIN';
    // bttnLogin.className="btn  btn-light";
    // bttnLogin.style.height="50%";
    // bttnLogin.style.margin="1%";
    
   
    
    

    // var modalcontent=document.createElement("div");//modal content
    // modalcontent1.innerText="some text";
    // modalcontent1.style.backgroundColor="#fefefe";
    // modalcontent1.style.margin="auto";
    // modalcontent1.style.padding="20px";
    // modalcontent1.style.border="1px solid #888";
    // modalcontent1.style.width="80%";
    var infobtn = document.getElementById("info");
    var logohead = document.getElementById("log");
    refToHeader.appendChild(logohead);
    refToHeader.appendChild(infobtn);

    
   

    
function store(){
    
    var username = document.getElementsByTagName("input")[0].value;
    var password = document.getElementsByTagName("input")[1].value;
    if(username=="admin" && password=="admin"){
        sessionStorage.setItem("isLoggedIn",true);
        sessionStorage.setItem("user",username);
        alert("Successfully Logged in");
        document.getElementById("modal").style.visibility="hidden";
    if(document.getElementById("info").innerHTML==="LOGIN")
    {
       document.getElementById("info").innerHTML="LOGOUT";
    }
    else{
        document.getElementById("info").innerHTML="LOGIN"
    }
    document.getElementById("greenbtn").disabled=false;

    }
    }
    

    function f2(){
        var username = document.getElementsByTagName("input")[0].value;
        if(document.getElementById("info").innerHTML==="LOGIN"){
            document.getElementById("modal").style.visibility="visible";
            
        }
        else
        {
            
            document.getElementById("info").innerHTML="LOGIN";
            sessionStorage.removeItem("isLoggedIn",true);
        sessionStorage.removeItem("user",username);
        document.getElementById("greenbtn").disabled=true;
            
        }
        
        
    } 


   

function f3()
{
   
    document.getElementById("modal").style.visibility="hidden";
}
    
    
    
    //Footer

    var refToFooter = document.getElementById("footer-common");
    refToFooter.style.height="10";
    refToFooter.style.bottom="0";
    refToFooter.style.width="100%";
    refToFooter.style.backgroundColor="rosybrown";
    refToFooter.style.position="fixed";
    refToFooter.style.display="flex";
    refToFooter.style.justifyContent="space-between";
    refToFooter.style.zIndex="30";
    refToFooter.style.padding="1%";

    
    var mappedInfo=document.getElementById("infobtn");
    var mappedMed=document.getElementById("med");
    var mappedCopy=document.getElementById("copy");
    mappedMed.style.order="3";
    mappedCopy.style.fontSize="12px";
    refToFooter.appendChild(mappedInfo);
    refToFooter.appendChild(mappedMed);
    refToFooter.appendChild(mappedCopy);

    function f4(){
        document.getElementById("modalFooter").style.visibility="visible";
    }

    function f5()
{
   
    document.getElementById("modalFooter").style.visibility="hidden";
}