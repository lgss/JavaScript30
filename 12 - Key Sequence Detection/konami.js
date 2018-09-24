const typed = [];
const konami = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';

window.addEventListener('keyup', (e) => {
	typed.push(e.key);
	if(typed.join('').includes(konami)) {
		cornify_add();
		typed.splice(0);
		console.log('God cornify is annoying');
	}
	// console.log(typed);
})