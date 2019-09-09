// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

let holiday_pay = function() {
	let christmas_eve_hours = 8;
	let christmas_day_hours = 8;
	let labor_day_hours = 6;
	let july_4th = 8;
	let thankgiving = 4;
	
	let total = christmas_eve_hours + christmas_day_hours + labor_day_hours + july_4th + thankgiving;
	
	function display() {
		console.log(`Your total holiday hours for this year are ${total}`);
		console.log(`Your total holiday pay will be \$${pay}`);
	}

	let pay_rate = 17;
	let pay = pay_rate * total;	

	display();
	return holiday_pay;
}

holiday_pay();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
const counterMaker = () => {
	let count = 0;
	
	function counter() {
		count++;
		//console.log(count);
	}

	return counter; 
};

const myCounter = counterMaker();
myCounter(); // 1
myCounter(); // 2
// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

const counterMaker2 = (initial_count, limit) => {
	let count = initial_count;
	
	function counter() {
		count++;

		if(count > limit)
		{
			count = initial_count;
			count++;
		}

		//console.log(count);
	}

	return counter; 
};

const myBetterCounter = counterMaker2(0, 100);

for(i = 0; i < 200; i++)
	myBetterCounter();
// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
	let count = 0;

	const incrementAndDecrement = {
		increment:  function() {
			count++;
		},

		decrement: function() {
			count--;
		},

		display: () => console.log(count)

	}

	return incrementAndDecrement; 
};

const supercounter = counterFactory();
supercounter.increment();
supercounter.display();
supercounter.decrement();
supercounter.display();
supercounter.increment();
supercounter.increment();
supercounter.increment();
supercounter.increment();
supercounter.increment();
supercounter.increment();
supercounter.display();
