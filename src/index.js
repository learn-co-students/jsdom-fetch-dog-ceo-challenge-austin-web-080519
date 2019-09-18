console.log('%c HI', 'color: firebrick')


window.addEventListener("DOMContentLoaded", (event) => {
    let myDocu = document.querySelector('#dog-image-container');
    fetch("https://dog.ceo/api/breeds/image/random/4")
     .then(resp => resp.json())
     .then(json =>{
         let messages = json.message
         for (const element of messages){
             let newElement = document.createElement('img')
             newElement.src = element
             myDocu.appendChild(newElement);
         }
     });
     let myBreeds = document.querySelector('#dog-breeds');
     fetch("https://dog.ceo/api/breeds/list/all")
     .then(resp => resp.json())
     .then(json => {
         console.log(json);
         let messages = json.message
         for (const element in messages){
            let newElement = document.createElement('li')
            newElement.setAttribute('id', element);
            newElement.innerText = element
            let font = myBreeds.appendChild(newElement)
         }
    })
        
    document.addEventListener("click", (event) => {
        let myEvent = event.target.innerText;
        let myDocu = document.querySelector(`#${myEvent}`);
        myDocu.setAttribute('style', "color: red");
        console.log(myDocu);
    })

    const selectElement = document.querySelector('#breed-dropdown');
        selectElement.addEventListener('change', (event) => {
            let letter = selectElement.value
            while (myBreeds.hasChildNodes()){
                myBreeds.removeChild(myBreeds.firstChild);
            }

            console.log(letter);
            fetch("https://dog.ceo/api/breeds/list/all")
            .then(resp => resp.json())
            .then(json => {
                console.log(json);
                let messages = json.message
                for (const element in messages){
                    if (element[0] == letter) {
                   let newElement = document.createElement('li')
                   newElement.setAttribute('id', element);
                   newElement.innerText = element
                   let font = myBreeds.appendChild(newElement)
                    }
                }
        })
});
})
