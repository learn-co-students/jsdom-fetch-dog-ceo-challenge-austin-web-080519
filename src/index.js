console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', function(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const dropdown = document.getElementById('breed-dropdown');
    const breeds = document.getElementById('dog-breeds');
    fetch(imgUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(json){
        for (const url of json.message) {
            let img = document.createElement('img');
            img.setAttribute('src', url);
            let dogImages = document.getElementById('dog-image-container');
            dogImages.appendChild(img);
        }
    })
    fetch(breedUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        for(const key in json.message){
            let li = document.createElement('li')
            if(json.message[key].length == 0){
                li.append(key);
                breeds.appendChild(li);
            }
            else {
                for(const val of json.message[key]){
                    let subli = document.createElement('li');
                    subli.append(`${key}, ${val} `);
                    breeds.appendChild(subli);
                    subli.addEventListener('click', function(){
                        subli.style.color = 'blue';
                    });
                } 
            }
            li.addEventListener('click', function(){
                li.style.color = 'green';
            });
        } 
        dropdown.addEventListener('change', function(){
            let subset = {};
            for(const key in json.message){
                if(key.startsWith(dropdown.value)){
                    subset[key] = json.message[key];
                }
            }
            while(breeds.firstChild) breeds.removeChild(breeds.firstChild);
            for(const key in subset){
                let li = document.createElement('li')
                if(subset[key].length == 0){
                    li.append(key);
                    breeds.appendChild(li);
                }
                else {
                    for(const val of subset[key]){
                        let subli = document.createElement('li');
                        subli.append(`${key}, ${val} `);
                        breeds.appendChild(subli);
                        subli.addEventListener('click', function(){
                            subli.style.color = 'blue';
                        });
                    } 
                }
                li.addEventListener('click', function(){
                    li.style.color = 'green';
                });
            } 
        });
    })
});
