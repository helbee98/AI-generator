function displayHoroscope(response) {
    console.log("horoscope genreted")
     new Typewriter('#horoscope', {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
      });
}




function generateHoroscope(event) {
    event.preventDefault();
    let instructionsInput = document.querySelector("#user-instructions")
    let apiKey= "f0t31ebf10a05340167073caaaa44dbo";
    let context = "You are a professional astrologer who loves writing horoscopes for people. Write a short horoscope and Make sure to follow user instuctions. Sign the horoscope with '-shecodes AI' inside a <strong> element at the end of the horoscope.";
    let prompt = `User instructions: Generate a horoscope about ${instructionsInput.value}`;
    let apiUrl= `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log(`prompt: ${prompt}`);
    console.log(`context: ${context}`)
axios.get(apiUrl).then(displayHoroscope)

   
}


let horoscopeElement = document.querySelector("#horoscope-generator");
horoscopeElement.addEventListener("submit", generateHoroscope)