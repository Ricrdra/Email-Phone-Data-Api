import snakeToHumanCase from "./snakeToHumanCase.js";

function dataRender(data) {
    const renderData = Object.keys(data).filter((item) => {
        return data[item] !== null && data[item] !== undefined && data[item] !== '';
    });

    return renderData.map((item) => {
        if (data[item].toString() === "[object Object]") {
            let currentData = `
            <div>
            <p> <strong>${snakeToHumanCase(item)}:</strong> </p>`
            currentData += dataRender(data[item]);
            return currentData + `</div>`;
        }

        if (data[item]['text']) {
            return `: ${data[item].value}</p>`;
        }

        return `<p>${snakeToHumanCase(item)}: ${data[item]}</p>`;

    }).join('');
}


export default dataRender;