console.log('js is wired!');

let theButtons = document.querySelectorAll('button'),
    infoDiv = document.querySelector('#info-div');


let members = {
    calli : {
		Name: 'Callidora Idsardi',
		Bio: 'Callidora is an awesome part of our team here at Squeezit. She enjoys cooking, bullet journaling, and listening to music on her free time - and most of all, creating content for our brand!',
		Image:'img/smarty_arty_ornage.svg'
    },

    magnus : {
       Name: 'Magnus Bane',
	   Bio: 'Magnus is an essential team member here at Squeezit. As our in-house dog, he provides daily happiness for our team and clients. Magnus is a team player who shows up on time everyday, especially for treats.',
	   Image:  'img/chucklin_cherry.svg'
    },  
};

// functions go here
function listInfo() {
    // empty out the list
    infoDiv.innerHTML = "";
    
    // add header
    let header = document.createElement('h2');
    header.textContent = members[this.dataset.team]['Name'];
    infoDiv.appendChild(header);
    
    // add image
    let image = document.createElement('img');
    image.src = members[this.dataset.team]['Image'];
    infoDiv.appendChild(image);
    
    // add bio
    let bio = document.createElement('p');
    bio.textContent = members[this.dataset.team]['Bio'];
    infoDiv.appendChild(bio);
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