exports.onLoadedMain = args => {
  const page = args.object
  page.bindingContext ={
    message: "Welcome to Nustaglia, please select event type:"
  }
}

/* Birthday Button On Tap function */
exports.onBirthdayTap = args => {
  const button = args.object
  const page = button.page
  page.frame.navigate('1-birthdayName')   /* page.frame.navigate('page2','.\page2\page2') */
}

/* Milestone Button On Tap function */
exports.onMilestoneTap = args => {
alert('Sorry babycakes, your clown friend has yet to add functionality here :(')
}

/* Marriage Button On Tap function */
exports.onMarriageTap = args => {
  alert('Sorry darling, V has yet to add functionality here ):')
}


