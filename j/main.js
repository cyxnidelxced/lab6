//This code does NOT create any global variables.
//Promises can be chained together, with the previous promise
// passing its results to the next one in the chain.
// the format is: fetch().then().then().catch()
//it's easier to read if we put each step in its own line,
//that's why the periods start the then lines.

fetch("houses.json")
    .then((response) => response.json())
    .then((data) => {
        //create a temp holder to append all the html generated inside the forEach iterator
        let html = "";

        //the argument "house" passed to the arrow function
        //holds each item in the array in turn.
        data.forEach((house) => {
            let family = house.members.join(" | ");

            //the semantic HTML with CSS class hooks for each house
            html += `
                <dl class="house-info"> 
                    <dt class="house-name">${house.name}</dt>  
                    <dd class="house-members">${family}</dd>
                </dl>
            `;
        });

        //make a reference to the html container where
        //the info will be displayed.
        const container = document.querySelector("#container");
        container.innerHTML = html;
    })
    .catch((err) => console.log("Oops!", err));
    //this only runs if there is an error during the above process

// Fetch a random color and change the background
const fetchBackgroundColor = async () => {
    try {
        const response = await fetch('https://www.thecolorapi.com/random');
        const data = await response.json();
        const color = data.hex.value;
        document.body.style.backgroundColor = color;
    } catch (error) {
        console.log('Error!', error);
    }
};

window.onload = fetchBackgroundColor;