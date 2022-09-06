import timers from 'timers/promises';

for await (const startTime of timers.setInterval(1000, "ignored")) {
    console.log(`Start Timer at ${new Date}`);
}