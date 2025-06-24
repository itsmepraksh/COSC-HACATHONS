const inpData = document.querySelector('#breedInp')

const breedBtn = document.querySelector('#btnBreed')
const randomBtn = document.querySelector('#btnRandom')
const loadingMssg = document.querySelector('#loadingMessage')
const errorSite = document.querySelector('#errors')



// FETCHING THE RAW DATA FROM API
const fetchRandomData = () => {
    const apiUrl = `https://dog.ceo/api/breeds/image/random/5`;

    return fetch(apiUrl).then((response) => {
        if (!response.ok) {
            return response.json().then((err) => {
                throw new Error(err.message || 'API error..')
            })
        }

        return response.json()
    })

}

// DATA SETUPS HERE 
const setupRandomData = (data) => {
    const randomData = data.message
    // console.log(randomData)

    const randomDogs = randomData.map((randomDog) => {
        return `<img class="dog-image" src=${randomDog} alt="random-dog-image">`
    })

    const container = document.querySelector('#dogImagesContainer')

    container.innerHTML = ""
    loadingMssg.classList.remove('hidden')


    container.innerHTML = randomDogs.join('')
    loadingMssg.classList.add('hidden');


}

//INITIAL PROCESS WORKING FROM USER TO DATA
randomBtn.addEventListener('click', (e) => {
    e.preventDefault()

    inpData.value = ""
    fetchRandomData().then((responseData) => {
        // console.log(responseData)

        //PASSING DATA FOR SETUP
        setupRandomData(responseData)

    }).catch(err => {
        errorSite.textContent = err
        loadingMssg.classList.add('hidden');
        errorSite.classList.remove('hidden')
        setTimeout(() => {
            errorSite.textContent = '';
            errorSite.classList.add('hidden')

        }, 2000)
        inpData.value = ""

    })

})



// FETCHING THE RAW DATA FROM API
const inputBreed = (breed) => {
    const apiUrl = `https://dog.ceo/api/breed/${breed}/images/random/5`

    return fetch(apiUrl).then((response) => {
        if (!response.ok) {
            return response.json().then((err) => {
                throw new Error(err.message || 'API error...')
            })
        }

        return response.json()
    })

}

// DATA SETUPS HERE 
const dataSetup = (breedData) => {

    const breeds = breedData.message 

    const dogs = breeds.map((dog) => {
        return `<img class="dog-image" src=${dog} alt=${breedData}-img>`

    })

    const container = document.querySelector('#dogImagesContainer')

    container.innerHTML = dogs.join('')
    loadingMssg.classList.add('hidden');

}


//INITIAL PROCESS WORKING FROM USER TO DATA
breedBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const breed = inpData.value.trim()

    if (breed !== "") {
        // console.log(breed);

        //DATA ABSTRACTED FROM THE API AS A RESPONSEDATA
        inputBreed(breed).then((responseData) => {
            // console.log(responseData);

            dataSetup(responseData)

        }).catch(err => {
            // console.error(err)
            errorSite.textContent = err;
            loadingMssg.classList.add('hidden');
            errorSite.classList.remove('hidden')
            setTimeout(() => {
                errorSite.textContent = '';
                errorSite.classList.add('hidden')

            }, 2000)
            inpData.value = ""

        })

    } else {
        const errData = 'invalid breed !'
        
        errorSite.textContent = errData;
        loadingMssg.classList.add('hidden');
        errorSite.classList.remove('hidden');
        setTimeout(() => {
            errorSite.textContent = '';
            errorSite.classList.add('hidden')

        }, 2000)
        inpData.value = ""


    }
})
