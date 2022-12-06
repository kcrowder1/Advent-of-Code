const fs = require('fs');

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

//part 1 text
// move 1 from 2 to 1
// move 3 from 1 to 3
// move 2 from 2 to 1
// move 1 from 1 to 2

fs.readFile(
  //this is a file that contains the steps that must be taken
  'C:/Users/kccla/Documents/GitHub/Advent of Code/day5_supply_stacks_text.txt',
  'utf-8',
  (err, data) => {
    // asignment of 'arr' is just splitting up those steps into individual
    // lines, each line being a step
    const arr = data.split(/\r?\n/);
    // now loop through each step applying this code to each step
    arr.map((x, i) => {
      //this grabs the numbers in each step
      //qty is the number of containers to grab
      //startStack is which stack we are pulling from
      //endStack is where we are placing them
      const [m, qty, startStack, endStack] = x.match(
        /move (\d{1,2}) from (\d{1,2}) to (\d{1,2})/
      );

      //part 1:
      //this is a loop, its saying, starting with 0 go through this code
      //block, after each time increase by 1, until you have reached
      //the number assigned to quantity
      // for (let z = 0; z < qty; z++) {
      //this is using the endStack variable and subtracting 1 so
      //it becomes an index value
      //its getting a container pushed on to it from the stack
      //indexed by the startStack variable
      //.pop() just pushes the last item in this list off
      //so in all this just takes one container off the start stack
      //then places it on the end stack

      //   console.log(
      //     'step(map loop) ' +
      //       (i + 1) +
      //       '\nquantity(for loop) ' +
      //       (z + 1) +
      //       ':\n',
      //     startingStack
      //   );
      //   startingStack[endStack - 1].push(startingStack[startStack - 1].pop());
      //   console.log(
      //     'after step(map loop) ' +
      //       (i + 1) +
      //       '\nquantity(for loop) ' +
      //       (z + 1) +
      //       ':\n',
      //     startingStack
      //   );
      //   console.log('');
      // }

      // part 2:
      startingStack[endStack - 1].push(
        ...startingStack[startStack - 1].splice(
          startingStack[startStack - 1].length - qty
        )
      );

      if (i === arr.length - 1) {
        //once we have looped through all the steps,
        //grab the container on the end of the stack
        //and print out all the names without spaces between
        console.log(startingStack.map((x) => x.reverse()[0]).join(''));
      }
      //   console.log(stack);
    });
  }
);
