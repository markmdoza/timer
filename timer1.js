const args = process.argv.slice(2);

// Process each argument
args.forEach((arg) => {
// Parse argument as an integer
  const time = parseInt(arg, 10);

// Check if the parsed value is a number and is positive
  if (!isNaN(time) && time >= 0) {
    // Schedule a beep using setTimeout
    setTimeout(() => {
      process.stdout.write('.');
    }, time * 1000);
  }
});

// process.stdout.write('\x07'); testing MacOS beep.