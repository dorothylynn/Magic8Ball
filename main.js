const userName = 'galaxynow';

if (userName) {
    console.log('Hello, ' + userName +'!');
} else {
    console.log('Hello!');
}

const userQuestion = 'Will I make lots of money at work tomorrow?';

console.log(`${userName} would like to know: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

var eightBall = '';

switch (randomNumber) {
    case 0: 
    eightBall = 'It is certain!';
    break;
    case 1: 
    eightBall = 'Looks positive!';
    break;
    case 2: 
    eightBall = 'Eh... I don\'t know';
    break;
    case 3: 
    eightBall = 'Sorry babe, nah';
    break;
    case 4: 
    eightBall = 'It looks like that is a noooooo';
    break; 
    case 5: 
    eightBall = 'Eek! The future is bleak my friend';
    break;
    case 6: 
    eightBall = 'All signs point to YES';
    break; 
    case 7: 
    eightBall = 'No can tell, try again';
    break;
    default: 
    eightBall = 'No answer';
}

console.log(`I have looked into the future: ${eightBall}`);
