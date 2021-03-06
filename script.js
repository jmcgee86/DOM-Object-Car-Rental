var carRental = {
	name: "Jim's Car Rentals",
	econCars: 20,
	econBooked: 0,
	econPrice: "$100",
	midCars: 20,
	midBooked: 0,
	midPrice: "$140",
	luxCars: 10,
	luxBooked:0,
	luxPrice: "$190",
	econAvail: function() {
		return this.econCars - this.econBooked;
	},
	midAvail: function() {
		return this.midCars - this.midBooked;
	},
	luxAvail: function() {
		return this.luxCars - this.luxBooked;
	},
	bookEcon: function() {
		this.econBooked++;
	},
	bookMid: function() {
		this.midBooked++;
	},
	
	bookLux: function() {
		this.luxBooked++;
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

//Rents out one Midside car if any are available
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