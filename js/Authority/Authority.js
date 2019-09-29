$(function(){
  $('#authority_box > ul > li').click(function() {
    $("#authority_box > ul > li").removeClass('tab_choice')
    $(this).addClass('tab_choice');
  });

  //탭바 컨트롤
  $('#authority_tab_choice1').click(function() {
    $('#authority_contents_box').css("display", "block");
    $('#author_contents_box').css("display", "none");
    $('#chart_contents_box').css("display", "none");
    $('#authority_tab_choice1 > p').css("color", "black");
    $('#authority_tab_choice2 > p').css("color", "#888888");
    $('#authority_tab_choice3 > p').css("color", "#888888");
  })
  $('#authority_tab_choice2').click(function() {
    $('#author_contents_box').css("display", "block");
    $('#authority_contents_box').css("display", "none");
    $('#chart_contents_box').css("display", "none");
    $('#authority_tab_choice2 > p').css("color", "black");
    $('#authority_tab_choice1 > p').css("color", "#888888");
    $('#authority_tab_choice3 > p').css("color", "#888888");
  });
  $('#authority_tab_choice3').click(function() {
    $('#chart_contents_box').css("display", "block");
    $('#author_contents_box').css("display", "none");
    $('#authority_contents_box').css("display", "none");
    $('#authority_tab_choice3 > p').css("color", "black");
    $('#authority_tab_choice1 > p').css("color", "#888888");
    $('#authority_tab_choice2 > p').css("color", "#888888");
  });

  // 관리자 편집 컨트롤
  $('.authority_edit_btn').click(function() {
    $(this).siblings('.authority_edit').css("display", "flex");
  });
  $('.authority_edit_close').click(function() {
    $('.authority_edit').css("display", "none");
  });

  // 팝업 컨트롤
  $(".authority_admin_add_btn").click(function(){
    $("#authority_popup_bg").css("display", "block");
    $("#authority_add_ok").css("display", "flex");
  });
  $("#authority_popup_ok").click(function(){
    $("#authority_popup_bg").css("display", "none");
    $("#authority_add_ok").css("display", "none");
  });

  $("#authority_popup_no").hover(function(){
    $("#authority_popup_ok").css("color", "#888888");
    $("#authority_popup_ok").css("border", "none");
  }, function(){
    $("#authority_popup_ok").css("color", "black");
    $("#authority_popup_ok").css("border-bottom", "1px solid black");
  })

  $(".authority_delete").click(function(){
    $("#authority_popup_bg").css("display", "block");
    $("#authority_add_delete").css("display", "flex");
  });
  $("#authority_popup_delete_ok").click(function(){
    $("#authority_popup_bg").css("display", "none");
    $("#authority_add_delete").css("display", "none");
  });

  $("#authority_popup_delete_ok").hover(function(){
    $("#authority_popup_delete_no").css("color", "#888888");
    $("#authority_popup_delete_no").css("border", "none");
  }, function(){
    $("#authority_popup_delete_no").css("color", "black");
    $("#authority_popup_delete_no").css("border-bottom", "1px solid black");
  })


  // 하단 팝업 컨트롤
  $("#authority_footer_popup_edit").click(function(){
    $("#authority_footer_popup_delete").css("display", "flex");
    $("#authority_footer_popup_edit").css("display", "none");
  });
  $("#authority_footer_popup_delete").click(function(){
    $("#authority_footer_popup_edit").css("display", "flex");
    $("#authority_footer_popup_delete").css("display", "none");
  });

  // 셀렉트 박스 컨트롤
  $(".author_notadd_select > div:nth-child(1)").click(function(){
    $(this).siblings(".author_notadd_select_menu").css("display", "flex");
  });
  $(".author_notadd_select_menu > div").click(function(){
    $(".author_notadd_select_menu").css("display", "none");
  });
  $(".author_add_select > div:nth-child(1)").click(function(){
    $(this).siblings(".author_add_select_menu").css("display", "flex");
  });
  $(".author_add_select_menu > div").click(function(){
    $(".author_add_select_menu").css("display", "none");
  });

  // 아이템 오픈 컨트롤
  $(".group_item").click(function(){
    $("group_item").removeClass('group_item_open')
    $(this).addClass('group_item_open');
    const noticeHeight = $(this).css("height");

    if(noticeHeight === "95px"){
      $(this).css("height", "auto");
      $(this).css("background-color", "#f6f8fa");
      $(this).find('.group_item_icon > img').css("transform", "rotate(180deg)");
    } else {
      $(this).css("height", "95px");
      $(this).css("background-color", "white");
      $(this).find('.group_item_icon > img').css("transform", "rotate(0deg)");
    }
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