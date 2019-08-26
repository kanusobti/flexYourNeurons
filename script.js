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
        textQuestion : "You reach to turn off the alarm you find Apple under it.",
        imageSource : "Assets/apple.svg",
        imageText : "Red apple with a green leaf"
       
    },
    {
        tagName : "Asparagus",
        textQuestion : "You walk on the floor and you find Asparagus under your feet.",
        imageSource : "Assets/asparagusColored.svg",
        imageText : "Bunch of Green Asparagus"

       
    },
    {
        tagName : "Tissue",
        textQuestion : "As you reach to turn on the light you notice Tissue paper under it.",
        imageSource : "Assets/tissuePaper.svg",
        imageText : "Roll of Tissue Paper"
    },
    {
        tagName : "Milk",
        textQuestion : "You look out of the window and Milk drifts from the glass.",
        imageSource : "Assets/milk.svg",
        imageText : "Milk dripping from Jug"
    },
    {
        tagName : "Grapes",
        textQuestion : "You went to the bathroom and you found Grapes in your toilet.",
        imageSource : "Assets/grapes.svg",
        imageText : "Bunch of purple Grapes"
    },
    { 
        tagName : "Beer",
        textQuestion: "You went to bathroom and notice your bathtub is full of Beer.",
        imageSource : "Assets/beer.svg",
        imageText : "Beer mugs with beer bottles"
      },
      { 
        tagName : "Pepper", 
        textQuestion: "You went to grab your jeans but it's pockets were full of black Pepper.",
        imageSource : "Assets/blackPepper.svg",
        imageText : "Heap of Black Pepper"
      },
      { 
        tagName : "Bread", 
        textQuestion: "As you were walking on the floor, instead of tiles, you found Bread everywhere.",
        imageSource : "Assets/breadLoaf.svg",
        imageText : "Bread Loaf with slices"
      },
      { 
        tagName : "Carrots", 
        textQuestion: "You open your vanity and you notice it's full of Carrots.",
        imageSource : "Assets/carrots.svg",
        imageText : "Bunch of orange Carrots"
      },
      { 
        tagName : "Cheese", 
        textQuestion: "You come down the stairs but there's Cheese everywhere on your stairs.",
        imageSource : "Assets/cheese.svg",
        imageText : "Cheddar cheese slices"
      },
      { 
        tagName : "Cherries", 
        textQuestion: "You wash your face but notice that the sink is full of Cherries.",
        imageSource : "Assets/cherries.svg",
        imageText : "Bunch of Cherries"
      },
      { 
        tagName : "Coffee", 
        textQuestion: "You take a glass for pouring water but instead its full of Coffee Beans.",
        imageSource : "Assets/coffeeBeans.svg",
        imageText : "A bag of Coffee Beans"
      },
      { 
        tagName : "Cookies", 
        textQuestion: "You look outside the window and notice squirrels eating all your Cookies.",
        imageSource : "Assets/cookies.svg",
        imageText : "Chocolate Cookies in a Jar"
      },
      { 
        tagName : "Donuts", 
        textQuestion: "While lying down on your bed, you notice there are Donuts everywhere on the ceiling.",
        imageSource : "Assets/donuts.svg",
        imageText : "Three donuts with sprinkles"
      },
      { 
        tagName : "Egg", 
        textQuestion: "As you get into your car, you see that the windshield is full of Egg yolk.",
        imageSource : "Assets/egg.svg",
        imageText : "Broken egg with yolk"
      },
      { 
        tagName : "Ginger", 
        textQuestion: "You set out to do laundry but instead you find Ginger in your Washing Machine.",
        imageSource : "Assets/ginger.svg",
        imageText : "Ginger with a slice"
      },
      { 
        tagName : "Ice Cream", 
        textQuestion: "You notice that Ice Cream is dripping from your vanity mirror.",
        imageSource : "Assets/iceCream.svg",
        imageText : "Three colorful Ice Cream Cones"
      },
      { 
        tagName : "Ketchup", 
        textQuestion: "As you go to your family room, you find Ketchup on the walls.",
        imageSource : "Assets/ketchup.svg",
        imageText : "A tomato ketchup bottle"
      },
      { 
        tagName : "Pizza", 
        textQuestion: "In your living room, you notice that wall clock has been replaced by a Pizza.",
        imageSource : "Assets/pizza.svg",
        imageText : "A Hawaian Cheese and Pineapple Pizza"
      },
      { 
        tagName : "Popcorn", 
        textQuestion: "As you open your fridge, you notice that it's full of Popcorn and they're spilling everywhere.",
        imageSource : "Assets/popcorn.svg",
        imageText : "A tub of popcorn"
      },
      { 
        tagName : "Red Wine", 
        textQuestion: "You open your tap to get some water, but you're greeted with Red Wine instead.",
        imageSource : "Assets/redWine.svg",
        imageText : "Three red wine glasses"
      },
      { 
        tagName : "Spaghetti", 
        textQuestion: "You grab your comb, but instead of bristles its full of Spaghetti.",
        imageSource : "Assets/spaghetti.svg",
        imageText : "Spaghetti with marinara sauce"
      },
      { 
        tagName : "Spinach", 
        textQuestion: "In your backyard lawn, instead of grass you see Spinach everywhere.",
        imageSource : "Assets/spinach.svg",
        imageText : "Bunch of spinach leaves"
      },
      { 
        tagName : "Tomatoes", 
        textQuestion: "In your laptop bag, you notice that it's full of Tomatoes.",
        imageSource : "Assets/tomato.svg",
        imageText : "A tomato on the vine"
      },
      // { 
      //   tagName : "Turkey", 
      //   textQuestion: "You switched on the TV but all you can see is smoked Turkey on the screen.",
      //   imageSource : "Assets/turkey.svg",
      //   imageText : "Thanksgiving smoked turkey"
      // }

]

//declare variables
let i = 0;
let userPickArray = [];
let correctArray = [];
let incorrectArray = [];
let countQuestionsToShow = 10;//Change this value to show the number of questions
let correctOptionsArray = [];

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
                correctOptionsArray.push(masterArray[getRandomNumber].tagName)
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
        $('.questionImage').attr('src',questionsArray[i].imageSource);
        $('.questionImage').attr('alt',questionsArray[i].imageText);
        
        
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
                $(this).addClass('userPick');
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
        //$('.optionsList').hide();
        $('.proceedToResults').hide();
        $('.results').text(`You answered ${correctArray.length} out of ${questionsArray.length} correctly.`);
        $('.results').show();
        console.log('I am the new array');
        console.log(correctOptionsArray);
        $("ul li").each(function() { 
          
          let liText = $(this).text();
          console.log(liText);

          if(correctOptionsArray.includes(liText))
          {
            $(this).addClass('actualCorrectAnswers');
          }

          if(correctArray.includes(liText))
          {
            $(this).removeClass('actualCorrectAnswers');
            $(this).addClass('correctUserPick');
          }
          else if(incorrectArray.includes(liText))
          {
            $(this).addClass('incorrectUserPick');
          }
          
          
        
        
        });

        
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
       $('li').removeClass('userPick');
       $('li').removeClass('actualCorrectAnswers');
       $('li').removeClass('correctUserPick');
       $('li').removeClass('incorrectUserPick');

    })
    //reset button event ends here
    
    
});//document ready ends
