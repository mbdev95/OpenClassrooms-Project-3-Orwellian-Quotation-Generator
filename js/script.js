//STEP 2 - CUSTOMIZABLE QUOTES PRINTED TO HTML USING THE DOM

// create a bookQuotes array with two array items, the first being quotes from 1984 and the second quotes from Animal Farm.
// Within each book array add another inner array with three array items. The first array item will be for the first part of the sentence, the second array item for the middle part of the sentence, and the third array item for the ending part of the sentence.
const bookQuotes = [
    [
        ['"Not merely the validity of experience', '"What can you do,', '"Asleep or awake,', '"There was truth and there was untruth,', '"Your worst enemy,', '"We know that no one', '"Power is in tearing human minds to pieces', '"Nothing exists', '"Who controls the past', '"We shall squeeze you empty,', '"Always there will be', '"To the future or the past,', '"For the first time he perceived', '"The object to waging a war', '"At present nothing is possible'],
        ['but the very existence of reality', 'thought Winston', 'indoors or out of doors,', 'and if you clung against the truth even against the whole world,', 'he reflected,', ' ever seizes power', 'and putting them together again', 'except an endless present', 'controls the future', 'and then we shall fill you', 'the intoxication of power', 'to a time when thought is free,', 'that if you want to keep a secret you must also', 'is always to be in a better position', 'except to extend the area of sanity'],
        ['was tactitly denied by their philosophy."', 'against the lunatic who is more intelligent than yourself."', 'in the bath or bed-no escape."', 'you were not mad."', 'was your nervous system."', 'with the intention of relinquishing it."', 'in new shapes of your choosing."', 'in which the party is always right."', 'who controls the future controls the past."', 'with ourselves."', 'constantly increasing and constantly growing subtler."', 'when men are different from one another and do not live alone."', 'hide it from yourself."', 'in which to raise another war."', 'little by little."']
    ],
    [
        ['"Harken well', '"Only get rid of man,', '"Whatever goes upon four legs', '"All that year', '"The human beings', '"No animal', '"Whatever goes upon', '"Man is the only creature', '"All animals are equal,', '"And remember also', '"If liberty means anything at all', '"Do not imagine', '"I trust that every animal here', '"Anyone who challenges the prevailing orthodoxy', '"Between pigs and human beings'],
        ['and spread my tidings', 'and the produce of our labour', 'or has wings', 'the animals', 'did not hate animal farm any less now', 'shall kill', 'two legs', 'that consumes', 'but some animals are more equal', 'that in fighting against man', 'it means the right to tell people', 'comrades,', ' appreciates the sacrifice that Comrade Napoleon', 'finds himself silenced', 'there was not'],
        ['of the golden future time."', 'would be our own."', 'is a friend."', 'worked like slaves."', 'that is was prospering."', 'any other animal."', 'is an enemy."', 'without producing."', 'than others."', 'we must not come to resemble him."', 'what they do not want to hear."', 'that leadership is a pleasure."', 'has made in taking this extra labour upon himself."', 'with surprising effectiveness."', 'and there need not be any clash of interest whatsoever."']
    ]
];

// Create a variable which will hold the value submitted for the select radio controls for the book 1984 and the book Animal Farm.
const radio1984 = document.getElementById('1984_book');
const radioAnimalFarm = document.getElementById('animal_farm_book');

