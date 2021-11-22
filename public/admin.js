
const tableBody = document.getElementById('table-body')
const select = document.getElementById('userId')
const allTimeHighWeight = document.getElementById('high-weight')
const allTimeLowWeight = document.getElementById('low-weight')
const allTimeHighBmi = document.getElementById('high-bmi')
const allTimeLowBmi = document.getElementById('low-bmi')

let allUsersData = [];
fetch('/getall')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    allUsersData = data;
    let tableChild = '';
    let users = '<option selected>choose</option>';
    data.forEach(item => {
      users += `<option value=${item.id}>${item.name}</option>`
      select.innerHTML = users;
    })
  });

function dateFormatter(date) {
  const dateObj = new Date(date);
  const day = dateObj.toDateString().slice(0, 3);
  const dateWithMonth = dateObj.toDateString().slice(4, 10).split(' ').reverse().join(' ')
  return `${day}, ${dateWithMonth}`;
}

function dateTimeFormatter(date) {
  const currentDate = new Date(date);
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const displayHours = hours > 12 ? hours - 12 : hours;

  return `${dateFormatter(date)} at ${[10, 11, 12].includes(displayHours) ? displayHours : ('0' + displayHours)}:${minutes} ${(hours >= 12 ? ' PM' : ' AM')}`;
}

getUserDetails = () => {
  let tableChild = '';
  console.log(allUsersData, 'allUsersData')
  console.log(select.value)
  const res = allUsersData.find(item => item.id === +select.value);
  console.log(res)
  res.UserDetails.forEach((record, index) => {
    tableChild += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${res.name}</td>
            <td>${record.weight}</td>
            <td>${record.bmi.toFixed(2)}</td>
            <td>${record.status}</td>
            <td>${dateTimeFormatter(record.createdAt)}</td>
            <td>${record.message}</td>
          </tr>`
  })
  tableBody.innerHTML = tableChild;
  const sortedData = res.UserDetails.sort((a, b) => a > b)
  const allTimeHighBmiText = `bmi : ${sortedData[0].bmi}`
  const allTimeHighWeightText = `weight : ${sortedData[0].weight}`
  const allTimeLowWeightText = `weight : ${sortedData[sortedData.length - 1].weight}`
  const allTimeLowBmiText = `bmi : ${sortedData[sortedData.length - 1].bmi}`;
  allTimeHighWeight.innerHTML = allTimeHighWeightText;
  allTimeLowWeight.innerHTML = allTimeLowWeightText;
  allTimeHighBmi.innerHTML = allTimeHighBmiText;
  allTimeLowBmi.innerHTML = allTimeLowBmiText;
}

select.addEventListener('change', () => getUserDetails());