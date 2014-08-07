require 'rspec'
require_relative './hand'

describe Poker::Hand do
  subject(:hand) { Poker::Hand.new("AH 2C 3D 5S 6D") }
  let(:cards) { hand.cards }

  it "has five cards" do
    expect(cards.length).to equal 5
    cards.each do |card|
      expect(card).to be_an_instance_of Poker::Card
    end
  end
end
