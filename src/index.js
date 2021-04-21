  document.addEventListener('DOMContentLoaded', function() {
    fetchDogs(); fetchBreeds();
  });

function fetchDogs() {
    return fetch("https://dog.ceo/api/breeds/image/random/4")
      .then(resp => resp.json())
      .then(results => renderDogs(results))
  }

  function fetchBreeds() {
    return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(results => {
      breeds = Object.keys(results.message);
      createBreedList(breeds);
      breedSelector();
    });
}

  function renderDogs(dogs) {
    const dogList = document.getElementById("dog-image-container");
    dogs.message.forEach(dog => {
      const image = document.createElement('img');
      image.src = dog;
      dogList.appendChild(image);
    })
  }

  function createBreedList(breeds) {
    const ul = document.getElementById("dog-breeds");
    breeds.forEach(breed => addBreed(breed))};

  function breedSelector() {
    const breedSelect = document.getElementById("breed-dropdown");
    breedSelect.addEventListener('change', e => breedsFirstLetter(e.target.value));
  }

  function changeColor(event) {
    event.target.style.color = 'blue';
  }

  function breedsFirstLetter(letter) {
      debugger
    updateBreedList(breeds.filter(breed => breed.startsWith(letter)));
  }

  function updateBreedList(breeds) {
    const ul = document.getElementById("dog-breeds");
    removeChildren(ul);
    breeds.forEach(breed => addBreed(breed));
  }

  function addBreed(breed) {
    let ul = document.getElementById("dog-breeds");
    let li = document.createElement("li");
    li.innerText = breed;
    li.style.cursor = 'pointer';
    ul.appendChild(li);
    li.addEventListener('click', changeColor);
  }

  function removeChildren(element) {
    let child = element.lastElementChild;
    while (child) {
      element.removeChild(child);
      child = element.lastElementChild;
    }
  }