/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
create view and quiz on drinks for my job
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

//selectors
const drinkBtn = document.querySelector('#drink');
const drinkTitle = document.querySelector('#drinkTitle');
const drinkType = document.querySelector('#drinkType');
const shots = document.querySelector('#shots');
const shotsNum = document.querySelector('#shotsNum');
const shotsCheckerBox = document.querySelector('#shotsCheckerBox');
const pumps = document.querySelector('#pumps');
const pumpsNum = document.querySelector('#pumpsNum');
const pumpsCheckerBox = document.querySelector('#pumpsCheckerBox');
const flavor1 = document.querySelector('#flavor1');
const flavor1Num = document.querySelector('#flavor1Num');
const flavor1CheckerBox = document.querySelector('#flavor1CheckerBox');
const pumps2 = document.querySelector('#pumps2');
const pumps2Num = document.querySelector('#pumps2Num');
const pumps2CheckerBox = document.querySelector('#pumps2CheckerBox');
const flavor2 = document.querySelector('#flavor2');
const flavor2Num = document.querySelector('#flavor2Num');
const flavor2CheckerBox = document.querySelector('#flavor2CheckerBox');
const scoops = document.querySelector('#scoops');
const scoopsNum = document.querySelector('#scoopsNum');
const scoopsCheckerBox = document.querySelector('#scoopsCheckerBox');
const redbulls = document.querySelector('#redbulls');
const redbullsNum = document.querySelector('#redbullsNum');
const redbullsCheckerBox = document.querySelector('#redbullsCheckerBox');
const cupSize = document.querySelector('#cupSize');
const cupSizeNum = document.querySelector('#cupSizeNum');
const cupSizeCheckerBox = document.querySelector('#cupSizeCheckerBox');
const cOz = document.querySelector('#cOz');
const cOzNum = document.querySelector('#cOzNum');
const cOzCheckerBox = document.querySelector('#cOzCheckerBox');
const wOz = document.querySelector('#wOz');
const wOzNum = document.querySelector('#wOzNum');
const wOzCheckerBox = document.querySelector('#wOzCheckerBox');
const newDrinkBtn = document.querySelector('#newDrink');
const checkerBtn = document.querySelector('#checkerBtn');
const answerBtn = document.querySelector('#answer');

//classes and functions
class beverage {
  constructor(name, type, size, temp, shots, flav1, pumps, flav2, pumps2, scoops, redbulls, cupSize, cOz, wOz) {
    this._name = name;
    this._type = type;
    this._size = size;
    this._temp = temp;
    this._shots = shots;
    this._flav1 = flav1;
    this._pumps = pumps;
    this._flav2 = flav2;
    this._pumps2 = pumps2;
    this._scoops = scoops;
    this._redbulls = redbulls;
    this._cupSize = cupSize;
    this._cOz = cOz;
    this._wOz = wOz;
  }
}

