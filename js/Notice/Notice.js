$(function(){

  $('#notice_box > ul > li').click(function() {
    $("#notice_box > ul > li").removeClass('notice_tab_choice')
    $(this).addClass('notice_tab_choice');
  });

  //탭바 컨트롤
  $('#notice_tab_choice1').click(function() {
    $('#admin_notice_contents_box').css("display", "block");
    $('#normal_notice_contents_box').css("display", "none");
    $('#notice_tab_choice1 > p').css("color", "black");
    $('#notice_tab_choice2 > p').css("color", "#888888");
  })
  $('#notice_tab_choice2').click(function() {
    $('#admin_notice_contents_box').css("display", "none");
    $('#normal_notice_contents_box').css("display", "block");
    $('#notice_tab_choice1 > p').css("color", "#888888");
    $('#notice_tab_choice2 > p').css("color", "black");
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

  // 아이템 오픈 컨트롤
  $(".notice_item").click(function(){
    $("notice_item").removeClass('notice_item_open')
    $(this).addClass('notice_item_open');
    const noticeHeight = $(this).css("height");

    if(noticeHeight === "80px"){
      $(this).css("height", "auto");
      $(this).css("background-color", "#f6f8fa");
      $(this).find('.notice_more_btn > img').css("transform", "rotate(180deg)");

    } else {
      $(this).css("height", "80px");
      $(this).css("background-color", "white");
      $(this).find('.notice_more_btn > img').css("transform", "rotate(0deg)");
    }
  })

  //하단 팝업 체인지
  $(".notice_true").click(function(){
    $(".notice_true").css("display", "none");
    $(".notice_false").css("display", "flex");
  })
  $(".notice_false").click(function(){
    $(".notice_true").css("display", "flex");
    $(".notice_false").css("display", "none");
  })

  // 공지사항 등록 팝업 컨트롤
  $("#notice_add_back").click(function(){
    $("#notice_popup_bg").css("display", "block");
    $("#notice_add_cancel").css("display", "flex");
  });
  $("#notice_close_popup_cancel").click(function(){
    $("#notice_popup_bg").css("display", "none");
    $("#notice_add_cancel").css("display", "none");
  });

  $("#notice_add_submit").click(function(e){
    e.preventDefault();
    $("#notice_popup_bg").css("display", "block");
    $("#notice_add_ok").css("display", "flex");
  });
  $("#notice_ok_popup_cancel").click(function(){
    $("#notice_popup_bg").css("display", "none");
    $("#notice_add_ok").css("display", "none");
  });

  $("#notice_close_popup_ok").hover(function(){
    $("#notice_close_popup_cancel").css("color", "#888888");
    $("#notice_close_popup_cancel").css("border", "none");
  }, function(){
    $("#notice_close_popup_cancel").css("color", "black");
    $("#notice_close_popup_cancel").css("border-bottom", "1px solid black");
  })
  $("#notice_ok_popup_cancel").hover(function(){
    $("#notice_ok_popup_ok").css("color", "#888888");
    $("#notice_ok_popup_ok").css("border", "none");
  }, function(){
    $("#notice_ok_popup_ok").css("color", "black");
    $("#notice_ok_popup_ok").css("border-bottom", "1px solid black");
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