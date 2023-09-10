function convertTemperature() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const fahrenheitToCelsiusInput = document.getElementById('fahrenheitToCelsius');
    const result = document.getElementById('result');

    if (!celsiusInput.value && !fahrenheitToCelsiusInput.value) {
        alert('Please enter a value in Celsius or Fahrenheit.');
        return;
    }

    if (celsiusInput.value) {
        const celsius = parseFloat(celsiusInput.value);
        const fahrenheit = (celsius * 9/5) + 32;
        fahrenheitInput.value = fahrenheit.toFixed(2);
    }

    if (fahrenheitToCelsiusInput.value) {
        const fahrenheit = parseFloat(fahrenheitToCelsiusInput.value);
        const celsius = (fahrenheit - 32) * 5/9;
        result.innerHTML = `${fahrenheit.toFixed(2)}°F is approximately ${celsius.toFixed(2)}°C`;
    } else {
        result.innerHTML = '';
    }
}