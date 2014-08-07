describe('#compare', function(){

  beforeEach(function(){
    this.lowHand = new Hand([
      new Card('hearts', '3'),
      new Card('diamonds', '3'),
      new Card('clubs', '3'),
      new Card('hearts', '4'),
      new Card('hearts', '5')
    ]);
    this.highHand = new Hand([
      new Card('hearts', '3'),
      new Card('diamonds', '3'),
      new Card('clubs', '3'),
      new Card('spades', '3'),
      new Card('hearts', '5')
    ]);
  });


  describe('with invalid paramters', function(){
    comparingInvalidHands = function(){
      compare();
    };

    it('raises an exception', function(){
      expect(comparingInvalidHands).toRaise();
    });
  });

  describe('with equal hands', function(){
    it('returns 0', function(){
      expect(compare(this.lowHand, this.lowHand)).toBe(0);
      expect(compare(this.highHand, this.highHand)).toBe(0);
    });
  });

  describe('when the first hand is greater', function(){
    it('returns 1', function(){
      expect(compare(this.highHand, this.lowHand)).toBe(1);
    });
  });

  describe('when the second hand is greater', function(){
    it('returns 0', function(){
      expect(compare(this.lowHand, this.highHand)).toBe(2);
    });
  });
});
