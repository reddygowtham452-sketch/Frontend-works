function * p(){
    yield 101;
     yield 102;
      yield 103;
}
let pid = p();
console.log ("bag" , pid.next().value);
console.log ("bag" , pid.next().value);
console.log ("bag" , pid.next().value);
