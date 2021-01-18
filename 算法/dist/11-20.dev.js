"use strict";

var getHint = function getHint(secret, guess) {
  var hash = Array(10).fill(0),
      m = n = 0;

  for (var i = 0, len = secret.length; i < len; i++) {
    if (secret[i] === guess[i]) m++;else {
      // console.log(hash[secret[i]]++,hash)
      if (hash[secret[i]]++ < 0) n++;
      if (hash[guess[i]]-- > 0) n++;
    }
  }

  console.log(hash);
  return "".concat(m, "A").concat(n, "B");
};

console.log(getHint("1807", "7810"));