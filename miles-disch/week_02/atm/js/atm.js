var atm = {
  checkingBalance: 0,
  savingsBalance: 0,
  remainder: 0,
  // .. other code here..
  clearInputSav: function () {
    $("#savings-amount").val('');
    console.log("mouseup")
  },
  clearInputChk: function () {
    $("#checking-amount").val('');
    console.log("mouseup")
  },
  depositInSavings: function () {
    var savAmountToDepo = parseInt($("#savings-amount").val());
    atm.savingsBalance += savAmountToDepo || 0;
    $("#savings-balance").html("$" + atm.savingsBalance);
    if (atm.savingsBalance > 0) {
        $("#savings-balance").css("background-color", "white");
      }
  },
  depositInChecking: function () {
    var depAmountToDepo = parseInt($("#checking-amount").val());
    atm.checkingBalance += depAmountToDepo || 0;
    $("#checking-balance").html("$" + atm.checkingBalance);
    if ( atm.checkingBalance > 0 ) {
      $("#checking-balance").css("background-color", "white");  
    }
  },
  withdrawChecking: function() {
      var drawAmountFromChk = parseInt($("#checking-amount").val());
      if ( drawAmountFromChk > atm.savingsBalance && drawAmountFromChk > atm.checkingBalance || drawAmountFromChk > atm.savings-balanceBalance ) {        
      	alert("you aint got enough dolla dolla bills yo.")
      } 
      else if ( drawAmountFromChk > atm.checkingBalance ) {
        atm.remainder = drawAmountFromChk;
        atm.savingsBalance = Math.abs(atm.remainder - atm.savingsBalance);
        $("#savings-balance").html("$" + atm.savingsBalance)
	      if ( atm.checkingBalance === 0 ) {
	        $('#checking-balance').css("background-color", "red")
	      } 
	      debugger;
	  } else {
        atm.checkingBalance -= drawAmountFromChk || 0;
        $("#checking-balance").html("$" + atm.checkingBalance);
          if ( atm.checkingBalance === 0 ) {
	        $('#checking-balance').css("background-color", "red")
	      } 
      	}
  },
  withdrawSaving: function() {
      var drawAmountFromSav = parseInt($("#savings-amount").val()); 
      if ( drawAmountFromSav > atm.savingsBalance && drawAmountFromSav > atm.checkingBalance || drawAmountFromSav > atm.checkingBalance) {
      	alert("you aint got enough dolla dolla bills yo.")
      } else if ( drawAmountFromSav > atm.savingsBalance ) {
      	atm.remainder = drawAmountFromSav;
        atm.checkingBalance = Math.abs(atm.remainder - atm.checkingBalance);
      	$("#checking-balance").html('$' + atm.checkingBalance);
      	  if ( atm.savingsBalance === 0 ) {
	        $('#savings-balance').css("background-color", "red")
	      }
      } else {
        atm.savingsBalance -= drawAmountFromSav || 0; 
        $("#savings-balance").html('$' + atm.savingsBalance);
	      if ( atm.savingsBalance === 0 ) {
	        $('#savings-balance').css("background-color", "red")
	      }
      }
    		
  },
  // maxWithdraw: function () {
  //   if ( atm.remainder > atm.checkingBalance && atm.remainder > atm.savingsBalance ) { 
  //    alert("you dont have enough money to withdraw that amount!")
  //   } else {
  //     atm.checkingBalance = atm.remainder - atm.checkingBalance
  //     $("checking-balance").html('$' + atm.checkingBalance);
  //   }
  // }, 

  // withdrawSaving: function () {}



  init: function () {
    // jQuery stuff goes here
    $('#savings-deposit').on('mousedown', this.depositInSavings);
    $('#savings-deposit').on('mouseup', this.clearInputSav);
    $('#savings-withdraw').on('mousedown', this.withdrawSaving);
    $('#savings-withdraw').on('mouseup', this.clearInputSav);
    $('#checking-deposit').on('mousedown', this.depositInChecking);
    $('#checking-deposit').on('mouseup', this.clearInputChk);
    $('#checking-withdraw').on('mousedown', this.withdrawChecking);
    $('#checking-withdraw').on('mouseup',this.clearInputChk);
  
  }
}

// then a minimal document ready:

$(document).ready(function () {
    atm.init();
});