// The Debugger

// Use Colors Package
const colors = require('colors');
const fs = require('fs');

// console.log(colors.green(message));
function debug(info, status) {
  if (process.env.DEBUG === 'true') {
    if (status === 'success') {
      console.log(colors.green(info));
    } else if (status === 'error') {
      console.log(colors.red(info));
    }

    const date = new Date();
    const timestamp = '[' + date.toISOString() + '] ';

    console.log(timestamp + info, (err) => {
      if (err !== null) { // If there is an error, write the error to the log.
        console.error(err);
      }
    });
  }
}


//Version Number incrementer //Flavio B Cassini

exports.verNumberInc = (currentVersionNumber, change) => {
  const versionArray = currentVersionNumber.split('.');

  for(let versionIndex in versionArray) {
    versionArray[versionIndex] = parseInt(versionArray[versionIndex]);
  }

  if(change === 'major') {
      versionArray[0] += 1;
      versionArray[1] = 0;
      versionArray[2] = 0;
    } else if(change === 'minor') {
      versionArray[1] += 1;
      versionArray[2] = 0;
    } else if(change === 'patch') {
      versionArray[2] += 1;
    }

    return versionArray.join('.');
}



exports.debug = debug;
