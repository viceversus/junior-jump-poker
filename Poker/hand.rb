module Poker
  class Hand
    attr_accessor :cards

    def initialize(card_inputs)
      @cards = card_inputs.split
    end

    def cards
      @cards
    end

    def cards=(cards)
      @cards = cards
    end
  end
end