class drinkList {
  constructor(list) {
    this.list = [];
  }
  add(drink) {
    return this.list.push(drink);
  }
  display(name) {
    if (name == "random") {
      let randomDrink = Math.floor(Math.random() * this.list.length);
      let theDrink = this.list[randomDrink];
      drinkTitle.innerHTML = `${theDrink._size} ${theDrink._temp} ${theDrink._name}`;
      drinkType.innerHTML = theDrink._type;
      if (theDrink._shots != '') {
        shotsNum.innerHTML = theDrink._shots;
        toggleDisplay('#shots');
      };
      if (theDrink._flav1 != '') {
        flavor1Num.innerHTML = theDrink._flav1;
        toggleDisplay('#flavor1');
      };
      if (theDrink._pumps != '') {
        pumpsNum.innerHTML = theDrink._pumps;
        toggleDisplay('#pumps');
      };
      if (theDrink._flav2 != '') {
        flavor2Num.innerHTML = theDrink._flav2;
        toggleDisplay('#flavor2');
      };
      if (theDrink._pumps2 != '') {
        pumps2Num.innerHTML = theDrink._pumps2;
        toggleDisplay('#pumps2');
      };
      if (theDrink._scoops != '') {
        scoopsNum.innerHTML = theDrink._scoops;
        toggleDisplay('#scoops');
      };
      if (theDrink._redbulls != '') {
        redbullsNum.innerHTML = theDrink._redbulls;
        toggleDisplay('#redbulls');
      };
      if (theDrink._cupSize != '') {
        cupSizeNum.innerHTML = theDrink._cupSize;
        toggleDisplay('#cupSize');
      };
      if (theDrink._cOz != '') {
        cOzNum.innerHTML = theDrink._cOz;
        toggleDisplay('#cOz');
      };
      if (theDrink._wOz != '') {
        wOzNum.innerHTML = theDrink._wOz;
        toggleDisplay('#wOz');
      };
    } /*else {
      let theDrink = this.list._name[name];
      drinkTitle.innerHTML = `${theDrink._size} ${theDrink._temp} ${theDrink._name}`;
      drinkType.innerHTML = theDrink._type;
      if (theDrink._shots != '') {
        shotsNum.innerHTML = theDrink._shots;
      };
      if (theDrink._pumps != '') {
        pumpsNum.innerHTML = theDrink._pumps;
      };
      if (theDrink._pumps2 != '') {
        pumps2Num.innerHTML = theDrink._pumps2;
      };
      if (theDrink._scoops != '') {
        scoopsNum.innerHTML = theDrink._scoops;
      };
      if (theDrink._redbulls != '') {
        redbullsNum.innerHTML = theDrink._redbulls;
      };
      if (theDrink._cupSize != '') {
        cupSizeNum.innerHTML = theDrink._cupSize;
      };
      if (theDrink._cOz != '') {
        cOz.innerHTML = theDrink._cOz;
      };
      if (theDrink._wOz != '') {
        wOz.innerHTML = theDrink._wOz;
      };
    }*/
  }
  checker() {
    if (shotsCheckerBox.value == shotsNum.innerHTML) {
      shotsCheckerBox.style.backgroundColor = '#33ee33';
    } else {
      shotsCheckerBox.style.backgroundColor = '#ee3333';
    };
    if (flavor1CheckerBox.value != flavor2CheckerBox.value) {
      if (flavor1CheckerBox.value == flavor1Num.innerHTML || flavor2Num.innerHTML) {
        flavor1CheckerBox.style.backgroundColor = '#33ee33';
      } else {
        flavor1CheckerBox.style.backgroundColor = '#ee3333';
      };
    };
    if (pumpsCheckerBox.value == pumpsNum.innerHTML) {
      pumpsCheckerBox.style.backgroundColor = '#33ee33';
    } else {
      pumpsCheckerBox.style.backgroundColor = '#ee3333';
    };
    if (flavor2CheckerBox.value != flavor1CheckerBox.value) {
      if (flavor2CheckerBox.value == flavor2Num.innerHTML) {
        flavor2CheckerBox.style.backgroundColor = '#33ee33';
      } else {
        flavor2CheckerBox.style.backgroundColor = '#ee3333';
      };
    };
    if (pumps2CheckerBox.value == pumps2Num.innerHTML) {
      pumps2CheckerBox.style.backgroundColor = '#33ee33';
    } else {
      pumps2CheckerBox.style.backgroundColor = '#ee3333';
    };
    if (scoopsCheckerBox.value == scoopsNum.innerHTML) {
      scoopsCheckerBox.style.backgroundColor = '#33ee33';
    } else {
      scoopsCheckerBox.style.backgroundColor = '#ee3333';
    };
    if (redbullsCheckerBox.value == redbullsNum.innerHTML) {
      redbullsCheckerBox.style.backgroundColor = '#33ee33';
    } else {
      redbullsCheckerBox.style.backgroundColor = '#ee3333';
    };
    if (cupSizeCheckerBox.value == cupSizeNum.innerHTML) {
      cupSizeCheckerBox.style.backgroundColor = '#33ee33';
    } else {
      cupSizeCheckerBox.style.backgroundColor = '#ee3333';
    };
    if (cOzCheckerBox.value == cOzNum.innerHTML) {
      cOzCheckerBox.style.backgroundColor = '#33ee33';
    } else {
      cOzCheckerBox.style.backgroundColor = '#ee3333';
    };
    if (wOzCheckerBox.value == wOzNum.innerHTML) {
      wOzCheckerBox.style.backgroundColor = '#33ee33';
    } else {
      wOzCheckerBox.style.backgroundColor = '#ee3333';
    };
  }
  answer() {
    shotsCheckerBox.placeholder = ` ${shotsNum.innerHTML}`;
    flavor1CheckerBox.placeholder = ` ${flavor1Num.innerHTML}`;
    pumpsCheckerBox.placeholder = ` ${pumpsNum.innerHTML}`;
    flavor2CheckerBox.placeholder = ` ${flavor2Num.innerHTML}`;
    pumps2CheckerBox.placeholder = ` ${pumps2Num.innerHTML}`;
    scoopsCheckerBox.placeholder = ` ${scoopsNum.innerHTML}`;
    redbullsCheckerBox.placeholder = ` ${redbullsNum.innerHTML}`;
    cupSizeCheckerBox.placeholder = `${cupSizeNum.innerHTML}`;
    cOzCheckerBox.placeholder = ` ${cOzNum.innerHTML}`;
    wOzCheckerBox.placeholder = ` ${wOzNum.innerHTML}`;
  }
}

