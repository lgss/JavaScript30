const slidies = document.querySelectorAll('.slide-in');

const options = {
	threshold: 0.5
}

function callback(images, observer) {
	images.forEach(image => {
		if (image.intersectionRatio > 0.5) {
			image.target.classList.add('active') // `target` is needed because image is actually an IntersectionObserverEntry object, the target attribute accesses the img 
		} else {
			image.target.classList.remove('active')
		}
	})
}

let io = new IntersectionObserver(callback, options);

slidies.forEach(image => io.observe(image));