//Refactor the logic to remove the repeated setTimeout statements.

process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spins = ['\r|   ', '\r/   ', '\r-   ', '\r\\  '];


let timeOut = 200;
  for (let spin of spins) {
  setTimeout(() => {
    process.stdout.write(spin);
  }, timeOut += 200);
};



  // process.stdout.write('\r|   ');
  // process.stdout.write('\r/   ');
  // process.stdout.write('\r-   ');
  // process.stdout.write('\r\\  ');

