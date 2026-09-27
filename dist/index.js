"use strict";var i=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var t=i(function(O,s){
var d=require('@stdlib/stats-strided-nanvariancech/dist').ndarray,o=require('@stdlib/math-base-special-sqrt/dist');function y(e,r,a,n,q){return o(d(e,r,a,n,q))}s.exports=y
});var v=i(function(R,u){
var f=require('@stdlib/strided-base-stride2offset/dist'),h=t();function p(e,r,a,n){return h(e,r,a,n,f(e,n))}u.exports=p
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),l=t();x(c,"ndarray",l);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
