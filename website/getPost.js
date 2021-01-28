//EXAMPLE - the client side code that would make a GET request to the animal info API
//Web API with fetch

//set up the URL
let baseURL = "http://api.animalinfo.org/data/?animal="; //imagined API
let apiKey = "&appid=9f15e45060..."; //imagined key

const newAnimal = document.getElementById("animal").value;

document.getElementById("generate").addEventListener("click", performAction); //click is the event listener, performAction is the callback

function performAction(e) {
  getAnimalDemo(baseURL, newAnimal, apiKey); //full url
}

const getAnimalDemo = async (baseURL, animal, key) => {
  //1. real url - which cannot use as these are imagined
//   const res = await fetch(baseURL + animal + key); //build url into fetch call
  //2. Call fake API
  const res = await fetch('/fakeAnimalData');
  try {
    const data = await res.json();
    console.log(data);
    //2.we can do something with our returned data here

    //postData ('/addAnimal', data)
  } catch (error) {
    // appropriately handle the error
    console.log("error", error);
  }
};


