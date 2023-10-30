function count_up(ele, count_to, timer, i) {
	if(i > count_to) {
		return;
	}
	ele.text(i.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1."));
	i += 1;
	/*console.log(timer);*/
	setTimeout(function() {count_up(ele, count_to, timer, i)}, timer);
}
$('.counter-up').each(function() {
	count_to = parseInt($(this).data('countTo'));
	timer = parseInt(6700/count_to);
	count_up($(this), count_to, timer, 0)
});