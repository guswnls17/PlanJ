$(function(){

  var dumydata = {
    "fwfind_id" : "fwfind_id",
    "fwfind_email" : "fwfind_email",
  }

  //인풋 모두 입력 시 서브밋버튼 배경 변환
  function InputBoolean() {
    const fwfind_id = $("#fwfind_id").val();
    const fwfind_email = $("#fwfind_email").val();

    if( 
      fwfind_id != "" && 
      fwfind_email != ""
      ){
        $("#fwfind_submit").css("background-color", "#32346e")
        $("#fwfind_submit").css("color", "white");
        $("#fwfind_submit").prop("disabled", false);
      } else {
        $("#fwfind_submit").css("background-color", "white")
        $("#fwfind_submit").css("color", "#cccccc")
        $("#fwfind_submit").prop("disabled", true);
      }
  }

  // 인풋 에러 메세지
  $("input").change(function() {
    var useridVal = $(this).val();

    if (useridVal != "11"){
      $(this).siblings("div").css("display", "flex");
    } else {
      $(this).siblings("div").css("display", "none");
    }

    if (useridVal === ""){
      $(this).siblings("p").css("display", "block");
      $(this).siblings("div").css("display", "none");
    } else {
      $(this).siblings("p").css("display", "none");
    }

    InputBoolean();
  });

  //팝업
  $("#fwfind_popup_01_ok").click(function(){
    $("#fwfind_popup_bg").css("display", "none");
    $("#fwfind_popup_01").css("display", "none");
  });
  $("#fwfind_popup_02_ok").click(function(){
    $("#fwfind_popup_bg").css("display", "none");
    $("#fwfind_popup_02").css("display", "none");
  });
  $("#fwfind_submit").click(function(){
    const fwfind_id = $("#fwfind_id").val();
    if(fwfind_id === "11"){
      $("#fwfind_popup_bg").css("display", "block");
      $("#fwfind_popup_01").css("display", "flex");
    } else {
      $("#fwfind_popup_bg").css("display", "block");
      $("#fwfind_popup_02").css("display", "flex");
    }
  });
});

