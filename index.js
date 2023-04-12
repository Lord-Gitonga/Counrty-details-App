let searchBtn = document.getElementById('search-btn')
let input = document.getElementById('input-country')
let results = document.getElementById('results')


searchBtn.addEventListener('click', displayCountry)
function displayCountry (){
    
const countryName = input.value;
const myURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
//console.log(myURL);
    fetch(myURL)
    .then(resp=>resp.json())
    .then(data=>{
        results.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag">
            <h2>${data[0].name.common}</h2>
            <div class="wrapper">
                <div class="data-wrapper">
                    <h4>Capital:</h4>
                    <span>${data[0].capital[0]}</span>
                </div>
            </div>
            <div class="wrapper">
             <div class="data-wrapper">
                <h4>Continent:</h4>
                <span>${data[0].continents[0]}</span>
             </div>
           </div>
           <div class="wrapper">
             <div class="data-wrapper">
                <h4>Population:</h4>
                <span>${data[0].population}</span>
             </div>
           </div>
           <div class="wrapper">
           <div class="data-wrapper">
              <h4>Currency:</h4>
              <span>${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</span>
           </div>
         </div>
         <div class="wrapper">
             <div class="data-wrapper">
                <h4>Common Language:</h4>
                <span>${Object.values(data[0].languages).toString().split(",").join(",")}</span>
             </div>
           </div>
        `;
    }).catch(()=> {
        if(countryName.length === 0){
        results.innerHTML=`<h3>Input Field Cannot Be Empty</h3>` 
        } else{
            results.innerHTML=`<h3>Please input a valid country name</h3>`
        }
    })

}
displayCountry()