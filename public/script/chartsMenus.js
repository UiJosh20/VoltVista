
      // Function to generate random electricity usage data
      function generateRandomData() {
        const data = [];
        for (let i = 0; i < 7; i++) {
          // Generate random values between 20 and 50 for kWh usage
          const randomValue = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
          data.push(randomValue);
        }
        return data;
      }

      // Generate random electricity usage data
      const electricityData = generateRandomData();

      // Get the canvas element
      const ctx = document.getElementById("electricityChart").getContext("2d");
      const ctx1 = document
        .getElementById("electricityChart1")
        .getContext("2d");

      // Create the bar chart with Chart.js and Datalabels plugin
      const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Energy consumption trend ",
              data: electricityData,
              backgroundColor: "rgb(11, 97, 134)", // Adjust transparency for bars
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            datalabels: {
              color: "#fff", // Label text color
              font: {
                weight: "bold", // Label font weight
              },
              formatter: (value) => `${value} kWh`, // Format label value
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Electricity Usage (kWh)",
              },
            },
            x: {
              title: {
                display: true,
                text: "Days",
              },
            },
          },
        },
      });

      // Create the bar chart with Chart.js and Datalabels plugin
      const NewChart = new Chart(ctx1, {
        type: "bar",
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Energy consumption trend (per appliance)",
              data: electricityData,
              backgroundColor: "rgb(19, 131, 179)", // Adjust transparency for bars
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          plugins: {
            datalabels: {
              color: "#fff", // Label text color
              font: {
                weight: "bold", // Label font weight
              },
              formatter: (value) => `${value} kWh`, // Format label value
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Electricity Usage (kWh)",
              },
            },
            x: {
              title: {
                display: true,
                text: "Days",
              },
            },
          },
        },
      });



      // Get references to the dashboard and profile section
      const dashboardSection = document.getElementById('dashboardHome');
      const profileSection = document.getElementById('profileSection');
      const notificationSection = document.getElementById('notificationSection')
      const applianceSection = document.getElementById('applianceSection')
      const BillingSection = document.getElementById('BillingSection')
      const accountSection = document.getElementById('accountSection')
      const settingSection = document.getElementById('settingSection')
      const helpSection = document.getElementById('helpSection')
      


      // Find the links in the offcanvas menu
      const dashboardLink = document.querySelector('.offcanvas-body a[href="#dashboardHome"]');
      const profileLink = document.querySelector('.offcanvas-body a[href="#profile"]');
      const notificationLink = document.querySelector('.offcanvas-body a[href="#notificaton');
      const applianceLink = document.querySelector('.offcanvas-body a[href="#appliances"]');
      const BillsLink = document.querySelector('.offcanvas-body a[href="#bills"]');
      const accountLink = document.querySelector('.offcanvas-body a[href="#accounts"]');
      const settingLink = document.querySelector('.offcanvas-body a[href="#settings"]');
      const helpLink = document.querySelector('.offcanvas-body a[href="#help"]');
      


      profileLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'block';
        notificationSection.style.display = 'none';
        applianceSection.style.display = 'none';
        BillingSection.style.display = 'none';
        accountSection.style.display = 'none';
        settingSection.style.display = 'none';
        helpSection.style.display = 'none';
        

        // Optionally, close the offcanvas menu after clicking on the link
        const offcanvas = document.getElementById('offcanvasExample');
        const offcanvasBS = bootstrap.Offcanvas.getInstance(offcanvas);
        offcanvasBS.hide();
      });

      notificationLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        notificationSection.style.display = 'block';
        applianceSection.style.display = 'none';
        BillingSection.style.display = 'none';
        accountSection.style.display = 'none';
        settingSection.style.display = 'none';
        helpSection.style.display = 'none';
        

        // Optionally, close the offcanvas menu after clicking on the link
        const offcanvas = document.getElementById('offcanvasExample');
        const offcanvasBS = bootstrap.Offcanvas.getInstance(offcanvas);
        offcanvasBS.hide();
      });


      applianceLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        notificationSection.style.display = 'none';
        applianceSection.style.display = 'block';
        BillingSection.style.display = 'none';
        accountSection.style.display = 'none';
        settingSection.style.display = 'none';
        helpSection.style.display = 'none';
        

        // Optionally, close the offcanvas menu after clicking on the link
        const offcanvas = document.getElementById('offcanvasExample');
        const offcanvasBS = bootstrap.Offcanvas.getInstance(offcanvas);
        offcanvasBS.hide();
      });




      BillsLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        notificationSection.style.display = 'none';
        applianceSection.style.display = 'none';
        BillingSection.style.display = 'block';
        accountSection.style.display = 'none';
        settingSection.style.display = 'none';
        helpSection.style.display = 'none';
        

        // Optionally, close the offcanvas menu after clicking on the link
        const offcanvas = document.getElementById('offcanvasExample');
        const offcanvasBS = bootstrap.Offcanvas.getInstance(offcanvas);
        offcanvasBS.hide();
      });


      accountLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        notificationSection.style.display = 'none';
        applianceSection.style.display = 'none';
        BillingSection.style.display = 'none';
        accountSection.style.display = 'block';
        settingSection.style.display = 'none';
        helpSection.style.display = 'none';
        

        // Optionally, close the offcanvas menu after clicking on the link
        const offcanvas = document.getElementById('offcanvasExample');
        const offcanvasBS = bootstrap.Offcanvas.getInstance(offcanvas);
        offcanvasBS.hide();
      });



      settingLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        notificationSection.style.display = 'none';
        applianceSection.style.display = 'none';
        BillingSection.style.display = 'none';
        accountSection.style.display = 'none';
        settingSection.style.display = 'block';
        helpSection.style.display = 'none';
        

        // Optionally, close the offcanvas menu after clicking on the link
        const offcanvas = document.getElementById('offcanvasExample');
        const offcanvasBS = bootstrap.Offcanvas.getInstance(offcanvas);
        offcanvasBS.hide();
      });




      helpLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        notificationSection.style.display = 'none';
        applianceSection.style.display = 'none';
        BillingSection.style.display = 'none';
        accountSection.style.display = 'none';
        settingSection.style.display = 'none';
        helpSection.style.display = 'block';
        

        // Optionally, close the offcanvas menu after clicking on the link
        const offcanvas = document.getElementById('offcanvasExample');
        const offcanvasBS = bootstrap.Offcanvas.getInstance(offcanvas);
        offcanvasBS.hide();
      });




      logoutLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        notificationSection.style.display = 'none';
        applianceSection.style.display = 'none';
        BillingSection.style.display = 'none';
        accountSection.style.display = 'none';
        settingSection.style.display = 'none';
        helpSection.style.display = 'none';
        logoutSection.style.display = 'block';
        // Optionally, close the offcanvas menu after clicking on the link
        const offcanvas = document.getElementById('offcanvasExample');
        const offcanvasBS = bootstrap.Offcanvas.getInstance(offcanvas);
        offcanvasBS.hide();
      });





      dashboardLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'block';
        profileSection.style.display = 'none';
        notificationSection.style.display = 'none';
        applianceSection.style.display = 'none';
        BillingSection.style.display = 'none';
        accountSection.style.display = 'none';
        settingSection.style.display = 'none';
        helpSection.style.display = 'none';
        

        // Optionally, close the offcanvas menu after clicking on the link
        const offcanvas = document.getElementById('offcanvasExample');
        const offcanvasBS = bootstrap.Offcanvas.getInstance(offcanvas);
        offcanvasBS.hide();
      });





      // Find the "Profile" link in the offcanvas menu
      const dashboardLink1 = document.querySelector('.menu a[href="#dashboardHome"]');
      const profileLink1 = document.querySelector('.menu a[href="#profile"]');
      const notificationLink1 = document.querySelector('.menu a[href="#notificaton');
      const applianceLink1 = document.querySelector('.menu a[href="#appliances"]');
      const BillsLink1 = document.querySelector('.menu a[href="#bills"]');
      const accountLink1 = document.querySelector('.menu a[href="#accounts"]');
      const settingLink1 = document.querySelector('.menu a[href="#settings"]');
      const helpLink1 = document.querySelector('.menu a[href="#help"]');
      


      profileLink1.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'block';
        notificationSection.style.display = 'none';
        applianceSection.style.display = 'none';
        BillingSection.style.display = 'none';
        accountSection.style.display = 'none';
        settingSection.style.display = 'none';
        helpSection.style.display = 'none';
        


      });

      notificationLink1.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        notificationSection.style.display = 'block';
        applianceSection.style.display = 'none';
        BillingSection.style.display = 'none';
        accountSection.style.display = 'none';
        settingSection.style.display = 'none';
        helpSection.style.display = 'none';
        logoutSection.style.display = 'none';

      });


      applianceLink1.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        notificationSection.style.display = 'none';
        applianceSection.style.display = 'block';
        BillingSection.style.display = 'none';
        accountSection.style.display = 'none';
        settingSection.style.display = 'none';
        helpSection.style.display = 'none';
        


      });




      BillsLink1.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        notificationSection.style.display = 'none';
        applianceSection.style.display = 'none';
        BillingSection.style.display = 'block';
        accountSection.style.display = 'none';
        settingSection.style.display = 'none';
        helpSection.style.display = 'none';
        

      });


      accountLink1.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        notificationSection.style.display = 'none';
        applianceSection.style.display = 'none';
        BillingSection.style.display = 'none';
        accountSection.style.display = 'block';
        settingSection.style.display = 'none';
        helpSection.style.display = 'none';
        


      });



      settingLink1.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        notificationSection.style.display = 'none';
        applianceSection.style.display = 'none';
        BillingSection.style.display = 'none';
        accountSection.style.display = 'none';
        settingSection.style.display = 'block';
        helpSection.style.display = 'none';
        


      });




      helpLink1.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'none';
        profileSection.style.display = 'none';
        notificationSection.style.display = 'none';
        applianceSection.style.display = 'none';
        BillingSection.style.display = 'none';
        accountSection.style.display = 'none';
        settingSection.style.display = 'none';
        helpSection.style.display = 'block';
        

      });




 





      dashboardLink1.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior

        // Hide the dashboard and display the profile section
        dashboardSection.style.display = 'block';
        profileSection.style.display = 'none';
        notificationSection.style.display = 'none';
        applianceSection.style.display = 'none';
        BillingSection.style.display = 'none';
        accountSection.style.display = 'none';
        settingSection.style.display = 'none';
        helpSection.style.display = 'none';
        logoutSection.style.display = 'none';

      });


      document.addEventListener('DOMContentLoaded', function () {
        const menuLinks = document.querySelectorAll('.menu a');

        menuLinks.forEach((link) => {
          link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove the 'indicate' class from all menu links
            menuLinks.forEach((item) => {
              item.classList.remove('indicate');
            });

            // Add the 'indicate' class to the clicked menu link
            link.classList.add('indicate');
          });
        });

        const canvasLinks = document.querySelectorAll('.offcanvas-body a');
        canvasLinks.forEach((link) => {
          link.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove the 'indicate' class from all menu links
            canvasLinks.forEach((item) => {
              item.classList.remove('indicate');
            });

            // Add the 'indicate' class to the clicked menu link
            link.classList.add('indicate');
          });
        });

      });