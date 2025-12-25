// array.js - simple demo for array operations
const outputContainer = document.getElementById('output');

function log(msg) {
  console.log(msg);
  if (outputContainer) {
    outputContainer.append(document.createTextNode(msg + "\n"));
  }
}

log('--- JavaScript Array Demo ---');

// 1. Declaration & basic ops
let fruits = ['apple', 'banana', 'cherry'];
log('Initial: ' + JSON.stringify(fruits));

fruits.push('date');
log('After push: ' + JSON.stringify(fruits));

const popped = fruits.pop();
log('After pop (popped=' + popped + '): ' + JSON.stringify(fruits));

// 2. Iteration
log('Iteration (for..of):');
for (const f of fruits) log(' - ' + f);

// 3. Map & Filter
const upper = fruits.map(s => s.toUpperCase());
log('Map (toUpperCase): ' + JSON.stringify(upper));

const long = fruits.filter(s => s.length > 5);
log('Filter (length > 5): ' + JSON.stringify(long));

// 4. Reduce
const lengths = fruits.reduce((acc, s) => acc + s.length, 0);
log('Total length of all fruit names: ' + lengths);

// 5. Useful helpers
log('Includes banana? ' + fruits.includes('banana'));
log('Find cherry? ' + fruits.find(s => s === 'cherry'));

// 6. Modify and show final
fruits = fruits.sort();
log('Sorted: ' + JSON.stringify(fruits));

// Nice visual output in page (if #output exists)
if (outputContainer) {
  const pre = document.createElement('pre');
  pre.style.fontFamily = 'monospace';
  pre.style.whiteSpace = 'pre-wrap';
  pre.textContent = 'See console for details.\n\n' + outputContainer.textContent;
  outputContainer.innerHTML = '';
  outputContainer.appendChild(pre);
}