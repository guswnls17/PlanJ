$(function(){

  //탭바 컨트롤
  $('#chatting_tabbar > ul > li').click(function() {
    $("#chatting_tabbar > ul > li").removeClass('chatting_tab_choice')
    $(this).addClass('chatting_tab_choice');
  });

  //탭바 하단 박스 컨트롤
  $('#chatting_tab_choice1').click(function() {
    $('#friends_sidelist').css("display", "block");
    $('#chatting_sidelist').css("display", "none");
    $('#share_sidelist').css("display", "none");
    $('#chatting_tab_choice1 > img:first-child').css("display", "block");
    $('#chatting_tab_choice1 > img:last-child').css("display", "none");
    $('#chatting_tab_choice2 > img:first-child').css("display", "none");
    $('#chatting_tab_choice2 > img:last-child').css("display", "block");
    $('#chatting_tab_choice3 > img:first-child').css("display", "none");
    $('#chatting_tab_choice3 > img:last-child').css("display", "block");
  })
  $('#chatting_tab_choice2').click(function() {
    $('#friends_sidelist').css("display", "none");
    $('#chatting_sidelist').css("display", "block");
    $('#share_sidelist').css("display", "none");
    $('#chatting_tab_choice2 > img:first-child').css("display", "block");
    $('#chatting_tab_choice2 > img:last-child').css("display", "none");
    $('#chatting_tab_choice1 > img:first-child').css("display", "none");
    $('#chatting_tab_choice1 > img:last-child').css("display", "block");
    $('#chatting_tab_choice3 > img:first-child').css("display", "none");
    $('#chatting_tab_choice3 > img:last-child').css("display", "block");
  })
  $('#chatting_tab_choice3').click(function() {
    $('#friends_sidelist').css("display", "none");
    $('#chatting_sidelist').css("display", "none");
    $('#share_sidelist').css("display", "block");
    $('#chatting_tab_choice3 > img:first-child').css("display", "block");
    $('#chatting_tab_choice3 > img:last-child').css("display", "none");
    $('#chatting_tab_choice2 > img:first-child').css("display", "none");
    $('#chatting_tab_choice2 > img:last-child').css("display", "block");
    $('#chatting_tab_choice1 > img:first-child').css("display", "none");
    $('#chatting_tab_choice1 > img:last-child').css("display", "block");
  })

  // 쉐어리스트 공유 팝업 컨트롤
  $('#share_user_choice_popup_on').click(function() {
    $("#share_user_choice_popup").css("display", "flex")
  })

    // 채팅 메세지 공유 팝업 취소 
    $("#share_user_choice_popup_exit").click(function(){
      $("#chatting_close_popup_bg").css("display", "block");
      $("#chatting_close_popup").css("display", "flex");
    });
    $("#chatting_close_popup_ok").click(function(){
      $("#chatting_close_popup_bg").css("display", "none");
      $("#chatting_close_popup").css("display", "none");
      $("#share_user_choice_popup").css("display", "none")
    })
    $("#chatting_close_popup_ok").hover(function(){
      $("#chatting_close_popup_cancel").css("color", "#888888");
      $("#chatting_close_popup_cancel").css("border", "none");
    }, function(){
      $("#chatting_close_popup_cancel").css("color", "black");
      $("#chatting_close_popup_cancel").css("border-bottom", "1px solid black");
    })

    // 채팅창 친구등록 컨트롤
    $("#unregister_friend").hover(function(){
      $("#register_friend").css("font-weight", "300");
      $("#unregister_friend").css("font-weight", "bold");
    }, function(){
      $("#register_friend").css("font-weight", "bold");
      $("#unregister_friend").css("font-weight", "300");
    });

    // 사이드 바 채팅유저 백컬러 컨트롤
    $(".chatting_user").click(function(){
      $(".chatting_user").removeClass('chatting_user_background');
      $(this).addClass('chatting_user_background');
    });

    // 채팅방 상단 팝업 컨트롤
    $("#unregister_friend").click(function(){
      $("#register_friend_box").css('display', "none");
    });

    //채팅방 윈도우 컨트롤
    $(".chatting_user:nth-child(2)").click(function(){
      $("#chatting_window_box").css("display", "block");
      $("#notice_chatting_window_box").css("display", "none");
    });
    $("#chatting_window_box_back").click(function(){
      $("#chatting_window_box").css("display", "none");
    });

    //공지사항 윈도우 컨트롤
    $(".chatting_user:nth-child(1)").click(function(){
      $("#notice_chatting_window_box").css("display", "block");
      $("#chatting_window_box").css("display", "none");
    });
    $("#notice_chatting_window_box_back").click(function(){
      $("#notice_chatting_window_box").css("display", "none");
    });

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

})