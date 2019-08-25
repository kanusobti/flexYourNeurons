// PSEUDOCODE
//On Page Load, populate questionArray with 3 random items from masterArray
//When User clicks 'Take Memory Test' the first Item appears on the screen from the questionArray.
//Empty page replaces the question 2 when user clicks "Next"
//Repeat through 3 questions.
//After the third item is shown. the user clicks 'Let's go Shopping'
//On the click of this button a master list of items is shown and the //user is asked to select 3 items which he/she just saw.
//Add the User's selected items into userPickarray.
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
let userPickArray = [];
let correctArray = [];
let incorrectArray = [];
let countQuestionsToShow = 3;//Change this value to show the number of questions

$(document).ready(function(){
    // console.log('i m ready');
    let questionsArray = [];
    let generateQuestionArray = function(n){
        // console.log('I am called');
        do {
            let getRandomNumber = Math.floor(Math.random() * masterArray.length);
            // console.log(getRandomNumber);
            if (questionsArray.includes(masterArray[getRandomNumber]))
            {
                // console.log('i m already there');
            }
            else
            {
                questionsArray.push(masterArray[getRandomNumber])
                // console.log(`i m unique`);
            }
        }
        while( questionsArray.length < n)

    };
    generateQuestionArray(countQuestionsToShow);
    // console.log(questionsArray);
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
             $('.main').hide();
             $('.results').hide();
             $('.resetButton').hide();
            // console.log(masterArray[i].tagName);
            masterArray.forEach(function(item){
                // console.log(item.tagName);
                $('.mainList').append(`<li class = "listItem">${item.tagName}</li>`);
            });    

        }
        
        let counter = 0;
        
        $('.listItem').on('click', function() {
            // console.log('Hey! u clicked me!');
            // let value = $(this).text()
            // console.log(value);
            counter = counter+1;
            console.log(counter);
            if(userPickArray.length < questionsArray.length){
                let selectedOption = $(this).text();
                userPickArray.push(selectedOption);

                let found = questionsArray.some(function(element){
                    return element.tagName === selectedOption;
                });

                if(found){
                    correctArray.push(selectedOption);
                   
                }else{
                    incorrectArray.push(selectedOption);
                };
                console.log(`Correct Array Length: ${correctArray.length}`);
                
                
                if(userPickArray.length === questionsArray.length){
                    $('.main').show(); 
                    
                }   
                
                $(this).off("click");
                console.log(userPickArray);  
                
            }
            else{
                $('.listItem').click(function(){
                    return false;});   
                }
                
            });
            
    }); //next button event stops here
    ///main button event starts here
    $('.main').on('click',function(){
        $('.mainList').hide();
        $('.main').hide();
        $('.results').append(`<p class="results"> You answered${correctArray.length} out of ${questionsArray.length} correctly</p>`);
        $('.results').show();
        $('.resetButton').show();    
       
    });///main button event ends here
    ///reset button event starts here
    $('.resetButton').on('click',function(){
        $('header').show();
       $('main').hide();
        
    })
    //reset button event ends here
    
    
});//document ready ends
