const submitButtom = document.querySelector('#submit');


console.log(document.getElementById('username'))
const postBMIdata = () => {
    const username = document.getElementById('username').value;
const weight = document.getElementById('weight').value;
const height = document.getElementById('height').value;
    console.log('111111111111111111')
    console.log(username, weight)
}

submitButtom.addEventListener('click', () =>  postBMIdata())
