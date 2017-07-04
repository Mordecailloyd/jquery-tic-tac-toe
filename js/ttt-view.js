class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.bindEvents();
  }

  // bindEvents() {}

  makeMove($cell) {
    let pos = $cell.data("pos");
    let player = this.game.currentPlayer;
    this.game.playMove(pos);
    $cell.addClass(player);
    $cell.html(player);
    if (this.game.isOver()) {
      let over = this.$el.find('grid');
      over.append($("<figcaption class = 'postscript'>").html(`You win, ${player}`));
    }
  }

  setupBoard() {
    let unlist = $("<ul class = 'grid'>");
    for (let row = 0; row < 3; row ++){
      for (let col = 0; col < 3; col++){
        let list = $("<li class = 'cell'>");
        list.data('pos',[row,col]);
        unlist.append(list);
        // unlist.push(list);
      }
    }
    this.$el.append(unlist);
  }

  bindEvents(){
    $('.cell').on('click',(event) => {
      let $cell = $(event.currentTarget);
      $cell.addClass('coloredcell');
      // console.log('wot');
      this.makeMove($cell);
      $cell.off();
    });

  }


}





module.exports = View;
