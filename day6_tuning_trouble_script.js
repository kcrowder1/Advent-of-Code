const fs = require('fs');

fs.readFile(
  //this is a file that contains the steps that must be taken
  'C:/Users/kccla/Documents/GitHub/Advent of Code/day6_tuning_trouble_text.txt',
  'utf-8',
  (err, data) => {
    // const buff = 'mjqjpqmgbljsphdztnvjfqwrcgsmlb'.match(/(\w)/g);
    const buff = data.match(/(\w)/g);

    // part1:
    // const buffSize = 4;
    const buffSize = 14;

    const chunks = buff.map((x, i) => {
      const chunk = [];
      for (let z = 0; z < buffSize; z++) {
        chunk.push(buff[i + z]);
      }
      return chunk;
    });

    const result = chunks.map((x, i) => {
      for (let y = 0; y < x.length; y++) {
        for (let z = y + 1; z < x.length; z++) {
          if (x[y] === x[z]) {
            return null;
          }
        }
      }
      return i + buffSize;
    });
    return console.log(result.find((x) => parseInt(x)));
  }
);
