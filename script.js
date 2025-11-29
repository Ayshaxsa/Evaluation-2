let vehicles = [];

    const regNum = document.getElementById("regis_num");
    const category = document.getElementById("categoryy");
    const driver_name = document.getElementById("driver_name");
    const availability = document.getElementById("availability_add");
    const addNew = document.getElementById("addFleet");
    const cardDiv = document.getElementById("card");
    addNew.addEventListener("click", () => {

        if (!regNum.value || !category.value || !driver_name.value || !availability.value) {
            alert("Please enter all fields!");
            return;
        }

        vehicles.push({
            reg: regNum.value,
            category: category.value,
            driver: driver_name.value,
            availability: availability.value
        });

        renderAll();

        regNum.value = "";
        category.value = "";
        driver_name.value = "";
        availability.value = "";
    });

    function renderAll() {
        cardDiv.innerHTML = "";

        vehicles.forEach((item, index) => {
            const box = document.createElement("div");
            box.className = "box";

            box.innerHTML = `
                <img src="https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png" width="180">
                <h3>Reg No: ${item.reg}</h3>
                <h3>Category: ${item.category}</h3>
                <h3>Driver: ${item.driver}</h3>
                <h3>Status: ${item.availability}</h3>
                <button onclick="update_driver(${index})">Update Driver</button>
                <button onclick="deleteVehicle(${index})">Delete</button>
            `;

            cardDiv.appendChild(box);
        });
    }

    function update_driver(index) {
        const newName = prompt("Enter new driver name:");
        if (newName) {
            vehicles[index].driver = newName;
            renderAll();
        }
    }
    function deleteVehicle(index) {
        vehicles.splice(index, 1);
        renderAll();
    }