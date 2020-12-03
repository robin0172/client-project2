// First of all selecting the elements item
let input = document.querySelector('input');
let btn = document.querySelector('.btn1');

//adding click/mouseover/ mouseout by useing addEventListener and creating a annonymous function
btn.addEventListener('click', addList)

function addList() {
   let notCompleted = document.querySelector('.notCompleted'); // selecting notCompleted item
   let completed = document.querySelector('.completed'); // selecting Completed item

   // Now we gonna create new list, input and button 
   let newLi = document.createElement('li');
   let newp=document.createElement('p')
  
   let newInput = document.createElement('input');
   newInput.innerText = 'Din syssla1';
  
   let changeBtn = document.createElement('button');
   changeBtn.innerHTML = 'Ändra';
  
   let checkBtn = document.createElement('button');
   checkBtn.innerHTML = 'Färdig';
  
   let delBtn = document.createElement('button');
   delBtn.innerHTML = 'Radera';

   
   if(input.value !== ''){
      newp.textContent = input.value;
      // newLi.value = 'newInput';
      // newLi.appendChild(newInput);
      notCompleted.appendChild(newp).value;
      notCompleted.appendChild(newLi)

      // notCompleted.appendChild(newInput).value;
      
      // create child inside newLi by using newLi.appendChild();
      // newLi.appendChild(newInput);
      newLi.appendChild(changeBtn);
      newLi.appendChild(checkBtn);
      newLi.appendChild(delBtn);
      notCompleted.appendChild(newLi)
   }
  
   // Now what will happen after clicking button (change)
   changeBtn.addEventListener('click', function () {
      
      newp.setAttribute('contentEditable',"true")
      // parent.remove();
      // completed.appendChild(parent);
      // changeBtn.style.display = 'none';
   })


      
      

   // Now clicking check button, jumping to complete button with remove and change button
   checkBtn.addEventListener('click', function () {
      let parent = this.parentNode;
      // parent.change();
      parent.remove();
      completed.appendChild(parent);
      completed.appendChild(newp).value;
      checkBtn.style.display = 'none';
      

   })

   // Now clicking remove button, then will remove whole item 
   delBtn.addEventListener('click', function () {
      let parent = this.parentNode;
      parent.remove();
      newp.style.display="none"

   })

}