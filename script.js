const pswd = document.getElementById('psw');
const strength = document.getElementById('strength');
const eye = document.getElementById('eye');
const show = document.getElementById('show');

const chck = function(){
	const psw = pswd.value;
	const len = psw.length;

	let isUpper = /[A-Z]/;
	let isLower = /[a-z]/;
	let isDigit = /\d/;
	let isSymbol = /[!@#$%&*-/"^'?(){}[\]]/;

	if(len != 8){
		strength.textContent = "Invalid length!";
	}else{
		if(psw.match(isUpper) && psw.match(isLower) && psw.match(isDigit) && psw.match(isSymbol) ){
			strength.textContent = "Strong!";
		}else if(psw.match(isLower) && psw.match(isDigit) && psw.match(isSymbol)){
			strength.textContent = "Good!";
		}else if((psw.match(isUpper) && psw.match(isLower) && psw.match(isDigit)) || (psw.match(isUpper) && psw.match(isLower) && psw.match(isSymbol))){
			strength.textContent = "It can be more Better";
		}else{
			strength.textContent= "Weak!";
		}
	}
};

let x = 1;
const showHide = function(){
	if(x){
		show.style.display = 'block';
		pswd.style.display = 'none';
		eye.src = `images/closedEye.png`;
		x =0;
	}else{
		show.style.display = 'none';
		pswd.style.display = 'block';
		eye.src = `images/openEye.png`;
		x =1;	
	}
}
eye.addEventListener('click', function(){
	const psw = pswd.value;
	showHide();
	show.textContent = psw;
})