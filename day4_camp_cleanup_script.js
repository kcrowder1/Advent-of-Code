const fs = require('fs');

fs.readFile(
  'C:/Users/kccla/Desktop/Advent of Code/day4_camp_cleanup_text.txt',
  'utf-8',
  (err, data) => {
    const arr = data.split(/\r?\n/);

    const result = [];

    arr.map((x, i) => {
      let [part1, part2] = x.split(',');

      part1 = part1.split('-').map((x) => parseInt(x));

      part2 = part2.split('-').map((x) => parseInt(x));

      // if (parseInt(part1[0]) > parseInt(part1[1])) {
      //   console.log(x);
      // }

      if (
        (part1[0] <= part2[0] && part1[1] >= part2[0]) ||
        (part1[0] <= part2[1] && part1[1] >= part2[1]) ||
        (part2[0] <= part1[0] && part2[1] >= part1[0]) ||
        (part2[0] <= part1[1] && part2[1] >= part1[1])
      ) {
        // console.log(x);
        result.push(x);
        return;
      }
    });

    console.log(result.length);
  }
);
