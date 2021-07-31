// STEP ONE - PRINT OUT RANDON QUOTATIONS TO THE CONSOLE

//create a quotes array with three other arrays, each with sentence fragments
//Have the first quotes array item be the beginning sentence fragment
//Have the second quotes array item be the middle sentence fragement
//Have the third quotes array item be the ending sentence fragment
const quotes = [
    ['I am', 'You are', 'Thank-you for saying you are', 'We all will be', 'You cannot be', "Let's go and say", 'We can be', 'People these days are', 'Please understand we are', 'They will be'],
    ['feeling incredible', 'having a moment', 'walking in the clouds', 'serious', 'too confident', 'sorry', 'not boring', 'believers', 'followers', 'strong and free'],
    ['this week.', 'in your head.', 'out of our country.', 'to all the world.', 'when all is said and done.', 'under the blue sky.', 'on a new trail.', 'at the party.', 'and very indecisive.', 'of all they hear.'] 
]

//create a quote generator function with three let variables and a quotes parameter where the quotes array will be the arguement passed.
//generate a random number using a function called randomNumber().
//for the first let variable return a quote array item equivalent to the  quote's array's beginning item's index value
//Generate a random number between one and the number of beginning sentence fragments to return a random beginning sentence fragment whose index value matches the random number.
//for the second let variable return a quote array item equivalent to the quote's array's middle item's index value
//Generate a random number between one and the number of middle sentence fragments to return a random middle sentence fragment whose index value matches the random number.
//for the third let variable return a value equivalent to the quote's array's ending item's index value
//Generate a random number between one and the number of ending sentence fragments to select for a random ending sentence fragment whose index value matches the random number.
//combine the three sentence fragments using template literal syntax and log the complete sentence to the console.
const quoteGenerator = (quotes) => {
    const randomNumber = () => Math.floor(Math.random() * 10);
    let firstSentence = quotes[0][randomNumber()];
    let secondSentence = quotes[1][randomNumber()];
    let thirdSentence = quotes[2][randomNumber()];
    console.log(`${firstSentence} ${secondSentence} ${thirdSentence}`);
}

//Execute the quoteGenerator function passing the quotes array as the arguement.
quoteGenerator(quotes);

//STEP 2 - CUSTOMIZABLE QUOTES PRINTED TO HTML USING THE DOM



