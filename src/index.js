document.addEventListener('DOMContentLoaded', (event) => {

    console.log('%c Challenge Two', 'color: firebrick');

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';

    //body
    const dogContainer = document.getElementById("dog-image-container");
    const dogBreeds = document.getElementById("dog-breeds");

    // fetching images from imgUrl - Challenge One
    fetch(imgUrl)
        .then(function(response) {
            // parses the response as JSON
            return response.json();
        })
        .then(function(imagesObject) {
            /* 
            Planning on using a for...of to iterate through all imageUrls
            to display via img src tag
                for(const ELEMENT of ARRAY)
            */
            const images = imagesObject.message;

            for(const imageUrl of images) { 
               // console.log(imageUrl);
                const ptag = document.createElement("p");
                ptag.innerHTML = `<img src=${imageUrl}>`;
                dogContainer.appendChild(ptag);
            }
        });
        

    // fetching list of dog breeds - Challenge Two    
    fetch(breedUrl)
        .then(function(response){
            //  parsing response to json
            return response.json();
        })
        .then(function(breedsObject){

            const breeds = breedsObject.message            

            // Use for...in to iterate over Object of breeds
            // console.log(Object.keys(breeds));
            for (const breed in breeds) {
                console.log(breeds[breed]);
                const li = document.createElement("li");
                li.innerHTML = breed;
                dogBreeds.appendChild(li);
            };
        })
});