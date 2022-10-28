const aboutImages = Array.from(document.querySelectorAll('.about-item__image'))
const aboutItems = Array.from(document.querySelectorAll('.about-item'))

addEventListener('mousemove', (e) => {
	moveImageOnMousemove(aboutItems, aboutImages, '.about-item', e)
})

aboutItems.forEach(block => {
	block.addEventListener('mouseleave', (e) => {
		onLeaveAboutBlock(aboutItems, aboutImages, e)
	})
})

function calcImageTranslation(offsetX, offsetY, containerWidth, containerHeight) {
	return {
		x: offsetX - containerWidth / 2,
		y: offsetY - containerHeight / 2,
	}
}

function moveImageOnMousemove(items, images, parentClass, e) {
	const index = items.indexOf(e.target.closest(parentClass)) 
	if (index !== -1) {
		const image = images[index]
		if (image) {
			const container = items[index]
			const { x: moveX, y: moveY } = calcImageTranslation(e.clientX, e.clientY, container.clientWidth, container.clientHeight)
			// console.log(image);
			image.style.transform = `translate(${-moveX / 20}px, ${-moveY / 20}px)`;
		}
	}
}

function onLeaveAboutBlock(items, images, e) {
	const index = items.indexOf(e.target) 
	if (index !== -1) {
		const image = images[index]
		if (image) {
			image.style.transform = `translate(0px, 0px)`;
		}
	}
}

const viewersItems = document.querySelectorAll('[data-viewers]')
viewersItems.forEach(line => {
	const width = Number(line.dataset.viewers) * 50
	line.style.width = `${width}px`
})