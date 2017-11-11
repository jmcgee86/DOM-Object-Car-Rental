var carRental = { 
    name: 'Enterprise Car Rentals',
    econCars: 20,
    econBooked: 0,
    midCars: 20,
    midBooked: 0,
    econAvail: function () {
        return this.econCars - this.econBooked; 
    },
    midAvail: function(){
        return this.midCars - this.midBooked;
    },
    bookEcon: function(){
        this.econBooked++;
    },
    bookMid: function(){
       this.midBooked++;
    }
};

document.getElementById("name").innerHTML=carRental.name;

function update () {
        document.getElementById("econ").innerHTML=carRental.econAvail();
        document.getElementById("mid").innerHTML=carRental.midAvail();
                    }

function econCars(){
            if (carRental.econAvail()>0)
                {
                    carRental.bookEcon();
                    update();
                } 
            else alert ("no cars available");
                       
 }
 
function midCars(){
            if (carRental.midAvail()>0)
                {
                    carRental.bookMid();
                    update();
                } 
            else alert ("no cars available");
}