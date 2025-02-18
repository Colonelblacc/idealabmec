document.getElementById("booking-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const equipment = document.getElementById("equipment").value;
    const time = document.getElementById("time").value;
    alert(`You have booked ${equipment} for ${time}.`);
});
