describe('Card', function(){

  describe('#valid', function(){
    describe('with a valid suite and rank', function(){

      beforeEach(function(){
        this.card = new Card('hearts', '3');
      });

      it('returns true', function(){
        expect(this.card.valid()).toBe(true);
      });
    });

    describe('with a invalid suite', function(){

      beforeEach(function(){
        this.card = new Card('foo', '3');
      });

      it('returns false', function(){
        expect(this.card.valid()).toBe(false);
      });
    });

    describe('with an invalid rank', function(){

      beforeEach(function(){
        this.card = new Card('hearts', 'X');
      });

      it('returns false', function(){
        expect(this.card.valid()).toBe(false);
      });
    });
  });
});