function toggleDisplay(x) {
  let disp = document.querySelector(x);
  if (disp.style.display === 'none') {
    disp.style.display = 'flex';
  } else {
    disp.style.display = 'none';
  };
}

function resetDisplay(x) {
  let disp = document.querySelector(x);
  disp.style.display = 'none';
}

function resetContent() {
  shotsCheckerBox.value = '';
  shotsCheckerBox.style.backgroundColor = '#aaaacc';
  shotsCheckerBox.placeholder = '';
  shots.style.display = 'none';
  flavor1CheckerBox.value = '';
  flavor1CheckerBox.style.backgroundColor = '#aaaacc';
  flavor1CheckerBox.placeholder = '';
  flavor1.style.display = 'none';
  pumpsCheckerBox.value = '';
  pumpsCheckerBox.style.backgroundColor = '#aaaacc';
  pumpsCheckerBox.placeholder = '';
  pumps.style.display = 'none';
  flavor2CheckerBox.value = '';
  flavor2CheckerBox.style.backgroundColor = '#aaaacc';
  flavor2CheckerBox.placeholder = '';
  flavor2.style.display = 'none';
  pumps2CheckerBox.value = '';
  pumps2CheckerBox.style.backgroundColor = '#aaaacc';
  pumps2CheckerBox.placeholder = '';
  pumps2.style.display = 'none';
  scoopsCheckerBox.value = '';
  scoopsCheckerBox.style.backgroundColor = '#aaaacc';
  scoopsCheckerBox.placeholder = '';
  scoops.style.display = 'none';
  redbullsCheckerBox.value = '';
  redbullsCheckerBox.style.backgroundColor = '#aaaacc';
  redbullsCheckerBox.placeholder = '';
  redbulls.style.display = 'none';
  cupSizeCheckerBox.value = '';
  cupSizeCheckerBox.style.backgroundColor = '#aaaacc';
  cupSizeCheckerBox.placeholder = '';
  cupSize.style.display = 'none';
  cOzCheckerBox.value = '';
  cOzCheckerBox.style.backgroundColor = '#aaaacc';
  cOzCheckerBox.placeholder = '';
  cOz.style.display = 'none';
  wOzCheckerBox.value = '';
  wOzCheckerBox.style.backgroundColor = '#aaaacc';
  wOzCheckerBox.placeholder = '';
  wOz.style.display = 'none';
}

//menu
let list = new drinkList();

//Lattes
let sHLatte = new beverage("Latte", "Latte", "Small", "Hot", 2, "", "", "", "", "", "", 12, "", "");
list.add(sHLatte);
let mHLatte = new beverage("Latte", "Latte", "Medium", "Hot", 2, "", "", "", "", "", "", 16, "", "");
list.add(mHLatte);
let lHLatte = new beverage("Latte", "Latte", "Large", "Hot", 4, "", "", "", "", "", "", 20, "", "");
list.add(lHLatte);
let xLHLatte = new beverage("Latte", "Latte", "Extra Large", "Hot", 4, "", "", "", "", "", "", 24, "", "");
list.add(xLHLatte);
let sILatte = new beverage("Latte", "Latte", "Small", "Iced", 2, "", "", "","", "", "", 16, "", 10);
list.add(sILatte);
let mILatte = new beverage("Latte", "Latte", "Medium", "Iced", 2, "", "","","", "", "", 20, "", 12);
list.add(mILatte);
let lILatte = new beverage("Latte", "Latte", "Large", "Iced", 3, "", "","","", "", "", 24, "", 16);
list.add(lILatte);
let sFLatte = new beverage("Latte", "Latte", "Small", "Frozen", 6, "", "","","", "", "", 16, "", "");
list.add(sFLatte);
let mFLatte = new beverage("Latte", "Latte", "Medium", "Frozen", 8, "", "", "","", "", "", 20, "", "");
list.add(mFLatte);
let lFLatte = new beverage("Latte", "Latte", "Large", "Frozen", 10, "", "","","", "", "", 24, "", "");
list.add(lFLatte);

