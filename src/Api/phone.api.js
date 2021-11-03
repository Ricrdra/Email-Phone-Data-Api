import environment from '../config.js';

const key = environment.PHONE_KEY;

function getFullUrl(phone) {
    return `https://phonevalidation.abstractapi.com/v1/?api_key=${key}&phone=${phone}`
}

async function getPhone(phone) {
    return new Promise(async (resolve, reject) => {

        const url = getFullUrl(phone);

        const response = await fetch(url);
        const data = await response.json();
        resolve(data);

    })

}

export default getPhone;
