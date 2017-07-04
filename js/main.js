const View = require('./ttt-view');// require appropriate file
const Game = require('/Users/appacademy/Desktop/solution/game.js'); // require appropriate file

$( () => {
  const rawr = new Game();
  const something = $('.ttt');
  const view = new View(rawr,something);
  // Your code here
});
