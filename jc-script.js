$(document).ready(function(){
  var getSum = function (n){
    var sum = 0;
    var suntCount = 0;
    for (var i=1; i <= n; i++){
      $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/posts/"+i,
        dataType:"json",
        contentType : 'application/json',
        success: function (data){
          let getBody = data.body;
          if (getBody.indexOf('sunt') != -1) {
            function magicFunction(x) {  
              sum += x;
              return sum;
            }
            function suntCountFunction(x) {  
              suntCount += x;
              return suntCount;
            }
            var value = magicFunction(data.id);
            $("#appendSum").html(value);
            var suntValue = suntCountFunction(data.userId);
            $("#wordSunt").html(suntValue);
          }
        }
      });
    }
  };
  $("#clickMe").click(function(event){
  	event.preventDefault();
    var inputValue = $("#inputNum").val();
    if(inputValue != ''){
    	$("#entrSum").html(inputValue);
    	getSum(inputValue);
    }else{
     alert("Please enter number to check sum!");
     $("#entrSum").text('');
     $("#wordSunt").text('');
     $("#appendSum").text('');
    }
  });
});
