// var hammingDistance = {

// 	firstStrand:[],
// 	secondStrand:[]

// 	compareStrands: function (  ) {
// 		for ( var i = 0; i < firstStrand.length - 1; i++ ) {

// 		}
// 	}

// }

var Nuc = function (nuc) {

	this.nuc = nuc;


	this.hammingDistance = function ( other_nuc ) {
		var diffrence = 0;
		var nuc = this.nuc;

		for ( var i = 0; i < nuc.length; i++ ) {
			if ( nuc[i] !== other_nuc[i] ) {
				diffrence += 1;
			}
		}

		console.log( diffrence )
		return diffrence;
	}
}


	var nuc_one = new Nuc("athcpir")
