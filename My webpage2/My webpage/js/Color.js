function Change(bg,bg2,bg3){
	var all = document.getElementsByClassName('module content');
	console.log(all);
	for (var i = 0; i < all.length; i++) {
		document.getElementsByClassName('module content')[i].style.backgroundColor = bg;
	}
	var all = document.getElementsByClassName('lol');
	console.log(all);
	for (var i = 0; i < all.length; i++) {
		document.getElementsByClassName('lol')[i].style.color = bg2;
	}
	var all = document.getElementsByClassName('lol2');
	console.log(all);
	for (var i = 0; i < all.length; i++) {
		document.getElementsByClassName('lol2')[i].style.color = bg3;
	}
	var all = document.getElementsByClassName('looks');
	console.log(all);
	for (var i = 0; i < all.length; i++) {
		document.getElementsByClassName('looks')[i].style.backgroundColor = bg;
	}

}