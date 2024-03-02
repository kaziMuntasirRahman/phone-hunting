const sampleSearchText = 's';
const phoneContainer = document.getElementById('phone-container');


const loadPhone = async (searchText) => {
  phoneContainer.innerHTML = '';
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  const phones = data.data;
  displayPhone(phones);
}


const displayPhone = (phones) => {
  let i = 0;
  for (const phone of phones) {
    i++;
    phoneContainer.innerHTML += `<div class="card max-w-96 bg-base-100 shadow-xl">
    <figure class="mt-5"><img src="${phone.image}" alt="phone" />
    </figure>
    <div class="card-body">
    <h2 class="card-title">${phone.phone_name}</h2>
      <p>If a dog chews shoes whose shoes does he choose? If a dog chews shoes whose shoes does he choose?</p>
      <h2 class="card-title">${phone.slug}</h2>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Show Details</button>
      </div>
    </div>
  </div>`
  }
  document.getElementById('searchResult').innerHTML = i;
}


function searchHandler() {
  const searchFieldText = document.getElementById('search-field').value;
  loadPhone(searchFieldText);
}


loadPhone(sampleSearchText);
