function main() {

	const d = new Date();
	const hours = d.getHours();
	const minutes = d.getMinutes();
	const seconds = d.getSeconds();

	const secondHand = document.querySelector('.second-hand');
	const minuteHand = document.querySelector('.minute-hand');
	const hourHand = document.querySelector('.hour-hand');

	const secondDegrees = ((seconds / 60) * 360 );
	secondHand.style.transform = `rotate(${secondDegrees}deg)`;

	const minuteDegrees = ((minutes / 60) * 360);
	minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

	const hourDegrees = ((hours / 12) * 360);
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

	setTimeout(main, 1000);
}