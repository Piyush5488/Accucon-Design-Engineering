
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function zerothFunction(){
  var x = document.getElementById("services");
  var element1 = document.getElementById("dd1");
  if(element1.className === "drop-down"){
    element1.className = "";
    x.className = "margin-service";
  }
  else{
    element1.className = "drop-down";
    x.className = "";
  }
  var element2 = document.getElementById("second");
  if(element2.className === "hide"){
    element2.className = "hide responsive";
  }
  else{
    element2.className = "hide";
  }
}

function fourthFunction(){
  var x = document.getElementById("team");
  var element1 = document.getElementById("dd1");
  if(element1.className === "drop-down"){
    element1.className = "";
    x.className = "margin-team";
  }
  else{
    element1.className = "drop-down";
    x.className = "";
  }
  var element2 = document.getElementById("ten");
  if(element2.className === "hide"){
    element2.className = "hide responsive";
  }
  else{
    element2.className = "hide";
  }
}

function firstFunction() {
  var x = document.getElementById("first");
  var element1 = document.getElementById("dd1");
  var y1 = document.getElementById("second");
  var element2 = document.getElementById("dd2");
  var y2 = document.getElementById("third");
  console.log("first");
  if (x.className === "hide") {
    x.className += " responsive";
  } else {
    x.className = "hide";
    element1.className = "drop-down";
    y1.className = "hide";
    element2.className = "drop-down";
    y2.className = "hide";

  }
  x = document.getElementById("welcome");
  if (x.className === "mark1") {
    x.className += " mob-margin-1";
  } else {
    x.className = "mark1";
  }

}

function secondFunction() {
  var x = document.getElementById("second");
  console.log("second");
  var element = document.getElementById("dd1");
  var y =  document.getElementById("first");

  if (x.className === "hide") {
    element.classList.remove("drop-down");
    x.className += " responsive";
  } else {
    element.classList.add("drop-down");
    x.className = "hide";
  }

  x = document.getElementById("welcome");
  if (x.className === "mark1 mob-margin-1") {
    x.className += " mob-margin-2";
  } else {
    if(x.className === "mark1 mob-margin-1 mob-margin-3"){
      x.className += " mob-margin-4";
    }
    else{
      if(x.className === "mark1 mob-margin-1 mob-margin-2 mob-margin-4"){
        x.className = "mark1 mob-margin-1 mob-margin-3"
      }
      else{
        x.className = "mark1 mob-margin-1";
      }

    }

  }
}

function thirdFunction() {
  var x = document.getElementById("third");
  console.log("second");
  var element = document.getElementById("dd2");
  var y =  document.getElementById("first");

  if (x.className === "hide") {
    element.classList.remove("drop-down");
    x.className += " responsive";
  } else {
    element.classList.add("drop-down");
    x.className = "hide";
  }

  x = document.getElementById("welcome");
  if (x.className === "mark1 mob-margin-1") {
    x.className += " mob-margin-3";
  } else {
    if(x.className === "mark1 mob-margin-1 mob-margin-2"){
        x.className += " mob-margin-4";
    }
    else{
      if(x.className === "mark1 mob-margin-1 mob-margin-2 mob-margin-4"){
        x.className = "mark1 mob-margin-1 mob-margin-2"
      }
      else{
        x.className = "mark1 mob-margin-1";
      }

    }

  }
}


var flag1 =0;
function changeText1(){
  if(flag1===0){
    document.getElementById('ad-1').innerHTML = 'Plot No.78, M.I.G-1 Chaknaunia, A.D.A Colony Naini, Allahabad Uttar Pradesh-211008';
    flag1=1;
  }
  else{
    document.getElementById('ad-1').innerHTML = '<i class="fas fa-hand-point-right contact-city"></i> Allahabad';
    flag1=0;
  }

}

var flag2 =0;
function changeText2(){
  if(flag2===0){
    document.getElementById('ad-2').innerHTML = '367  phase 3 ,amravati enclave, baddi';
    flag2=1;
  }
  else{
    document.getElementById('ad-2').innerHTML = '<i class="fas fa-hand-point-right contact-city"></i> Panchkula';
    flag2=0;
  }

}


var flag3 =0;
function changeText3(){
  if(flag3===0){
    document.getElementById('ad-3').innerHTML = 'house no. 23-178/1, Madhuranagar, behind Trident hospital, shamshabad, hyderdabad. pin-501218';
    flag3=1;
  }
  else{
    document.getElementById('ad-3').innerHTML = '<i class="fas fa-hand-point-right contact-city"></i> Hyderabad';
    flag3=0;
  }

}


var flag4 =0;
function changeText4(){
  if(flag4===0){
    document.getElementById('ad-4').innerHTML = '304, A-1, Uma Paradise complex, Ganesh Mandir Road, Titwala East, Thane, Maharashtra, Pin 421605';
    flag4=1;
  }
  else{
    document.getElementById('ad-4').innerHTML = '<i class="fas fa-hand-point-right contact-city"></i> Mumbai';
    flag4=0;
  }

}

var count =0;
function check(){

  let x = document.getElementById('in');
  if(flag1===1){
    count++;
  }
  if(flag2===1){
    count++;
  }
  if(flag3===1){
    count++;
  }
  if(flag4===1){
    count++;
  }

  if(count===0){
    if(x.className==="info"){
        x.className += "info";
    }
  }
  if(count===1){
    if(x.className==="info"){
        console.log(count);
        x.className += " info-height-1";
    }
  }
  if(count===2){
    if(x.className==="info"){
        x.className += " info-height-2";
    }
  }
  if(count===3){
    if(x.className==="info"){
        x.className += " info-height-3";
    }
  }
  if(count===4){
    if(x.className==="info"){
        x.className += " info-height-4";
    }
  }
  count=0;
}
