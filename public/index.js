const submitButtom = document.querySelector('#submit');

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: 'follow', // manual, *follow, error
      referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }

console.log(document.getElementById('username'))
const postBMIdata = async () => {
    const username = document.getElementById('username').value;
const weight = document.getElementById('weight').value;
const height = document.getElementById('height').value;
    console.log('111111111111111111')
    if (typeof weight !== 'number') {

    }
    const response = await postData('/check-bmi', {name: username, height, weight})
    console.log(response)
    console.log(username, weight)
}

submitButtom.addEventListener('click', () =>  postBMIdata())
