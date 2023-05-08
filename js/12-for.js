console.clear();

/*
FOR loop/ciklas
kartojame operacijas tol kol reikia, arba numtatyta kieki kartu
*/

const marks = [10, 2, 8, 4, 6];

console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);

let sum = 0;
let i = 0;

sum += marks[i++];
sum += marks[i++];
sum += marks[i++];
sum += marks[i++];
sum += marks[i++];
console.log(sum);

console.clear();
console.log('START');

const pazymiai = [10, 2, 8, 4, 6, 1, 3, 5, 7, 9];
const kasKelintas = 1;

for (let i = kasKelintas - 1; i < pazymiai.length; i += kasKelintas) {
    console.log(i, '-', pazymiai[i]);
}
console.log('-------');
for (let i = 0; i < pazymiai.length; i++) {
   if (i % kasKelintas === kasKelintas - 1) {
    console.log(i, '-', pazymiai[i]);
}
}

console.log('END');
