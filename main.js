let theme = document.querySelector('img');
  let input = document.querySelector('input');
  let td = document.getElementsByTagName('td');
  let bar = document.getElementsByClassName('bar');
  let first = document.getElementsByTagName('td')[0];
  let last = document.getElementsByTagName('td');
  let backG = document.getElementById('calculator');
  let result = document.getElementById('result');
  let body = document.querySelector('body');
  let changeTheme = true;
function change() {
  if (changeTheme) {
  theme.src = '/dark.png';
  changeTheme = false;
  input.classList.add('input');
  for (let count = 0; count < td.length; count++) {
    td[count].classList.add('main');
  }
  for (let count = 0; count < bar.length; count++) {
    bar[count].classList.add('dark-bar');
  }
  first.style = 'background-color: #0F5223; color: white;';
  last[last.length-1].style = 'background-color: #0842A0; color: #D3E3FD;';
  backG.style.backgroundColor = '#1F1F1F';
   body.style.backgroundColor = 'black';
   result.style.color = 'white';
  } else {
   theme.src = '/light.png';
   changeTheme = true;
   input.classList.remove('input');
   for (let count = 0; count < td.length; count++) {
     td[count].classList.remove('main');
   }
   for (let count = 0; count < bar.length; count++) {
     bar[count].classList.remove('dark-bar');
   }
   first.style = 'background-color: #C4EED0; color: #082812;';
   last[last.length - 1].style = 'background-color: #D3E3FD; color: #041E49;';
   backG.style.backgroundColor = '';
   body.style.backgroundColor = 'white';
   result.style.color = 'black';
  }
};

 theme.addEventListener('click', change);
 function clickEvent(value) {
   if (input.style.fontSize < "50px" && (input.value.startsWith("=") || input.value.length == 0)) {
     input.style.fontSize = '50px';
   }
    
   let fastParen = input.value;
   let lastParen = input.value;
   fastParen = fastParen.lastIndexOf('(');
   lastParen = lastParen.lastIndexOf(')');
   if (fastParen == -1) {
     fastParen = 0.1;
   } else if (fastParen == 0) {
     fastParen = 0.3;
   }
   if (lastParen == -1) {
     lastParen = 0.2;
   }
   if (input.value.length >= 48 && !(value == 'AC' || value == 'DEL' || value == '=')) {
     alert('Not more value input');
   } else if (value != 'AC' && value != '()' && value != 'DEL' && value != '=') {
     if (input.value.startsWith('=') && (value == 1 || value == 2 || value == 3 || value == 4 || value == 5 || value == 6 || value == 7 || value == 8 || value == 9 || value == 0 || value == '.')) {
     input.value = "";
     input.value = `${input.value}${value}`;
     } else if (input.value.startsWith('=') && (value == '%' || value == '+' || value == '-' || value == '*' || value == '/')) {
       input.value = `${input.value}${value}`;
       input.value = input.value.slice(1, input.value.length-1) + value;
     } else {
       input.value = `${input.value}${value}`;
     }
   } else if (value == 'AC') {
     input.value = '';
   } else if (value == '()') {
     if (fastParen < lastParen) {
       if (input.value.endsWith('+') || input.value.endsWith('-') || input.value.endsWith('*') || input.value.endsWith('/') || input.value.endsWith('%') || input.value == '') {
         if (input.value.startsWith('=')) {
           input.value =  `${input.value}(`;
           input.value.slice(1, input.value.length-1);
         } else {
         input.value =  `${input.value}(`;
         }
       } else {
         if (input.value.startsWith('=')) {
          input.value = input.value.slice(1, input.value.length - 1);
           input.value = `${input.value}*(`;
         } else {
           input.value = `${input.value}*(`;
         }
       }
     } else {
       input.value = `${input.value})`;
     }
     
   } else if (value == 'DEL') {
     if (input.value.startsWith('=')) {
       input.value = '';
     } else {
     input.value = input.value.slice(0, -1);
     }
   } else {
     if (eval(input.value)) {
       result.innerText = '';
       if (input.value.length >= 16 && input.value.length < 20) {
          input.style.fontSize = '40px';
       } else if (input.value.length >= 20 && input.value.length < 24) {
          input.style.fontSize = '33px';
       } else if (input.value.length >= 24) {
          input.style.fontSize = '25px';
       } else {
       input.style.fontSize = '50px';
       }
       input.value = `=${eval(input.value)}`;
     } else {
       result.innerText = '';
       input.value = '=ERROR ';
     }
     setInterval(function() {
       if (input.value.length >= 16 && input.value.length < 20) {
        input.style.fontSize = "40px";
      } else if (input.value.length >= 20 && input.value.length < 24) {
        input.style.fontSize = '33px';
      } else if (input.value.length >= 24 && input.value.length < 32) {
        input.style.fontSize = '25px';
      } else if (input.value.length >= 32 && input.value.length < 40) {
        input.style.fontSize = '20px';
      } else if (input.value.length > 40) {
        input.style.fontSize = '16px';
      }
     
     }, 100)
      
   }
 }
 setInterval(function() {
   let con = eval(input.value);
   if (con == 0) {
     con = 1;
   }
   if (!con) {
     result.innerText = '';
   } else {
   result.innerText = eval(input.value);
   }
    switch (input.value.length) {
      case 16:
        input.style.fontSize = '40px';
        break;
      case 20:
        input.style.fontSize = '33px';
        break;
      case 24:
        input.style.fontSize = '25px';
        break;
      case 32:
        input.style.fontSize = '20px';
        break;
      case 40:
        input.style.fontSize = '16px';
    }
 }, 100);
  
  
  
