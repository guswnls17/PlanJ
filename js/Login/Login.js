$(function(){

  const InputBoolean = () => {
    const userId = $("#id_box > input").val();
    const nickName = $("#pw_box > input").val();

    if( 
      userId != "" && 
      nickName != ""
      ){
        $("#login_button").prop("disabled", false);
      } else {
        $("#login_button").prop("disabled", true);
      }
  }

  $("input").change(function() {

    var useridVal = $(this).val();

    if (useridVal != "11"){
      $(this).siblings("div").css("display", "flex");
    } else {
      $(this).siblings("div").css("display", "none");
    }

    InputBoolean();
  })

});