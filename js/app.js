var mode=''
var count=0
var arrayImg={paper: 'img/hand_480px.png', rock: 'img/hand_rock_480px.png', scissors: 'img/hand_scissors_480px.png'};
var arrayWords=['paper','rock','scissors']

function humanPlay(icon)
{  
switch (icon) {  
  case 'paper':
    document.getElementById('humanImg').src='img/hand_480px.png'
    break;
    case 'rock':
    document.getElementById('humanImg').src='img/hand_rock_480px.png'
    break;
    case 'scissors':
    document.getElementById('humanImg').src='img/hand_scissors_480px.png'
    break;
}
game(icon)
}

function computerPlay(icon)
{
  mode=icon
switch (icon) {  
  case 'easy':
    document.getElementById('computerImg').src='img/easy.png'
    document.getElementById('computerText').innerText="Easy, always win"      
    break;
    case 'normal':
    document.getElementById('computerImg').src='img/cool.png'
    document.getElementById('computerText').innerText="Normal, always random" 
    break;
    case 'hard':
    document.getElementById('computerImg').src='img/hard.png'
    document.getElementById('computerText').innerText="Hard, never win"  
    break;
}
}

function game(human)
{
  switch (mode) {
    case 'easy':       
    document.getElementById('computerImg').src=arrayImg[alwaysWin(human)] 
    document.getElementById('tbody').innerHTML+= `<tr><th scope="row">${++count}</th><td class="text-success">Win</td><td class="text-danger">Loose</td><td>Easy</td></tr>`
    break;
    case 'normal':
      let num=Math.round(Math.random() * 2)
      console.log(num)
      switch (arrayWords[num]) {
        case 'paper':
          if (human==='scissors') {
            document.getElementById('computerImg').src=arrayImg[alwaysWin(human)] 
            document.getElementById('tbody').innerHTML+= `<tr><th scope="row">${++count}</th><td class="text-success">Win</td><td class="text-danger">Loose</td><td>Normal</td></tr>`  
          }
          else if(human==='rock'){
            document.getElementById('computerImg').src=arrayImg[alwaysLoose(human)] 
            document.getElementById('tbody').innerHTML+= `<tr><th scope="row">${++count}</th><td class="text-danger">Loose</td><td class="text-success">Win</td><td>Normal</td></tr>`        
          }
          else{
          document.getElementById('computerImg').src=arrayImg['paper'] 
          document.getElementById('tbody').innerHTML+= `<tr><th scope="row">${++count}</th><td class="text-warning">Draw</td><td class="text-warning">Draw</td><td>Normal</td></tr>`        
          }
          break;

          case 'rock':
          if (human==='paper') {
            document.getElementById('computerImg').src=arrayImg[alwaysWin(human)] 
            document.getElementById('tbody').innerHTML+= `<tr><th scope="row">${++count}</th><td class="text-success">Win</td><td class="text-danger">Loose</td><td>Normal</td></tr>`  
          }
          else if(human==='scissors'){
            document.getElementById('computerImg').src=arrayImg[alwaysLoose(human)] 
            document.getElementById('tbody').innerHTML+= `<tr><th scope="row">${++count}</th><td class="text-danger">Loose</td><td class="text-success">Win</td><td>Normal</td></tr>`        
          }
          else{
          document.getElementById('computerImg').src=arrayImg['rock'] 
          document.getElementById('tbody').innerHTML+= `<tr><th scope="row">${++count}</th><td class="text-warning">Draw</td><td class="text-warning">Draw</td><td>Normal</td></tr>`        
          }
          break;

          case 'scissors':
          if (human=='paper') {
            document.getElementById('computerImg').src=arrayImg[alwaysWin(human)] 
            document.getElementById('tbody').innerHTML+= `<tr><th scope="row">${++count}</th><td class="text-success">Win</td><td class="text-danger">Loose</td><td>Normal</td></tr>`  
          }
          else if(human=='rock'){
            document.getElementById('computerImg').src=arrayImg[alwaysLoose(human)] 
            document.getElementById('tbody').innerHTML+= `<tr><th scope="row">${++count}</th><td class="text-danger">Loose</td><td class="text-success">Win</td><td>Normal</td></tr>`        
          }
          else{
          document.getElementById('computerImg').src=arrayImg["scissors"] 
          document.getElementById('tbody').innerHTML+= `<tr><th scope="row">${++count}</th><td class="text-warning">Draw</td><td class="text-warning">Draw</td><td>Normal</td></tr>`        
          }
          break;      
      }
    break;
    case 'hard':         
      document.getElementById('computerImg').src=arrayImg[alwaysLoose(human)] 
      document.getElementById('tbody').innerHTML+= `<tr><th scope="row">${++count}</th><td class="text-danger">Loose</td><td class="text-success">Win</td><td>Hard</td></tr>`  
    break;
}
  }



function alwaysWin(played){
  switch (played) {  
    case 'paper':
      return 'rock'
      break;
      case 'rock':
        return 'scissors'
      break;
      case 'scissors':
        return 'paper'
      break;
  }
}

function alwaysLoose(played){
  switch (played) {  
    case 'paper':
      return 'scissors'
      break;
      case 'rock':
        return 'paper'
      break;
      case 'scissors':
        return 'rock'
      break;
  }
}


