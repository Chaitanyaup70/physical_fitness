function log_out(){
    localStorage.removeItem("user_name");
    window.location="index.html"
}
var male = 0;
var female=0;
height=document.getElementById("height").value

weight=document.getElementById("weight").value


function done(){
    document.getElementById("h1").innerHTML=""
   var BMI=(document.getElementById("weight").value)/(document.getElementById("height").value*document.getElementById("height").value)
   console.log(BMI);
if(BMI<18.5){
   
    document.getElementById("h1").innerHTML="You are underweight"
    document.getElementById("h0").innerHTML="Your BMI is:"+BMI
    console.log(BMI);
}else if(BMI<24.9){
    document.getElementById("h1").innerHTML="You are healthy"
    document.getElementById("h0").innerHTML="Your BMI is:"+BMI
    console.log(BMI);
}
else if(BMI<29.9){
    document.getElementById("h1").innerHTML="You are overweight"
    document.getElementById("h0").innerHTML="Your BMI is:"+BMI
    console.log(BMI);
}
else if(BMI<39.9){
    document.getElementById("h1").innerHTML="You are obese"
    document.getElementById("h0").innerHTML="Your BMI is:"+BMI
    console.log(BMI);
}
else {
    document.getElementById("h1").innerHTML="You are severely obese"
    document.getElementById("h0").innerHTML="Your BMI is:"+BMI
    console.log(BMI);
}
  
};
function back(){
    window.location="index2.html"
}

