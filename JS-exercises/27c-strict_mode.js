var f = () => { 'use strict'; return this; };
f() === window; // or the global object