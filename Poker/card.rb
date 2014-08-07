module Poker
  class Card
    def initialize(input_value)
      @value = input_value[0].to_i

      face_cards(input_value)

    end

    def value
      @value
    end

  private

   def face_cards(input_value)
      if input_value[0] == 'T'
        @value = 10
      elsif input_value[0] == 'J'
        @value = 11
      elsif input_value[0] == 'Q'
        @value = 12
      elsif input_value[0] == 'K'
        @value = 13
      elsif input_value[0] == 'A'
        @value = 14
      end
    end

  end
end
