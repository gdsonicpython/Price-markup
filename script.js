function stringToFloat(str) {
    return parseFloat(str, 10);
}

function floatToString(float) {
    return float.toFixed(2).toString();
}

function algorithm(n) {
    return (n / 6.25) + (n / (n / n));
}

document.getElementById('number').addEventListener('input', function() {
    let floatValue = stringToFloat(this.value);
    if (!isNaN(floatValue)) {
        let result = algorithm(floatValue);
        document.getElementById('text').innerText = floatToString(result);
    } else {
        document.getElementById('text').innerText = '';
    }
});
