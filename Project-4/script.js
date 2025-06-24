 const incrementBtn = document.querySelector('#incrementBtn')
        const decrementBtn = document.querySelector('#decrementBtn')
        const resetBtn = document.querySelector('#resetBtn')
        const commitCount = document.querySelector('#commitCount')


        let counter = 0

        //INCREASING THE VALUE OF COUNTER
        incrementBtn.addEventListener('click', () => {
            counter++

            commitCount.textContent = counter
        })

        //DECREASING THE VALUE OF COUTER TILL 0 NOT LESS THAN THAT
        decrementBtn.addEventListener('click', () => {
            if (counter > 0) {
                counter--
            }

            commitCount.textContent = counter
        })

        //RESET BACK TO 0 
        resetBtn.addEventListener('click', () => {
            counter = 0
            commitCount.textContent = counter
        })