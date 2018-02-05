"use strict";

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
	'e',
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
			console.log( 'checkAux' );

			if( ! this.inputAux ) {
				this.verbAuxValid = 'meh';
			} else if ( conjAvere.includes( this.inputAux.toLowerCase() ) &&
				this.currentVerb.verbAux.indexOf( 'avere' ) !== -1 ||
				this.inputAux === 'avere' ) {
				this.verbAuxValid = true;
				this.$refs.vbpart.focus();
			} else if ( ( conjEssere.includes( this.inputAux.toLowerCase() ) &&
				this.currentVerb.verbAux.indexOf( 'essere' ) !== -1 ||
				this.inputAux === 'essere' ) && ! this.currentVerb.isReflexive ) {
				this.verbAuxValid = true;
				this.$refs.vbpart.focus();
			} else if( conjEssereRifl.includes( this.inputAux.toLowerCase() ) &&
                this.currentVerb.isReflexive || this.inputAux === 'essere' ) {
                this.verbAuxValid = true;
                this.$refs.vbpart.focus();
			} else {
				this.verbAuxValid = false;
			}
		},
		checkParticiple: function() {
			console.log( 'checkParticiple' );

			if( ! this.inputPart ) {
				this.verbPartValid = 'meh';
			} else if ( this.currentVerb.verbPart === this.inputPart.toLowerCase() ) {
				this.verbPartValid = true;
                this.$refs.vbpart.blur();
			} else {
				this.verbPartValid = false;
			}
		},
		getVerb: function() {
			console.log( 'getVerb' );

			return verbs[Math.floor( Math.random() * verbs.length )];
		},
		setNewVerb: function() {
			console.log( 'setNewVerb' );

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
			console.log( 'resolve' );

            this.verbAuxValid !== true ? this.inputAux = this.currentVerb.verbAux : '';
            this.verbPartValid !== true ? this.inputPart = this.currentVerb.verbPart : '';

            this.verbAuxValid = true;
            this.verbPartValid = true;
		},
		toggleTranslate: function() {
			this.translateEnabled = !this.translateEnabled;
		},
		doTranslate: function() {
            get( 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=it&tl=en&dt=t&q=' + this.currentVerb.verbInf )
                .then( ( data ) => {
                	console.log( data );
                    verbApp.verbEnglish = JSON.parse( data )[0][0][0];
                })
                .catch( ( err ) => {
                    console.log( err );
                    verbApp.verbEnglish = null;
                });

            get( 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=it&tl=fr&dt=t&q=' + this.currentVerb.verbInf )
                .then( ( data ) => {
                    console.log( data );
                    verbApp.verbFrench = JSON.parse( data )[0][0][0];
                })
                .catch( ( err ) => {
                    console.log( err );
                    verbApp.verbFrench = null;
                });

            get( 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=it&tl=es&dt=t&q=' + this.currentVerb.verbInf )
                .then( ( data ) => {
                    console.log( data );
                    verbApp.verbSpanish = JSON.parse( data )[0][0][0];
                })
                .catch( ( err ) => {
                    console.log( err );
                    verbApp.verbSpanish = null;
                });

            get( 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=it&tl=pt&dt=t&q=' + this.currentVerb.verbInf )
                .then( ( data ) => {
                    console.log( data );
                    verbApp.verbPortughese = JSON.parse( data )[0][0][0];
                })
                .catch( ( err ) => {
                    console.log( err );
                    verbApp.verbPortughese = null;
                });

            get( 'https://translate.googleapis.com/translate_a/single?client=gtx&sl=it&tl=ru&dt=t&q=' + this.currentVerb.verbInf )
                .then( ( data ) => {
                    console.log( data );
                    verbApp.verbRussian = JSON.parse( data )[0][0][0];
                })
                .catch( ( err ) => {
                    console.log( err );
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
		document.getElementsByTagName( 'body' )[0].classList.add( 'is--loaded' );
	}
});

function get( url ) {
    return new Promise( ( resolve, reject ) => {
        const req = new XMLHttpRequest();
		req.open( 'GET', url );
		req.onload = () => req.status === 200 ? resolve( req.response ) : reject( Error( req.statusText ) );
		req.onerror = (e) => reject( Error( 'Network Error: ${e}') );
		req.send();
	});
}