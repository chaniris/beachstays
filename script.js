function displayThankYou() {
    let name = document.getElementById("name");
    document.getElementById("thankYou").innerHTML = "Thank you, " + name.value;
}
document.getElementById("myButton").onclick = displayThankYou;