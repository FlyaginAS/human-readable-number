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
  const tensIrr = {
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
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
  let unitsNumber;
  let tensNumber;
  let hundredsNumber;

  if (length === 3) {
    unitsNumber = number.toString()[2];
    tensNumber = number.toString()[1];
    hundredsNumber = number.toString()[0];
    console.log(
      `${hundreds[hundredsNumber]} ${tens[tensNumber]} ${units[unitsNumber]}`
    );
  } else if (length === 2) {
    // if (number.toString()[0] === "1") {
    //   console.log(tensIrr[number]);
    // } else {
    //   unitsNumber = number.toString()[1];
    //   tensNumber = number.toString()[0];
    //   if (unitsNumber === "0") {
    //     console.log(tens[tensNumber]);
    //   } else {
    //     console.log(`${tens[tensNumber]} ${units[unitsNumber]}`);
    //   }
    // }
    //!
    return toReadableTens(number);
  } else {
    // unitsNumber = number.toString()[0];

    // console.log(units[unitsNumber]);
    //!
    console.log(toReadableUnits(number));
    return toReadableUnits(number);
  }
  //*definitions************************************* */
  function toReadableUnits(number) {
    unitsNumber = number.toString()[0];
    return units[unitsNumber];
  }

  function toReadableTens(number) {
    if (number.toString()[0] === '1') {
      console.log(tensIrr[number]);
      return tensIrr[number];
    } else {
      unitsNumber = number.toString()[1];
      tensNumber = number.toString()[0];
      if (unitsNumber === '0') {
        console.log(tens[tensNumber]);
        return tens[tensNumber];
      } else {
        console.log(`${tens[tensNumber]} ${units[unitsNumber]}`);
        return `${tens[tensNumber]} ${units[unitsNumber]}`;
      }
    }
  }
}

toReadable(9);
toReadable(20);
toReadable(900);
