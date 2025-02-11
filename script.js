const mainbutton = document.querySelector(".start");

document.addEventListener("DOMContentLoaded", function () {
    if(mainbutton) {
        mainbutton.addEventListener("click", function () {
            // Redirect to main.html
            window.location.href = "main.html";
        });
    } else {
        console.error("No main button found");
    }
    
});

document.addEventListener("DOMContentLoaded", function () {

    /*Conversion Rates */
    const EUR_PER_USD = 0.93;
    const JPY_PER_USD = 152.03;
    const SOL_PER_USD = 3.71;
    const HKD_PER_USD = 7.79;



    /*--------------------------*/


    // This code grabs the element above with the id "calculate-clickable". This could
    // be a button or any other kind of element.
    const calculateClickable = document.getElementById("calculate-clickable");

    calculateClickable.addEventListener("click", () => {
    // The code in this block runs when the element above is clicked.

    // Now, let's grab the textbox using the required ID:
    const amountTextbox = document.getElementById("amount-textbox");

    // We can get the '.value' attribute of an <input> element; in this case, since it's
    // a textbox, it'll just return the text that the user typed in.
    const amount = amountTextbox.value;

    // To convert to a number, we can use the 'parseFloat' function.
    const amountAsNumber = parseFloat(amount);

    // Write some code to make sure the amount is positive.
    // If it's not, set the content of the error message element:
    const error = document.getElementById("error-message") // ...
    // Consider also hiding or showing the element:
    //   document.getElementById("error-message").style.display = "none";
    //   document.getElementById("error-message").style.display = "block"; // or "inline", for a span

    // SOURCE:https://stackoverflow.com/questions/60095220/how-to-check-if-a-number-is-a-float-in-javascript
    if (Number.isNaN(amountAsNumber) || amountAsNumber <= 0) {
        error.textContent= "Invalid amount. Enter a positive number.";
        error.style.display = "block";
        return;
        
    } else {
        error.textContent = "";
        error.style.display = "none";

    }


    // You'll need to think about how you want to calculate the value for each currency.
    // Make sure to take the "from" currency into account. You can tell if a radio button
    // is checked using the '.checked' attribute in JavaScript, which is a boolean true/false value.

    // Once you have the result, you can set the content of each element with the appropriate ID:
    //  document.getElementById("usd-calculated").textContent = ...;
    // If you want to include additional text (e.g. a € symbol), you can either include it here
    // or add it in the HTML, outside of the element with the "usd-calculated" ID.
    // To do this, you may want to use a <span> (rather than a <td>) for the "usd-calculated" element.


    //Getting the string value from our SELECT elements
    const fromCurrency = document.getElementById("from-currency").value;
    const toCurrency = document.getElementById("to-currency").value;

    let conversionRate = 1;
    if (fromCurrency == "USD" && toCurrency == "EUR") {
        conversionRate = EUR_PER_USD;
    } else if (fromCurrency == "USD" && toCurrency == "JPY") {
        conversionRate = JPY_PER_USD;
    } else if (fromCurrency == "USD" && toCurrency == "SOL") {
        conversionRate = SOL_PER_USD;
    } else if (fromCurrency == "USD" && toCurrency == "HKD") {
        conversionRate = HKD_PER_USD;
    } else if (fromCurrency == "EUR" && toCurrency == "USD") {
        conversionRate = 1 / EUR_PER_USD;
    } else if (fromCurrency == "EUR" && toCurrency == "JPY") {
        conversionRate = 1 / (EUR_PER_USD * JPY_PER_USD);
    } else if (fromCurrency == "EUR" && toCurrency == "SOL") {
        conversionRate = 1 / (EUR_PER_USD * SOL_PER_USD);
    } else if (fromCurrency == "EUR" && toCurrency == "HKD") {
        conversionRate = 1 / (EUR_PER_USD * HKD_PER_USD);
    } else if (fromCurrency == "JPY" && toCurrency == "USD") {
        conversionRate = 1 / JPY_PER_USD;
    } else if (fromCurrency == "JPY" && toCurrency == "EUR") {
        conversionRate = 1 / (JPY_PER_USD * EUR_PER_USD);
    } else if (fromCurrency == "JPY" && toCurrency == "SOL") {
        conversionRate = 1 / (JPY_PER_USD * SOL_PER_USD);
    } else if (fromCurrency == "JPY" && toCurrency == "HKD") {
        conversionRate = 1 / (JPY_PER_USD * HKD_PER_USD);
    } else if (fromCurrency == "SOL" && toCurrency == "USD") {
        conversionRate = 1 / SOL_PER_USD;
    } else if (fromCurrency == "SOL" && toCurrency == "EUR") {
        conversionRate = 1 / (SOL_PER_USD * EUR_PER_USD);
    } else if (fromCurrency == "SOL" && toCurrency == "JPY") {
        conversionRate = 1 / (SOL_PER_USD * JPY_PER_USD);
    } else if (fromCurrency == "SOL" && toCurrency == "HKD") {
        conversionRate = 1 / (SOL_PER_USD * HKD_PER_USD);
    } else if (fromCurrency == "HKD" && toCurrency == "USD") {
        conversionRate = 1 / HKD_PER_USD;
    } else if (fromCurrency == "HKD" && toCurrency == "EUR") {
        conversionRate = 1 / (HKD_PER_USD * EUR_PER_USD);
    } else if (fromCurrency == "HKD" && toCurrency == "JPY") {
        conversionRate = 1 / (HKD_PER_USD * JPY_PER_USD);
    } else if (fromCurrency == "HKD" && toCurrency == "SOL") {
        conversionRate = 1 / (HKD_PER_USD * SOL_PER_USD);
    }

    //Round to 2 decimal places
    const roundedAmount = (amountAsNumber * conversionRate).toFixed(2);

    const finalResult = document.getElementById("converted-amount");
    finalResult.textContent = roundedAmount;
    });
});

