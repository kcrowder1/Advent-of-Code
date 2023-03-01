const fs = require('fs');

fs.readFile(
  //this is a file that contains the steps that must be taken
  'C:/Users/kccla/Documents/GitHub/Advent of Code/day7_no_space_text.txt',
  'utf-8',
  (err, data) => {
    const cmd = data.split(/\n/);
    const d = {};
    let directory, file, size;

    for (let x = 0; x < cmd.length; x++) {
      if (cmd[x].match(/\$ cd \w|\//)) {
        directory = cmd[x].match(/\$ cd (\w|\/)/)[1];
      }
      if (cmd[x].match(/$ ls/)) {
        return;
      }
      if (cmd[x].match(/dir \w/)) {
        d[directory] = [];
        d[directory].push(cmd[x].match(/dir (\w)/)[1]);
        console.log(directory, cmd[x].match(/dir (\w)/)[1]);
      }
    }
    console.log(d);
  }
);
