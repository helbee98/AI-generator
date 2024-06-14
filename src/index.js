function generateHoroscope(event) {
    event.preventDefault();
    new Typewriter('#horoscope', {
        strings: ['Horoscope'],
        autoStart: true,
        delay: 1,
      });
}


let horoscopeElement = document.querySelector("#horoscope-generator");
horoscopeElement.addEventListener("submit", generateHoroscope)