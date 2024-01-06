// Function to generate a random bill
function generateRandomBill() {
  const date = new Date(); // Current date and time
  const description = "Random bill description";
  const amount = Math.floor(Math.random() * 100) + 1; // Random amount

  return {
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString(),
    description,
    amount,
  };
}

// Function to save bills to local storage
function saveBillsToLocalStorage() {
  let userBills = JSON.parse(localStorage.getItem("userBills")) || [];

  const newBill = generateRandomBill();

  userBills.push(newBill);

  localStorage.setItem("userBills", JSON.stringify(userBills));
}

// Function to display bills to the user
function displayBills() {
  const userBills = JSON.parse(localStorage.getItem("userBills")) || [];

  // Assuming you have a container with id "billContainer" to display bills
  const billContainer = document.getElementById("billContainer");

  // Clear existing content in the container
  billContainer.innerHTML = "";

  // Loop through each bill and display its details
  userBills.forEach((bill, index) => {
    const billElement = document.createElement("div");
    billElement.classList.add("bill");
    billElement.innerHTML = `
      <p><strong>Bill ${index + 1}</strong></p>
      <p>Date: ${bill.date}</p>
      <p>Time: ${bill.time}</p>
      <p>Description: ${bill.description}</p>
      <p>Amount: $${bill.amount}</p>
    `;
    billContainer.appendChild(billElement);
  });
}

// Example: Generating and saving a random bill
saveBillsToLocalStorage();

// Display the generated bills
displayBills();

      function generateRandomMeterNumber() {
  const min = 1000000000; // Minimum 10-digit number
  const max = 9999999999; // Maximum 10-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkUser() {
  const meterNumber = localStorage.getItem('meterNumber');

  if (!meterNumber) {
    // If meter number doesn't exist, generate a new one and store it
    const newMeterNumber = generateRandomMeterNumber();
    localStorage.setItem('meterNumber', newMeterNumber);
    return newMeterNumber;
  } else {
    // If meter number exists, return the stored number
    return meterNumber;
  }
}

// Use this function to get the meter number and display it
function displayMeterNumber() {
  const meterNumber = checkUser();
  const meterElement = document.getElementById('meterNumber');
  meterElement.innerText = meterNumber;
}

