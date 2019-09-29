$(function(){

  var dumydata = {
    "changefw_fw" : "changefw_fw"
  };

  //인풋 모두 입력 시 서브밋버튼 배경 변환
  const InputBoolean = () => {
    const changefw_fw = $("#changefw_fw").val();
    const changefw_confirm = $("#changefw_confirm").val();

    if( 
      changefw_fw != "" && 
      changefw_confirm != ""
      ){
        $("#submit_confirm").css("background-color", "#32346e")
        $("#submit_confirm").css("color", "white");
        $("#submit_confirm").prop("disabled", false);
      } else {
        $("#submit_confirm").css("background-color", "white")
        $("#submit_confirm").css("color", "#cccccc")
        $("#submit_confirm").prop("disabled", true);
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

    if(useridVal === ""){
      $(this).siblings("p").css("display", "block");
      $(this).siblings("div").css("display", "none");
    } else {
      $(this).siblings("p").css("display", "none");
    }

    InputBoolean();
  });

  // password화인
  $("#changefw_confirm").change(function() {
    var fwVal = $("#changefw_fw").val();
    var confirmVal = $("#changefw_confirm").val();

    if (fwVal === confirmVal){
      $(this).siblings("div").css("display", "none");
    } else {
      $(this).siblings("div").css("display", "flex");
      $(this).siblings("p").css("display", "none");
    }

    InputBoolean();
  });

  //서브밋 버튼 컨트롤
  $("#submit_confirm").click(function(e) {
    e.preventDefault();
    location.replace('../../html/Find/Complete.html');
  });
});

