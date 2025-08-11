// module.exports = function toReadable(number) {
//   // throw new Error('Not implemented');
//   const { length } = number.toString();

//   if (length === 3) {
//     console.log('3');
//   } else if (length === 2) {
//     console.log('2');
//   } else {
//     console.log('1');
//   }
// };

//!
function toReadable(number) {
  const hundreds = {
    1: 'one hundred',
    2: 'two hunderd',
    3: 'three hundred',
    4: 'four hundred',
    5: 'five hundred',
    6: 'six hundred',
    7: 'seven hundred',
    8: 'eight hundred',
    9: 'nine hundred',
  };
  const tens = {
    1: '',
    2: 'twenty',
    3: 'thirty',
    4: 'fourty',
    5: 'fifty',
    6: 'sixty',
    7: 'seventy',
    8: 'eighty',
    9: 'ninty',
  };
  const units = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  const { length } = number.toString();

  const tensNumber = number.toString()[2];
  const unitsNumber = number.toString()[1];
  const hundredsNumber = number.toString()[0];

  if (length === 3) {
    console.log('3');
  } else if (length === 2) {
    console.log(`${number}`);
  } else {
    console.log(units[number]);
  }
}

toReadable(1);
toReadable(25);
toReadable(589);
