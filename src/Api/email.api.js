import environment from "../config.js";

const key = environment.API_KEY;


function getFullUrl(email) {
    return `https://emailvalidation.abstractapi.com/v1/?api_key=${key}&email=${email}`
}


async function getEmail(email) {
    return new Promise(async (resolve, reject) => {

        const url = getFullUrl(email);

        const response = await fetch(url);
        const data = await response.json();
        resolve(data);

    })

}

export default getEmail;