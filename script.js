document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    alert('Registration successful for ' + document.getElementById('patientName').value + '!');
});

document.getElementById('consultationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way
    const doctorName = document.getElementById('doctorName').value;
    const symptoms = document.getElementById('symptoms').value;
    
    // Simulate a treatment recommendation
    const recommendations = `Doctor ${doctorName} recommends the following treatment for your symptoms: ${symptoms}. Please take the prescribed medications and follow up if necessary.`;
    
    document.getElementById('recommendationOutput').innerText = recommendations;
});