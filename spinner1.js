process.stdout.write('hello from spinner1.js... \rheyyy\n');

setTimeout(() => {
  process.stdout.write('\r|  ');
}, 150);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 200);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 250);

setTimeout(() => {
<<<<<<< HEAD
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   ');
}, 300);
=======
  process.stdout.write('\r\\   '); 
}, 3000);
>>>>>>> 754a66aa36d3d9ea8cfd17f2b2dec568e98ed678

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 350);
