"use strict";

var options = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake'
    }]
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men'
    }]
  }]
}];
var arr = [];

var filterFn = function filterFn(options) {
  for (var i = 0; i < options.length; i++) {
    arr.push(options[i]);
    console.log(options[i].children && options[i].children.length > 0);

    if (options[i].children && options[i].children.length > 0) {
      filterFn(options[i].children);
    }
  }

  return arr;
};

console.log(filterFn(options));