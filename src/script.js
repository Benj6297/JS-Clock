alert('JavaScript is working');
console.log('javascript is working');

// below is and example of creating and event listener and a function

// function

function awesome(someValueIsTrue) {
  //blue prints or assertion

  //if check
  if (someValueIsTrue) {
    return 'this value is true';
  } else {
    return 'this value is false';
  }
}
awesome(true); // will return "this value is true"

// the keywork "function" initializes the function. Then in the {} you define what should happen. the values inside the ()
// are to pass values to the function to use.

//another example

function useArgument(
  thisIsAnArgument,
  soIsThis,
  needToBe,
  separatedBy,
  commas,
) {
  console.log(thisIsAnArgument);
  console.log(soIsThis);
  console.log(needToBe);
  console.log(separatedBy);
  console.log(commas);
  console.log('you can have as many as you want');
}

useArgument(
  'also',
  "it doesn't",
  'matter',
  'what the argument is just that you as the developer are expecting it.',
  10,
);
// Once app is working go to browser right click select "inspect" then in dev console click console tag.
// the above can be deleted.

// Under here put the functionality for building a clock.
