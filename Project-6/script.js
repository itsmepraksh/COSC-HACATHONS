const userInput = document.querySelector('#word-input')
const searchBtn = document.querySelector('#search-button')
const output = document.querySelector('#result')



searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //TAKING DATA FROM USER 
    let word = userInput.value.trim()
    if (word != "") {

        //RESPONSE FROM API AND ERROR HANDLING
        fetchData(word).then((responseData)=>{
            setData(responseData)
        }).catch((err)=>{ 
            output.textContent = err.message
        setTimeout(()=>{
            output.textContent = ""
            userInput.value = ""
        },3000)
        })

        //HANDLING INVALID DATA

    } else { 
        console.error('invalid entry')
        output.textContent = 'invalid entry!';  
        setTimeout(()=>{
            output.textContent = ""
            userInput.value = ""
        },2000)
    }

})

//FETCHING DATA FROM API
const fetchData = (word)=>{

    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

    return fetch(apiUrl).then((rawResponse)=>{
        if(!rawResponse.ok){
            return rawResponse.json().then(err=>{
                throw new Error(err.message || 'Api error...')
            })
        }

        return rawResponse.json()
    })

}
 
//DATA INSERTING INTO THE FRONTEND
const setData = (meaningJSON)=>{ 

    const meaning = meaningJSON[0].meanings[0].definitions[0].definition


    output.textContent = meaning
    // console.log(meaning)


}