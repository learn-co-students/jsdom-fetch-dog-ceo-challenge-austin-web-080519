document.addEventListener('DOMContentLoaded', (event) => {

console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

//body
const dogContainer = document.getElementById("dog-image-container");

// fetching images from imgUrl
fetch(imgUrl)
    .then(function(response) {
        // parses the response as JSON
        return response.json();
    })
    .then(function(imageUrls) {
        /* 
        Planning on using a for...of to iterate through all imageUrls
        to display via img src tag
            for(const ELEMENT of ARRAY)
        */
        const images = imageUrls.message;

        for(const imageUrl of images) { 
            console.log(`%c ${imageUrl}`, 'color: blue');
            const ptag = document.createElement("p");
            ptag.innerHTML = `<img src=${imageUrl}>`;
            dogContainer.appendChild(ptag);
        }
    });
        
});