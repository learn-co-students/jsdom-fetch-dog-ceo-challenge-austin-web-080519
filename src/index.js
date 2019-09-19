document.addEventListener("DOMContentLoaded", function(event) { 
    // const singleBreedNames = document.querySelectorAll('LI');

    fetch ('https://dog.ceo/api/breeds/image/random/4')
    .then (function(response) {
        return response.json()
    }).then (function(json) {
        const dogImages = json.message;
        dogImageFunction(dogImages);
    });

const dogImagePlacement = document.getElementById('dog-image-container')

function dogImageFunction(images) {
    const doggieImages = images
    for (var i = 0; i < doggieImages.length; i++) {
        const singleDoggieImage = new Image(300, 300);
        singleDoggieImage.src = `${doggieImages[i]}`;
        dogImagePlacement.appendChild(singleDoggieImage)
        }
    }

    fetch ('https://dog.ceo/api/breeds/list/all')
    .then (function(response) {
        return response.json()
    }).then (function(json) {
        const breedNames = json.message;
        breedNameFunction(breedNames)
        changeColorOfText()
        });

    const breedPlacement = document.getElementById('dog-breeds')
    
    function breedNameFunction(breeds) {
        const breedSingleNames = breeds
        for (var key in breedSingleNames) {
            breedSingleNames[key];
            const listItem = document.createElement('LI');
            listItem.innerHTML = `${key}`;
            breedPlacement.appendChild(listItem);
 
        }
    }

    function changeColorOfText() {
            const singleBreedNames = document.querySelectorAll('LI');
            // console.log(singleBreedNames)
            singleBreedNames.forEach(function(name) {
                console.log(name)
            name.addEventListener("click", function() {
                name.style.color = "pink";
            });
        })

    }
    
    // function dropDownOptions(breeds) {
    const dropDownMenu = document.getElementById('breed-dropdown')
    const menuValue = dropDownMenu.value
    const breedSingleNames = breeds
    dropDownMenu.addEventListener('change', (event) => {
        fetch ('https://dog.ceo/api/breeds/list/all')
        .then (function(response) {
            return response.json()
        }).then (function(json) {
            const breeds = json.message;
            // breedNameFunction(breedNames);
            changeColorOfText();
            dropDownOptions(breeds)
            });

        function dropDownOptions(breeds) {
            for (var key in breedSingleNames) {
                breedSingleNames[key];
                if (key[0] == menuValue) {
                    const listItem = document.createElement('LI');
                    listItem.innerHTML = `${key}`;
                    breedPlacement.appendChild(listItem);
                        }
                    }
               }
            
            // };
        
    // fetch ('https://dog.ceo/api/breeds/list/all')
    // .then (function(response) {
    //     return response.json()
    // }).then (function(json) {
    //     const breeds = json.message;
    //     // breedNameFunction(breedNames);
    //     changeColorOfText();
    //     dropDownOptions(breeds)
    //     });

});


