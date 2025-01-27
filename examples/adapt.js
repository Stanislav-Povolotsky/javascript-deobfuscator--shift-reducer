'use strict';

let { reduce, adapt, ConcatReducer, PlusReducer, MonoidalReducer } = require('..');


function countNodes(tree) {
  let reducer = adapt(data => data + 1, new PlusReducer);
  return reduce(reducer, tree);
}

function flatten(tree) {
  let reducer = adapt((data, node) => [node].concat(data), new ConcatReducer);
  return reduce(reducer, tree);
}

function findParents(tree) {
  let monoid = {
    empty: () => ({
      pairs: [],
      children: [],
    }),
    concat: (a, b) => ({
      pairs: a.pairs.concat(b.pairs),
      children: a.children.concat(b.children),
    }),
  };
  let reducer = adapt(
    ({ pairs, children }, node) => ({
      pairs: pairs.concat(children.map(child => [child, node])),
      children: [node],
    }),
    new MonoidalReducer(monoid)
  );
  let pairs = reduce(reducer, tree).pairs;
  return new Map(pairs);
}


let sample = require('sp-shift-parser').parseScript('0 + 1');

console.log('Count:');
console.log(countNodes(sample));

console.log('Flattened:');
console.log(flatten(sample));

console.log('Parents:');
console.log(findParents(sample));
