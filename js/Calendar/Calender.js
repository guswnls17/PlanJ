document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: "ko",
    plugins: [ 'dayGrid' ],
    defaultView: 'dayGridMonth',
    eventLimit: true,
    timeZone: 'local',
    header: {
      right: 'addEventButton',
      left: 'title',
    },
    navLinks: true,
    navLinkDayClick: function(date, jsEvent) {
      showCoords();
    },
    customButtons: {
      addEventButton: {
        text: '일정 추가',
        click: function() {
          function popUpStart () {
            var popUp = document.getElementById("add_popup")
            popUp.style.display = "flex";
            return popUp
          }
          var dateStr = popUpStart();
          var date = new Date(dateStr + 'T00:00:00'); // will be in local time
          
          if (!isNaN(date.valueOf())) { // valid?
            calendar.addEvent({
              title: 'dynamic event',
              start: date,
              allDay: true
            });
            
          } else {
          }
        }
      }
    },
    events: [
      {
        title: 'All Day Event',
        start: '2019-09-01',
        color: '#00aded'
      },
      {
        title: 'Long Event',
        start: '2019-09-07',
        end: '2019-09-10',
        color: '#eb605c' // override!
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2019-09-09T16:00:00',
        color: '#17cfa6'
      },
      {
        groupId: '999',
        title: 'Repeating Event Repeating Event',
        start: '2019-09-09T18:00:00',
        end: '2019-09-09T19:00:00',
        color: '#17cfa6',
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2019-09-09T16:00:00',
        color: '#17cfa6'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2019-09-09T16:00:00',
        color: '#17cfa6'
      },
      {
        groupId: '999',
        title: 'Repeating Event',
        start: '2019-09-16T16:00:00',
        color: '#eb605c'
      },
      {
        title: 'Conference',
        start: '2019-09-11',
        end: '2019-09-13',
        color: '#17cfa6' // override!
      },
      {
        title: 'Meeting',
        start: '2019-09-12T10:30:00',
        end: '2019-09-12T12:30:00',
        color: '#eb605c'
      },
      {
        title: 'Lunch',
        start: '2019-09-12T12:00:00',
        color: '#00aded'
      },
      {
        title: 'Meeting',
        start: '2019-09-12T14:30:00',
        color: '#17cfa6'
      },
      {
        title: 'Birthday Party',
        start: '2019-09-13T07:00:00',
        color: '#00aded'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2019-09-28',
        color: '#00aded'
      }
    ],
    eventTimeFormat: { // like '14:30:00'
      hour: '2-digit',
      minute: '2-digit',
    },
    displayEventEnd: true,
  });

  calendar.render();

  var dayNumber = document.getElementsByClassName('fc-day-number')
  
  function DayRemove () {
    for (var i=0;i<dayNumber.length; i++) {
      var aa = dayNumber[i].innerHTML.slice(0,-1)
      dayNumber[i].innerHTML = aa
    }
  }

  document.getElementById('prev_btn').addEventListener('click', function() {
    calendar.prev(); // call method
    DayRemove()
    
  });

  document.getElementById('next_btn').addEventListener('click', function() {
    calendar.next(); // call method
    DayRemove()

  });
});

//달력 데이 날짜 뒤에 "일" 제거
$(function(){
  var dayNumber = document.getElementsByClassName('fc-day-number')
  
  function DayRemove () {
    for (var i=0;i<dayNumber.length; i++) {
      var aa = dayNumber[i].innerHTML.slice(0,-1)
      dayNumber[i].innerHTML = aa
    }
  }
  DayRemove()

  // 일정추가 에디터 닫기 
  $("#add_popup_close").click(function(){
    $("#calender_close_popup_bg").css("display", "block");
    $("#calender_close_popup").css("display", "flex");
  });
  $("#calender_close_popup_ok").click(function(){
    $("#add_popup").css("display", "none");
    $("#calender_close_popup_bg").css("display", "none");
    $("#calender_close_popup").css("display", "none");
  })
  $("#calender_close_popup_ok").hover(function(){
    $("#calender_close_popup_cancel").css("color", "#888888");
    $("#calender_close_popup_cancel").css("border", "none");
  }, function(){
    $("#calender_close_popup_cancel").css("color", "black");
    $("#calender_close_popup_cancel").css("border-bottom", "1px solid black");
  })

  // 일정추가 에디터 컬러 카테고리 토글
  let categoryBtn = true;

  $("#add_category").click(function(e){
    e.preventDefault();
    if(categoryBtn) {
      $("#add_popup_color").css("display", "flex");
      categoryBtn = false;
    } else {
      $("#add_popup_color").css("display", "none");
      categoryBtn = true;
    }
  })

  // 프로필 편집
  $("#profile_name").click(function(e){
    $("#profile_popup").css("display", "flex");
  })
  $("#profile_popup_close").click(function(e){
    $("#profile_popup").css("display", "none");
  })

  // 캘린더 리스트 라인선 길이 조절
  const linetarget = $("#calendar_list_contents > div:last-child");
  const linetargetheight = linetarget.position().top

  $("#calendar_list_contents_line").css("height", linetargetheight + 30);

  $(window).resize(function() {
    const linetarget = $("#calendar_list_contents > div:last-child");
    const linetargetheight = linetarget.position().top

    $("#calendar_list_contents_line").css("height", linetargetheight + 30);
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
});

function showCoords(event) {

  if (!e) {
    var e = window.event;
  }

  if (e.target) {
      targ=e.target;
  } else if (e.srcElement) {
      targ=e.srcElement;
  }

  var dayNumber = document.getElementsByClassName('fc-day-number')

  for (var i=0;i<dayNumber.length; i++) {
    dayNumber[i].classList.remove('clickday');
  }

  e.target.classList.add('clickday');
}