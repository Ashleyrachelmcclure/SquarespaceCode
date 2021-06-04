document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'art',
            img: 'images/art.jpg'
        },
        {
            name: 'book',
            img: 'images/book.jpg'
        },        
        {
            name: 'camera',
            img: 'images/camera.jpg'
        },        
        {
            name: 'dnd',
            img: 'images/dnd.jpg'
        },        
        {
            name: 'language',
            img: 'images/language.jpg'
        },        
        {
            name: 'travel',
            img: 'images/travel.jpg'
        },
        {
            name: 'art',
            img: 'images/art.jpg'
        },
        {
            name: 'book',
            img: 'images/book.jpg'
        },        
        {
            name: 'camera',
            img: 'images/camera.jpg'
        },        
        {
            name: 'dnd',
            img: 'images/dnd.jpg'
        },        
        {
            name: 'language',
            img: 'images/language.jpg'
        },        
        {
            name: 'travel',
            img: 'images/travel.jpg'
        }
    ];

        //start over
        const startOver = document.getElementById("start-over");
        startOver.addEventListener('click', function(){
            window.location.reload();
        });
        console.log(startOver);

    cardArray.sort(() => 0.5 - Math.random());

    const choices = document.querySelectorAll('.choice');
    const count = choices.length;

    const resultDisplay = document.querySelector('#wins');
    const lossDisplay = document.querySelector('#loses');
    var cardsChosen = [];
    var cardsChosenId = [];
    var cardsWon = [];
    var cardsLost = [];

    //flipcard
    for (let i=0; i<count; i++){
        choices[i].addEventListener('click', flipCard);
    }

    function flipCard(){
        let card = this.querySelector('img');
        let cardID = card.id;
        console.log(cardID);
        card.setAttribute('src', cardArray[cardID].img);
        cardsChosen.push(cardArray[cardID].name);
        cardsChosenId.push(cardID);

        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500);


        };

}


    // for (let i=0; i < count; i++){
    //     choices[i].onclick = function(){


    //         // var card = this.querySelector('img');
    //         // console.log(card);
    //         // var cardID = card.id;
    //         // console.log(cardID);
            
    //         // card.setAttribute('class', cardArray[cardID].img);
    //         // cardsChosen.push(cardArray[cardID].name);
    //         // cardsChosenId.push(cardID);

    //         if (cardsChosen.length === 2){
    //             setTimeout(checkForMatch, 500);


    //         };
    //     };
    // };


    //check for matches
    function checkForMatch (){
        var cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            document.getElementById('result').innerHTML = 'You found a match';
            cards[optionOneId].setAttribute('src', 'images/check.jpg');
            cards[optionTwoId].setAttribute('src', 'images/check.jpg');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/question.jpg');
            cards[optionTwoId].setAttribute('src', 'images/question.jpg');
            document.getElementById('result').innerHTML = 'Sorry, try again';
            cardsLost.push(cardsChosen);
        };
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        lossDisplay.textContent = cardsLost.length;
        if (cardsWon.length === cardArray.length/2){
            document.getElementById('result').innerHTML = 'Congratulations! You fond them all!';
        };
    };
});
