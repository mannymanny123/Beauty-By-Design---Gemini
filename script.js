document.addEventListener('DOMContentLoaded', function() {
    const timeSelect = document.getElementById('timeSlot');
    const datePicker = document.getElementById('datePicker');

    // Prevent booking in the past
    const today = new Date().toISOString().split('T')[0];
    datePicker.setAttribute('min', today);

    // Business Hours Generator
    const times = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM", "06:00 PM"];
    
    times.forEach(t => {
        let opt = document.createElement('option');
        opt.value = t;
        opt.textContent = t;
        timeSelect.appendChild(opt);
    });
});