document.addEventListener("DOMContentLoaded", function () {

    const checkbox = document.querySelector(".switch input[type='checkbox']");
    const main_body = document.body;
    const container = document.querySelector(".container");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const startButton = document.querySelector(".start");
    const dateElement = document.querySelector(".date");
    const items = document.querySelectorAll("footer .item");

    //In order for dark-mode to survive page reload and hypelinks we need to store it in local storage
    const isDarkMode = localStorage.getItem("dark-mode") == "true";

    if (isDarkMode) {
        main_body.classList.add("dark-mode");
        main_body.classList.remove("body");
        // Optionally, style specific elements for dark mode
        if (container) container.classList.add("dark-mode");
        if (header) header.classList.add("dark-mode");
        if (footer) footer.classList.add("dark-mode");
        if (startButton) startButton.classList.add("dark-mode");
        if (dateElement) dateElement.classList.add("dark-mode");
        items.forEach(item => item.classList.add("dark-mode"));
        if (checkbox) checkbox.checked = true;
    
    }



    if (checkbox && main_body) {
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                main_body.classList.add("dark-mode");
                main_body.classList.remove("body");
                if (container) container.classList.add("dark-mode");
                if (header) header.classList.add("dark-mode");
                if (footer) footer.classList.add("dark-mode");
                if (startButton) startButton.classList.add("dark-mode");
                if (dateElement) dateElement.classList.add("dark-mode");
                items.forEach(item => item.classList.add("dark-mode"));
                localStorage.setItem("dark-mode", "true");
            } else {
                main_body.classList.remove("dark-mode");
                main_body.classList.add("body");
                if (container) container.classList.remove("dark-mode");
                if (header) header.classList.remove("dark-mode");
                if (footer) footer.classList.remove("dark-mode");
                if (startButton) startButton.classList.remove("dark-mode");
                if (dateElement) dateElement.classList.remove("dark-mode");
                items.forEach(item => item.classList.remove("dark-mode"));
                localStorage.setItem("dark-mode", "false");
            }
        });
    } 
});



