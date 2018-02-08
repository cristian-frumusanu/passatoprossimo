"use strict";

window.globalDebug = false;

var conjAvere = [
    'ho',
    'hai',
    'ha',
    'abbiamo',
    'avete',
    'hanno'
];

var conjEssere = [
    'sono',
    'sei',
    'è',
    'siamo',
    'siete',
    'sono',
];

var conjEssereRifl = [
    'mi sono',
    'ti sei',
    'si è',
    'ci siamo',
    'vi siete',
    'si sono'
];

var verbApp = new Vue({
    el: '.js-form',
    data: {
        inputAux: null,
        inputPart: null,
        currentVerb: {
            verbInf: null,
            verbAux: null,
            verbPart: null
        },
        verbAuxValid: 'meh',
        verbPartValid: 'meh',
        timeout: null,
        translateEnabled: false,
        verbEnglish: null,
        verbFrench: null,
        verbSpanish: null,
        verbPortughese: null,
        verbRussian: null
    },
    methods: {
        // Listen for keystroke events
        waitForTyping: function () {
            clearTimeout( this.timeout );

            this.timeout = setTimeout( function () {
                this.checkAux();
                this.checkParticiple();
            }.bind( this ), 500 );
        },
        checkAux: function() {
            if ( window.globalDebug ) { console.log('checkAux'); }

            // Check if the aux input is empty
            if( ! this.inputAux ) {
                this.verbAuxValid = 'meh';
            } else
			// Check if the aux is avere
			if ( conjAvere.indexOf( this.inputAux.toLowerCase() ) >= 0 &&
                this.currentVerb.verbAux.indexOf( 'avere' ) !== -1 ||
                this.inputAux === 'avere' ) {
                this.verbAuxValid = true;
                this.$refs.vbpart.focus();
            } else
			// Check if the aux is essere and in non-reflexive form
			if ( ( conjEssere.indexOf( this.inputAux.toLowerCase() ) >= 0 &&
                 this.currentVerb.verbAux.indexOf( 'essere' ) !== -1 || this.inputAux === 'essere' ) &&
				! this.currentVerb.isReflexive ) {
                this.verbAuxValid = true;
                this.$refs.vbpart.focus();
            } else
			// Check if the aux is essere in reflexive form
			if( conjEssereRifl.indexOf( this.inputAux.toLowerCase() ) >= 0 &&
                this.currentVerb.isReflexive || this.inputAux === 'essere' ) {
                this.verbAuxValid = true;
                this.$refs.vbpart.focus();
            } else {
				// The aux is not valid
                this.verbAuxValid = false;
            }
        },
        checkParticiple: function() {
            if ( window.globalDebug ) { console.log( 'checkParticiple' ); }

            // If the participle has not been filled,
			// set the valid variable to a value that is
			// not true neither valse
            if ( ! this.inputPart ) {
                this.verbPartValid = 'meh';
            } else {
                var currentInputPart = this.inputPart.toLowerCase();

                // If the aux is avere
                if ( this.currentVerb.verbAux.indexOf( 'avere' ) !== -1 &&
                    this.currentVerb.verbPart === currentInputPart ) {
                    this.verbPartValid = true;
                    this.$refs.vbpart.blur();
                } else
				// If the aux is essere and the participle matches without the last letter
				if ( this.currentVerb.verbAux === 'essere' &&
					currentInputPart.substr( 0, currentInputPart.length - 1 ) === this.currentVerb.verbPart.substr( 0, this.currentVerb.verbPart.length - 1 ) ) {
                	// If the auxiliary has been checked
                	if ( this.verbAuxValid === true ) {
                		var partLastLetter = currentInputPart.slice(-1);

                		// Check for the concordance between the auxiliary and the past participle
                        if ( ( ( conjEssereRifl[0].indexOf( this.inputAux ) !== -1 || conjEssereRifl[1].indexOf( this.inputAux ) !== -1 || conjEssereRifl[2].indexOf( this.inputAux ) !== -1 ) &&
								( partLastLetter === 'o' || partLastLetter === 'a' ) ) || // the check for singular verb form
							 ( ( conjEssereRifl[3].indexOf( this.inputAux ) !== -1 || conjEssereRifl[4].indexOf( this.inputAux ) !== -1 || conjEssereRifl[5].indexOf( this.inputAux ) !== -1 ) &&
                                ( partLastLetter === 'i' || partLastLetter === 'e' ) ) ) { // the check for plural verb form
                            this.verbPartValid = true;
                            this.$refs.vbpart.blur();
						} else {
                            this.verbPartValid = false;
						}
					} else {
                        // If the auxiliary has not been checked
						// mark the participle as valid in any case
                        this.verbPartValid = true;
                        this.$refs.vbpart.blur();
					}
                } else {
                    this.verbPartValid = false;
                }
            }
        },
        getVerb: function() {
            if ( window.globalDebug ) { console.log( 'getVerb' ); }
            return verbs[Math.floor( Math.random() * verbs.length )];
        },
        setNewVerb: function() {
            if ( window.globalDebug ) { console.log( 'setNewVerb' ); }

            this.currentVerb = this.getVerb();
            this.inputPart = null;
            this.inputAux = null;
            this.verbPartValid = 'meh';
            this.verbAuxValid = 'meh';
            this.timeout = 0;

            if ( this.translateEnabled ) {
                this.doTranslate();
            }
        },
        resolve: function() {
            if ( window.globalDebug ) { console.log( 'resolve' ); }

            // Check if the aux is valid but the participle no
            if ( this.verbAuxValid === true && this.verbPartValid !== true ) {
            	// Check if the input aux is avere or essere in singular form
                if ( ( this.currentVerb.verbAux === 'avere' ) ||
                    conjEssereRifl[0].indexOf( this.inputAux ) !== -1 || conjEssereRifl[1].indexOf( this.inputAux ) !== -1 || conjEssereRifl[2].indexOf( this.inputAux ) !== -1 ) {
                    this.inputPart = this.currentVerb.verbPart;
				} else { // Input aux is essere in plural form
                    this.inputPart = this.currentVerb.verbPart.substr( 0, this.currentVerb.verbPart.length - 1 ) + 'i';
				}

			} else if ( this.verbAuxValid !== true && this.verbPartValid === true ) {
                if ( this.currentVerb.verbAux === 'avere' ) {
                    this.inputAux = conjAvere[0];
                } else {
                    var lastLetter = this.inputPart.toLowerCase().slice(-1);

                    if ( lastLetter === 'o' || lastLetter === 'a' ) {
                        if ( this.currentVerb.isReflexive ) {
                            this.inputAux = conjEssereRifl[0];
                        } else {
                            this.inputAux = conjEssere[0];
                        }
                    } else {
                        if ( this.currentVerb.isReflexive ) {
                            this.inputAux = conjEssereRifl[3];
                        } else {
                            this.inputAux = conjEssere[3];
                        }
                    }
                }
			} else {
                if( this.currentVerb.verbAux === 'avere' ) {
                    this.inputAux = conjAvere[0];
                } else if( this.currentVerb.verbAux === 'essere' && this.currentVerb.isReflexive ) {
                    this.inputAux = conjEssereRifl[0];
                } else if( this.currentVerb.verbAux === 'essere' && !this.currentVerb.isReflexive ) {
                    this.inputAux = conjEssere[0];
                } else {
                    this.inputAux = this.currentVerb.verbAux;
                }

                this.inputPart = this.currentVerb.verbPart;
			}

            this.verbAuxValid = true;
            this.verbPartValid = true;
        },
        toggleTranslate: function() {
            this.translateEnabled = !this.translateEnabled;
        },
        doTranslate: function() {
            get( 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=it&tl=en&dt=t&q=' + this.currentVerb.verbInf )
                .then( function( data ){
                    if ( window.globalDebug ) { console.log( data ); }
                    verbApp.verbEnglish = JSON.parse( data )[0][0][0];
                })
                .catch( function( err ){
                    if ( window.globalDebug ) { console.log( err ); }
                    verbApp.verbEnglish = null;
                });

            get( 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=it&tl=fr&dt=t&q=' + this.currentVerb.verbInf )
                .then( function( data ){
                    if ( window.globalDebug ) { console.log( data ); }
                    verbApp.verbFrench = JSON.parse( data )[0][0][0];
                })
                .catch( function( err ){
                    if ( window.globalDebug ) { console.log( err ); }
                    verbApp.verbFrench = null;
                });

            get( 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=it&tl=es&dt=t&q=' + this.currentVerb.verbInf )
                .then( function( data ){
                    if ( window.globalDebug ) { console.log( data ); }
                    verbApp.verbSpanish = JSON.parse( data )[0][0][0];
                })
                .catch( function( err ){
                    if ( window.globalDebug ) { console.log( err ); }
                    verbApp.verbSpanish = null;
                });

            get( 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=it&tl=pt&dt=t&q=' + this.currentVerb.verbInf )
                .then( function( data ){
                    if ( window.globalDebug ) { console.log( data ); }
                    verbApp.verbPortughese = JSON.parse( data )[0][0][0];
                })
                .catch( function( err ){
                    if ( window.globalDebug ) { console.log( err ); }
                    verbApp.verbPortughese = null;
                });

            get( 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=it&tl=ru&dt=t&q=' + this.currentVerb.verbInf )
                .then( function( data ){
                    if ( window.globalDebug ) { console.log( data ); }
                    verbApp.verbRussian = JSON.parse( data )[0][0][0];
                })
                .catch( function( err ){
                    if ( window.globalDebug ) { console.log( err ); }
                    verbApp.verbRussian = null;
                });
        },
        onSubmit: function() {
            // do nothing
            // cathes the form default action
        }
    },
    watch: {
        translateEnabled: function( val ) {
            if( val === true ) {
                this.doTranslate();
            }
        }
    },
    mounted: function() {
        this.setNewVerb();

        var ieVersion = getIEVersion();
        if ( ieVersion > 0 ) {
            document.getElementsByTagName( 'html' )[0].classList.add( 'is--ie' );
        }
        document.getElementsByTagName( 'body' )[0].classList.add( 'is--loaded' );
    }
});

function get( url ) {
    return new Promise( function( resolve, reject ) {
        const req = new XMLHttpRequest();
        req.open( 'GET', url );
        req.onload = function(){
            req.status === 200 ? resolve( req.response ) : reject( Error( req.statusText ) )
        };
        req.onerror = function( e ){
            reject( Error( 'Network Error: ${e}') )
        };
        req.send();
    });
}

function getIEVersion() {
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf("MSIE");
    // If IE, return version number.
    if (Idx > 0)
        return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

    // If IE 11 then look for Updated user agent string.
    else if (!!navigator.userAgent.match(/Trident\/7\./))
        return 11;

    else
        return 0; //It is not IE
}

// Promise Polyfill - https://github.com/stefanpenner/es6-promise
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.ES6Promise=e()}(this,function(){"use strict";function t(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}function e(t){return"function"==typeof t}function n(t){B=t}function r(t){G=t}function o(){return function(){return process.nextTick(a)}}function i(){return"undefined"!=typeof z?function(){z(a)}:c()}function s(){var t=0,e=new J(a),n=document.createTextNode("");return e.observe(n,{characterData:!0}),function(){n.data=t=++t%2}}function u(){var t=new MessageChannel;return t.port1.onmessage=a,function(){return t.port2.postMessage(0)}}function c(){var t=setTimeout;return function(){return t(a,1)}}function a(){for(var t=0;t<W;t+=2){var e=V[t],n=V[t+1];e(n),V[t]=void 0,V[t+1]=void 0}W=0}function f(){try{var t=Function("return this")().require("vertx");return z=t.runOnLoop||t.runOnContext,i()}catch(e){return c()}}function l(t,e){var n=this,r=new this.constructor(p);void 0===r[Z]&&O(r);var o=n._state;if(o){var i=arguments[o-1];G(function(){return P(o,r,i,n._result)})}else E(n,r,t,e);return r}function h(t){var e=this;if(t&&"object"==typeof t&&t.constructor===e)return t;var n=new e(p);return g(n,t),n}function p(){}function v(){return new TypeError("You cannot resolve a promise with itself")}function d(){return new TypeError("A promises callback cannot return that same promise.")}function _(t){try{return t.then}catch(e){return nt.error=e,nt}}function y(t,e,n,r){try{t.call(e,n,r)}catch(o){return o}}function m(t,e,n){G(function(t){var r=!1,o=y(n,e,function(n){r||(r=!0,e!==n?g(t,n):S(t,n))},function(e){r||(r=!0,j(t,e))},"Settle: "+(t._label||" unknown promise"));!r&&o&&(r=!0,j(t,o))},t)}function b(t,e){e._state===tt?S(t,e._result):e._state===et?j(t,e._result):E(e,void 0,function(e){return g(t,e)},function(e){return j(t,e)})}function w(t,n,r){n.constructor===t.constructor&&r===l&&n.constructor.resolve===h?b(t,n):r===nt?(j(t,nt.error),nt.error=null):void 0===r?S(t,n):e(r)?m(t,n,r):S(t,n)}function g(e,n){e===n?j(e,v()):t(n)?w(e,n,_(n)):S(e,n)}function A(t){t._onerror&&t._onerror(t._result),T(t)}function S(t,e){t._state===$&&(t._result=e,t._state=tt,0!==t._subscribers.length&&G(T,t))}function j(t,e){t._state===$&&(t._state=et,t._result=e,G(A,t))}function E(t,e,n,r){var o=t._subscribers,i=o.length;t._onerror=null,o[i]=e,o[i+tt]=n,o[i+et]=r,0===i&&t._state&&G(T,t)}function T(t){var e=t._subscribers,n=t._state;if(0!==e.length){for(var r=void 0,o=void 0,i=t._result,s=0;s<e.length;s+=3)r=e[s],o=e[s+n],r?P(n,r,o,i):o(i);t._subscribers.length=0}}function M(t,e){try{return t(e)}catch(n){return nt.error=n,nt}}function P(t,n,r,o){var i=e(r),s=void 0,u=void 0,c=void 0,a=void 0;if(i){if(s=M(r,o),s===nt?(a=!0,u=s.error,s.error=null):c=!0,n===s)return void j(n,d())}else s=o,c=!0;n._state!==$||(i&&c?g(n,s):a?j(n,u):t===tt?S(n,s):t===et&&j(n,s))}function x(t,e){try{e(function(e){g(t,e)},function(e){j(t,e)})}catch(n){j(t,n)}}function C(){return rt++}function O(t){t[Z]=rt++,t._state=void 0,t._result=void 0,t._subscribers=[]}function k(){return new Error("Array Methods must be provided an Array")}function F(t){return new ot(this,t).promise}function Y(t){var e=this;return new e(U(t)?function(n,r){for(var o=t.length,i=0;i<o;i++)e.resolve(t[i]).then(n,r)}:function(t,e){return e(new TypeError("You must pass an array to race."))})}function q(t){var e=this,n=new e(p);return j(n,t),n}function D(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function K(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}function L(){var t=void 0;if("undefined"!=typeof global)t=global;else if("undefined"!=typeof self)t=self;else try{t=Function("return this")()}catch(e){throw new Error("polyfill failed because global object is unavailable in this environment")}var n=t.Promise;if(n){var r=null;try{r=Object.prototype.toString.call(n.resolve())}catch(e){}if("[object Promise]"===r&&!n.cast)return}t.Promise=it}var N=void 0;N=Array.isArray?Array.isArray:function(t){return"[object Array]"===Object.prototype.toString.call(t)};var U=N,W=0,z=void 0,B=void 0,G=function(t,e){V[W]=t,V[W+1]=e,W+=2,2===W&&(B?B(a):X())},H="undefined"!=typeof window?window:void 0,I=H||{},J=I.MutationObserver||I.WebKitMutationObserver,Q="undefined"==typeof self&&"undefined"!=typeof process&&"[object process]"==={}.toString.call(process),R="undefined"!=typeof Uint8ClampedArray&&"undefined"!=typeof importScripts&&"undefined"!=typeof MessageChannel,V=new Array(1e3),X=void 0;X=Q?o():J?s():R?u():void 0===H&&"function"==typeof require?f():c();var Z=Math.random().toString(36).substring(2),$=void 0,tt=1,et=2,nt={error:null},rt=0,ot=function(){function t(t,e){this._instanceConstructor=t,this.promise=new t(p),this.promise[Z]||O(this.promise),U(e)?(this.length=e.length,this._remaining=e.length,this._result=new Array(this.length),0===this.length?S(this.promise,this._result):(this.length=this.length||0,this._enumerate(e),0===this._remaining&&S(this.promise,this._result))):j(this.promise,k())}return t.prototype._enumerate=function(t){for(var e=0;this._state===$&&e<t.length;e++)this._eachEntry(t[e],e)},t.prototype._eachEntry=function(t,e){var n=this._instanceConstructor,r=n.resolve;if(r===h){var o=_(t);if(o===l&&t._state!==$)this._settledAt(t._state,e,t._result);else if("function"!=typeof o)this._remaining--,this._result[e]=t;else if(n===it){var i=new n(p);w(i,t,o),this._willSettleAt(i,e)}else this._willSettleAt(new n(function(e){return e(t)}),e)}else this._willSettleAt(r(t),e)},t.prototype._settledAt=function(t,e,n){var r=this.promise;r._state===$&&(this._remaining--,t===et?j(r,n):this._result[e]=n),0===this._remaining&&S(r,this._result)},t.prototype._willSettleAt=function(t,e){var n=this;E(t,void 0,function(t){return n._settledAt(tt,e,t)},function(t){return n._settledAt(et,e,t)})},t}(),it=function(){function t(e){this[Z]=C(),this._result=this._state=void 0,this._subscribers=[],p!==e&&("function"!=typeof e&&D(),this instanceof t?x(this,e):K())}return t.prototype["catch"]=function(t){return this.then(null,t)},t.prototype["finally"]=function(t){var e=this,n=e.constructor;return e.then(function(e){return n.resolve(t()).then(function(){return e})},function(e){return n.resolve(t()).then(function(){throw e})})},t}();return it.prototype.then=l,it.all=F,it.race=Y,it.resolve=h,it.reject=q,it._setScheduler=n,it._setAsap=r,it._asap=G,it.polyfill=L,it.Promise=it,it.polyfill(),it});
