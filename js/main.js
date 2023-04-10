console.log('js is wired!');

let theButtons = document.querySelectorAll('.product-img'),
    infoDiv = document.querySelector('#content-con');


let members = {
    cherryp : {
		Name: 'Chucklin Cherry',
		Bio: 'Introducing the luscious and refreshing taste of our cherry fruit drink, Chucklin Cherry. The delicate balance of delicious, silly flavors is expertly crafted by our very  best fruit-scientists  to provide a refreshing and revitalizing experience that leaves a delightful aftertaste that just makes you want to laugh!',
        Image: 'img/chucklin_cherry.svg',
       
    },

    strawberryp : {
       Name: 'Silly Strawberry',
	   Bio: 'Introducing our delightful strawberry drink, Silly Strawberry. where every sip takes you on a silly experience of summer memories and humorous adventures. This drink is bursting with the refreshing taste of specially hand-picked strawberries at the peak of their sweetness.',
       Image:'img/silly_strawberry.svg',
    },  

    grapep : {
        Name: 'Grumpy Grape',
        Bio: 'Introducing our grape drink, Grumpy Grape. Our grape drink is bursting with the authentic and delicious flavor of grapes, freshly picked from our expertly maintained vineyard. From the first sip, it might feel a little intense!',
        Image: 'img/grumpy_grape.svg',
     },  

     orangep : {
        Name: 'Smarty Arty Orange',
        Bio: 'Introducing our grape drink, Grumpy Grape. Our grape drink is bursting with the authentic and delicious flavor of grapes, freshly picked from our expertly maintained vineyard. From the first sip, it might feel a little intense!',
        Image: 'img/smarty_arty_orange.svg',
     },  
};

// functions go here
function listInfo() {
    // empty out the list
    infoDiv.innerHTML = "";
    
    // character name
    let header = document.createElement('h2');
    header.textContent = members[this.dataset.team]['Name'];
    infoDiv.appendChild(header);
    
    // squeezit characters
    let image = document.createElement('img');
    image.src = members[this.dataset.team]['Image'];
    infoDiv.appendChild(image);
    
    // product info
    let bio = document.createElement('p');
    bio.textContent = members[this.dataset.team]['Bio'];
    infoDiv.appendChild(bio);

    //add to cart
    let link = document.createElement('a');
    link.href = members[this.dataset.team]['Link'];
    link.textContent = 'add to cart +';
    infoDiv.appendChild(link);

}



// add event handling here
theButtons.forEach(teamButton => teamButton.addEventListener('click', listInfo)),




// HAMBURGER MENU

(function(){
	"use strict";	
	console.log("fired");

	let button = document.querySelector("#button");
	let burgerCon = document.querySelector("#burger-con");

	function hamburgerMenu() {
		burgerCon.classList.toggle("slide-toggle");
		button.classList.toggle("expanded");
	};

	// let hamburgerMenu = () => {
	// 	burgerCon.classList.toggle("slide-toggle");
	// 	button.classList.toggle("expanded");
	// };

	button.addEventListener("click", hamburgerMenu, false);		
})();

//Can also be written like this:
//(() => {  })();   

// Info about IIFE https://flaviocopes.com/javascript-iife/