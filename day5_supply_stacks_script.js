const fs = require('fs');
const { start } = require('repl');

const startingStack = [
  ['R', 'S', 'L', 'F', 'Q'],
  ['N', 'Z', 'Q', 'G', 'P', 'T'],
  ['S', 'M', 'Q', 'B'],
  ['T', 'G', 'Z', 'J', 'H', 'C', 'B', 'Q'],
  ['P', 'H', 'M', 'B', 'N', 'F', 'S'],
  ['P', 'C', 'Q', 'N', 'S', 'L', 'V', 'G'],
  ['W', 'C', 'F'],
  ['Q', 'H', 'G', 'Z', 'W', 'V', 'P', 'M'],
  ['G', 'Z', 'D', 'L', 'C', 'N', 'R'],
];
//part 1
// [['Z', 'N'], ['M', 'C', 'D'], ['P']];

fs.readFile(
  'C:/Users/kccla/Documents/GitHub/Advent of Code/day5_supply_stacks_text.txt',
  'utf-8',
  (err, data) => {
    const arr = data.split(/\r?\n/);

    arr.map((x, i) => {
      const [m, qty, startStack, endStack] = x.match(
        /move (\d{1,2}) from (\d{1,2}) to (\d{1,2})/
      );

      // part 1:
      //   for (let i = 0; i < qty; i++) {
      //     startingStack[endStack - 1].push(startingStack[startStack - 1].pop());
      //   }

      //part 2:
      startingStack[endStack - 1].push(
        ...startingStack[startStack - 1].splice(
          startingStack[startStack - 1].length - qty
        )
      );

      if (i === arr.length - 1) {
        console.log(startingStack.map((x) => x.reverse()[0]).join(''));
      }
      //   console.log(stack);
    });
  }
);
