document.getElementById("submitButton").onclick = function () {
  let temp;

  if (document.getElementById("cButton").checked) {
    temp = Number(document.getElementById("textBox").value);
    document.getElementById("tempLabel").innerHTML = toCelsius(temp) + "°C";
  } else if (document.getElementById("fButton").checked) {
    temp = Number(document.getElementById("textBox").value);
    document.getElementById("tempLabel").innerHTML = toFahrenheit(temp) + "°F";
  } else {
    document.getElementById("tempLabel").innerHTML = "Select a unit";
  }
};

function toCelsius(temp) {
  return (temp - 32) * (5 / 9);
}

function toFahrenheit(temp) {
  return (temp * 9) / 5 + 32;
}
