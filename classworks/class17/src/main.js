

// let fff = document.getElementById('butt_color'),
colorChange = document.getElementById('app'),
e = 0;
colorChange.onclick = () => {
	if(e % 2 !== 0){
		colorChange.style.background ='#ccc';
		e++
	}else{
		colorChange.style.background ='#881111';
		e++
	}

	colorChange.classList.toggle('new_class');

}
let rrr = 400;
colorChange.onmousemove = () => {
	if(parseInt(colorChange.style.left) <= 0){
		console.log(parseInt(rrr).replace('-', ''));
		colorChange.style.left = rrr.replace('-', '') + 'px';
		console.log(parseInt(colorChange.style.left));
		--rrr;
	}else{
		colorChange.style.left = rrr + 'px';
		--rrr;
		console.log(colorChange.style.left.replace('px', ''));
	}
}