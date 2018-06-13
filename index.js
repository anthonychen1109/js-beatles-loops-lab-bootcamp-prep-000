function theBeatlesPlay(musicians, instr) {
  let arr = []
  for (let i=0;i<instr.length; i++) {
    arr.push(`${musicians[i]} plays ${instr[i]}`)
  }
  return arr
}

function johnLennonFacts(facts) {
  let arr = []
<<<<<<< HEAD
  for (let i=0; i<facts.length; i++) {
    arr.push(`${facts[i]}!!!`)
  }
  return arr
}

function iLoveTheBeatles(num) {
  let arr = []
  do {
    arr.push(`I love the Beatles!`)
    num += 1
  } while(num < 15)
  return arr
=======
  facts.forEach(function(fact)) {
    arr.push(fact + `!!!`)
  }
  return arr
>>>>>>> b68304997bea8d4accca5d6ca5d88805d349bb2b
}