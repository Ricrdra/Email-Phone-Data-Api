function snakeToHumanCase(word) {

    return word.slice(0, 1).toUpperCase() + word.toLowerCase().split('_').join(' ').slice(1);
}


export default snakeToHumanCase;