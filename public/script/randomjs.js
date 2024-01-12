
// // Use this function to get the meter number and display it
// const displayMeterNumber = () =>{
//   const meterNumber = checkUser();
//   const meterElement = document.getElementById('meterNumber');
//   meterElement.innerText = meterNumber;
// }




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




  var limitModal = new bootstrap.Modal(document.getElementById('staticBackdrop2'));
  var successModal = new bootstrap.Modal(document.getElementById('staticBackdrop3'));

  // Function to handle setting the limit
  function setLimit() {
    var limitInput = document.getElementById('limitInput');
    var limitValue = Number(limitInput.value);

    if (!isNaN(limitValue) && limitValue >= 0 && limitValue < 999) {
      // Save limit to local storage
      localStorage.setItem('usageLimit', limitValue);

      // Show success modal
      successModal.show();

      // Update chart based on the entered limit
      updateChart(limitValue);
    } else {
      // Handle invalid input
      alert('Please enter a valid limit between 0 and 999.');
    }
  }

const addLimit = () => {
  setLimit();
  limitModal.hide();
}


function updateChart(limitValue) {
  const todayIndex = electricityData.length - 1;
  const randomValue = Math.floor(Math.random() * (limitValue)) + 1;
  electricityData[todayIndex] = randomValue; // Update the value of the present day

  // Check if the limit is reached
  const limitReached = randomValue >= limitValue;

  // Get the datasets from the chart
  const datasets = myChart.data.datasets;

  // Update the bar color based on the limit
  datasets[0].backgroundColor = limitReached ? "rgb(255, 0, 0)" : "rgb(11, 97, 134)";
  datasets[0].borderColor = limitReached ? "rgba(255, 0, 0, 1)" : "rgba(54, 162, 235, 1)";

  // Update the chart data
  myChart.data.datasets = datasets;
  myChart.update();

  // Handle limit reached scenario
  if (limitReached) {
    alert('Usage limit reached!'); // You can replace this with your preferred way of notifying the user
  }
}

const limitValue = localStorage.getItem('usageLimit') || 80; // You can set a default value or get it from the user
setInterval(() => updateChart(limitValue), 6000);
