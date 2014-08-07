function compare(hand1, hand2){
  var value_hand1 = hand1.value();
  var value_hand2 = hand2.value();

  if( 10000 * value_hand1[0] + 100 * value_hand1[1] + value_hand1[2] ==
  10000 * value_hand2[0] + 100 * value_hand2[1] + value_hand2[2] )
    return 0;

  if( 10000 * value_hand1[0] + 100 * value_hand1[1] + value_hand1[2] >
  10000 * value_hand2[0] + 100 * value_hand2[1] + value_hand2[2] )
    return 1;

  return 2;

}