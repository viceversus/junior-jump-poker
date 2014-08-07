describe('Hand', function(){

  describe('#valid', function(){
    describe('with 5 valid cards', function(){

      beforeEach(function(){
        var validCards = [
          new Card('heart', '10'),
          new Card('heart', 'J'),
          new Card('heart', 'Q'),
          new Card('heart', 'K'),
          new Card('heart', 'A')
        ];
        this.hand = new Hand(validCards);
      });

      it('returns true', function(){
        expect(this.hand.valid()).toBe(true);
      });
    });

    describe('with 4 cards', function(){

      beforeEach(function(){
        var invalidCards = [
          new Card('heart', '10'),
          new Card('heart', 'J'),
          new Card('heart', 'Q'),
          new Card('heart', 'K')
        ];
        this.hand = new Hand(invalidCards);
      });

      it('returns false', function(){
        expect(this.hand.valid()).toBe(false);
      });
    });
  });
});
