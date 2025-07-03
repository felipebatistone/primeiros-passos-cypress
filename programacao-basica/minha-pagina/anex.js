let button = document.getElementById('button')
let text = document.getElementsByClassName('title-red')

button.addEventListener('click',function(){
    
    for(let index = 0; index < text.length; index++){
        if(text[index].tagName == 'H1'){
         text[index].textContent = 'isso é um h1'
         text[index].style.color = 'red'
        }else if(text[index].tagName == 'H2'){
            text[index].textContent = 'isso é um h2'
            }else 
                text[index].textContent = 'mudou'
        } 
        }
       
    
    
)
 