// Create an orwellianQuoteGenerator function which will randomly generate a quote from either 1984 or animal farm from the two arrays holding respective sentence fragments.
// In the orwellianQuoteGenerator function first generate a random number using a random number function between 1 and the number of fragment quotes each sentence fragment array item holds.
// Establish a conditional if statement where the condition is if the select radio control value from either 1984 or Animal Farm is checked will be determined in the condition by applying the checked property to both radio controls for 1984 and animal farm. 
// Whichever radio control is checked will then cause that condition to equal true causing the code associated with that book which has the radio checked evalute to true in the condition be executed.
// If the 1984 radio control is checked then three sentences are generated from the 1984 array using three variables which take random sentence parts chosen by making the index number from the Animal Farm's array's array the value of the random number function. 
// If the Animal Farm radio control is checked then three sentences are generated from the Animal Farm array using three variables which take random sentence parts chosen by making the index number the Animal Farm's array's array the value of the random number function. 
// After the condition make the value the orwellianQuotationGenerator returns the three string variable concated inorder of appearance, in order to return a string with three random parts of quotes from either 1984 or Animal Farm.
// If neither of the radio controlls are selected make the return value of the orwellianQuoteGenerator function be an alert telling the user to select one of the radio controls in order to return quotes from either 1984 or Animal Farm.

const orwellianQuoteGenerator = (bookQuotes) => {
    const randomNumber = () => Math.floor(Math.random() * 15);
    if ( radio1984.checked === true ) {
        const firstSentence1984 = bookQuotes[0][0][randomNumber()];
        const middleSentence1984 = bookQuotes[0][1][randomNumber()];
        const endSentence1984 = bookQuotes[0][2][randomNumber()];
        return `${firstSentence1984} ${middleSentence1984} ${endSentence1984}`;
    } else if (radioAnimalFarm.checked === true ) {
        const firstSentenceAnimalFarm = bookQuotes[1][0][randomNumber()];
        const middleSentenceAnimalFarm = bookQuotes[1][1][randomNumber()];
        const endSentenceAnimalFarm = bookQuotes[1][2][randomNumber()];
        return `${firstSentenceAnimalFarm} ${middleSentenceAnimalFarm} ${endSentenceAnimalFarm}`;
    } 
}

// Create a function which displays the number of quotes based on the number of quotes a user selected
// In the function first select the div the quotes will be printed to using the DOM and set the div's initial value to empty quotes so each time the function is run the existing quotes are cleared to make way for new quotes.
// Create a numberOfQuotes variable to hold the value of the quotationNumber select menu.
// Establish a for loop which iterates the same number of times as the value of the numberOfQuotes variable.
// For each iteration in the for loop print a quote onto the div intended to have the quotes printed onto it.
// The quotes print will be returned as the value for the orwellianQuoteGenerator function.
// Thus, the quote printed from the orwellianQuoteGenerator function followed by a <br> element will be continously added to the quote div through each iteration of the for loop.
// Use a clickon attribute in html for the generate quotes button element to print the quotes from the generateMultipleQuotes function by make the value of the generate quote's button's clickon attribute the calling of the generateMultipleQuotes function.

const generateMultipleQuotes = () => {
    document.getElementById('printedQuotes').innerHTML = '';
    const numberOfQuotes = document.getElementById('quotationNumber').value;
    for ( let i = 0; i < numberOfQuotes; i++ ) {
        if ( i === 0 && radio1984.checked === true ) {
            document.getElementById('printedQuotes').innerHTML = `<u style="margin-bottom: 8px;">Quotes From <i>1984</i> By George Orwell:</u>`;
        } else if ( i === 0 && radioAnimalFarm.checked === true ) {
            document.getElementById('printedQuotes').innerHTML = `<u style="margin-bottom: 8px;">Quotes From <i>Animal Farm</i> By George Orwell:</u>`;           
        }
        if ( radio1984.checked === true || radioAnimalFarm.checked === true ) {
            document.getElementById('printedQuotes').innerHTML += orwellianQuoteGenerator(bookQuotes) + "<br>";
        } else {
            return document.getElementById('printedQuotes').innerHTML = `<div class="alert alert-warning lead mb-0" role="alert">Please select either <i>1984</i> or <i>Animal Farm</i>.</div>`;
        }
    }
}

// Create a function which will cause the quotes to disappear once the clear button is clicked.
// Use a clickon attribute in html for the clear button element to clear any quotes by making the calling of the clearQuotes function the value for the clickon attribute of the clear quotes button.

const clearQuotes = () => document.getElementById('printedQuotes').innerHTML = '';






