// PSEUDOCODE
//On Page Load, populate questionArray with 3 random items from masterArray
//When User clicks 'Take Memory Test' the first Item appears on the screen from the questionArray.
//Empty page replaces the question 2 when user clicks "Next"
//Repeat through 3 questions.
//After the third item is shown. the user clicks 'Let's go Shopping'
//On the click of this button a master list of items is shown and the //user is asked to select 3 items which he/she just saw.
//Add the User's selected items into userInputarray.
// Compare the results of UserInputArray to the randomly generated array and show the results
const masterArray = [
    {
        tagName : "Apple",
        text : "You reach to turn off the alarm you find apple under it."
    
    },
    {
        tagName : "Asparagus",
        text : "You walk on the fllor and you find asparagus under your feet.",
    },
    {
        tagName : "Tissue Paper",
        text : "As you reach to turn on the light you notice tissue paper under it.",
    },
    {
        tagName : "Milk",
        text : "You look out of the window and milk drifts from the glass",
    },
    {
        tagName : "Grapes",
        text : "In the bathroom you find grapes in your toilet",
    }

]

//declare variables
let i = 0;





$(document).ready(function(){
    console.log('i m ready');
    let questionsArray = [];
    let generateQuestionArray = function(n){
        console.log('I am called');
        do {
            let getRandomNumber = Math.floor(Math.random() * 5);
            console.log(getRandomNumber);
            if (questionsArray.includes(masterArray[getRandomNumber]))
            {
                console.log('i m already there');
            }
            else
            {
                questionsArray.push(masterArray[getRandomNumber])
                console.log(`i m unique`);
            }
        }
        while( questionsArray.length < n)

    };
    generateQuestionArray(3);
    console.log(questionsArray);
    //2. event listener
    //Function to load question page
    const questionPage = function(i) {	
    $('.tagName').append(`<h4 class="tagName">${questionsArray[i].tagName}</h4>`);
    $('.text').append(`<p class="text">${questionsArray[i].text}</p>`);

}; 
    $('.questionContainer').hide();
    $('.next').on('click',function(){
		$('#questionPage').show();
		$('header').hide();
        $('.tagName').empty();
        $('.text').empty();	

        
        
        if(i<questionsArray.length) {
			
			questionPage(i);
			i= i+1;

		} else if (i>=questionsArray.length){	
			//Show results page
			 $('#questionPage').hide();
			 $('#mainPage').show();
			
		     }	


	}); //end of Start Button
    
});//document ready ends
