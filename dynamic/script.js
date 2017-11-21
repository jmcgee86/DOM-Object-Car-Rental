var carRental = {
	name: "Jim's Car Rentals",
	cars: [
		{
			type: "Economy",
			price: "$45",
			quantity:20,
			booked: 0,
			available: 20
		},
		{
			type: "Midsize",
			price: "$65",
			quantity:20,
			booked: 0,
			available: 20
		},
		{
			type: "Luxury",
			price: "$90",
			quantity:10,
			booked: 0,
			available: 20
		},
		{
			type: "Electric",
			price: "$75",
			quantity:20,
			booked: 0,
			available: 20
		}
		],
	econAvail: function() {
		return this.cars[0].quantity - this.this.cars[0].booked;
	},
	midAvail: function() {
		return this.cars[1].quantity - this.this.cars[1].booked;
	},
	luxAvail: function() {
		return this.cars[2].quantity - this.this.cars[2].booked;
	},
	elecAvail: function(){
		this.cars[3].quantity - this.this.cars[3].booked
	},
	bookEcon: function() {
		this.cars[0].booked++;
	},
	bookMid: function() {
		this.cars[1].booked++;
	},
	
	bookLux: function() {
		this.cars[2].booked++;
	},
	bookElec: function() {
		this.cars[3].booked++;
	}
};
var rentals = {
	Renters: [],
	addRenter: function(renterName, carType) {
		{
			this.Renters.push({
				Name: renterName,
				Car: carType
			});
		}
	},
}

//displays name of company on page load
document.getElementById("name").innerHTML = carRental.name;

//Updates availability and price of both car types on click of "Update Availability button"
function update() {
	document.getElementById("econa").innerHTML = "Cars available: " + carRental.econAvail();
	document.getElementById("mida").innerHTML = "Cars available: " + carRental.midAvail();
	document.getElementById("luxa").innerHTML = "Cars available: " + carRental.luxAvail();
}

//Rents out one Economy car if any are available
function econCars() {
	if (carRental.econAvail() > 0) {
		carRental.bookEcon();
	} else alert("no cars available");
}

//Rents out one Midsize car if any are available
function midCars() {
	if (carRental.midAvail() > 0) {
		carRental.bookMid();
	} else alert("no cars available");
}

//Rents out one Luxury Car if any are available
function luxCars() {
	if (carRental.luxAvail() > 0) {
		carRental.bookLux();
	} else alert("no cars available");
}

//Displays availability and price of car type selected from dropdown
function chooseCar() {
	var carType = document.getElementById("carchoice").value;
	if (carType == "economy") {
		document.getElementById("econa").innerHTML = "Cars Available: " + carRental.econAvail();
		document.getElementById("econp").innerHTML = "Car Price: " + carRental.econPrice;
	} else if (carType == "midsize") {
		document.getElementById("mida").innerHTML = "Cars Available: " + carRental.midAvail();
		document.getElementById("midp").innerHTML = "Car Price: " + carRental.midPrice;
	}	else if (carType === "luxury"){
		document.getElementById("luxa").innerHTML = "Cars Available: " + carRental.luxAvail();
		document.getElementById("luxp").innerHTML = "Car Price: " + carRental.luxPrice;
		}
	};


//Rents out one of car type selected, updates total available, and add renter name and car type rented to array of renters.
//Alerts user to enter name or select car type if either was omitted
function rentCar() {
	var renterName = document.getElementById("rname").value;
	var carType = document.getElementById("carchoice").value;
	if (renterName.length > 0) {
		if (carType === "economy") {
			econCars();
			rentals.addRenter(renterName, carType);
			chooseCar();
		} else if (carType === "midsize") {
			midCars();
			rentals.addRenter(renterName, carType);
			chooseCar();
		} else if (carType === "luxury") {
			luxCars();
			rentals.addRenter(renterName, carType);
			chooseCar();
		} else alert("Please choose a car type");
	} else alert("Please enter your name");
}


//var form = document.createElement("SELECT");
//form.setAttribute("id", "options")
//document.getElementById("renterinfo").prepend(form);


for (var i=0; i < carRental.cars.length; i++){
	console.log("start");
	var dropdown = document.createElement("OPTION");
	dropdown.setAttribute("value", i)//carRental.cars[i].type);
	dropdown.innerHTML = carRental.cars[i].type;
	var chosenCar = i;
    //var chosen = i;
    //dropdown.setAttribute("onchange", "displayDetails(" + i + ")");
	document.getElementById("carchoice").appendChild(dropdown);
	console.log("stop");
	}

//for (var i=0; i < carRental.cars.length; i++){
//	console.log("start");
	//var form = document.createElement("SELECT");
//	var dropdown = document.createElement("OPTION");
//	dropdown.setAttribute("value", carRental.cars[i].type);
//	dropdown.innerHTML = carRental.cars[i].type;
//	document.setAttribute("onclick", "displayDetails(" + i + ")");
	//document.getElementById("carchoice").appendChild(form);
	//form.setAttribute("onchange", "displayDetails(" + i + ")");
//	document.getElementById("carchoice").appendChild(dropdown);
//	console.log("stop");
//		}
function displayDetails(value){
    console.log("test");
   document.getElementById("price").innerHTML = carRental.cars[value].price;
   document.getElementById("available").innerHTML = carRental.cars[value].available;
}