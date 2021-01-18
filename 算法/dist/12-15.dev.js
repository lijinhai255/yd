"use strict";

function a1(next) {
  console.log('dosth_a1_before');
  next && next();
  console.log('dosth_a1_after');
}

function a2(next) {
  console.log('dosth_a2_before');
  next && next();
  console.log('dosth_a2_after');
}

function a3(next) {
  console.log('dosth_a3_before');
  next && next();
  console.log('dosth_a3_after');
}

function fn(sequences) {
  var idx = 0,
      length = sequences.length;

  var caller = function caller() {
    //   console.log(idx === length,"idx === length",idx)
    if (idx === length) {
      return;
    }

    var currentTarget = sequences[idx];
    ++idx;
    currentTarget(caller);
    console.log(idx);
  };

  caller();
}

fn([a1, a2, a3]);