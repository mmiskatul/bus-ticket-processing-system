
function scrollToSection() {
    let section = document.getElementById("seatSelection");
    window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
}

let availableSeats = 40; // Initial seat count
    document.querySelectorAll(".seat-btn").forEach(button => {
        button.addEventListener("click", function() {
            if (this.classList.contains("bg-green-500")) {
                this.classList.remove("bg-green-500", "text-white");
                this.classList.add("bg-gray-300", "text-black");
                availableSeats++; // Increase available seats when deselected
            } else {
                this.classList.remove("bg-gray-300", "text-black");
                this.classList.add("bg-green-500", "text-white");
                availableSeats--; // Decrease available seats when selected
            }
            document.getElementById("available-seat").textContent = availableSeats;
        });
    });
// let availableSeats = 40;
// const addedSeatContainer = document.getElementById("added-seat");

// // Function to add or remove a seat in the #added-seat div
// function toggleSeat(seatButton, seatNumber, seatClass, seatPrice) {
//     if (seatButton.classList.contains("bg-green-500")) {
//         // Deselect Seat: Remove from the #added-seat container
//         seatButton.classList.remove("bg-green-500", "text-white");
//         seatButton.classList.add("bg-gray-300", "text-black");
//         availableSeats++;

//         // Remove the seat details from #added-seat
//         let seatToRemove = document.querySelector(`#added-seat div[data-seat="${seatNumber}"]`);
//         if (seatToRemove) {
//             seatToRemove.remove();
//         }
//     } else {
//         // Select Seat: Add to the #added-seat container
//         seatButton.classList.remove("bg-gray-300", "text-black");
//         seatButton.classList.add("bg-green-500", "text-white");
//         availableSeats--;

//         // Create the seat details div and add it
//         const seatDetail = document.createElement("div");
//         seatDetail.classList.add("mb-3", "flex", "flex-row", "justify-between");
//         seatDetail.setAttribute("data-seat", seatNumber);
//         seatDetail.innerHTML = `
//             <p>${seatNumber}</p>
//             <p>${seatClass}</p>
//             <p><span>${seatPrice}</span></p>
//         `;
//         addedSeatContainer.appendChild(seatDetail);
//     }

//     // Update available seat count
//     document.getElementById("available-seat").textContent = availableSeats;

//     // Show or hide "No seats selected" message
//     if (addedSeatContainer.children.length === 0) {
//         addedSeatContainer.innerHTML = `<p class="text-gray-500">No seats selected</p>`;
//     } else {
//         // Add a horizontal line after the last seat selection
//         if (!document.querySelector("#added-seat .border-t")) {
//             const divider = document.createElement("div");
//             divider.classList.add("border-t", "border-[#03071299]", "my-4");
//             addedSeatContainer.appendChild(divider);
//         }
//     }
// }

// // Event listener for each seat button
// document.querySelectorAll(".seat-btn").forEach(button => {
//     button.addEventListener("click", function() {
//         const seatNumber = this.dataset.seat;
//         const seatClass = this.dataset.class;
//         const seatPrice = this.dataset.price;
        
//         // Call the function with the correct data from the button
//         toggleSeat(this, seatNumber, seatClass, seatPrice);
//     });
// });