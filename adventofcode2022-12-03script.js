const fs = require('fs');

function createPriority(character) {
  const ascii = character.charCodeAt(0);

  if (ascii >= 65 && ascii <= 96) {
    return ascii - 38;
  }
  if (ascii >= 97 && ascii <= 122) {
    return ascii - 96;
  }
}

fs.readFile(
  'C:/Users/kccla/Desktop/Advent of Code/adventofcode2022-12-03text.txt',
  'utf-8',
  (err, data) => {
    const arr = data.split(/\r?\n/);

    const match = [];

    // arr.map((x) => {
    //   const firstHalf = x.slice(0, x.length / 2);
    //   const secondHalf = x.slice(x.length / 2);

    //   for (let i = 0; i < firstHalf.length; i++) {
    //     for (let z = 0; z < secondHalf.length; z++) {
    //       if (firstHalf[i] === secondHalf[z]) {
    //         return match.push(createPriority(firstHalf[i]));
    //       }
    //     }
    //   }
    // });

    arr.forEach((x, i) => {
      if (i % 3 === 0 || i === 0) {
        console.log(x);
        const elfOne = x;
        const elfTwo = arr[i + 1];
        const elfThree = arr[i + 2];

        for (let i = 0; i < elfOne.length; i++) {
          for (let z = 0; z < elfTwo.length; z++) {
            for (let y = 0; y < elfThree.length; y++) {
              if (elfOne[i] === elfTwo[z] && elfOne[i] === elfThree[y]) {
                // console.log(elfOne[i]);
                return match.push(createPriority(elfOne[i]));
              }
            }
          }
        }
      }
    });
    console.log(
      match.reduce((a, c) => {
        return (a += c);
      }, 0)
    );
  }
);
