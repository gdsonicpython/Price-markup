function stringToInt(str) {
    return parseInt(str, 10);
}

function intToString(int) {
    return int.toString();
}

function algorithm(n) {
    return (n / 6.25) + (n / (n / n));
}

document.getElementById('number').addEventListener('input', function() {
    let intValue = stringToInt(this.value);
    if (!isNaN(intValue)) {
        let result = algorithm(intValue);
        document.getElementById('text').innerText = intToString(result);
    } else {
        document.getElementById('text').innerText = '';
    }
});
