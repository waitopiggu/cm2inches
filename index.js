#!/usr/bin/env node
if (process.argv[2]) {
  const totalInches = process.argv[2] * 0.3937007874;
  const feet =  Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  console.log(`${feet}'${inches}"`);
}
