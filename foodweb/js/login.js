const title=document.querySelector('.title h1')
const letter='Welcome!'
var index=0
console.log(title)
setInterval(() => {
   title.textContent +=letter[index]
   index++
   if(index==letter.length+1)
   {
       index=0
       title.textContent=''
   } 
}, 500)





const form=document.querySelector('form');
const button=document.querySelector('.content .left button a');
button.addEventListener('click',function(envent){
    button.preventDefault();
    form.style.animation='to ease 1s';
})
console.log(button);