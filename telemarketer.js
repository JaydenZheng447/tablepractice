function telemarketer(numb1, numb2, numb3, numb4) {
  if ((numb1 == 8 || numb1 == 9) && (numb4 == 8 || numb4 == 9)) {
    console.log(numb1, numb2, numb3, numb4, "Answer.");
  } else {
    console.log("Scam Likely. Ignore.");
  }
}
telemarketer(8, 1, 2, 9);
telemarketer(8, 4, 4, 0);
telemarketer(5, 5, 5, 5);
