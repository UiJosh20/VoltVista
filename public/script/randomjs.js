

      const generateRandomMeterNumber = () =>{
  const min = 1000000000; // Minimum 10-digit number
  const max = 9999999999; // Maximum 10-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const checkUser = () => {
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
const displayMeterNumber = () =>{
  const meterNumber = checkUser();
  const meterElement = document.getElementById('meterNumber');
  meterElement.innerText = meterNumber;
}


const generateRandomBill = () =>{
  const startDate = new Date('2023-01-01'); // Start date: January 1st, 2023
  const endDate = new Date('2024-01-05'); // End date: January 5th, 2024

  // Calculate a random date within the range
  const randomTime = startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime());
  const randomDate = new Date(randomTime);

  const description = 'Electricity bill';
  const amount = (Math.random() * 100000).toFixed(1); // Random amount between 0 and 100

  // Format date and time
  const dateTime = `${randomDate.toLocaleDateString()} ${randomDate.toLocaleTimeString()}`;

  return {
    dateTime,
    description,
    amount: `₦ ${amount}`, // Adding the Naira sign before the amount
  };
}


const populateBillTable = () =>{
  const tableBody = document.getElementById('billTableBody');
  // Create rows and populate the table with random bill data
  for (let i = 0; i < 25; i++) {
    const bill = generateRandomBill();
    const row = document.createElement('tr');

    const dateTimeCell = document.createElement('td');
    dateTimeCell.textContent = bill.dateTime;
    row.appendChild(dateTimeCell);

    const descriptionCell = document.createElement('td');
    descriptionCell.textContent = bill.description;
    row.appendChild(descriptionCell);

    const amountCell = document.createElement('td');
    amountCell.textContent = bill.amount;
    row.appendChild(amountCell);

    tableBody.appendChild(row);
  }
}

// Populate the bill table
populateBillTable();



function toggleNotifyDiv(index) {
  const notifyDivs = document.querySelectorAll('.notifyDiv > div');
  const tables = document.querySelectorAll('.borderit');

  notifyDivs.forEach((div, i) => {
    if (i === index) {
      div.classList.add('activeSlide');
      tables[i].style.display = 'block';
    } else {
      div.classList.remove('activeSlide');
      tables[i].style.display = 'none';
    }
  });
}
