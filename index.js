console.clear();

// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. 

console.log('--1--');

const a = 2;
const b = 2;

if (a > b) {
  console.log('A didesnis uz B');
} else if (a < b) {
  console.log('A mazesnis uz B');
} else if (a === b) {
  console.log('A lygus B');
}

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. 

console.log('--2--');

for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.

console.log('--3--');

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje.

console.log('--4--');

for (let i = 0; i < 5; i++) {
    let number = Math.floor(Math.random() * 10) + 1;
    console.log(number);
  }

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.

console.log('--5--');

let number;
while (number !== 5) {
  number = Math.floor(Math.random() * 10) + 1;
  console.log(number);
}

// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

console.log('--6--');

let min = 10;
let max = 30;
let ilgis = Math.floor(Math.random() * (30 - 20) + 20);
let masyvas = [];
let maxReiksme = min;

for (let i = 0; i < ilgis; i++) {
  let reiksme = Math.floor(Math.random() * (max - min + 1)) + min;
  masyvas.push(reiksme);
}

for (let i = 0; i < masyvas.length; i++) {
  if (masyvas[i] > maxReiksme) {
    maxReiksme = masyvas[i];
  }
}

console.log(masyvas, 'Biggest:', maxReiksme);

// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

console.log('--7--');

const objektas = {
  A:1,
  B:2,
  C:3,
  D:4,
}
let minLetter = 1;
let maxLetter = 4;
let ilgisLetter = 100
let masyvasLetter = [];

for (let i = 0; i < 100; i++) {
  let reiksme = Math.floor(Math.random() * (maxLetter - minLetter + 1)) + minLetter;
  masyvasLetter.push(reiksme);
}

let daznis = {};
for(let i=0; i<masyvasLetter.length; i++ ){
const number = masyvasLetter[i];
if(daznis[number]){
  daznis[number]++;
} else {
daznis[number] = 1;
  }
} 

let objektasABCD = {};
for (let reiksme in objektas) {
  objektasABCD[reiksme] = daznis[objektas[reiksme]];
}



console.log(masyvasLetter);
console.log(daznis);
console.log(objektasABCD);

console.log('--8--');

// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

function lygineSuma(a,b){
  if(typeof a === 'number' && typeof b === 'number'){
    if ( (a+b)%2 !==0){
      return 'Suma nelyginė'
    }
    return a+b
  }
  if(Array.isArray(a) && Array.isArray(b)){
    return a.length+b.length
  }

  return  'Abu kitamieji turi būti arba skaičiai arba masyvai'

}

console.log(lygineSuma(2,4));
console.log(lygineSuma(2,5));
console.log(lygineSuma([2],[4]));
console.log(lygineSuma([2],[4,5]));
console.log(lygineSuma(2,[4]));
console.log(lygineSuma([2],4));

// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)

console.log('--9--');

function pirminisSkaicius(skaicius) {
    if (typeof skaicius !== 'number') {
      return 'Ne skaicius';
    }
  
    if (skaicius <= 1) {
      return 'Ne';
    }
  
    for (let i = 2; i < skaicius; i++) {
      if (skaicius % i === 0) {
        return 'Ne';
      }
    }
  
    return 'Taip';
  }
  
  console.log(pirminisSkaicius(7)); // Taip
  console.log(pirminisSkaicius(12)); // Ne
  console.log(pirminisSkaicius(1)); // Ne
  console.log(pirminisSkaicius(0)); // Ne
  console.log(pirminisSkaicius(-5)); // Ne
  console.log(pirminisSkaicius('10')); // Neskaicius

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX". (10 taškų)

console.log('--10--');

function telefonoNumeris(masyvas) {
    let numeris = '';
    if (!Array.isArray(masyvas)) {
      return 'Ne masyvas';
    }
  
    if (masyvas.length !== 10) {
      return 'Neturi';
    }
  
    for (let i = 0; i < masyvas.length; i++) {
      let skaicius = masyvas[i];

      if (typeof masyvas[i] !== 'number') {
        return 'Ne skaiciai';
      }
      if(i === 0){
        numeris += '(' + skaicius;
        continue;
      }
      if(i === 2){
        numeris += skaicius + ') ';
        continue;
      }
      if(i === 5){
        numeris += skaicius + '-';
        continue;
      }
      numeris += skaicius;
    }
  
    


  
    return numeris;
  }
  
  console.log(telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // (123) 456-7890
  console.log(telefonoNumeris([9, 8, 7, 6, 5, 4, 3, 2, 1, 0])); // (987) 654-3210
  console.log(telefonoNumeris([1, 2, 3, 4, 5, 6, 7, 8])); // Neturi
  console.log(telefonoNumeris("1234567890")); // Ne masyvas
  console.log(telefonoNumeris([1, 2, 3, "X", 5, 6, 7, 8, 9, 0])); // Ne skaiciai
  