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
  document.getElementById('Kalkulasi').value = '';
});

// fungsi konversi
function convert(){
var fromTemp = document.getElementById('fromTemp').value;
var toTemp = document.getElementById('toTemp').value;
var Temp = parseFloat(document.getElementById('Temp').value);

var convertValue;
var result;
var Kalkulasi;

// kondisi jika nan
if(isNaN(Temp)){
  document.getElementById('result').value = 'Silahkan Input Suhu Terlebih Dahulu';
  return;
}

switch (fromTemp) {
  case '°C':
    if (toTemp == '°F') {
      convertValue = (Temp * 9 / 5) + 32;
      result = '°F';
      Kalkulasi = `${Temp} °C * (9/5) + 32 = ${convertValue.toFixed(2)} °F`;
    } else if (toTemp == '°R') {
      convertValue = Temp * 4 / 5;
      result = '°R';
      Kalkulasi = `${Temp} °C * (4/5) = ${convertValue.toFixed(2)} °R`;
    } else if (toTemp == '°K') {
      convertValue = Temp + 273.15;
      result = '°K';
      Kalkulasi = `${Temp} °C + 273.15 = ${convertValue.toFixed(2)} °K`;
    } else if (toTemp == '°Ra') {
      convertValue = (Temp + 273.15) * 9 / 5;
      result = '°Ra';
      Kalkulasi = `(${Temp} °C + 273.15) * (9/5) = ${convertValue.toFixed(2)} °Ra`;
    } else {
      convertValue = Temp;
      result = '°C';
      Kalkulasi = `${Temp} °C = ${convertValue.toFixed(2)} °C`;
    }
    break;

  case '°R':
    if (toTemp == '°F') {
      convertValue = (Temp * 9 / 4) + 32;
      result = '°F';
      Kalkulasi = `${Temp} °R * (9/4) + 32 = ${convertValue.toFixed(2)} °F`;
    } else if (toTemp == '°C') {
      convertValue = Temp * 5 / 4;
      result = '°C';
      Kalkulasi = `${Temp} °R * (5/4) = ${convertValue.toFixed(2)} °C`;
    } else if (toTemp == '°K') {
      convertValue = (Temp * 5 / 4) + 273.15;
      result = '°K';
      Kalkulasi = `${Temp} °R * (5/4) + 273.15 = ${convertValue.toFixed(2)} °K`;
    } else if (toTemp == '°Ra') {
      convertValue = (Temp * 9 / 4) + 491.67;
      result = '°Ra';
      Kalkulasi = `${Temp} °R * (9/4) + 491.67 = ${convertValue.toFixed(2)} °Ra`;
    } else {
      convertValue = Temp;
      result = '°R';
      Kalkulasi = `${Temp} °R = ${convertValue.toFixed(2)} °R`;
    }
    break;

  case '°F':
    if (toTemp == '°C') {
      convertValue = (Temp - 32) * 5 / 9;
      result = '°C';
      Kalkulasi = `(${Temp} °F - 32) * (5/9) = ${convertValue.toFixed(2)} °C`;
    } else if (toTemp == '°R') {
      convertValue = 4 / 9 * (Temp - 32);
      result = '°R';
      Kalkulasi = `(4/9) * (${Temp} °F - 32) = ${convertValue.toFixed(2)} °R`;
    } else if (toTemp == '°K') {
      convertValue = (Temp + 459.67) * 5 / 9;
      result = '°K';
      Kalkulasi = `(${Temp} °F + 459.67) * (5/9) = ${convertValue.toFixed(2)} °K`;
    } else if (toTemp == '°Ra') {
      convertValue = Temp + 459.67;
      result = '°Ra';
      Kalkulasi = `${Temp} °F + 459.67 = ${convertValue.toFixed(2)} °Ra`;
    } else {
      convertValue = Temp;
      result = '°F';
      Kalkulasi = `${Temp} °F = ${convertValue.toFixed(2)} °F`;
    }
    break;
  
    case '°K':
        if (toTemp == '°F') {
          convertValue = (Temp * 9 / 5) - 459.67;
          result = '°F';
          calculation = `${Temp} °K * (9/5) - 459.67 = ${convertValue.toFixed(2)} °F`;
        } else if (toTemp == '°R') {
          convertValue = 4 / 5 * (Temp - 273.15);
          result = '°R';
          calculation = `(4/5) * (${Temp} °K - 273.15) = ${convertValue.toFixed(2)} °R`;
        } else if (toTemp == '°C') {
          convertValue = Temp - 273.15;
          result = '°C';
          calculation = `${Temp} °K - 273.15 = ${convertValue.toFixed(2)} °C`;
        } else if (toTemp == '°Ra') {
          convertValue = Temp * 9 / 5;
          result = '°Ra';
          calculation = `${Temp} °K * (9/5) = ${convertValue.toFixed(2)} °Ra`;
        } else {
          convertValue = Temp;
          result = '°K';
          calculation = `${Temp} °K = ${convertValue.toFixed(2)} °K`;
        }
        break;

        case '°Ra':
          if (toTemp == '°F') {
            convertValue = Temp - 459.67;
            result = '°F';
            calculation = `${Temp} °Ra - 459.67 = ${convertValue.toFixed(2)} °F`;
          } else if (toTemp == '°R') {
            convertValue = Temp * 4 / 9 - 218.52;
            result = '°R';
            calculation = `${Temp} °Ra * (4/9) - 218.52 = ${convertValue.toFixed(2)} °R`;
          } else if (toTemp == '°C') {
            convertValue = (Temp - 491.67) * 5 / 9;
            result = '°C';
            calculation = `(${Temp} °Ra - 491.67) * (5/9) = ${convertValue.toFixed(2)} °C`;
          } else if (toTemp == '°K') {
            convertValue = Temp * 5 / 9;
            result = '°K';
            calculation = `${Temp} °Ra * (5/9) = ${convertValue.toFixed(2)} °K`;
          } else {
            convertValue = Temp;
            result = '°Ra';
            calculation = `${Temp} °Ra = ${convertValue.toFixed(2)} °Ra`;
          }
          break;
  }
  console.log("Convert function success")
  document.getElementById('result').value = convertValue.toFixed(2) + ' ' + result;
  document.getElementById('Kalkulasi').value = Kalkulasi;
}