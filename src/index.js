import dataRender from './utils/dataRender.js';
import getPhone from './Api/phone.api.js';
import getEmail from './Api/email.api.js'


const email = document.querySelector('#email');
const phone = document.querySelector('#phone');
const btn = document.querySelector('#submit');
const emailContent = document.querySelector('.content--email');
const phoneContent = document.querySelector('.content--phone');


btn.addEventListener('click', async () => {
    btn.disabled = true;
    btn.innerHTML = 'Fetching...';


    getEmail(email.value).then(data => {
        emailContent.innerHTML = dataRender(data);
    }).finally(() => {

        setTimeout(() => {

            getPhone(phone.value).then(data => {
                console.log(data)
                phoneContent.innerHTML = dataRender(data);

            })
        }, 1550);


        setTimeout(() => {
            btn.disabled = false;
            btn.innerHTML = 'Check Data';

        }, 3000)

    });


})
