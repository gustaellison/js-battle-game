const FIGHTERSARR = [
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://images.thedirect.com/media/photos/witchn.jpg'}, 
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/streams/2013/June/130606/6C7757975-130606-ent-cersei-hmed.jpg'}, 
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://thewitcher3.wiki.fextralife.com/file/The-Witcher-3/ciri-icon-the-witcher-3-wild-hunt-wiki-guide-min.png'}, 
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Gandalf600ppx.jpg/170px-Gandalf600ppx.jpg'}, 
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://www.iment.com/maida/tv/lordoftherings/galadriel-small.jpg'}, 
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png'}, 
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://upload.wikimedia.org/wikipedia/en/5/50/Tyrion_Lannister-Peter_Dinklage.jpg'}, 
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2022/01/21/16427582365856.jpg'}, 
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://pbs.twimg.com/profile_images/1424853927279927296/gu2WvJOu_400x400.jpg'}, 
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://i.ytimg.com/vi/73lrlQ-8ORI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBxzgQXLgvq2IJlvaGBM-2og-OrcQ'}, 
    {points: Math.floor(Math.random() * 10 + 1), imgUrl: 'https://www.comingsoon.net/wp-content/uploads/sites/3/2023/07/The-Last-of-Us-TV-Show-Joel-Death.jpg'},]

let playerScore;
let enemyScore;
let fighterPowers;
let enemyPower;


const ENEMIES = [
    'https://static.displate.com/857x1200/displate/2019-04-25/83634e3f1cc5fbd9458869d3e9dc8a6b_1778fe4c74eb32f8f6d2bf47e613a028.jpg', 
    'https://upload.wikimedia.org/wikipedia/en/b/bd/Joffrey_Baratheon-Jack_Gleeson.jpg',
    'https://static.wikia.nocookie.net/villains/images/7/75/Pollos2.png/revision/latest?cb=20230321121053',
    'https://i.insider.com/62c79a5d8045920019ae23c4?width=700',
    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1dbc1935-6542-4ee3-822f-135cff4ba62c/df98de6-3bd0eb87-f58b-4726-ad76-ce20a4c8f570.png/v1/fill/w_485,h_605/gollum__1____transparent__by_speedcam_df98de6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjA1IiwicGF0aCI6IlwvZlwvMWRiYzE5MzUtNjU0Mi00ZWUzLTgyMmYtMTM1Y2ZmNGJhNjJjXC9kZjk4ZGU2LTNiZDBlYjg3LWY1OGItNDcyNi1hZDc2LWNlMjBhNGM4ZjU3MC5wbmciLCJ3aWR0aCI6Ijw9NDg1In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Q25iqft9m-DIaaiS-3gSvVU69efaZnVxfohOxSt5wVM' ]

const fighterEls = document.querySelectorAll('ul.fighters > div')
const fighterImageEls = document.querySelectorAll('ul > div > img')
const fighterPowerEls = document.querySelectorAll('ul > div > p')

let fighterArenaImgEl = document.getElementById('your-fighter')
const enemyArenaImgEl = document.getElementById('enemy-fighter')
const fighterArenaPowerEl = document.getElementById('your-fighter')
const enemyArenaPowerEl = document.getElementById('enemy-fighter')

const playerScoreEl = document.getElementById('player-score')
const enemyScoreEl = document.getElementById('enemy-score')

const playAgainEl = document.querySelector('button')


playerScoreEl.textContent = playerScore
enemyScoreEl.textContent = enemyScore
// fighterPowerEls.textContent = fighterPowers

playAgainEl.addEventListener('click', init)

fighterEls.forEach(item => {
    item.addEventListener('click', handleEvent)
})

console.log(fighterArenaImgEl.src)


function handleEvent (evt) {
    fighterArenaImgEl.src = evt.target.src
    console.log(evt.target)
    fighterArenaPowerEl.innerText = fighterPowerEls.innerText

}



    init()



function init () {

    fighterImageEls.forEach((obj, idx) =>{
        idx = Math.floor(Math.random() * FIGHTERSARR.length)
        obj.src = FIGHTERSARR[idx].imgUrl

    })

    fighterPowerEls.forEach((obj, idx) =>{
        obj.textContent = Math.floor(Math.random() * 10 + 1)    
        fighterPowers = obj.textContent

    })


    enemyPower = Math.floor(Math.random() * 10 + 1)
        
    playerScore = 0;
    enemyScore = 0;
    playerScoreEl.innerText = playerScore
    enemyScoreEl.innerText = enemyScore

    render()
}



function render() {



}

