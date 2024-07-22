function stringToFloat(str) {
    return parseFloat(str, 10);
}

function floatToString(float) {
    return float.toFixed(2).toString();
}

function algorithmreadable(n) {
    return (n / 6.25) + n);
}

function algorithmfast(n) {
    return n*1.16;
}

document.getElementById('number').addEventListener('input', function() {
    let floatValue = stringToFloat(this.value);
    if (!isNaN(floatValue)) {
        let result = algorithmfast(floatValue);
        document.getElementById('text').innerText = floatToString(result);
    } else {
        document.getElementById('text').innerText = '';
    }
});
