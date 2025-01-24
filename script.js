fetch('http://localhost:5000/vehicles')
    .then((response) => response.json())
    .then((vehicles) => {
        const vehicleList = document.getElementById('vehicle-list');
        vehicles.forEach((vehicle) => {
            const vehicleCard = document.createElement('div');
            vehicleCard.className = 'vehicle-card';
            vehicleCard.innerHTML = `
                <h3>${vehicle.type}</h3>
                <p>License Plate: ${vehicle.license_plate}</p>
                <p>Price per hour: $${vehicle.price_per_hour}</p>
                <p>Status: ${vehicle.status}</p>
            `;
            vehicleList.appendChild(vehicleCard);
        });
    });
