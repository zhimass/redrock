window.onload=function(){
	var list = document.querySelector('.carousel-l li');
	var buttons = document.querySelector('.butt');
	var index = 1;
	var animated = false;
	var timer;


	function showButton(){
		for (var i = 0;i < buttons.length;i ++) {
			if (buttons[i].className == 'on') {
				buttons[i].className='';
				break;
			}
		}
		buttons[index - 1].className = 'on';
}
function animate(offset){
	animated = true;
	var newLeft = parseInt(list.style.left) + offset;
	var time = 440;
	var interval = 20;
	var speed = offset/(time/interval);

	function go(){
		if ((speed < 0 && parseInt(list.style.left) > newLeft)||(speed > 0 && parseInt(list.style.left) < newLeft)){
			list.style.left = parseInt(list.style.left) + speed + 'px';
			setTimeout(go,interval);
		}
		else{
			animated = false;
			list.style.left = newLeft + 'px';
				if (newLeft > -440) {
					list.style.left = -2200 + 'px';
				}
				if (newLeft < -2200) {
					list.style.left = -440 + 'px';
				}
		}
	}
	go();
}
