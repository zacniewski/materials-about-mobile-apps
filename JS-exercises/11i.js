'use strict';
var obj = {
  a: 10
};

Object.defineProperty(obj, 'b', {
  get: () => {
    console.log(this.a, typeof this.a, this);
    return this.a + 10; // represents global object 'Window', therefore 'this.a' returns 'undefined'
  }
});