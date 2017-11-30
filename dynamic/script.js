var carRental = {
	name: "Jim's Car Rentals",
	revenue:0,
	cars: [
		{
			type: "Economy",
			price: 45,
			quantity:2,
			booked: 0,
		},
		{
			type: "Midsize",
			price: 65,
			quantity:20,
			booked: 0,
		},
		{
			type: "Luxury",
			price: 90,
			quantity:1,
			booked: 0,
		},
		{
			type: "Electric",
			price: 75,
			quantity:20,
			booked: 0,
		}
		],
		
	carAvail: function(i) {
		return this.cars[i].quantity - this.cars[i].booked;
	},	
	bookCars: function(i) {
		this.cars[i].booked++;
	},
	
	totalRev: function(carType){
		this.revenue=this.cars[carType].price+this.revenue;
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

//Dynamic Dropdown
for (var i=0; i < carRental.cars.length; i++){
	var dropdown = document.createElement("OPTION");
	dropdown.setAttribute("value", i);
	dropdown.setAttribute("id", i);
	dropdown.innerHTML = carRental.cars[i].type;
	document.getElementById("carchoice").appendChild(dropdown);
	document.getElementById("price").innerHTML = carRental.cars[0].price;
	document.getElementById("available").innerHTML = carRental.carAvail(0);
	}
//Displays details of Car Selected
function displayDetails(value){
   if (carRental.carAvail(value) == 0){
   	var carMenu = document.getElementById("carchoice");
	var noneLeft = document.getElementById(value); 
	carMenu.removeChild(noneLeft);
	value = document.getElementById("carchoice").value;
   }
   document.getElementById("price").innerHTML = carRental.cars[value].price;
   document.getElementById("available").innerHTML = carRental.carAvail(value);
   }

//Rents out selected car and adds name and car type to array of renters, adds to revenue, and displays updated availability
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
	return;
}
carRental.totalRev(carType);// adds price of car selected to total revenue
carRental.bookCars(carType);//adds one to "booked" of selected car
rentals.addRenter(renterName, carType);//adds renter name and car type to rentals.renters array
displayDetails(carType);//displays updated availability and price
alert ("You have rented a car");
}