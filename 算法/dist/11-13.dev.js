"use strict";

var isIsomorphic = function isIsomorphic(s, t) {
  console.log(s, t);
  if (s.length !== t.length) return false;
  var sMap = new Map();
  var tMap = new Map();

  for (var i = 0; i < s.length; i++) {
    var sMspVal = sMap.get(s[i]);
    var tMspVal = tMap.get(t[i]);

    if (sMspVal && sMspVal !== t[i] || tMspVal && tMspVal !== s[i]) {
      return false;
    }

    sMap.set(s[i], t[i]);
    tMap.set(t[i], s[i]);
  }

  return true;
};

console.log(isIsomorphic("egg", "add"));