/** Flattening */

function flutten(arr) {
    const reducer = (acc, currentValue) => acc.concat(currentValue);
    return arr.reduce(reducer);
}

// console.log(flutten([[1, 2, 3], [4, 5], [6]]))

/** Loop */

function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
  }

//   loop(3, n => n > 0, n => n - 1, console.log);

function every(array = [], test) {
    for (let i = 0; i < array.length; i++) {
        if (!test(array[i])) return false;
    }
    return true;
}

function every2(array = [], test) {
    return !array.some(value => !test(value));
}

// console.log(every2([1, 3, 9], n => n < 10));

/** Dominant Writing Directions */

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }

  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }

function dominantDirection(text = "") {
    let counted = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.direction : "none";
    }).filter(({name}) => name != "none");

    if (counted.length == 0) return 'ltr';
    return counted.reduce( (a, b) => a.count > b.count ? a : b).name;
}

// console.log(dominantDirection("Hello!"));
// console.log(dominantDirection("Hey, مساء الخير"));