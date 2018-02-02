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
	'mi sono',
	'ti sei',
	'lui è',
	'lei è',
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
		timeout: null
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
			} else if ( conjEssere.includes( this.inputAux.toLowerCase() ) &&
				this.currentVerb.verbAux.indexOf( 'essere' ) !== -1 ||
				this.inputAux === 'essere' ) {
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
		},
		resolve: function() {
			console.log( 'resolve' );

            this.verbAuxValid !== true ? this.inputAux = this.currentVerb.verbAux : '';
            this.verbPartValid !== true ? this.inputPart = this.currentVerb.verbPart : '';

            this.verbAuxValid = true;
            this.verbPartValid = true;
		},
		onSubmit: function() {
			console.log( 'onSubmit' );
		}
	},
	mounted: function() {
		this.setNewVerb();
		document.getElementsByTagName( 'body' )[0].classList.add( 'is--loaded' );
	}
});
