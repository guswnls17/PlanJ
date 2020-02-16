$(function(){

  //인풋 모두 입력 시 서브밋버튼 배경 변환
  function InputBoolean() {
    const idfind_name = $("#idfind_name").val();
    const idfind_date = $("#idfind_date").val();
    const idfind_email = $("#idfind_email").val();

    if( 
      idfind_name != "" && 
      idfind_date != "" && 
      idfind_email != ""
      ){
        $("#idfind_submit").css("background-color", "#32346e")
        $("#idfind_submit").css("color", "white");
        $("#idfind_submit").prop("disabled", false);
      } else {
        $("#idfind_submit").css("background-color", "white")
        $("#idfind_submit").css("color", "#cccccc")
        $("#idfind_submit").prop("disabled", true);
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
  $("#idfind_popup_01_ok").click(function(){
    $("#idfind_popup_bg").css("display", "none");
    $("#idfind_popup_01").css("display", "none");
  });
  $("#idfind_popup_02_ok").click(function(){
    $("#idfind_popup_bg").css("display", "none");
    $("#idfind_popup_02").css("display", "none");
  });
  $("#idfind_submit").click(function(){
    const idfind_name = $("#idfind_name").val();
    if(idfind_name == "11"){
      $("#idfind_popup_bg").css("display", "block");
      $("#idfind_popup_01").css("display", "flex");
    } else {
      $("#idfind_popup_bg").css("display", "block");
      $("#idfind_popup_02").css("display", "flex");
    }
  });
});

