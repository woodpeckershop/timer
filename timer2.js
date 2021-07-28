const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding("utf8");

////////////
// Event Handling for User Input
////////////
let numKeyArr = ['1','2','3','4','5','6','7','8','9']
// on any input from stdin (standard input), output a "." to stdout
stdin.on("data", (key) => {
  if (key === "b") {
    process.stdout.write("\x07");
  } else if (numKeyArr.includes(key)) {
    process.stdout.write(`setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  } else if (key === "\u0003") {
    process.stdout.write('Thanks for using me, ciao! \n')
    process.exit();
  }
});
