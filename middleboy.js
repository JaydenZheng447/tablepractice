function monkeyInTheMiddle(numb1, numb2, numb3) {
  if ((numb1 < numb2 && numb2 < numb3) || (numb3 < numb2 && numb2 < numb1)) {
    console.log(numb2);
  } else if (
    (numb2 < numb3 && numb3 < numb1) ||
    (numb1 < numb3 && numb3 < numb2)
  ) {
    console.log(numb3);
  } else if (
    (numb3 < numb1 && numb1 < numb2) ||
    (numb2 < numb1 && numb1 < numb3)
  ) {
    console.log(numb1);
  } else {
    console.log("idk");
  }
}

monkeyInTheMiddddle(5, 10, 2);
monkeyInTheMiddle(6, 68, 688);
monkeyInTheMiddle(6, 99, 31);
monkeyInTheMiddle(15, 10777, 122);
monkeyInTheMiddle(1, 0, 6);
monkeyInTheMiddle(100, 99, 99.102485);
