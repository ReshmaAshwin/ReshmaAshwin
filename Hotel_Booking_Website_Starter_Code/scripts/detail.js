function compute(){

    var adultNumber =document.getElementById("adult").value;
    var result= adultNumber*1000;
    document.getElementById('total').value="RS."+result;
}
var date= new Date();
var fdate=date.getDate();
var fMonth=date.getMonth()+1;
if(fdate<10){
    fdate='0'+fdate;
}
if(fMonth<10){
    fMonth='0'+fMonth;
}
var fyear=date.getUTCFullYear();
var fminDate=fyear+"-"+fMonth+"-"+fdate;
document.getElementById("fromdate").setAttribute('min',fminDate);







