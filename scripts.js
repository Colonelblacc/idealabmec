document.getElementById("booking-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const equipment = document.getElementById("equipment").value;
    const time = document.getElementById("time").value;
    alert(`You have booked ${equipment} for ${time}.`);
});

AOS.init({
    duration: 1000,  // Animation duration
    offset: 200,     // Start the animation when the element is 200px from the viewport
});
