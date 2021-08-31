
$(document).ready(function () {
    $('ul').each(function () {
        // get current ul
        var $ul = $(this);
        // get array of list items in current ul
        var $liArr = $ul.children('li');
        // sort array of list items in current ul randomly
        $liArr.sort(function (a, b) {
            // Get a random number between 0 and 10
            var temp = parseInt(Math.random() * 84);
            // Get 1 or 0, whether temp is odd or even
            var isOddOrEven = temp % 2;
            // Get +1 or -1, whether temp greater or smaller than 5
            var isPosOrNeg = temp > 42 ? 1 : -1;
            // Return -1, 0, or +1
            return (isOddOrEven * isPosOrNeg);
        })
            // append list items to ul
            .appendTo($ul);
    });
});

var selectedItems = []; //이 drawing 파일을 block8에 연결 시킨 후, 병원과 동네는 지워줘야함!

function getRandomNumber(min, max) {
    return Math.random() * (max - min + 1) + min;

}

function setup() {

    var windowWidth = $(document).width();
    var windowHeight = $(document).height();

    $(".item").each(function () {
        var top = getRandomNumber(0, windowWidth);
        var left = getRandomNumber(0, windowHeight);
        $(this).css({ top: top, left: top, position: 'absolute' });
    });
    // 이미지를 랜덤으로 캔버스에 불러오는 코드

}

function draw() {
    for (var i = 0; i < selectedItems.length; i++) {
        var item = selectedItems[i];
        $("#" + item).show();
    }
}
// 선택된 아이템만 보이게 하는 코드 (처음엔 이미지 전체를 hidden 으로 불러옴)

$(document).ready(function () {
    setup();
    draw();

    // 불러오는 코드
});

