require 'rspec'
require_relative './card'

describe Poker::Card do
  subject(:card) { Poker::Card.new(input_value) }

  describe '#value' do
    context 'when the value is a number' do
      let(:input_value) { '4H' }
      it 'has a value' do
        expect(card.value).to eql 4
      end
    end

    context 'when the value is `T`' do
      let(:input_value) { 'TH' }

      it 'has a value of 10' do
        expect(card.value).to eql 10
      end
    end

    context 'when the value is `J`' do
      let(:input_value) { 'JH' }

      it 'has a value of 11' do
        expect(card.value).to eql 11
      end
    end

    context 'when the value is `Q`' do
      let(:input_value) { 'QH' }

      it 'has a value of 12' do
        expect(card.value).to eql 12
      end
    end

    context 'when the value is `K`' do
      let(:input_value) { 'KH' }

      it 'has a value of 13' do
        expect(card.value).to eql 13
      end
    end

    context 'when the value is `A`' do
      let(:input_value) { 'AH' }

      it 'has a value of 1' do
        expect(card.value).to eql 14
      end
    end
  end
end
