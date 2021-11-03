const args = process.argv.slice(2);

const alarmClock = (beepWhen) => {
  let delay = beepWhen[0] * 1000;
  for (const i of beepWhen) {
    if (i > 0) {
      for (let i = 0; i < beepWhen.length; i++) {
        setTimeout(() => {
          process.stdout.write('\x07');
        }, delay);
        delay = beepWhen[i] * 1000;
      }
    } else if (isNaN(i)) {
      continue;
    } else if (args.length === 0) {
      continue;
    }
  }
};

alarmClock(args);