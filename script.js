"use strict"
let buttonMenu = document.querySelector('#usage');
let buttonLogin = document.querySelector('.login');
let buttonSignUp = document.querySelector('.sign-up');

let popUps = document.querySelectorAll('.pop-up');

for (let popUp of popUps) {
   popUp.addEventListener('click', function (event) {
      if (event.target == this) {
         this.style.display = 'none';
      }
   })
}

document.addEventListener('keydown', function (event) {
   if (event.key == 'Escape') {
      for (let popUp of popUps) {
         popUp.style.display = 'none';
      }
   }
})

buttonMenu.addEventListener('focus', function () {
   document.querySelector('.sub-menu').style.display = 'flex';
});

buttonMenu.addEventListener('blur', function () {
   document.querySelector('.sub-menu').style.display = 'none';
});

let subItemsMenu = document.querySelectorAll('.item');

for (let subItem of subItemsMenu) {
   if (subItem.id) {
      subItem.addEventListener('mouseover', function () {
         for (let item of document.querySelectorAll('.item-active')) {
            item.classList.remove('item-active');
         }

         for (let item of document.querySelectorAll('.sub-active')) {
            item.classList.remove('sub-active');
         }

         this.classList.add('item-active');
         let subMenu = document.querySelector(`[for="${subItem.id}"]`);
         subMenu.classList.add('sub-active');
      })
   }
}

buttonLogin.addEventListener('click', function () {
   document.querySelector(`#${this.classList.value}`).style.display = 'flex';
})

buttonSignUp.addEventListener('click', function () {
   document.querySelector(`#${this.classList.value}`).style.display = 'flex';
})