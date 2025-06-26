//CREATED A JSON FOR PLAYER INFO
const players = [
    {
        id: 1,
        name: "Virat Kohli (Captain)",
        role: "Batsman",
        image: "images/ViratKohli.png",
        strikeRate: 92.50,
        matchesPlayed: 271,
        jerseyNumber: 18,
        bestPerformance: "183 vs Pakistan (Asia Cup 2012)"
    },
    {
        id: 2,
        name: "Jasprit Bumrah",
        role: "Bowler",
        image: "images/JaspritBumrah.png",
        strikeRate: 0.00,
        matchesPlayed: 76,
        jerseyNumber: 93,
        bestPerformance: "6/19 vs West Indies (ODI 2019)"
    },
    {
        id: 3,
        name: "Rohit Sharma",
        role: "Batsman ",
        image: "images/RohitSharma.png",
        strikeRate: 89.90,
        matchesPlayed: 247,
        jerseyNumber: 45,
        bestPerformance: "264 vs Sri Lanka (ODI 2014)"
    },
    {
        id: 4,
        name: "Ravindra Jadeja",
        role: "All-Rounder",
        image: "images/RavindraJadeja.png",
        strikeRate: 87.20,
        matchesPlayed: 197,
        jerseyNumber: 8,
        bestPerformance: "5/36 vs England (ODI 2013)"
    },
    {
        id: 5,
        name: "KL Rahul",
        role: "Wicket-Keeper Batsman",
        image: "images/KLRahul.png",
        strikeRate: 90.10,
        matchesPlayed: 60,
        jerseyNumber: 1,
        bestPerformance: "112 vs England (ODI World Cup 2019)"
    },
    {
        id: 6,
        name: "Hardik Pandya",
        role: "All-Rounder",
        image: "images/HardikPandya.png",
        strikeRate: 110.30,
        matchesPlayed: 75,
        jerseyNumber: 33,
        bestPerformance: "93 vs Sri Lanka (Test 2017)"
    },
    {
        id: 7,
        name: "Shubman Gill",
        role: "Batsman",
        image: "images/ShubmanGill.png",
        strikeRate: 105.50,
        matchesPlayed: 40,
        jerseyNumber: 77,
        bestPerformance: "208 vs New Zealand (ODI 2023)"
    },
    {
        id: 8,
        name: "Mohammed Shami",
        role: "Bowler",
        image: "images/MohammedShami.png",
        strikeRate: 0.00,
        matchesPlayed: 90,
        jerseyNumber: 11,
        bestPerformance: "5/69 vs England (World Cup 2019)"
    },
    {
        id: 9,
        name: "Rishabh Pant",
        role: "Wicket-Keeper Batsman",
        image: "images/RishabhPant.png",
        strikeRate: 100.80,
        matchesPlayed: 30,
        jerseyNumber: 17,
        bestPerformance: "89* vs Australia (Test 2021)"
    },
    {
        id: 10,
        name: "Axar Patel",
        role: "All-Rounder",
        image: "images/AxarPatel.png",
        strikeRate: 95.00,
        matchesPlayed: 50,
        jerseyNumber: 20,
        bestPerformance: "5/32 vs England (Test 2021)"
    },
    {
        id: 11,
        name: "Kuldeep Yadav",
        role: "Bowler",
        image: "images/KuldeepYadav.png",
        strikeRate: 0.00,
        matchesPlayed: 70,
        jerseyNumber: 23,
        bestPerformance: "6/25 vs England (ODI 2018)"
    }
];




//RENDERING PLAYER INFO INTO THE CARD
const player = players.map((item, idx) => {

    return (`
            <div id=player-${item.id} class="player-card bg-white rounded-xl shadow-md p-6 text-center cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out"
                 data-player='{ 
                    "name":"${item.name}",
                    "role": "${item.role}",
                    "image": "${item.image}",
                    "strikeRate": "${item.strikeRate}",
                    "matchesPlayed": "${item.matchesPlayed}",
                    "jerseyNumber": "${item.jerseyNumber}",
                    "bestPerformance": "${item.bestPerformance}"
                 }'>
                <img src=${item.image} alt="Player Image" class="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-red-500 shadow-lg">
                <h3 class="text-xl font-bold text-gray-900 mb-1">${item.name}</h3>
                <p class="text-md text-gray-600">${item.role}</p>   
            </div>
        `)
})


const holder = document.querySelector('#player-card-holder') 
const modalOverlay = document.querySelector('#modal-overlay')
// console.log(modalOverlay)

//PUTING DATA INTO HTML
holder.innerHTML = player.join('')



//USED EVENT DELEGATION HERE
holder.addEventListener('click', (e) => {
    const card = e.target.closest('.player-card')
    if (!card) return;

    //  CONVERTING RAW STRING INTO OBJECT 
    const data = JSON.parse(card.dataset.player) 
    modalOverlay.classList.remove('hidden')

    // console.log(card)

    //ADDING DATA INTO MODAL CARD
    document.querySelector('#modalPlayerName').textContent = data.name;
    document.querySelector('#modalPlayerRole').textContent = data.role;
    document.querySelector('#modalStrikeRate').textContent = data.strikeRate;
    document.querySelector('#modalMatchesPlayed').textContent = data.matchesPlayed;
    document.querySelector('#modalJerseyNumber').textContent = data.jerseyNumber;
    document.querySelector('#modalBestPerformance').textContent = data.bestPerformance;
    document.querySelector('#modalPlayerImage').src = data.image

    // console.log('clicked player : ' , data)

})

//CLOSE BUTTON OF MODAL CARD
const closeBtn = document.querySelector('#closeModal')

closeBtn.addEventListener('click', () => {
    modalOverlay.classList.add('hidden')
})



// console.log(player)







