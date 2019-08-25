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
        textQuestion : "You reach to turn off the alarm you find apple under it."
       
    },
    {
        tagName : "Asparagus",
        textQuestion : "You walk on the fllor and you find asparagus under your feet."
       
    },
    {
        tagName : "Tissue Paper",
        textQuestion : "As you reach to turn on the light you notice tissue paper under it."
    },
    {
        tagName : "Milk",
        textQuestion : "You look out of the window and milk drifts from the glass"
    },
    {
        tagName : "Grapes",
        textQuestion : "In the bathroom you find grapes in your toilet"
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
    masterArray.forEach(function(item){
        // console.log(item.tagName);
        $('.optionsList').append(`<li class = "listItem">${item.tagName}</li>`);
    }); 
    $('.optionsList').hide(); 
    $('.questionContainer').hide();
    // console.log(questionsArray);
    //2. event listener
    //Function to load question page
    const questionPage = function(i) {
        $('.tagName').text(questionsArray[i].tagName);
        $('.textQuestion').text(questionsArray[i].textQuestion);
    // $('.questionImage').append('img class=')
    }; 
    
    $('.next').on('click',function(){
		$('#questionPage').show();
		$('header').hide();
        $('.tagName').empty();
        $('.textQuestion').empty();	
        
        if(i<questionsArray.length) {
			
			questionPage(i);
			i= i+1;

        } 
        else if (i>=questionsArray.length){	
			//Show results page
			 $('#questionPage').hide();
             $('#mainPage').show();
             $('.proceedToResults').hide();
             $('.results').hide();
             $('.resetButton').hide();
            // console.log(masterArray[i].tagName);  
             $('.optionsList').show();
        }        
       
        $('.listItem').off('click').on('click', function(){
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
                    $('.proceedToResults').show(); 
                    
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
    $('.proceedToResults').on('click',function(){
        $('.optionsList').hide();
        $('.proceedToResults').hide();
        $('.results').text(`You answered${correctArray.length} out of ${questionsArray.length} correctly.`);
        $('.results').show();
        $('.resetButton').show();    
       
    });///main button event ends here
    ///reset button event starts here
    $('.resetButton').on('click',function(){
        $('header').show();
       $('.questionContainer').hide();       
       i = 0;
       questionsArray=[];
       userPickArray = [];
       correctArray = [];
       incorrectArray = [];
       generateQuestionArray(countQuestionsToShow);
       $('.results').text(``);
    })
    //reset button event ends here
    
    
});//document ready ends
