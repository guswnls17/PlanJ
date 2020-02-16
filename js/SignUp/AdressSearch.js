$(function(){

  //주소 콘텐츠 높이 컨트롤
  let itemHeight = $("#gibunItemBody").height()
  if(itemHeight > 200) {
    $("#gibunItemBody").css("height", "200px")
  } else {
    $("#gibunItemBody").css("height", "auto")
  }

  //주소 검색 방식 선택 버튼 컨트롤
  $("#searchMethod").children("button").first().click(function() {
    $("#searchMethod").children("button").first().css("background-color", "#32346e")
    $("#searchMethod").children("button").first().css("color", "white")
    $("#searchMethod").children("button").last().css("background-color", "#ffffff")
    $("#searchMethod").children("button").last().css("color", "black")
    $(".adressInfoGibun").css("display", "block")
    $(".adressInfoRoad").css("display", "none")
    $("#gibunItemBody").css("display", "block")
    $("#roadItemBody").css("display", "none")
  })
  $("#searchMethod").children("button").last().click(function() {
    $("#searchMethod").children("button").last().css("background-color", "#32346e")
    $("#searchMethod").children("button").last().css("color", "white")
    $("#searchMethod").children("button").first().css("background-color", "#ffffff")
    $("#searchMethod").children("button").first().css("color", "black")
    $(".adressInfoGibun").css("display", "none")
    $(".adressInfoRoad").css("display", "block")
    $("#gibunItemBody").css("display", "none")
    $("#roadItemBody").css("display", "block")
  })

  //주소입력버튼 컨트롤
  function Handler() {
    let searchBox = $("#searchBox").children("input").val()
    let detailItem = $("#detailItem").children("input").val()
  
    if(searchBox != "" && detailItem != "") {
      $("#adressButton").children("button").css("background-color", "#32346e")
      $("#adressButton").children("button").css("color", "white")
    } else {
      $("#adressButton").children("button").css("background-color", "#ffffff")
      $("#adressButton").children("button").css("color", "black")
    }
  }

  const searchBoxChange = $("#searchBox").children("input")
  const detailItemChange = $("#detailItem").children("input")
  searchBoxChange.change(function() {
    Handler()
  })
  detailItemChange.change(function() {
    Handler()
  })

  // 주소선택 컨트롤
  $("#gibunItemBody > div").click(function(){
    $("#gibunItemBody > div").removeClass('select');
    $(this).addClass('select');
  });
});