//Single-Flavored Lattes
let sHSLatte = new beverage("Latte", "Single-Flavored Latte", "Small", "Hot", 2, "", 2, "", "", "","",12,"","");
list.add(sHSLatte);
let mHSLatte = new beverage("Latte", "Single-Flavored Latte", "Medium", "Hot", 2, "", 3, "", "", "","",16,"","");
list.add(mHSLatte);
let lHSLatte = new beverage("Latte", "Single-Flavored Latte", "Large", "Hot", 4, "", 4, "", "", "","",20,"","");
list.add(lHSLatte);
let xLHSLatte = new beverage("Latte", "Single-Flavored Latte", "Extra Large", "Hot", 4, "", 5, "", "", "","",24,"","");
list.add(xLHSLatte);
let sISLatte = new beverage("Latte", "Single-Flavored Latte", "Small", "Iced", 2, "", 2, "", "", "", "", 16, "", 10);
list.add(sISLatte);
let mISLatte = new beverage("Latte", "Single-Flavored Latte", "Medium", "Iced", 2, "", 3, "", "", "", "", 20, "", 12);
list.add(mISLatte);
let lISLatte = new beverage("Latte", "Single-Flavored Latte", "Large", "Iced", 3, "", 4, "", "", "", "", 24, "", 16);
list.add(lISLatte);
let sFSLatte = new beverage("Latte", "Single-Flavored Latte", "Small", "Frozen", 6, "", 3, "", "", "", "", 16, "", "");
list.add(sFSLatte);
let mFSLatte = new beverage("Latte", "Single-Flavored Latte", "Medium", "Frozen", 8, "", 4, "", "", "", "", 20, "", "");
list.add(mFSLatte);
let lFSLatte = new beverage("Latte", "Single-Flavored Latte", "Large", "Frozen", 10, "", 5, "", "", "", "", 24, "", "");
list.add(lFSLatte);

//Double-Flavor Lattes
let sHDLatte = new beverage("Latte", "Double-Flavored Latte", "Small", "Hot", 2, "", 1.5, "", 1.5, "", "",12,"", "");
list.add(sHDLatte);
let mHDLatte = new beverage("Latte", "Double-Flavored Latte", "Medium", "Hot", 2, "", 2, "", 2, "","",16,"","");
list.add(mHDLatte);
let lHDLatte = new beverage("Latte", "Double-Flavored Latte", "Large", "Hot", 4, "", 3, "", 3, "","",20,"","");
list.add(lHDLatte);
let xLHDLatte = new beverage("Latte", "Double-Flavored Latte", "Extra Large", "Hot", 4, "", 3.5, "", 3.5, "","",24,"","");
list.add(xLHDLatte);
let sIDLatte = new beverage("Latte", "Double-Flavored Latte", "Small", "Iced", 2, "", 1.5, "", 1.5, "", "", 16, "", 10);
list.add(sIDLatte);
let mIDLatte = new beverage("Latte", "Double-Flavored Latte", "Medium", "Iced", 2, "", 2, "", 2, "", "", 20, "", 12);
list.add(mIDLatte);
let lIDLatte = new beverage("Latte", "Double-Flavored Latte", "Large", "Iced", 3, "", 3, "", 3, "", "", 24, "", 16);
list.add(lIDLatte);
let sFDLatte = new beverage("Latte", "Double-Flavored Latte", "Small", "Frozen", 6, "", 2, "", 2, "", "", 16, "", "");
list.add(sFDLatte);
let mFDLatte = new beverage("Latte", "Double-Flavored Latte", "Medium", "Frozen", 8, "", 3, "", 3, "", "", 20, "", "");
list.add(mFDLatte);
let lFDLatte = new beverage("Latte", "Double-Flavored Latte", "Large", "Frozen", 10, "", 3.5, "", 3.5, "", "", 24, "", "");
list.add(lFDLatte);

