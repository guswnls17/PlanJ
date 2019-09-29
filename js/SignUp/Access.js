$(function(){

  //약관동의 체크박스 두 개 다 선택 시 버튼 변환
  $("input:checkbox").click(function(){
    var checkbox1 = $("input:checkbox[id='checkbox1']").is(":checked");
    var checkbox2 = $("input:checkbox[id='checkbox2']").is(":checked");

    if(checkbox1 && checkbox2) {
      $('#access_button_agree').css("background-color", "#32346e");
      $('#access_button_agree').css("color", "white");
      $("#access_button_agree").prop("disabled", false);
    } else {
      $('#access_button_agree').css("background-color", "#ffffff");
      $('#access_button_agree').css("color", "black");
      $("#access_button_agree").prop("disabled", true);
    }
  });

  //약관동의 취소팝업 취소 버튼 변환
  $("#access_popup_false_ok").hover(function(){
    $("#access_popup_false_cancel").css("border", "none");
    $("#access_popup_false_cancel").css("color", "#888888");
  }, function() {
    $("#access_popup_false_cancel").css("border-bottom", "1px solid black");
    $("#access_popup_false_cancel").css("color", "black");
  });

  // 동의취소 버튼 클릭 시 팝업 관련
  $("#access_button_agree_cancel").click(function(){
    $("#access_popup_bg").css("display", "block");
    $("#access_popup").css("display", "flex");
  });
  $("#access_popup_false_cancel").click(function(){
    $("#access_popup_bg").css("display", "none");
    $("#access_popup").css("display", "none");
  });
});