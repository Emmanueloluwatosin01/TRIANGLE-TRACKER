$(document).ready(function() {
 $("#school").submit(function(event){
  event.preventDefault();
  const Side1 = parseInt($("#Side-1").val());
  const Side2 = parseInt($("#Side-2").val());
  const Side3 = parseInt($("#Side-3").val());

  if(Side1 === Side2 && Side2=== Side3 && Side1=== Side3){
     $("#equilat").show();
     $("#isoc").hide();
     $("#scal").hide();
     $("#ntn").hide();
  }
  else if (((Side1 + Side2) <= Side3) || ((Side2 + Side3) <= Side1) || ((Side1 +Side3) <= Side2)){
    $("#ntn").show();
    $("#scal").hide();
    $("#isoc").hide();
    $("#equilat").hide();
  }
//   else if(Side1 === Side2 || Side2 === Side3 || Side1 === Side3){
//     $("#isoc").show();
//     $("#equilat").hide();
//     $("#scal").hide();
//      $("#ntn").hide();
//   }
//   else if(Side1 !== Side2 && Side2 !== Side3 && Side1 !== Side3){
//     $("#scal").show();
//     $("#isoc").hide();
//     $("#equilat").hide();
//     $("#ntn").hide();
//   }
  
// })
// });