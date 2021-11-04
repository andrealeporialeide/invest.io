var employeeLabel = []

async function dummyChart() {
  await getDummyData()

const ctx = document.getElementById('myChart').getContext('2d');

const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: employeeLabel,
        datasets: [{
            label: 'Employee Salary',
            backgroundColor: '',
            borderColor: '#0A2558',
            data: employee_date
        }
      ]
    },

    // Configuration options go here
    options: {
      tooltips: {
        mode: 'index'
      }
    }
})}

dummyChart()


//Fetch Data from API

async function getDummyData() {
 //const apiUrl = "https://github.com/andrealeporialeide/invest.io/blob/main/public/dummy-chart-main/restapi.json";

  const response = await fetch(apiUrl)
  const barChatData = await response.json()
  
  const salary = barChatData.data.map((x) => x.employee_salary)
  console.log(salary)
  const employee_date = barChatData.data.map((x) => x.employee_date)
  employee_date = data
 employeeLabel = date
}
