document.addEventListener('DOMContentLoaded', function() {
    const timeSelect = document.getElementById('timeSlot');
    const datePicker = document.getElementById('datePicker');

    // 1. Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    datePicker.setAttribute('min', today);

    // 2. Generate Time Slots (9:00 AM to 6:00 PM)
    const hours = [
        "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", 
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
    ];

    hours.forEach(time => {
        let option = document.createElement('option');
        option.value = time;
        option.textContent = time;
        timeSelect.appendChild(option);
    });

    // 3. Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});