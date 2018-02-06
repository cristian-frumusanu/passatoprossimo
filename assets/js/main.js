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

            // Check if the aux input is empty
            if( ! this.inputAux ) {
                this.verbAuxValid = 'meh';
            } else
			// Check if the aux is avere
			if ( conjAvere.includes( this.inputAux.toLowerCase() ) &&
                this.currentVerb.verbAux.indexOf( 'avere' ) !== -1 ||
                this.inputAux === 'avere' ) {
                this.verbAuxValid = true;
                this.$refs.vbpart.focus();
            } else
			// Check if the aux is essere and in non-reflexive form
			if ( ( conjEssere.includes( this.inputAux.toLowerCase() ) &&
                    this.currentVerb.verbAux.indexOf( 'essere' ) !== -1 || this.inputAux === 'essere' ) &&
				! this.currentVerb.isReflexive ) {
                this.verbAuxValid = true;
                this.$refs.vbpart.focus();
            } else
			// Check if the aux is essere in reflexive form
			if( conjEssereRifl.includes( this.inputAux.toLowerCase() ) &&
                this.currentVerb.isReflexive || this.inputAux === 'essere' ) {
                this.verbAuxValid = true;
                this.$refs.vbpart.focus();
            } else {
				// The aux is not valid
                this.verbAuxValid = false;
            }
        },
        checkParticiple: function() {
            console.log( 'checkParticiple' );

            // If the participle has not been filled,
			// set the valid variable to a value that is
			// not true neither valse
            if( ! this.inputPart ) {
                this.verbPartValid = 'meh';
            } else {
                var currentInputPart = this.inputPart.toLowerCase();

                // If the aux is avere
                if ( this.currentVerb.verbAux.indexOf( 'avere' ) !== -1 &&
                    this.currentVerb.verbPart === currentInputPart ) {
                    this.verbPartValid = true;
                    this.$refs.vbpart.blur();
                } else
				// If the aux is essere and the participle matches without the first letter
				if ( this.currentVerb.verbAux === 'essere' &&
				currentInputPart.substr( 0, currentInputPart.length - 1 ) === this.currentVerb.verbPart.substr( 0, this.currentVerb.verbPart.length - 1 ) ) {

                	// If the auxiliary has been checked
                	if ( this.verbAuxValid === true  ) {
                		var partLastLetter = currentInputPart.slice(-1);

                		// check for the concordance between the auxiliary and the past participle
                        if ( ( ( this.inputAux.indexOf( conjEssere[0] ) !== -1 || this.inputAux.indexOf( conjEssere[1] ) !== -1 || this.inputAux.indexOf( conjEssere[2] ) !== -1 ) &&
								( partLastLetter === 'o' || partLastLetter === 'a' ) ) || // the check for singular verb form
							 ( ( this.inputAux.indexOf( conjEssere[3] ) !== -1 || this.inputAux.indexOf( conjEssere[4] ) !== -1 || this.inputAux.indexOf( conjEssere[5] ) !== -1 ) &&
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

            // // Check if the aux is valid but the participle no
            // if ( this.verbAuxValid === true && this.verbPartValid !== true ) {
            	// // Check if the input aux is avere or essere in singular form
             //    if ( ( this.currentVerb.verbAux === 'avere' ) ||
             //        this.inputAux.indexOf( conjEssere[0] ) !== -1 || this.inputAux.indexOf( conjEssere[1] ) !== -1 || this.inputAux.indexOf( conjEssere[2] ) !== -1 ) {
             //        this.inputPart = this.currentVerb.verbPart;
			// 	} else { // Input aux is essere in plural form
             //        this.inputAux = this.currentVerb.verbPart.substr( 0, this.currentVerb.verbPart.length - 1 ) + 'i';
			// 	}
            //
			// } else if ( this.verbAuxValid !== true && this.verbPartValid === true ) {
            //
			// } else {
            //
			// }

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