//Mocha Lattes
let sHMocha = new beverage("Mocha", "Mocha", "Small", "Hot", 2, "", "", "", "", 2, "", 12, "", "");
list.add(sHMocha);
let mHMocha = new beverage("Mocha", "Mocha", "Medium", "Hot", 2, "", "", "", "", 2.5, "", 16, "", "");
list.add(mHMocha);
let lHMocha = new beverage("Mocha", "Mocha", "Large", "Hot", 4, "", "", "", "", 3, "", 20, "", "");
list.add(lHMocha);
let xLHMocha = new beverage("Mocha", "Mocha", "Extra Large", "Hot", 4, "", "", "", "", 3.5, "", 24, "", "");
list.add(xLHMocha);
let sIMocha = new beverage("Mocha", "Mocha", "Small", "Iced", 2, "", "", "", "", 2, "", 16, "", 10);
list.add(sIMocha);
let mIMocha = new beverage("Mocha", "Mocha", "Medium", "Iced", 2, "", "", "", "", 2.5, "", 20, "", 12);
list.add(mIMocha);
let lIMocha = new beverage("Mocha", "Mocha", "Large", "Iced", 3, "", "", "", "", 3, "", 24, "", 16);
list.add(lIMocha);
let sFMocha = new beverage("Mocha", "Mocha", "Small", "Frozen", 6, "", "", "", "", 2.5, "", 16, "", "");
list.add(sFMocha);
let mFMocha = new beverage("Mocha", "Mocha", "Medium", "Frozen", 8, "", "", "", "", 3, "", 20, "", "");
list.add(mFMocha);
let lFMocha = new beverage("Mocha", "Mocha", "Large", "Frozen", 10, "", "", "", "", 3.5, "", 24, "", "");
list.add(lFMocha);

//Single-Flavored Mochas
let sHSMocha = new beverage("Mocha", "Single-Flavored Mocha", "Small", "Hot", 2, "", 1, "", "", 2,"",12,"","");
list.add(sHSMocha);
let mHSMocha = new beverage("Mocha", "Single-Flavored Mocha", "Medium", "Hot", 2, "", 2, "", "", 2.5,"",16,"","");
list.add(mHSMocha);
let lHSMocha = new beverage("Mocha", "Single-Flavored Mocha", "Large", "Hot", 4, "", 3, "", "", 3,"",20,"","");
list.add(lHSMocha);
let xLHSMocha = new beverage("Mocha", "Single-Flavored Mocha", "Extra Large", "Hot", 4, "", 4, "", "", 3.5,"",24,"","");
list.add(xLHSMocha);
let sISMocha = new beverage("Mocha", "Single-Flavored Mocha", "Small", "Iced", 2, "", 1, "", "", 2, "", 16, "", 10);
list.add(sISMocha);
let mISMocha = new beverage("Mocha", "Single-Flavored Mocha", "Medium", "Iced", 2, "", 2, "", "", 2.5, "", 20, "", 12);
list.add(mISMocha);
let lISMocha = new beverage("Mocha", "Single-Flavored Mocha", "Large", "Iced", 3, "", 3, "", "", 3, "", 24, "", 16);
list.add(lISMocha);
let sFSMocha = new beverage("Mocha", "Single-Flavored Mocha", "Small", "Frozen", 6, "", 2, "", "", 2.5, "", 16, "", "");
list.add(sFSMocha);
let mFSMocha = new beverage("Mocha", "Single-Flavored Mocha", "Medium", "Frozen", 8, "", 3, "", "", 3, "", 20, "", "");
list.add(mFSMocha);
let lFSMocha = new beverage("Mocha", "Single-Flavored Mocha", "Large", "Frozen", 10, "", 4, "", "", 3.5, "", 24, "", "");
list.add(lFSMocha);

