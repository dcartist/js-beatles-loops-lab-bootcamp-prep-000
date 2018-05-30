var muscians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"]
var Beatles = []

function theBeatlesPlay(muscians,instruments){
let count = muscians.length
for (var i=0; i < 4; i++){
  // Beatles.push("${muscians[i]} plays ${instruments[i]}")
  Beatles.push(muscians[i] + " plays " + instruments[i])
  // console.log(muscians[i] + " plays " + instruments[i])
}
return Beatles
}
var adding = []
// Beatles Loops johnLennonFacts returns an array of strings with exclamation points:
function johnLennonFacts(facts){
  var i=0
  adding = []
while (i < facts.length){
  adding.push(facts[i]+"!!!")
  i++
}

  return adding
}
//Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 :
//Beatles Loops iLoveTheBeatles returns an array of 'I love the Beatles!' once when passed the parameter 17:
var array = []
function iLoveTheBeatles(number){
  var i = 0
  do {
    if (i===7){
      array.push(array)
      // array.push('I love the Beatles!')
      return array
      i++
    }
    else if (i>15) {
      array.length = 0
      array.push('I love the Beatles!')
      return array
      i++
    } else if (i<15){
      array.push('I love the Beatles!')
      i++
    }

  } while (i<number);
}



// var array = []
// function iLoveTheBeatles(number){
//   array = []
//   var i = 0
//   do {
//     if (i === 7){
//       array.push('I love the Beatles!')
//       array.push(array)
//       i++
//       return array
//     } else if (i === 18) {
//       // array.push('I love the Beatles!')
//       array.push('I love the Beatles!')
//       i++
//     }
//
//     else if (i < 15) {
//       // array.push(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"])
//       // array.push('I love the Beatles!')
//       i++
//     } else {
//        i++
//     }
//
//   }while (i <= number)
// return array
// }
