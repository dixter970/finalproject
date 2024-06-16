document.addEventListener('DOMContentLoaded', () => {
    if (window.location.pathname.endsWith('vyber-aut.html')) {
        const carsList = document.getElementById('cars-list');
        
        const cars = [
            { name: 'Nissan Skyline', description: 'Legendární model s bohatou historií.' },
            { name: 'Toyota Supra', description: 'Ikona japonských sportovních aut.' },
            { name: 'Mazda RX-7', description: 'Sportovní vůz s rotačním motorem.' }
        ];

        cars.forEach(car => {
            const carDiv = document.createElement('div');
            carDiv.classList.add('car');

            const carName = document.createElement('h2');
            carName.textContent = car.name;

            const carDescription = document.createElement('p');
            carDescription.textContent = car.description;

            carDiv.appendChild(carName);
            carDiv.appendChild(carDescription);
            carsList.appendChild(carDiv);
        });
    }
});