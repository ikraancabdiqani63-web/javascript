let dividedByZero = { divideByZeroisUndefined: 1 / 0 };
try {
  // var firstName =
  // console.log(firstName.toUpperCase())
  let numberofKids = 5;
  let numberofAdults = 0;
  var sum = numberofKids / numberofAdults;
  console.log({ sum: sum });
  throw new Error("This is a custom error");
} catch (error) {
  console.log({ error: error.message });
} finally {
  console.log(
    "This will always run regardless of whether an error was thrown or not.",
  );
}
