function verifyBookNumber(str) {
  const isIsbnTen = (str) => {
    const sum = str
      .split('')
      .map((val, ind) => (10 - ind) * val)
      .reduce((prev, curr) => prev + curr);
    return sum % 11 == 0;
  };

  const sumIsbn13 = (str) => {
    return str
      .split('')
      .map((val, ind) =>
        ind % 2 == 0 ? parseFloat(val) * 1 : parseFloat(val) * 3,
      )
      .reduce((prev, curr) => prev + curr);
  };

  const isIsbnThirteen = (str) => {
    return sumIsbn13(str) % 10 == 0;
  };

  const convertToThirteen = (str) => {
    const isbn13 = '978' + str;
    let slicedIsbn = isbn13.slice(0, isbn13.length - 1);
    for (let i = 0; i <= 9; i++) {
      let sampleIsbn = slicedIsbn + i.toString();
      if (isIsbnThirteen(sampleIsbn)) {
        return sampleIsbn;
      } else continue;
    }
  };

  if (str.length == 13) {
    return isIsbnThirteen(str) ? 'Valid' : 'Invalid';
  } else if (str.length == 10) {
    return isIsbnTen(str) ? convertToThirteen(str) : 'Invalid';
  } else return 'Invalid';
}

module.exports = { verifyBookNumber };
