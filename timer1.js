const args = process.argv.slice(2);
// function beep() {
if (args) {
     for (let arg of args) {
      if (arg >= 0) {
        setTimeout(() => {
          process.stdout.write("\x07");
        }, arg * 1000);
      }
    }
  }
// }

// beep(args);
