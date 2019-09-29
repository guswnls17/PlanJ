$(function(){
  $('#account_box > ul > li').click(function() {
    $("#account_box > ul > li").removeClass('tab_choice')
    $(this).addClass('tab_choice');
  });

  //탭바 컨트롤
  $('#account_tab_choice1').click(function() {
    $('#account_contents_box').css("display", "block");
    $('#password_contents_box').css("display", "none");
    $('#account_tab_choice1 > p').css("color", "black");
    $('#account_tab_choice2 > p').css("color", "#888888");
  })
  $('#account_tab_choice2').click(function() {
    $('#account_contents_box').css("display", "none");
    $('#password_contents_box').css("display", "block");
    $('#account_tab_choice1 > p').css("color", "#888888");
    $('#account_tab_choice2 > p').css("color", "black");
  });

  $('#account_phone_btn').click(function() {
    $('#account_phone_btn').css("color", "white");
    $('#account_phone_btn').css("background-color", "#32346e");
    $('#account_contents_box > form > div:nth-child(5)').css("display", "block");
    $('#account_phone > div:nth-child(3)').css("display", "none");
    $('#account_phone_btn > h1').css("color", "white");
  });


  const InputBoolean = () => {
    const userId = $("#account_id > input").val();
    const nickName = $("#account_name > input").val();
    const userPW = $("#account_email > input").val();
    const phone = $("#account_phone > input").val();
    const phoneConfirm = $("#account_phone_confirm > input").val();

    if( 
      userId != "" && 
      nickName != "" && 
      userPW != "" &&
      phone != "" &&
      phoneConfirm != "" 
      ){
        $("#account_contents_box > form > button").css("background-color", "#32346e")
        $("#account_contents_box > form > button").css("color", "white");
        $("#account_contents_box > form > button").prop("disabled", false);
      } else {
        $("#account_contents_box > form > button").css("background-color", "white")
        $("#account_contents_box > form > button").css("color", "black")
        $("#account_contents_box > form > button").prop("disabled", true);
      }
  }

  const PasswordInputBoolean = () => {
    const userId = $("#now_passowrd > input").val();
    const nickName = $("#new_password > input").val();
    const userPW = $("#new_passowrd_confirm > input").val();

    if( 
      userId != "" && 
      nickName != "" && 
      userPW != ""
      ){
        $("#password_contents_box > form > button").css("background-color", "#32346e")
        $("#password_contents_box > form > button").css("color", "white");
        $("#password_contents_box > form > button").prop("disabled", false);
      } else {
        $("#password_contents_box > form > button").css("background-color", "white")
        $("#password_contents_box > form > button").css("color", "black")
        $("#password_contents_box > form > button").prop("disabled", true);
      }
  }

  $("input").change(function() {

    var useridVal = $(this).val();
    var dumydataVal = $(this).attr('name');

    if (useridVal != "11"){
      $(this).siblings("div:nth-child(3)").css("display", "flex");
    } else {
      $(this).siblings("div:nth-child(3)").css("display", "none");
    }

    InputBoolean();
    PasswordInputBoolean();
  })

    //사이드바 링크 컨트롤
    $(".side_bar > ul > li:nth-child(1)").click(function(e) {
      location.replace('../../html/Calender/Calender.html');
    });
    $(".side_bar > ul > li:nth-child(2)").click(function(e) {
      location.replace('../../html/Chatting/Chatting.html');
    });
    $(".side_bar > ul > li:nth-child(3)").click(function(e) {
      location.replace('../../html/Calculate/CalculateContent.html');
    });
    $(".side_bar > ul > li:nth-child(4)").click(function(e) {
      location.replace('../../html/Follow/FollowContent.html');
    });
    $(".side_bar > ul > li:nth-child(5)").click(function(e) {
      location.replace('../../html/Notice/Notice.html');
    });
    $(".side_bar > ul > li:nth-child(6)").click(function(e) {
      location.replace('../../html/Account/Account.html');
    });
    $(".side_bar > ul > li:nth-child(7)").click(function(e) {
      location.replace('../../html/Authority/Authority.html');
    });
});