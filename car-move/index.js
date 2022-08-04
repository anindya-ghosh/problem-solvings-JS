
const calculateSlope = (start, second) => {
	return Math.atan((second[1] - start[1])/ (second[0]- start[0])) * 180 / Math.PI;
}

const debounced = (fn, timeout = 200) => {
	let timer;
	return (...args) => {
		clearTimeout(timer);
		timer = setTimeout(() => fn(...args), timeout);
	}
}

function registerMoveCar (path) {
	let index = 0;
	const length = path.length;
	let previousIndex = 1;

	const moveCar = ([x, y], isForward) => {
		const car = document.getElementById("car");
		const slope = calculateSlope([x, y], path[previousIndex]);
		car.style.transform = `translateY(${y-30}px) translateX(${x-30}px) rotate(${isForward ? slope : 180 + slope}deg)`;
	}

	const moveCarOnScroll = (event) => {
		let isForward = true;
		if (event.deltaY > 0) {
			index++;
			if (index >= length) {
				index = length - 1;
			}
		} else {
			index--;
			if (index < 0) {
				index = 0;
			}
			isForward = false;
		}
		moveCar(path[index], isForward);
		previousIndex = index;
	};
	document.addEventListener("mousewheel", debounced(moveCarOnScroll));
}

function render (path) {
	const start = path[0];
	const second = path[1];
	const [x, y] = start;
	const wrapper = document.getElementById("wrapper");
	wrapper.style.setProperty("background-image", "url(https://anadea.info/uploads/image_attachment/image/2878/route_map_in_uber_like_app.jpg)")

	const car = document.createElement('img');
	car.setAttribute("id", "car");
	car.setAttribute("src", "./assets/car.jpeg");

	car.setAttribute("width", 50);
	car.setAttribute("height", 50);
	car.style.transform = `translateY(${y-30}px) translateX(${x-30}px) rotate(${calculateSlope(start, second)}deg)`;
	car.style.setProperty("transition-property", "translateY, translateX");
	car.style.setProperty("transition", "transform 2s");

	wrapper.appendChild(car);
	registerMoveCar(path);
}