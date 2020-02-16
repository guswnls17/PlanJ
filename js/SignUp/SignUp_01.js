$(function(){

  //인풋 모두 입력 시 서브밋버튼 배경 변환
  function InputBoolean() {
    const userId = $("#signup01_userid").val();
    const nickName = $("#signup01_nickname").val();
    const userPW = $("#signup01_userpw").val();
    const PWConfirm = $("#signup01_pwconfirm").val();

    if( 
      userId != "" && 
      nickName != "" && 
      userPW != "" &&
      PWConfirm != ""
      ){
        $("#signup01_submit").css("background-color", "#32346e")
        $("#signup01_submit").css("color", "white");
        $("#signup01_submit").prop("disabled", false);
      } else {
        $("#signup01_submit").css("background-color", "white")
        $("#signup01_submit").css("color", "#cccccc")
        $("#signup01_submit").prop("disabled", true);
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

  $("#signup01_submit").click(function(e) {
    e.preventDefault();
    location.replace('../../html/SignUp/SignUp_02.html');
  });

});

