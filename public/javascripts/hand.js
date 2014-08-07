function Hand (cards) {
  this.valid = function() {
    if(5 != cards.length)
      return false;
    _(cards).each(function(card){
      if (!card.valid()) {
        return false;
      }
    });
    return true;
  };
  this.value = function() {
    var ranking = 0;
    var number = 0;
    var suite = 0;

    return [ranking, number, suite];
  };
}









// ranking: flush
//no ranking - 0
//one pair - 1
//two pair - 2
//Three of a kind = 3
// Straigh

// number: 2-A
// suite: spades, clubs, diamonds, hearts
// [4, 5, 0];
