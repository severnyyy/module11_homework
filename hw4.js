function getNumbers(num1, num2) {
  let current = num1;
	let interval = setInterval(function(){
      console.log(current);
      if (current === num2) {
        clearInterval(interval);
      }
      current++;
    }, 1000);
}
getNumbers(5, 15);