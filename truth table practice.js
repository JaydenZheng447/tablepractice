const tallEnough = true;
const hasParent = true;
const sickChild = false;
const youCanPlay = (tallEnough || hasParent) && !sickChild;

if (youCanPlay == true) {
  console.log("Go Play");
}

class Ligma {
  constructor(height, adult, sick) {
    this.height = height;
    this.adult = adult;
    this.sick = sick;
  }

  checkit() {
    if ((this.height == true || this.adult == true) && this.sick == false) {
      console.log(`You can get in.`);
    } else {
      console.log("Scram.");
    }
  }
}

let kid1 = new Ligma(true, true, false);
kid1.checkit();
let kid2 = new Ligma(false, true, false);
kid2.checkit();
let kid3 = new Ligma(true, true, true);
kid3.checkit();
let kid4 = new Ligma(true, true, false);
kid4.checkit();
