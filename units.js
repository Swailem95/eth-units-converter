$( document ).ready(function() {

  $('#fromValue').on('input', function(){
    convert();
  });

  $('#from, #to').on('hidden.bs.select', function () {
    convert();
});

  var convert = function(){

    var from = $('#from').find(":selected").text().toLowerCase();
    var to = $('#to').find(":selected").text().toLowerCase();

    var fromValue = $('#fromValue').val();
    var fromInEth;
    var result;

    switch(from){
      case 'ether': fromInEth = fromValue; break;
      case 'finney': fromInEth = (fromValue/1e3); break;
      case 'szabo': fromInEth = (fromValue/1e6); break;
      case 'gwei': fromInEth = (fromValue/1e9); break;
      case 'mwei': fromInEth = (fromValue/1e12); break;
      case 'kwei': fromInEth = (fromValue/1e15); break;
      case 'wei': fromInEth = (fromValue/1e18); break;
    }

    switch(to){

      case 'ether': result = fromInEth; break;
      case 'finney': result = fromInEth * 1e3; break;
      case 'szabo': result = fromInEth * 1e6; break;
      case 'gwei': result = fromInEth * 1e9; break;
      case 'mwei': result = fromInEth * 1e12; break;
      case 'kwei': result = fromInEth * 1e15; break;
      case 'wei': result = fromInEth * 1e18; break;
    }

    $('#toValue').text(result);
  }

});
