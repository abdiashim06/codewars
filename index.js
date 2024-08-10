function between(a, b) {
    let arr = []
    for(let i=a; i<=b; i++){
      arr.push(i)
    }
    return arr
  }

  console.log(between(1, 4)); // [1, 2, 3, 4]

  function sixToast(num) {
    return (num >= 6) ? num - 6 : num;
  }
  
  
  function shorter_reverse_longer(a, b) {

    return (a.length >= b.length) ?
      `${b}${a.split('').reverse().join('')}${b}`
      :
      `${a}${b.split('').reverse().join('')}${a}`
  }

  var replaceDots = function(str) {
    let cut = str.split('');
    return cut.map(a => a.replace('.','-')).join('')
  
  }
  replaceDots("one.two.three")

  function findMultiples(int, limit) {

    let arr = [];
    
      for (let i=int; i<=limit; i+=int){
        arr.push(i)
      }
  
    return arr
    
  }

  const quarterOf = (month) => {
    return Math.ceil(month/3)
   }

   function typeOfSum(a, b) {
    return (typeof (a+b))
  }

  function findDifference(a, b) {

    let getA = a.reduce((a,b)=> a*b)
    let getB = b.reduce((a,b)=> a*b)
  
    return Math.abs(getA - getB)
  
  }

  function datingRange(age){
    let over14 = `${Math.floor((age/2)+7) }-${Math.floor((age-7)*2) }`
    let at14under = `${Math.floor(Math.abs( (age*.10)-age))}-${Math.floor((age*.10)+age)}`
    
    return(age<=14)? at14under : over14
  
  }

  function warnTheSheep(queue) {

    let get = queue.indexOf("wolf") 
    let l = queue.length
    let ans = (l-get)-1
    
    
   return (queue.pop() === "wolf") ?"Pls go away and stop eating my sheep" 
    :`Oi! Sheep number ${ans}! You are about to be eaten by a wolf!`
    
  }

  var summation = function (num) {
    let arr = []
  
      while(num >= 1){
        arr.push(num)
        num--
      }
  
    return arr.reduce((a,b)=> a+b)
      
  }
  
  
  function  calculateAge(birth,year) {
  
  
  if(birth-year === 1){
        return `You will be born in 1 year.`
    } else if(birth-year >1){
        return `You will be born in ${Math.abs(year-birth)} years.`
    } else if(year-birth === 1){
        return `You are 1 year old.`
    } else if(year-birth > 1){
        return `You are ${year-birth} years old.`
    } else if(year-birth === 0){
        return`You were born this very year!`
    }
  
  }
  
  
  function whatday(num) { 
    switch(num) {
      case 1: return "Sunday";
      case 2: return "Monday";
      case 3: return "Tuesday";
      case 4: return "Wednesday";
      case 5: return "Thursday";
      case 6: return "Friday";
      case 7: return "Saturday";
      default: return 'Wrong, please enter a number between 1 and 7';
    }
  }
  
  
  function finalGrade (exam, proj) {
  
    return (exam > 90 || proj > 10) ? 100 
      : (exam > 75 && proj >= 5) ? 90 
      : (exam > 50 && proj >= 2) ? 75
      : 0
  
  }
  
  
  function stringClean(s){
    return s.replace(/\d+/g, "")
  }
  
  
  function isOpposite(s1,s2){
  
  if(!s1.length || s1.length !== s2.length){
    return false
  }else{
    
    let lo = s1.split('').map(a => a == a.toLowerCase())
    let up = s2.split('').map(a => a == a.toUpperCase())
  
    return lo.every((a,i)=> a === up[i])
  
  
  }
    
  function unusualFive() {
    return ['a','a','a','a','a'].length
  }
  unusualFive()
  
  
  function getRealFloor(n) {
  
    if(n<=0){
      return n
    } else if(n<13){
      return n-1
    } else if(n>13){
      return n-2
    }
  
  }
  
  getRealFloor(1)
  
  
  
  function powersOfTwo(n){
    var result = [];
    for (var i = 0; i <= n; i++) {
      result.push(Math.pow(2, i));
    }
    return result;
  }
  
  
  function solution(a, b){
    return (b.length > a.length) ? `${a}${b}${a}` : `${b}${a}${b}`
  }


  function collinearity(x1, y1, x2, y2){
    return x1 * y2 === x2 * y1;
  }

  
  function problem(a){
    return typeof a === "string" ? "Error" : a * 50 + 6;
  }

  
  function expressionMatter(a, b, c) {
    var combinations = [
      a + b + c,
      a * (b + c), 
      a * b * c, 
      (a + b) * c,
      a * b + c,
    ];
    return Math.max.apply(null, combinations);
  }

  
  function doubleChar(str) {
    return str.replace(/./g, '$&$&')
  }


  function DNAtoRNA(dna){
    var rna = {
        "T": "U"
    }
    return dna.replace(/T/g, function(convers){
        return rna[convers];
    });
}

// or

function DNAtoRNA(dna){
    return dna.replaceAll("T", "U");
}


function updateLight(current) {
	switch(current){
		case ('green'): return ('yellow');
		case ('yellow') : return ('red');
		case ('red') : return ('green');
	}
}


function getAge(age){
	return parseInt(age[0]);
}


function isToday(date) {
	var answer = new Date().toDateString() == date.toDateString();
	return answer;
}


function arr2bin(arr){
	return arr.reduce((a, b) => typeof(b) == "number" ? a + b : a, 0)
		.toString(2);
}

// or

function arr2bin(arr){
	return arr.filter(a => typeof(a) == "number")
		.reduce((b, c) => b + c, 0)
		.toString(2);
}


function combat(health, damage) {
	if (health < damage){return 0};
	return health - damage;
}

// or

function combat(health, damage) {
	return health < damage ? 0 : health - damage;
}

// or

function combat(health, damage) {
	return Math.max(health - damage, 0);
}

class Solution{
	static main() {
		console.log("Hello World!");
	}  
}


function strCount(str, letter){  
	return str.split(letter).length - 1;
}


function hoopCount (n) {
	let hope = "Keep at it until you get it";
	let hoop = "Great, now move on to tricks";
	if (n < 10){
		return hope;
	} else {
		return hoop;
	}
}


function symmetricPoint(p, q){
	return [q[0] * 2 - p[0], q[1] * 2 - p[1]];
}



function rentalCarCost(d) {
	if (d < 3){
		return 40 * d;
	} else if (d >= 3 && d < 7){
		return 40 * d - 20;
	} else if (d >= 7){
		return 40 * d - 50;
	}
}


function invert(lst){
	var arr = [];
	if (lst == arr){
		return arr;
	} else {
		lst.forEach(l => {
			arr.push(-l);
		})
		return arr;
	}
}

function differenceInAges(ages){
	let minAge = Math.min(...ages);
	let maxAge = Math.max(...ages);
	let ageGap = maxAge - minAge;
	return [minAge, maxAge, ageGap];
}


function nearestSq(n){
	var sqBefore = parseInt(Math.sqrt(n))**2;
	var sqAfter = (parseInt(Math.sqrt(n)) + 1)**2;
	if (Math.abs(n - sqBefore) < Math.abs(n - sqAfter)){
		return sqBefore;
	} else {
		return sqAfter;
	}
}

// or

function nearestSq(n){
	return Math.round(n**0.5)**2;
}


function mergeArrays(arr1, arr2) {
	let arr3 = arr1.concat(arr2);
	let arr3Sorted = arr3.sort((a, b) => a - b);
	return Array.from(new Set(arr3Sorted));
}



function abbrevName(name){
	var arr = name.split(" ");
	var abbrev = (arr[0][0] + "." + arr[1][0]).toUpperCase();
	return abbrev;
}


function fakeBin(x){
	var binstr = '';
	var fakebin = x.split('');
	fakebin.forEach(f => {
		if (parseInt(f) < 5){
			binstr = binstr + '0';
		} else {
			binstr = binstr + '1';
		}
	})
	return binstr;
}




function makeNegative(num){
  if (num > 0){
      return (-num);
  } else {
      return num;
  }
}

// or

function makeNegative(num){
return num > 0 ? (- num) : num;
}



function positiveSum(arr){
	var pos = 0;
	arr.forEach(a => {
		if (a > 0){
			pos += a;
		}
	});
	return pos;
}



function removeChar(s){
	var answer = s.slice(1, -1);
	return answer;
};



function squareSum(numbers){
	var sums = 0;
	for (let i = 0; i < numbers.length; i++){
		var num = numbers[i] * numbers[i];
		sums = sums + num;
	}
	return sums;
}


const stringToNumber = function(str){
	return parseInt(str, 10);
}


function greet(){
	return "hello world!";
}


function countSheeps(arrayOfSheep) {
	var answer = 0;
	for(var s = 0; s < arrayOfSheep.length; s++){
		if (arrayOfSheep[s] == true){
			answer += 1;
			}
		}
	return answer;
}


function greet(name){
	var greet = "Hello, " + name + " how are you doing today?";
	return(greet)
}


function booleanToString(b){
	if (b == true){
		return 'true';
	} else if (b == false){
		return 'false';
	}
}

// or

function booleanToString(b){
	return b == true ? "true" : "false";
}


function basicOp(operation, value1, value2){
	if (operation == "/" && value2 == 0.0){
		return 0;
	}
	switch(operation){
		case ("+"): return (value1 + value2);
		case ("-"): return (value1 - value2);
		case ("*"): return (value1 * value2);
		case ("/"): return (value1 / value2);
		default: return 0;
	}
}



function maps(x){
	var arr = []
	x.forEach(i => {
		arr.push(i * 2);
	});
	return arr;
}



function digitize(n) {
	var arr = n.toString().split('').reverse().map(Number);
	return arr;
}


function sum(numbers){
	var sum_a = 0;
	for (var n = 0; n < numbers.length; n++){
		sum_a += numbers[n]
	}
	return sum_a;
};



function simpleMultiplication(number) {
	if (number % 2 == 0){
		return number * 8;
	} else {
		return number * 9;
	}
}


function findNeedle(haystack) {
	var needle = haystack.indexOf('needle');
	return "found the needle at position " + needle;
}


function find_average(arr){
	var sum_n = 0
	if (arr.length == 0){
		return 0;
	} else {
		let sum_n = arr.reduce((a, b) => a + b) / arr.length
		return sum_n
	}
}



function smash (words) {
	return words.join(" ");
};



function grow(x){
	return x.reduce((a, b) => a*b);
}



function bmi(weight, height) {
	var bmi = weight / height**2;
	if (bmi <= 18.5){
		return "Underweight";
	} else if (bmi <= 25.0){
		return "Normal";
	} else if (bmi <= 30.0){
		return "Overweight";
	} else {
		return "Obese";
	}
}



function check(a, x){
	return a.includes(x);
}



function reverseSeq(n){
	var arr = [];
	for (let i = n; i > 0; i--){
		arr.push(i);
	}
	return arr;
}


function stringToArray(string){
	return string.split(' ');
}



const rps = (p1, p2) => {
	var cases = ['rock', 'paper', 'scissors'];
	if (p1 == p2){
		return "Draw!";
	} else if (p1 == cases[0] && p2 == cases[1]){
		return "Player 2 won!";
	} else if (p1 == cases[0] && p2 == cases[2]){
		return "Player 1 won!";
	} else if (p1 == cases[1] && p2 == cases[2]){
		return "Player 2 won!";
	} else if (p1 == cases[1] && p2 == cases[0]){
		return "Player 1 won!";
	} else if (p1 == cases[2] && p2 == cases[0]){
		return "Player 2 won!";
	} else if (p1 == cases[2] && p2 == cases[1]){
		return "Player 1 won!";
	} 
};


function greet (name, owner) {
	return name == owner ? 'Hello boss' : 'Hello guest';
}


function getGrade (s1, s2, s3) {
	if ((s1 + s2 + s3) / 3 >= 90 && (s1 + s2 + s3) / 3 <= 100){
		return "A";
	} else if ((s1 + s2 + s3) / 3 >= 80 && (s1 + s2 + s3) / 3 < 90){
		return "B";
	} else if ((s1 + s2 + s3) / 3 >= 70 && (s1 + s2 + s3) / 3 < 80){
		return "C";
	} else if ((s1 + s2 + s3) / 3 >= 60 && (s1 + s2 + s3) / 3 < 70){
		return "D";
	} else {
		return "F";
	}
}


function greet(name){
	if(name === "Johnny"){
		return "Hello, my love!";
	} else {
		return "Hello, " + name + "!";
	}
}



function points(games) {
	var score = 0;
	games.forEach(g => {
		if (g[0] > g[2]){
			score = score + 3;
		} else if (g[0] < g[2]){
			score = score +0;
		} else if (g[0] == g[2]){
			score = score +1
		}
	});
	return score;
}


class Kata {
	static getVolumeOfCuboid(length, width, height) {
		return(length * width * height);
	}
}



const areaOrPerimeter = function(l , w){
	if (l == w){
		return l * w;
	} else {
		return 2*l + 2*w;
	}
};



function setAlarm(employed, vacation){
	return employed && !vacation;
}


function sumMix(x){
	return x.reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

function sumArray(array) {
	if (array && array.length > 1){
		var arr = array.sort((a,b) => a - b).slice(1, -1);
		return arr.reduce((x, y) => x + y, 0);
	} else {
		return 0;
	}
}


var min = function(list){
  return Math.min(...list);
}

var max = function(list){
  return Math.max(...list);
}


function countSheep(n){
	if (n == 0){
		return("")
	} else{
		var p = 1;
		var sheep = "";
		while(p <= n){
			sheep = sheep + p.toString() + " sheep...";
			p += 1;
		}
		return(sheep)
	}
}



function feast(beast, dish) {
	return beast[beast.length -1] == dish[dish.length -1] && beast[0] == dish[0];
}



function arrayPlusArray(arr1, arr2) {
	var sum_a = 0;
	for (var n = 0; n < arr1.length; n++){
		sum_a += arr1[n]
	}
	for (var p = 0; p < arr2.length; p++){
		sum_a += arr2[p]
	}
	return sum_a;
}