//Double-Flavor Mochas
let sHDMocha = new beverage("Mocha", "Double-Flavored Mocha", "Small", "Hot", 2, "", .5, "", .5, 2,"",12,"","");
list.add(sHDMocha);
let mHDMocha = new beverage("Mocha", "Double-Flavored Mocha", "Medium", "Hot", 2, "", 1, "", 1, 2.5,"",16,"","");
list.add(mHDMocha);
let lHDMocha = new beverage("Mocha", "Double-Flavored Mocha", "Large", "Hot", 4, "", 1.5, "", 1.5, 3,"",20,"","");
list.add(lHDMocha);
let xLHDMocha = new beverage("Mocha", "Double-Flavored Mocha", "Extra Large", "Hot", 4, "", 2, "", 2, 3.5,"",24,"","");
list.add(xLHDMocha);
let sIDMocha = new beverage("Mocha", "Double-Flavored Mocha", "Small", "Iced", 2, "", .5, "", .5, 2, "", 16, "", 10);
list.add(sIDMocha);
let mIDMocha = new beverage("Mocha", "Double-Flavored Mocha", "Medium", "Iced", 2, "", 1, "", 1, 2.5, "", 20, "", 12);
list.add(mIDMocha);
let lIDMocha = new beverage("Mocha", "Double-Flavored Mocha", "Large", "Iced", 3, "", 1.5, "", 1.5, 3, "", 24, "", 16);
list.add(lIDMocha);
let sFDMocha = new beverage("Mocha", "Double-Flavored Mocha", "Small", "Frozen", 6, "", 1, "", 1, 2.5, "", 16, "", "");
list.add(sFDMocha);
let mFDMocha = new beverage("Mocha", "Double-Flavored Mocha", "Medium", "Frozen", 8, "", 1.5, "", 1.5, 3, "", 20, "", "");
list.add(mFDMocha);
let lFDMocha = new beverage("Mocha", "Double-Flavored Mocha", "Large", "Frozen", 10, "", 2, "", 2, 3.5, "", 24, "", "");
list.add(lFDMocha);

//Tea Lattes
//Chai
let sHChaiLatte = new beverage("Chai Latte", "Tea Latte", "Small", "Hot", "", "", "", "", "", 3, "", 12, "", "");
list.add(sHChaiLatte);
let mHChaiLatte = new beverage("Chai Latte", "Tea Latte", "Medium", "Hot", "", "", "", "", "", 4, "", 16, "", "");
list.add(mHChaiLatte);
let lHChaiLatte = new beverage("Chai Latte", "Tea Latte", "Large", "Hot", "", "", "", "", "", 5, "", 20, "", "");
list.add(lHChaiLatte);
let xLHChaiLatte = new beverage("Chai Latte", "Tea Latte", "Extra Large", "Hot", "", "", "", "", "", 6, "", 24, "", "");
list.add(xLHChaiLatte);
let sIChaiLatte = new beverage("Chai Latte", "Tea Latte", "Small", "Iced", "", "", "", "", "", 3, "", 16, "", 10);
list.add(sIChaiLatte);
let mIChaiLatte = new beverage("Chai Latte", "Tea Latte", "Medium", "Iced", "", "", "", "", "", 4, "", 20, "", 12);
list.add(mIChaiLatte);
let lIChaiLatte = new beverage("Chai Latte", "Tea Latte", "Large", "Iced", "", "", "", "", "", 5, "", 24, "", 16);
list.add(lIChaiLatte);
let sFChaiLatte = new beverage("Chai Latte", "Tea Latte", "Small", "Frozen", "", "", "", "", "", 4, "", 16, "", "");
list.add(sFChaiLatte);
let mFChaiLatte = new beverage("Chai Latte", "Tea Latte", "Medium", "Frozen", "", "", "", "", "", 5, "", 20, "", "");
list.add(mFChaiLatte);
let lFChaiLatte = new beverage("Chai Latte", "Tea Latte", "Large", "Frozen", "", "", "", "", "", 6, "", 24, "", "");
list.add(lFChaiLatte);
//Matcha
let sHMatchaLatte = new beverage("Matcha Latte", "Tea Latte", "Small", "Hot", "", "", "", "", "", 3, "", 12, "", "");
list.add(sHMatchaLatte);
let mHMatchaLatte = new beverage("Matcha Latte", "Tea Latte", "Medium", "Hot", "", "", "", "", "", 4, "", 16, "", "");
list.add(mHMatchaLatte);
let lHMatchaLatte = new beverage("Matcha Latte", "Tea Latte", "Large", "Hot", "", "", "", "", "", 5, "", 20, "", "");
list.add(lHMatchaLatte);
let xLHMatchaLatte = new beverage("Matcha Latte", "Tea Latte", "Extra Large", "Hot", "", "", "", "", "", 6, "", 24, "", "");
list.add(xLHMatchaLatte);
let sIMatchaLatte = new beverage("Matcha Latte", "Tea Latte", "Small", "Iced", "", "", "", "", "", 3, "", 16, "", 10);
list.add(sIMatchaLatte);
let mIMatchaLatte = new beverage("Matcha Latte", "Tea Latte", "Medium", "Iced", "", "", "", "", "", 4, "", 20, "", 12);
list.add(mIMatchaLatte);
let lIMatchaLatte = new beverage("Matcha Latte", "Tea Latte", "Large", "Iced", "", "", "", "", "", 5, "", 24, "", 16);
list.add(lIMatchaLatte);
let sFMatchaLatte = new beverage("Matcha Latte", "Tea Latte", "Small", "Frozen", "", "", "", "", "", 4, "", 16, "", "");
list.add(sFMatchaLatte);
let mFMatchaLatte = new beverage("Matcha Latte", "Tea Latte", "Medium", "Frozen", "", "", "", "", "", 5, "", 20, "", "");
list.add(mFMatchaLatte);
let lFMatchaLatte = new beverage("Matcha Latte", "Tea Latte", "Large", "Frozen", "", "", "", "", "", 6, "", 24, "", "");
list.add(lFMatchaLatte);

