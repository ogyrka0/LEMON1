
let inputs = document.getElementsByName('car');
let change = document.getElementById('change1');

let miniInp = document.getElementsByName('p11c');
let miniChe = document.getElementById('miniPic');



for(let i = 0; i<inputs.length; i++){

inputs[i].onclick=()=>{

	if (i == 0) {change.src = 'Images/Bcake1.png'}

	if (i == 1) {change.src = 'Images/Bcake2.png'}

	if (i == 2) {change.src = 'Images/Sweet.png'}

	if (i == 3) {change.src = 'Images/Bcake3.png'}

	if (i == 4) {change.src = 'Images/Bcake4.png'}	

						}

miniInp[i].onclick=()=>{

	if (i == 0) {miniChe.src = 'Images/Target(1).jpg'}

	if (i == 1) {miniChe.src = 'Images/Target(2).jpg'}

	if (i == 2) {miniChe.src = 'Images/ravioli1.jpg'}

	if (i == 3) {miniChe.src = 'Images/Target(3).jpg'}

	if (i == 4) {miniChe.src = 'Images/Easy ML2.jpg'}

}					

}


let ccount = 0;

function post(event){

let comment = document.getElementById('comment').value; 

	if (comment == '') { alert('В поле пусто'); return false}


ccount++;

													
let div = document.createElement('div');

div.innerHTML = document.getElementById('rep').innerHTML;




 let my_div = document.getElementById('coma');
  
 my_div.parentNode.insertBefore(div,my_div);


 let comments = document.getElementsByClassName('commentLine');


		comments[ccount].innerText = comment;

		document.getElementById('comment').value = ''; return true; 


																}



document.getElementById('comment').onkeypress = function (event) {
	if(event.keyCode == 13){
		post();
	}
}

document.getElementById('press').onclick = post;


 																


// let parent = my_div.parentNode;


/*logemail logpassword 
	
	email text password passwordRp

	login */




// localStorage.setItem('mail', signup)



// document.getElementById('signUp').onclick = ()=>{

// 	let signup = document.getElementById('email').value;

// 	console.log(signup)
// }





