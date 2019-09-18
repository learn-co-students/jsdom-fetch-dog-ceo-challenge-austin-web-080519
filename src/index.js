document.addEventListener('DOMContentLoaded', (event) => {

    console.log('%c Challenge Three', 'color: firebrick');

    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = 'https://dog.ceo/api/breeds/list/all';

    //body
    const dogContainer = document.getElementById("dog-image-container");
    const dogBreeds = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");

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
                // console.log(breeds[breed]);
                const li = document.createElement("li");
                li.innerHTML = breed;
                dogBreeds.appendChild(li);
        };
    })

    // Create click event for breeds list - Challenge Three
    
    dogBreeds.addEventListener("click", (event) => {
        event.target.style.color = "Fuchsia";
    });


    // Add function where user can filter breeds list - Challenge Four
    breedDropdown.addEventListener("change", (event) => {
        console.log(breedDropdown.value)
        let filter = breedDropdown.value;
        while (dogBreeds.hasChildNodes()) {
            dogBreeds.removeChild(dogBreeds.firstChild)
        };

        fetch(breedUrl)
        .then(function(response){
            return response.json();
        })
        .then(function(breedsObject){

            const breeds = breedsObject.message 

            for (const breed in breeds) {
                // Checking for first letter of the breed to equal the selected filter letter
                if (breed[0] === filter) {
                    const li = document.createElement("li");
                    li.innerHTML = breed;
                    dogBreeds.appendChild(li);
                }
            }
        });
    });

});