const warriorBtn = document.querySelector('.warrior');
const magicianBtn = document.querySelector('.magician');
const huntressBtn = document.querySelector('.huntress');
const warlockBtn = document.querySelector('.warlock');
const templarBtn = document.querySelector('.templar');
const character = document.querySelector('#character');
const backBtn = document.querySelector('.hide');

function Hero(name, description, health, weapon, powerUp) {
	this.name = name;
	this.description = description;
	this.health = health;
	this.weapon = weapon;
	this.powerUp = powerUp;
};


let warrior = new Hero('Warrior', 'The mighty Warrior, raised in the city of Ordan. His fierce skillset will send any foe running becuase of his tremendous health and strength.',
	200, 'Two-Handed Sword', 'The Warrior can raise his health from 200 to 500 for one minute, great in boss battles, cooldown of 30 seconds.');

let magician = new Hero('Magician', 'The mighty Magician, raised in the city of Kintos. His expertise in magic will send fire, ice, and lightning to reign down on his enemies.',
	75, 'Magic Book', 'The Magicians combining all of his elemental powers into one to eliminate all the enemies on the battlefield, cooldown of 60 seconds.');

let huntress = new Hero('Huntress', 'The mighty Huntress, raised in the city of Nanos. Her expertise with the crossbow is deadly, she is quick on her feet and knows how to get around her opponent',
	100, 'Crossbow', 'The Huntress will send many arrows into the air to leave them to come down on her enemies, cooldown of 15 seconds.');

let warlock = new Hero('Warlock', 'The mighty Warlock, raised in the city of Eran. His fierce skillset will bring the dead back to life to fight for him.',
	90, 'Staff', 'The Warlock will come back from the dead for his power up, cooldown of 100 seconds');

let templar = new Hero('Templar', 'The mighty Templar, raised in the city of Budel. His support on the battlefield will keep your team alive while also dealing massive damage to the evil doers!',
	125, 'One-Handed Sword and Sheild', 'The Templar can heal all allies back to full health and mana for his power up, cooldown of 50 seconds.');

warriorBtn.addEventListener('click', () => {
	if (backBtn.className == "hide") {
		backBtn.style.display = 'block';
	 let charDescription = "<h2>This is the " + warrior.name + "<br><br>" + 
	 "His description is as follows: " + warrior.description + "<br><br>" + "His health is a crazy " 
	 + warrior.health + "hp".toUpperCase() + "<br><br>" + "His weapon? The mighty " + warrior.weapon 
	 + "<br><br>" + "Finally, his mighty power up is: " + warrior.powerUp + "</h2>";
	 character.innerHTML = charDescription;
	}

});

magicianBtn.addEventListener('click', () => {
	if (backBtn.className == "hide") {
		backBtn.style.display = 'block';
	 let charDescription = "<h2>This is the " + magician.name + "<br><br>" + 
	 "His description is as follows: " + magician.description + "<br><br>" + "His health is a crazy " 
	 + magician.health + "hp".toUpperCase() + "<br><br>" + "His weapon? The knowlegable " + magician.weapon 
	 + "<br><br>" + "Finally, his power up is: " + magician.powerUp + "</h2>";
	 character.innerHTML = charDescription;
	}
});

huntressBtn.addEventListener('click', () => {
	if (backBtn.className == "hide") {
		backBtn.style.display = 'block';
	 let charDescription = "<h2>This is the " + huntress.name + "<br><br>" + 
	 "Her description is as follows: " + huntress.description + "<br><br>" + "Her health is " 
	 + huntress.health + "hp".toUpperCase() + "<br><br>" + "Her weapon? The nimble " + huntress.weapon 
	 + "<br><br>" + "Finally, her power up is: " + huntress.powerUp + "</h2>";
	 character.innerHTML = charDescription;
	}
});

warlockBtn.addEventListener('click', () => {
	if (backBtn.className == "hide") {
		backBtn.style.display = 'block';
	 let charDescription = "<h2>This is the " + warlock.name + "<br><br>" + 
	 "His description is as follows: " + warlock.description + "<br><br>" + "His health is a crazy " 
	 + warlock.health + "hp".toUpperCase() + "<br><br>" + "His weapon? The deadly " + warlock.weapon 
	 + "<br><br>" + "Finally, his power up is: " + warlock.powerUp + "</h2>";
	 character.innerHTML = charDescription;
	}
});

templarBtn.addEventListener('click', () => {
	if (backBtn.className == "hide") {
		backBtn.style.display = 'block';
	 let charDescription = "<h2>This is the " + templar.name + "<br><br>" + 
	 "His description is as follows: " + templar.description + "<br><br>" + "His health is a crazy " 
	 + templar.health + "hp".toUpperCase() + "<br><br>" + "His weapon? The durable " + templar.weapon 
	 + "<br><br>" + "Finally, his power up is: " + templar.powerUp + "</h2>";
	 character.innerHTML = charDescription;magician
	}
});


