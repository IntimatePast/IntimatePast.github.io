var selectedItems = []; //이 drawing 파일을 block8에 연결 시킨 후, 병원과 동네는 지워줘야함!

function getRandomNumber(min, max) {
  return Math.random() * (max - min + 1) + min;

}

function setup() {

  var contentDiv = $(".ebcf_modal-content");
  var contentWidth = contentDiv.width();
  var contentHeight = contentDiv.height();

  $(".item").each(function () {
    var $image = $(this);
    var width = $image.innerWidth();
    var height = $image.innerHeight();
    var top = getRandomNumber(0, contentWidth * 2 - height);
    var left = getRandomNumber(0, contentHeight / 3 - width);

    $(this).css({ top: top, left: left, position: 'absolute'});
  });
  // 이미지를 랜덤으로 캔버스에 불러오는 코드

}

function draw() {
  for (var i = 0; i < selectedItems.length; i++) {
    var item = selectedItems[i];
    $("#" + item).css({visibility: "visible"});
  }
}
// 선택된 아이템만 보이게 하는 코드 (처음엔 이미지 전체를 hidden 으로 불러옴)

$(document).ready(function () {
  setup();
});
