const api = "https://api.exchangerate-api.com/v4/latest/TRY";

var Amount = document.getElementById("enterAmount");
var convertButton = document.querySelector(".convertBtn");
var changeConvert = document.querySelector(".change");
var fromCurrency = document.getElementById("sel1");
var toCurrency = document.getElementById("sel2");
var resultCurrency = document.querySelector(".resultValue");
var result = document.querySelector(".result");
var dolar = document.querySelector(".dolar");
var euro = document.querySelector(".euro");
var sterlin = document.querySelector(".sterlin");
var isvicre = document.querySelector(".isvicre");
var ruble = document.querySelector(".ruble");
var canada = document.querySelector(".canada");
var AED = document.querySelector(".AED");
var aud = document.querySelector(".aud");
var dkk = document.querySelector(".dkk");
var sek = document.querySelector(".sek");
var nok = document.querySelector( ".nok");
var jpy = document.querySelector(".jpy");
var zar = document.querySelector(".zar");
var pln = document.querySelector(".pln");
var AmountValue;
var resultFrom ; 
var resultTo;

fetch(`${api}`)
.then(response => response.json())
.then(getBorsa);

function getBorsa(response){
    dolar.innerHTML = ((response.rates["TRY"] / response.rates["USD"]) * 1) .toFixed(2);
    euro.innerHTML = ((response.rates["TRY"] / response.rates["EUR"]) * 1) .toFixed(2);
    sterlin.innerHTML = ((response.rates["TRY"] / response.rates["GBP"]) * 1) .toFixed(2);
    isvicre.innerHTML = ((response.rates["TRY"] / response.rates["CHF"]) * 1) .toFixed(2);
    ruble.innerHTML = ((response.rates["TRY"] / response.rates["RUB"]) * 1) .toFixed(2);
    canada.innerHTML = ((response.rates["TRY"] / response.rates["CAD"]) * 1) .toFixed(2);
    AED.innerHTML = ((response.rates["TRY"] / response.rates["AED"]) * 1) .toFixed(2);
    aud.innerHTML = ((response.rates["TRY"] / response.rates["AUD"]) * 1) .toFixed(2);
    dkk.innerHTML = ((response.rates["TRY"] / response.rates["DKK"]) * 1) .toFixed(2);
    sek.innerHTML = ((response.rates["TRY"] / response.rates["SEK"]) * 1) .toFixed(2);
    nok.innerHTML = ((response.rates["TRY"] / response.rates["NOK"]) * 1) .toFixed(2);
    jpy.innerHTML = ((response.rates["TRY"] / response.rates["JPY"]) * 1) .toFixed(2);
    zar.innerHTML = ((response.rates["TRY"] / response.rates["ZAR"]) * 1) .toFixed(2);
    pln.innerHTML = ((response.rates["TRY"] / response.rates["PLN"]) * 1) .toFixed(2);
    
    
    

    
}





fromCurrency.addEventListener('change',(event) => {
    resultFrom = `${event.target.value}`;
    console.log(resultFrom);
});


toCurrency.addEventListener('change',(event) => {
    resultTo = `${event.target.value}`;
    console.log(resultTo);
});

Amount.addEventListener('input', valueUpdate);

function valueUpdate(e){
    AmountValue = e.target.value;
}

convertButton.addEventListener("click", getResults);

function getResults(){
    fetch(`${api}`)
    .then(currency => {
        return currency.json();
        

    }).then(displayResult);

}




function displayResult(currency){
  
    let fromValue = currency.rates[resultFrom];
    let toValue = currency.rates[resultTo];
   
    resultCurrency.innerHTML = ((toValue / fromValue) * AmountValue).toFixed(2);
    result.style.display = "block";
}


changeConvert.addEventListener('click', getChange);

function getChange(){
    
    x = resultFrom;
    y = resultTo;


    

    resultFrom = y;
    resultTo = x;


}