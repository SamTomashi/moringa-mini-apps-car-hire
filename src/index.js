import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
/** This is the entry point of your app */
import Car from './Car';
const car = new Car('Toyota', 'Camry', 2021);

console.log(car.getMake());
// console.log(car.setMake('Honda'));
// console.log(car.getMake());


const form = document.getElementById('frm-car');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const booking = {
        make: e.target.make.value,
        model: e.target.model.value,
        year: e.target.year.value,
        dateTime: new Date()
    }

    submitBooking(booking) 
});


const submitBooking = function(booking){
    fetch("http://localhost:3000/bookings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(booking)
    }).then((response) => response.json())
        .then((response) => alert(`${response.make} was added successfully!`))
        .catch((err) => console.log(err));

}
