$(function(){
  $('#calculate_box > ul > li').click(function() {
    $("#calculate_box > ul > li").removeClass('calculate_tab_choice')
    $(this).addClass('calculate_tab_choice');
  });

  //탭바 하단 박스 컨트롤
  $('#calculate_tab_choice1').click(function() {
    $('#calculate_contents_box').css("display", "block");
    $('#sales_contents_box').css("display", "none");
    $('#calculate_tab_choice1 > p').css("color", "black");
    $('#calculate_tab_choice2 > p').css("color", "#888888");
  })
  $('#calculate_tab_choice2').click(function() {
    $('#calculate_contents_box').css("display", "none");
    $('#sales_contents_box').css("display", "block");
    $('#calculate_tab_choice1 > p').css("color", "#888888");
    $('#calculate_tab_choice2 > p').css("color", "black");
  })

  //정산관리 인풋파일명 변경
  var fileTarget = $('#calculate_file_input'); 
  fileTarget.on('change', function(){
     // 값이 변경되면 
     if(window.FileReader){ 
       // modern browser 
       var filename = $(this)[0].files[0].name; 
      } else { 
        // old IE 
        var filename = $(this).val().split('/').pop().split('\\').pop(); 
        // 파일명만 추출 
      } 
      // 추출한 파일명 삽입 
      $(this).siblings('#calculate_file_name').val(filename); 
    });


    //정산 저장 버튼 컨트롤
    $('#file_list_btn').click(function() {
      $('#calculate_saved').css("display", "none");
      $('#file_list_btn').css("display", "none");
      $('#calculate_list_input').css("display", "none");
    })


    //유저리스트 선택 컨트롤
    $('.calculate_user_profile').click(function() {
      $('.calculate_user_profile').removeClass('calculate_user_profile_backcolor');
      $(this).addClass('calculate_user_profile_backcolor');
      $('#calculate_file').css("display", "block");
      $('#calculate_list').css("display", "block");
      $('#calculate_file_none').css("display", "none");
    })

    //상단 플랫폼 리스트 슬라이드 컨트롤
    var bannerLength = $("#platform_list_width > div > p").length;
    var currentIndex = 0;

    function showImage(index){
      var left = (index*114);
      $("#platform_list_width > div").animate({marginLeft:-left}, 500);
    }

    function buttonOacity(){
      if(currentIndex === 0) {
        $('#platform_list_prev').css("opacity", "0.3")
      } else {
        $('#platform_list_prev').css("opacity", "1")
      }
      if(currentIndex === bannerLength - 1) {
        $('#platform_list_next').css("opacity", "0.3")
      } else {
        $('#platform_list_next').css("opacity", "1")
      }
    }
    buttonOacity()

    $('#platform_list_prev').click(function() {
      if(currentIndex > 0) {
          currentIndex--;
        } 

        showImage(currentIndex);
        buttonOacity()
    })

    $('#platform_list_next').click(function() {

      if(currentIndex < bannerLength - 1){
        currentIndex++;
      }
  
        showImage(currentIndex);
        buttonOacity()
    })

    $('#platform_list_width > div > p').click(function() {
      $('#platform_list_width > div > p').removeClass('platform_list_choice');
      $(this).addClass('platform_list_choice');
      $('#calculate_list').css("display", "none");
      $('#calculate_file_none').css("display", "flex");
    })

    // 매출 테이블 초이스 컨트롤
    $('#sales_contents_list_table > div > p').click(function() {
      $('#sales_contents_list_table > div > p').removeClass('sales_contents_list_table_choice');
      $(this).addClass('sales_contents_list_table_choice');
    });

    $('#platform_choice').click(function() {
      $('#sales_contents_list_table_platform').css("display", "block");
      $('#sales_contents_list_table_writer').css("display", "none");
    })
    $('#writer_choice').click(function() {
      $('#sales_contents_list_table_platform').css("display", "none");
      $('#sales_contents_list_table_writer').css("display", "block");
    })

    //사이드바 링크 컨트롤
    $(".side_bar > ul > li:nth-child(1)").click(function(e) {
      location.replace('../../html/Calendar/Calendar.html');
    });
    $(".side_bar > ul > li:nth-child(2)").click(function(e) {
      location.replace('../../html/Chatting/Chatting.html');
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

  // 선지급 데이터 팝업 컨트롤
  $("#calculate_list_input > button").click(function(){
    $("#popup_bg").css("display", "flex");
    $("#payment_popup").css("display", "flex");
  });
  $("#payment_popup_exit").click(function(){
    $("#popup_bg").css("display", "none");
    $("#payment_popup").css("display", "none");
  });
  $("#payment_popup_ok").click(function(){
    $("#popup_bg").css("display", "none");
    $("#payment_popup").css("display", "none");
  });
  $("#payment_popup_exit").hover(function(){
    $("#payment_popup_exit").css("color", "black");
    $("#payment_popup_exit").css("border-bottom", "1px solid black");
    $("#payment_popup_ok").css("color", "#888888");
    $("#payment_popup_ok").css("border", "none");
  }, function(){
    $("#payment_popup_exit").css("color", "#888888");
    $("#payment_popup_exit").css("border", "none");
    $("#payment_popup_ok").css("color", "black");
  })  
  $("#payment_popup_ok").hover(function(){
    $("#payment_popup_ok").css("border-bottom", "1px solid black");
  }, function(){
    $("#payment_popup_ok").css("border", "none");
  })
})