$(".blue-button").click(function() {
    var identifier = $(this).attr('id');
    selectedItems.push(identifier);
});
$("#병원").click(function () {
    $("h3").remove();
    $("h2").append(" 병원");
});
$("#동네").click(function () {
    $("h3").remove();
    $("h2").append(" 동네");
});
$("#2층 집").click(function () {
    $("h3").remove();
    $("h2").append(" 2층 집");
});
$("#계단").click(function () {
    $("h3").remove();
    $("h2").append(" 계단");
});
$("#에메랄드장판").click(function () {
    $("h3").remove();
    $("h2").append(" 에메랄드장판");
});
$("#5층아파트").click(function () {
    $("h3").remove();
    $("h2").append(" 5층 아파트");
});
$("#집앞한강").click(function () {
    $("h3").remove();
    $("h2").append(" 집 앞 한강");
});
$("#지하귀신").click(function () {
    $("h3").remove();
    $("h2").append(" 지하 귀신");
});
$("#다락방").click(function () {
    $("h3").remove();
    $("h2").append(" 다락방");
});
$("#화장실문턱").click(function () {
    $("h3").remove();
    $("h2").append(" 화장실 문턱");
});
$("#집앞주차장").click(function () {
    $("h3").remove();
    $("h2").append(" 집 앞 주차장");
});
$("#베란다은행나무").click(function () {
    $("h3").remove();
    $("h2").append(" 베란다 은행나무");
});
$("#1층전시장사무실").click(function () {
    $("h3").remove();
    $("h2").append(" 1층 전시장 사무실");
});
$("#1층집").click(function () {
    $("h3").remove();
    $("h2").append(" 1층 집");
});
$("#베란다정원").click(function () {
    $("h3").remove();
    $("h2").append(" 베란다정원");
});
$("#현관문앞달빛").click(function () {
    $("h3").remove();
    $("h2").append(" 현관문 앞 달빛");
});
$("#내방야외테이블").click(function () {
    $("h3").remove();
    $("h2").append(" 내 방 야외테이블");
});
$("#거실티비장거울").click(function () {
    $("h3").remove();
    $("h2").append(" 거실 티비장 거울");
});
$("#집앞놀이터").click(function () {
    $("h3").remove();
    $("h2").append(" 집 앞 놀이터");
});
$("#카페트").click(function () {
    $("h3").remove();
    $("h2").append(" 카페트");
});
$("#흰색페인트").click(function () {
    $("h3").remove();
    $("h2").append(" 흰색 페인트");
});
$("#베란다1").click(function () {
    $("h3").remove();
    $("h2").append(" 베란다1");
});
$("#3개의계단").click(function () {
    $("h3").remove();
    $("h2").append(" 3개의 계단");
});
$("#주방문").click(function () {
    $("h3").remove();
    $("h2").append(" 주방 문");
});
$("#베란다창문거울").click(function () {
    $("h3").remove();
    $("h2").append(" 베란다 창문 거울");
});
$("#작은복도").click(function () {
    $("h3").remove();
    $("h2").append(" 작은 복도");
});
$("#꽉찬침대").click(function () {
    $("h3").remove();
    $("h2").append(" 꽉 찬 침대");
});
$("#IKEA책상2개하나의책장").click(function () {
    $("h3").remove();
    $("h2").append(" IKEA 책상 2개 하나의 책장");
});
$("#쓰레기미끄럼틀").click(function () {
    $("h3").remove();
    $("h2").append(" 쓰레기 미끄럼틀");
});
$("#거실피아노").click(function () {
    $("h3").remove();
    $("h2").append(" 거실 피아노");
});
$("#뒷뜰바베큐").click(function () {
    $("h3").remove();
    $("h2").append(" 뒷 뜰 바베큐");
});
$("#작은방창문").click(function () {
    $("h3").remove();
    $("h2").append(" 작은 방 창문");
});
$("#화장실카페트").click(function () {
    $("h3").remove();
    $("h2").append(" 화장실 카페트");
});
$("#집앞담장과줄넘기").click(function () {
    $("h3").remove();
    $("h2").append(" 집 앞 담장과 줄넘기");
});
$("#블루베리파이와미트볼").click(function () {
    $("h3").remove();
    $("h2").append(" 블루베리파이와 미트볼");
});
$("#엘리베이터").click(function () {
    $("h3").remove();
    $("h2").append(" 엘리베이터");
});
$("#9층기숙사").click(function () {
    $("h3").remove();
    $("h2").append(" 9층 기숙사");
});
$("#3인실").click(function () {
    $("h3").remove();
    $("h2").append(" 3인실");
});
$("#2층침대").click(function () {
    $("h3").remove();
    $("h2").append(" 2층 침대");
});
$("#기숙사책상").click(function () {
    $("h3").remove();
    $("h2").append(" 기숙사 책상");
});
$("#좁은복도").click(function () {
    $("h3").remove();
    $("h2").append(" 좁은 복도");
});
$("#1층카페테리아와쌓인식빵그리고생크림").click(function () {
    $("h3").remove();
    $("h2").append(" 1층 카페테리아와 쌓인 식빵 그리고 생크림");
});
$("#외출금지").click(function () {
    $("h3").remove();
    $("h2").append(" 외출 금지");
});
$("#방에큰창").click(function () {
    $("h3").remove();
    $("h2").append(" 방에 큰 창");
});
$("#전자렌지방").click(function () {
    $("h3").remove();
    $("h2").append(" 전자렌지 방");
});
$("#옷행거에둘러싸인방").click(function () {
    $("h3").remove();
    $("h2").append(" 옷 행거에 둘러싸인 방");
});
$("#벌레").click(function () {
    $("h3").remove();
    $("h2").append(" 벌레");
});
$("#빛이안들어오는집").click(function () {
    $("h3").remove();
    $("h2").append(" 빛이 안들어오는 집");
});
$("#곰팡이").click(function () {
    $("h3").remove();
    $("h2").append(" 곰팡이");
});
$("#작은침대하나").click(function () {
    $("h3").remove();
    $("h2").append(" 작은 침대 하나");
});
$("#알파벳나무서랍").click(function () {
    $("h3").remove();
    $("h2").append(" 알파벳 나무 서랍");
});
$("#작은냉장고").click(function () {
    $("h3").remove();
    $("h2").append(" 작은 냉장고");
});
$("#작은창문").click(function () {
    $("h3").remove();
    $("h2").append(" 작은 창문");
});
$("#옥상텃밭").click(function () {
    $("h3").remove();
    $("h2").append(" 옥상 텃밭");
});
$("#개미").click(function () {
    $("h3").remove();
    $("h2").append(" 개미");
});
$("#화장실온돌").click(function () {
    $("h3").remove();
    $("h2").append(" 화장실 온돌");
});
$("#주방방").click(function () {
    $("h3").remove();
    $("h2").append(" 주방 방");
});
$("#5층집").click(function () {
    $("h3").remove();
    $("h2").append(" 5층 집");
});
$("#1층집").click(function () {
    $("h3").remove();
    $("h2").append(" 1층 집");
});
$("#시골").click(function () {
    $("h3").remove();
    $("h2").append(" 시골");
});
$("#강아지").click(function () {
    $("h3").remove();
    $("h2").append(" 강아지");
});
$("#마당").click(function () {
    $("h3").remove();
    $("h2").append(" 마당");
});
$("#높은천정").click(function () {
    $("h3").remove();
    $("h2").append(" 높은 천정");
});
$("#뒷마당식탁").click(function () {
    $("h3").remove();
    $("h2").append(" 뒷마당 식탁");
});
$("#나방").click(function () {
    $("h3").remove();
    $("h2").append(" 나방");
});
$("#빨간대문").click(function () {
    $("h3").remove();
    $("h2").append(" 빨간 대문");
});
$("#어수선한마당").click(function () {
    $("h3").remove();
    $("h2").append(" 어수선한 마당");
});
$("#ㄱ자1층집").click(function () {
    $("h3").remove();
    $("h2").append(" ㄱ자 1층 집");
});
$("#집뒤로난창문과바위").click(function () {
    $("h3").remove();
    $("h2").append(" 집 뒤로 난 창문과 바위");
});
$("#야외같은화장실").click(function () {
    $("h3").remove();
    $("h2").append(" 야외같은 화장실");
});
$("#창고").click(function () {
    $("h3").remove();
    $("h2").append(" 창고");
});
$("#뒷산").click(function () {
    $("h3").remove();
    $("h2").append(" 뒷산");
});
$("#수돗가").click(function () {
    $("h3").remove();
    $("h2").append(" 수돗가");
});
$("#3층집4층옥상").click(function () {
    $("h3").remove();
    $("h2").append(" 3층 집 4층 옥상");
});
$("#1층상가").click(function () {
    $("h3").remove();
    $("h2").append(" 1층 상가");
});
$("#흰색벽지흰색천정").click(function () {
    $("h3").remove();
    $("h2").append(" 흰색 벽지 흰색 천정");
});
$("#큰창").click(function () {
    $("h3").remove();
    $("h2").append(" 큰창");
});
$("#베란다2").click(function () {
    $("h3").remove();
    $("h2").append(" 베란다2");
});
$("#옥상작업실").click(function () {
    $("h3").remove();
    $("h2").append(" 옥상 작업실");
});
$("#옥상초록색방수페인트").click(function () {
    $("h3").remove();
    $("h2").append(" 옥상 초록색 방수페인트");
});

$("#결과").click(function () {
    buildHouse(selectedItems);
});

// 여기부터

// function buildHouse(selectedItems) {
//     for item in selectedItems {
//         if item == "병원" {

//             drawHospital();
//         }
//     }
// }

// function drawHouse() {

// }

// function drawHospital() {
//     $(document).append("병원");

//     }

// 여기까지 코드는 drawing 폴더에서 만들어서 없어도 됨. ? 잘모르겠다 맞나? 어떻게 연결하지?



