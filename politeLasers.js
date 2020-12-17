function getLaserSetting(magicWord) {
    if (magicWord === 'please') {
      return 'OFF';
    } else {
    return 'ON';
  }
}

const x = getLaserSetting();
console.log('The current laser setting is: ' + x);
