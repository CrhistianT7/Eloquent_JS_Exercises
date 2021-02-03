/** Retry */
class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  while(true) {
      try {
        return primitiveMultiply(a, b);
      } catch (error) {
          if(!(error instanceof MultiplicatorUnitFailure)) throw error;
      }
  }
}

// console.log(reliableMultiply(8, 8));

/** The Locked Box */

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(func) {
    let locked = box.locked;
    if(!locked) return func();
    
    box.unlock();
    try {
        return func();
    } finally {
        box.lock()
    }
}

withBoxUnlocked(function() {
box.content.push("gold piece");
});

try {
withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
});
} catch (e) {
    console.log("Error raised: " + e);
}
console.log(box.locked);

