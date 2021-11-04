var employeeLabel = [], employeeSalaryData = [], employeeAgeData = []

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
            data: employeeSalaryData
        },
        {
          label: 'Employee Age',
          backgroundColor: '',
          borderColor: '#0A2558',
          data: employeeAgeData
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
  const apiUrl = "https://json.extendsclass.com/bin/bb073434d9be";

  const response = await fetch(apiUrl)
  const barChatData = await response.json()
  
  const salary = barChatData.data.map((x) => x.employee_salary)
  console.log(salary)
  const age = barChatData.data.map((x) => x.employee_age)
  const name = barChatData.data.map((x) => x.employee_name)

 employeeSalaryData = salary
 employeeAgeData = age
 employeeLabel = name
}