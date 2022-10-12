let birthYear = 1991;
let futureYear = 2022;
let birthMonth = 4;
let futureMonth = 12;
let ageBeforeBirthday = futureYear-birthYear-1;
let ageAfterBirthday = futureYear-birthYear;


if(futureMonth < birthMonth){
    document.write('You will be ' + ageBeforeBirhtday + ' in ' + futureYear);
} else {
    document.write('You will be ' + ageAfterBirthday + ' in ' + futureYear)
}