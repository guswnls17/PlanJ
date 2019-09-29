$(function(){
  $('#follow_box > ul > li').click(function() {
    $("#follow_box > ul > li").removeClass('folow_tab_choice')
    $(this).addClass('folow_tab_choice');
  });

  //탭바 컨트롤
  $('#follow_tab_choice1').click(function() {
    $('#unfollow_contents_box').css("display", "block");
    $('#follow_contents_box').css("display", "none");
    $('#follow_tab_choice1 > p').css("color", "black");
    $('#follow_tab_choice2 > p').css("color", "#888888");
  })
  $('#follow_tab_choice2').click(function() {
    $('#unfollow_contents_box').css("display", "none");
    $('#follow_contents_box').css("display", "block");
    $('#follow_tab_choice1 > p').css("color", "#888888");
    $('#follow_tab_choice2 > p').css("color", "black");
  });

  // 팔로우 승인 취소 팝업
  $(".follow_close_btn").click(function(){
    $("#follow_close_popup_bg").css("display", "block");
    $("#follow_close_popup").css("display", "flex");
  });
  $("#follow_close_popup_cancel").click(function(){
    $("#follow_close_popup_bg").css("display", "none");
    $("#follow_close_popup").css("display", "none");
    $("#share_user_choice_popup").css("display", "none")
  })
  $("#follow_close_popup_ok").hover(function(){
    $("#follow_close_popup_cancel").css("color", "#888888");
    $("#follow_close_popup_cancel").css("border", "none");
  }, function(){
    $("#follow_close_popup_cancel").css("color", "black");
    $("#follow_close_popup_cancel").css("border-bottom", "1px solid black");
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