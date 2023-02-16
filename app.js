// start with dom elements to search bar

const searchBoxEl = document.querySelector('#locate');
const imageResults = document.querySelector('#images');

// we want the function to begin when the enter key is clicked

searchBoxEl.addEventListener('keypress',(event) =>{
    // this where we are looking to add the event for the selected key click
    if(event.key === 'Enter'){
        fetch(`https://images-api.nasa.gov/search?q=${event.target.value}`)
            .then(response => response.json())
            .then(data =>{
                // images within the array
                const images = data.collection.items
                // when the images are displayed, display user in the images by using the method.()
                const displayItems = images.slice(0,5);

                imageResults.innerHTML= ''
                displayItems.forEach(image => displayImage(image));
            })
            .catch(err => {
                console.log(err);
            })
    }
});
function displayImage(image){
    const div =document.createElement('div');
    div.classList.add('p-6', 'bg-amber-300', 'rounded-lg')
    div.innerHTML = `
     <img src="${image.links[0].href}">
      <p class="font-bold text-lg">${image.data[0].title}</p>
    <p class="text-xs">${image.data[0]}</p>
    `
    imageResults.appendChild(div);

}