//named drinks
let sHSnickers = new beverage("Snickers", "Double-Flavor Mocha", "Small", "Hot", 2, "Caramel", .5, "Peanut Butter", .5, 2, "", 12, "", "");
list.add(sHSnickers);
let mHSnickers = new beverage("Snickers", "Double-Flavor Mocha", "Medium", "Hot", 2, "Caramel", 1, "Peanut Butter", 1, 2.5, "", 16, "", "");
list.add(mHSnickers);
let lHSnickers = new beverage("Snickers", "Double-Flavor Mocha", "Large", "Hot", 4, "Caramel", 1.5, "Peanut Butter", 1.5, 3, "", 20, "", "");
list.add(lHSnickers);
let xLHSnickers = new beverage("Snickers", "Double-Flavor Mocha", "Extra Large", "Hot", 4, "Caramel", 2, "Peanut Butter", 2, 3.5, "", 24, "", "");
list.add(xLHSnickers);
let sISnickers = new beverage("Snickers", "Double-Flavor Mocha", "Small", "Iced", 2, "Caramel", .5, "Peanut Butter", .5, 2, "", 16, "", 10);
list.add(sISnickers);
let mISnickers = new beverage("Snickers", "Double-Flavor Mocha", "Medium", "Iced", 2, "Caramel", 1, "Peanut Butter", 1, 2.5, "", 20, "", 12);
list.add(mISnickers);
let lISnickers = new beverage("Snickers", "Double-Flavor Mocha", "Large", "Iced", 3, "Caramel", 1.5, "Peanut Butter", 1.5, 3, "", 24, "", 16);
list.add(lISnickers);
let sFSnickers = new beverage("Snickers", "Double-Flavor Mocha", "Small", "Frozen", 6, "Caramel", 1, "Peanut Butter", 1, 2.5, "", 16, "", "");
list.add(sFSnickers);
let mFSnickers = new beverage("Snickers", "Double-Flavor Mocha", "Medium", "Frozen", 8, "Caramel", 1.5, "Peanut Butter", 1.5, 3, "", 20, "", "");
list.add(mFSnickers);
let lFSnickers = new beverage("Snickers", "Double-Flavor Mocha", "Large", "Frozen", 10, "Caramel", 2, "Peanut Butter", 2, 3.5, "", 24, "", "");
list.add(lFSnickers);

//buttons
drinkBtn.addEventListener('click', () => {
  toggleDisplay('#drinkDisplay');
  resetContent();
  list.display("random");
});
drinkBtn.addEventListener('dblclick', () => {
  toggleDisplay('#drink');
});

newDrinkBtn.addEventListener('click', () => {
  resetContent();
  list.display("random");
});

checkerBtn.addEventListener('click', () => {
  list.checker();
});

answerBtn.addEventListener('click', () => {
  list.answer();
});