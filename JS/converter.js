// buat navbar 
let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
      });
      document.querySelector(`header nav a[href='#${id}'`).classList.add('active');
    };
  });
};

document.getElementById('clearButton').addEventListener('click', function() {
  document.getElementById('Temp').value = '';
  document.getElementById('result').value = '';
});

// fungsi konversi
function convert(){
var fromTemp = document.getElementById('fromTemp').value;
var toTemp = document.getElementById('toTemp').value;
var Temp = parseFloat(document.getElementById('Temp').value);

var convertValue;
var result;

// kondisi jika nan
if(isNaN(Temp)){
  document.getElementById('result').value = 'Silahkan Input Suhu Terlebih Dahulu';
  return;
}

switch(fromTemp){
  case '°C':
    if(toTemp == '°F'){
      convertValue = (Temp * 9/5) + 32;
      result = '°F';
    } else if(toTemp == '°R'){
      convertValue = Temp * 4/5;
      result = '°R';
    } else if(toTemp == '°K'){
      convertValue = Temp + 273.15;
      result = '°K';
    } else if(toTemp == '°Ra'){
      convertValue = (Temp + 273.15) * 9/5;
      result = '°Ra';
    } else {
      convertValue = Temp;
      result = '°C';
    }
    break;
  
    case '°R':
    if(toTemp == '°F'){
      convertValue = (Temp * 9/4) + 32;
      result = '°F';
    } else if(toTemp == '°C'){
      convertValue = Temp * 5/4;
      result = '°C';
    } else if(toTemp == '°K'){
      convertValue = (Temp * 5/4) + 273.15;
      result = '°K';
    } else if(toTemp == '°Ra'){
      convertValue = (Temp * 9/4) + 491.67;
      result = '°Ra';
    } else {
      convertValue = Temp;
      result = '°R';
    }
    break;
  
    case '°F':
    if(toTemp == '°C'){
      convertValue = (Temp - 32) * 5/9;
      result = '°C';
    } else if(toTemp == '°R'){
      convertValue = 4/9 * (Temp - 32);
      result = '°R';
    } else if(toTemp == '°K'){
      convertValue = (Temp + 459.67) * 5/9;
      result = '°K';
    } else if(toTemp == '°Ra'){
      convertValue = Temp + 459.67;
      result = '°Ra';
    } else {
      convertValue = Temp;
      result = '°F';
    }
    break;
  
    case '°K':
    if(toTemp == '°F'){
      convertValue = (Temp * 9/5) - 459.67;
      result = '°F';
    } else if(toTemp == '°R'){
      convertValue = 4/5 * (Temp - 273.15);
      result = '°R';
    } else if(toTemp == '°C'){
      convertValue = Temp - 273.15;
      result = '°C';
    } else if(toTemp == '°Ra'){
      convertValue = Temp * 9/5;
      result = '°Ra';
    } else {
      convertValue = Temp;
      result = '°K';
    }
    break;

    case '°Ra':
    if(toTemp == '°F'){
      convertValue = Temp - 459.67;
      result = '°F';
    } else if(toTemp == '°R'){
      convertValue = Temp * 4/9 - 218.52;
      result = '°R';
    } else if(toTemp == '°C'){
      convertValue = (Temp - 491.67) * 5/9;
      result = '°C';
    } else if(toTemp == '°K'){
      convertValue = Temp * 5/9;
      result = '°K';
    } else {
      convertValue = Temp;
      result = '°Ra';
    }
    break;
  }
  console.log("Convert function success")
  document.getElementById('result').value = convertValue.toFixed(2) + ' ' + result;
}