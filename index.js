document.addEventListener("DOMContentLoaded", function () {
    const checkInInput = document.getElementById("check-in");
    const checkOutInput = document.getElementById("check-out");
    const totalDaysInput = document.getElementById("total-days");
    const roomRateInput = document.getElementById("room-rate");
    const totalBillInput = document.getElementById("total-bill");

    checkInInput.addEventListener("input", updateTotalDaysAndBill);
    checkOutInput.addEventListener("input", updateTotalDaysAndBill);
    roomRateInput.addEventListener("input", updateTotalDaysAndBill);

    function updateTotalDaysAndBill() {
        const checkInDate = new Date(checkInInput.value);
        const checkOutDate = new Date(checkOutInput.value);
        const roomRate = parseFloat(roomRateInput.value);

        if (isNaN(roomRate) || checkInDate > checkOutDate) {
            totalDaysInput.value = "Invalid Input";
            totalBillInput.value = "Invalid Input";
            return;
        }

        const timeDiff = Math.abs(checkOutDate - checkInDate);
        const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        const totalBill = roomRate * totalDays;

        totalDaysInput.value = totalDays;
        totalBillInput.value = "Rs." + totalBill.toFixed(2);
    }
});

document.addEventListener("DOMContentLoaded", function () {
const openFormButtons = document.querySelectorAll(".open-booking-form");
const bookingForm = document.querySelector(".booking-form");

openFormButtons.forEach((button) => {
button.addEventListener("click", function () {
    bookingForm.style.display = "block";
});
});
});


// document.addEventListener("DOMContentLoaded", function () {
//     const checkInInput = document.getElementById("check-in");
//     const checkOutInput = document.getElementById("check-out");
//     const totalDaysInput = document.getElementById("total-days");
//     const roomRateInput = document.getElementById("room-rate");
//     const totalBillInput = document.getElementById("total-bill");

//     checkInInput.addEventListener("input", updateTotalDaysAndBill);
//     checkOutInput.addEventListener("input", updateTotalDaysAndBill);
//     roomRateInput.addEventListener("input", updateTotalDaysAndBill);

//     function updateTotalDaysAndBill() {
//         const checkInDate = new Date(checkInInput.value);
//         const checkOutDate = new Date(checkOutInput.value);
//         const roomRate = parseFloat(roomRateInput.value);

//         if (isNaN(roomRate) || checkInDate > checkOutDate) {
//             totalDaysInput.value = "Invalid Input";
//             totalBillInput.value = "Invalid Input";
//             return;
//         }

//         const timeDiff = Math.abs(checkOutDate - checkInDate);
//         const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

//         const totalBill = roomRate * totalDays;

//         totalDaysInput.value = totalDays;
//         totalBillInput.value = "Rs." + totalBill.toFixed(2);
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
// const openFormButtons = document.querySelectorAll(".open-booking-form");
// const bookingForm = document.querySelector(".booking-form");

// openFormButtons.forEach((button) => {
// button.addEventListener("click", function () {
//     bookingForm.style.display = "block";
// });
// });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     // ... (previous code)

//     const closeFormButtons = document.querySelectorAll(".close-button");

//     closeFormButtons.forEach((button) => {
//         button.addEventListener("click", function () {
//             bookingForm.style.display = "none";
//         });
//     });
// });


// document.addEventListener("DOMContentLoaded", function () {
//     const openFormButtons = document.querySelectorAll(".book-now-button");
//     const bookingForm = document.querySelector(".booking-form");

//     openFormButtons.forEach((button) => {
//         button.addEventListener("click", function () {
//             bookingForm.classList.add("show");
//         });
//     });

//     const closeFormButtons = document.querySelectorAll(".close-button");

//     closeFormButtons.forEach((button) => {
//         button.addEventListener("click", function () {
//             bookingForm.classList.remove("show");
//         });
//     });
// });


