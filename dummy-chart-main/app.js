var employeeLabel = [], date = [],employee_date = [], employee_name=[]

async function dummyChart() {
  await getDummyData()

const ctx = document.getElementById('myChart').getContext('2d');

//Fetch Data from API

async function getDummyData() {
  const apiUrl = "https://andrealeporialeide.github.io/invest.io/public/dummy-chart-main/restapi.json";

  const response = await fetch(apiUrl)
  const barChatData = await response.json()
  
  const salary = barChatData.data.map((x) => x.employee_salary)
  console.log(salary)
  const age = barChatData.data.map((x) => x.employeeLabel)
  const date = barChatData.data.map((x) => x.date)

 employee_date = salary;
 employeeLabel= date;

}
const chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: employee_date, employee_name,
      
        datasets: [{
            label: 'Employee Salary',
            backgroundColor: '',
            borderColor: '#0A2558',
            data: employee_date
        },
        {
          label: 'Employee Date',
          backgroundColor: '',
          borderColor: '#0A2558',
          data: employee_name,
      },

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
