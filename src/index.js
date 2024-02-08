import { fetchBreeds, fetchCatByBreed } from './js/cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');
const catInfo = document.querySelector('.cat-info');

function populateBreeds(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.text = breed.name;
    breedSelect.appendChild(option);
  });
}

function displayCatInfo(cat) {
  catInfo.innerHTML = `
    <img src="${cat.url}" alt="${cat.breeds[0].name}" />
    <p><strong>Breed:</strong> ${cat.breeds[0].name}</p>
    <p><strong>Description:</strong> ${cat.breeds[0].description}</p>
    <p><strong>Temperament:</strong> ${cat.breeds[0].temperament}</p>
  `;
  catInfo.style.display = 'block';
}

function showLoader() {
  breedSelect.style.display = 'none';
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
  breedSelect.style.display = 'block';
}

function showError() {
  error.style.display = 'block';
}

function hideError() {
  error.style.display = 'none';
}

breedSelect.addEventListener('change', () => {
  const selectedBreedId = breedSelect.value;
  showLoader();
  hideError();

  fetchCatByBreed(selectedBreedId)
    .then(cat => {
      displayCatInfo(cat);
      hideLoader();
    })
    .catch(() => {
      showError();
      hideLoader();
    });
});

document.addEventListener('DOMContentLoaded', () => {
  showLoader();
  hideError();

  fetchBreeds()
    .then(breeds => {
      populateBreeds(breeds);
      hideLoader();
    })
    .catch(() => {
      showError();
      hideLoader();
    });
});
