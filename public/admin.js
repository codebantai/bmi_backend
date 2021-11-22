console.log('11111111111111111111111111111111')
const tableBody = document.getElementById('table-body')
const select = document.getElementById('userId')
let allUsersData = [];
fetch('/getall')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    allUsersData = data;
    let tableChild= '';
    let users = '';
    data.forEach(item => {
        users += `<option value=${item.id}>${item.name}</option>`
        const tr = document.createElement("tr");
        item.UserDetails.forEach((record, index) => {
        //     tableChild += `<tr>
        //     <th scope="row">${index+1}</th>
        //     <td>${item.name}</td>
        //     <td>${record.weight}</td>
        //     <td>${record.bmi.toFixed(2)}</td>
        //     <td>${new Date(record.createdAt)}</td>
        //   </tr>` 
            // const th = document.createElement("th");
            // th.setAttribute('scope', 'row')
            // const thText = document.createTextNode(index + 1);
            // const number = th.appendChild(thText)
            // const td = document.createElement("td");
            // const tdname = document.createTextNode(item.name);
            // const 
            // const name = td.appendChild(tdname)
            // tr.appendChild(number)
            // tr.appendChild(name)
        })
        select.innerHTML = users,
        tableBody.innerHTML = tableChild;
    })
  });

  getUserDetails = () => {
    let tableChild= '';
    console.log(allUsersData, 'allUsersData')
    console.log(select.value)
    const res = allUsersData.find(item => item.id === +select.value);
    console.log(res)
    res.UserDetails.forEach((record, index) => {
        tableChild += `<tr>
            <th scope="row">${index+1}</th>
            <td>${res.name}</td>
            <td>${record.weight}</td>
            <td>${record.bmi.toFixed(2)}</td>
            <td>${new Date(record.createdAt)}</td>
          </tr>` 
    })
        
        tableBody.innerHTML = tableChild;
    }
  
  select.addEventListener('change', () => getUserDetails());