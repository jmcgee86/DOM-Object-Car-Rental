var carRental = {
	name: "Jim's Car Rentals",
	cars: [
		{
			type: "Economy",
			price: "$45",
			quantity:20,
			booked: 0,
			//available: 20
		},
		{
			type: "Midsize",
			price: "$65",
			quantity:20,
			booked: 0,
			//available: 20
		},
		{
			type: "Luxury",
			price: "$90",
			quantity:1,
			booked: 0,
			//available: 20
		},
		{
			type: "Electric",
			price: "$75",
			quantity:20,
			booked: 0,
			//available: 20
		}
		],
		
	carAvail: function(i) {
		return this.cars[i].quantity - this.cars[i].booked;
	},	
	bookCars: function(i) {
		this.cars[i].booked++;
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

//Dynamic Dropdown
for (var i=0; i < carRental.cars.length; i++){
	//console.log("start");
	var dropdown = document.createElement("OPTION");
	dropdown.setAttribute("value", i)
	dropdown.setAttribute("id", i)
	dropdown.innerHTML = carRental.cars[i].type;
	document.getElementById("carchoice").appendChild(dropdown);
	document.getElementById("price").innerHTML = carRental.cars[0].price;
	document.getElementById("available").innerHTML = carRental.carAvail(i);
	//console.log("stop");
	}
//Displays details of Car Selected
function displayDetails(value){
    //console.log("test");
   if (carRental.carAvail(value) == 0){
   	var carMenu = document.getElementById("carchoice");
	var noneLeft = document.getElementById(value); 
	carMenu.removeChild(noneLeft); 
   }
   document.getElementById("price").innerHTML = carRental.cars[value].price;
   document.getElementById("available").innerHTML = carRental.carAvail(value);
   }
//Rents out selected car and adds name and car type to array of renters
function carRent(){
var renterName = document.getElementById("rname").value;
if (renterName==""){
alert("Please enter your name");
return;	
}
var carType = document.getElementById("carchoice").value;
if (carType ==""){
	alert("Please choose a car");
	return;
}
if (carRental.carAvail(carType)==0){
	alert("No cars of that type available");
//	var carMenu = document.getElementById("carchoice");
//	var noneLeft = document.getElementById(carType); 
//	carMenu.removeChild(noneLeft);
	return;
}
//displayDetails();
carRental.bookCars(carType);
rentals.addRenter(renterName, carType);
alert ("You have rented a car")
displayDetails(carType);
};





	//econAvail: function() {
	//	return this.cars[0].quantity - this.this.cars[0].booked;
	//},
	//midAvail: function() {
	//	return this.cars[1].quantity - this.this.cars[1].booked;
	//},
	//luxAvail: function() {
	//	return this.cars[2].quantity - this.this.cars[2].booked;
		//elecAvail: function(){
		//this.cars[3].quantity - this.this.cars[3].booked
	//},
	//bookEcon: function() {
	//	this.cars[0].booked++;
	//},
	//bookMid: function() {
	//	this.cars[1].booked++;
	//},
	
	//bookLux: function() {
	//	this.cars[2].booked++;
	//},
	//bookElec: function() {
	//	this.cars[3].booked++;
	//}
//};

//Displays availability and price of car type selected from dropdown
//function chooseCar() {
//	var carType = document.getElementById("carchoice").value;
//	if (carType == "economy") {
//		document.getElementById("econa").innerHTML = "Cars Available: " + carRental.econAvail();
//		document.getElementById("econp").innerHTML = "Car Price: " + carRental.econPrice;
//	} else if (carType == "midsize") {
//		document.getElementById("mida").innerHTML = "Cars Available: " + carRental.midAvail();
//		document.getElementById("midp").innerHTML = "Car Price: " + carRental.midPrice;
//	}	else if (carType === "luxury"){
//		document.getElementById("luxa").innerHTML = "Cars Available: " + carRental.luxAvail();
//		document.getElementById("luxp").innerHTML = "Car Price: " + carRental.luxPrice;
//		}
//	};

//Rents out one of car type selected, updates total available, and add renter name and car type rented to array of renters.
//Alerts user to enter name or select car type if either was omitted
//function rentCar() {
//	var renterName = document.getElementById("rname").value;
//	var carType = document.getElementById("carchoice").value;
//	if (renterName.length > 0) {
//		if (carType === "economy") {
//			econCars();
//			rentals.addRenter(renterName, carType);
//			chooseCar();
//		} else if (carType === "midsize") {
//			midCars();
//			rentals.addRenter(renterName, carType);
//			chooseCar();
//		} else if (carType === "luxury") {
//			luxCars();
//			rentals.addRenter(renterName, carType);
//			chooseCar();
//		} else alert("Please choose a car type");
//	} else alert("Please enter your name");
//}

//Updates availability and price of both car types on click of "Update Availability button"
//function update() {
//	document.getElementById("econa").innerHTML = "Cars available: " + carRental.econAvail();
//	document.getElementById("mida").innerHTML = "Cars available: " + carRental.midAvail();
//	document.getElementById("luxa").innerHTML = "Cars available: " + carRental.luxAvail();
//}