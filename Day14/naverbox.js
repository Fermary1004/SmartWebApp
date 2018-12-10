$(document).ready(function() {
  // 자동완성 기능 토글
  $('.autocomplete').click(function() {
    $('.autocompletetoggle').toggle();
    $('.autocompleteicon').toggleClass('autocompleteiconchange');
  });

  // 더보기, 닫기 버튼, 검은 바탕화면 클릭시 토글
  $('.seemore').click(function() {
    seemoretoggle()
  });
  $('.seemoresideclose').click(function() {
    seemoretoggle()
  });
  $('.seemoremenuback').click(function() {
    seemoretoggle()
  });

  // 따로 함수를 만들어서 활용
  function seemoretoggle() {
    $('.seemoremenuback').toggle();
    $('.seemoremenu').toggle();
    $('.seemoreside').toggle();
    $('.seemore').toggleClass('seemorechange');
  }

  var ticker = function(target, direction, speed, delay) {
    setTimeout(function() {
      $(target + ' li:first').animate({ marginTop: direction }, speed, function() {
        // target안의 li중 첫번째를 detach()한 후에, target안의 ul에 뗀놈(this)을 자식으로 appendTo()하고, marginTop을 지워준다
        $(this).detach().appendTo(target + '>ul').removeAttr('style');
      });
      ticker(target, direction, speed, delay);
    }, delay);
  };

  ticker('.menulist', '-20px', 400, 2000);
  ticker('#newscastmiddle', '-20px', 500, 5000);

  var timesquareindex = 1;
  var timesquareindexmax = 6;

  $('.timesquareleftarrow').click(function() {
    prevBox('timesquareinner', timesquareindex, timesquareindexmax);
    prevBox('hi_tail', timesquareindex, timesquareindexmax);
    if (timesquareindex == 1) {
      timesquareindex = timesquareindexmax;
    } else timesquareindex = timesquareindex - 1;
    $('.timesquareheadcount>b').text(timesquareindex);
  });

  $('.timesquarerightarrow').click(function() {
    nextBox('timesquareinner', timesquareindex, timesquareindexmax);
    nextBox('hi_tail', timesquareindex, timesquareindexmax);
    if (timesquareindex == timesquareindexmax) {
      timesquareindex = 1;
    } else timesquareindex = timesquareindex + 1;
    $('.timesquareheadcount>b').text(timesquareindex);
  });

  function nextBox(target, index, maxindex) {
    if (index == maxindex) {
      displayBox(target, 1)
    } else displayBox(target, index + 1);
  }

  function prevBox(target, index, maxindex) {
    if (index == 1) {
      displayBox(target, maxindex)
    } else displayBox(target, index - 1);
  }

  function displayBox(target, index) {
    $('.' + target).removeClass('displayblock');
    $('.' + target).eq(index - 1).addClass('displayblock');
	}
	
	$('.popuprealmuneinner').click(function(){
		var index = $(this).attr('id');
		$('.popuprealmunebody').removeClass('displayblock');
		$('.'+index+'list').addClass('displayblock');
	});

  displayBox('timesquareinner', timesquareindex);
	displayBox('hi_tail', timesquareindex);
	displayBox('popup1to10list', 1)

  $('.api-list>li').hover(function() {
    $(this).children('div').toggleClass('api-list-popup-zindex');
  });

  $('.menulist').hover(function() {
    $('.popuprealsearch').toggleClass('displayblock');
  });
  // $('.menulist').mouseenter(function(){
  // 	$('.popuprealsearch').addClass('displayblock');
  // });
  // $('.popuprealsearch').mouseleave(function(){
  // 	$('.popuprealsearch').removeClass('displayblock');
  // });


  // 타임 스퀘어 화살표 마우스 오버시 색변경
  $('.timesquareleftarrow').hover(function() {
    $('.timeleftarrow').toggleClass('timeleftarrowchange');
  });
  $('.timesquarerightarrow').hover(function() {
    $('.timerightarrow').toggleClass('timerightarrowchange');
  });
});