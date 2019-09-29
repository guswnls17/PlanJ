$(function(){

  var dumydata = {
    "username" : "username",
    "userdate" : "00000000",
    "useremail" : "useremail",
    "userphone" : "00000000000"
  }

  //인풋 모두 입력 시 서브밋버튼 배경 변환
  const InputBoolean = () => {
    const username = $("#signup02_username").val();
    const userdate = $("#signup02_userdate").val();
    const useremail = $("#signup02_useremail").val();
    const userphone = $("#signup02_userphone").val();
    const certification = $("#signup02_certification").val();
    if( 
      username != "" && 
      userdate != "" && 
      useremail != "" &&
      userphone != "" &&
      certification != "" 
      ){
        $("#signup02_submit").css("background-color", "#32346e")
        $("#signup02_submit").css("color", "white")
        $("#signup02_submit").prop("disabled", false);
      } else {
        $("#signup02_submit").css("background-color", "white")
        $("#signup02_submit").css("color", "#cccccc")
        $("#signup02_submit").prop("disabled", true);
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

    InputBoolean()
  });

  // 핸드폰 인증 버튼
  $("#signup02_userphone").change(function() {
    var useridVal = $(this).val();

    if( useridVal != "" ) {
      $("#certification_button").css("background-color", "#32346e")
      $("#certification_button").css("color", "white")
    } else {
      $("#certification_button").css("background-color", "white")
      $("#certification_button").css("color", "black")
    }
  })

  //팝업
  $("#signup02_submit").click(function(){
    $("#signup02_popup_bg").css("display", "block");
    $("#signup02_popup").css("display", "flex");
  });
});

