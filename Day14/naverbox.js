$(document).ready(function() {
  // 자동완성 기능 토글
  $('.autocomplete').click(function() {
    $('.autocompletetoggle').toggle();
    $('.autocompleteicon').toggleClass('autocompleteiconchange');
  });

  // 더보기, 닫기 버튼, 검은 바탕화면 클릭시 토글
  $('.seemore').click(function() {
    seemoreToggle();
    seemoreConfigCancel();
  });
  $('.seemoresideclose').click(function() {
    seemoreToggle();
    seemoreConfigCancel();
  });
  $('.seemoremenuback').click(function() {
    seemoreToggle();
    seemoreConfigCancel();
  });

  // 따로 함수를 만들어서 활용
  function seemoreToggle() {
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

  $('.popuprealmuneinner').click(function() {
		var index = $(this).attr('id');

    $('.popuprealmunebody').removeClass('displayblock');
		$('.' + index + 'list').addClass('displayblock');
		$('.popuprealmuneinner').removeClass('popupchoosed');
		$(this).addClass('popupchoosed');
  });

  displayBox('timesquareinner', timesquareindex);
  displayBox('hi_tail', timesquareindex);
	displayBox('popup1to10list', 1);
  $('#popup1to10').addClass('popupchoosed');

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

  $('.seemoresideconfig').click(function() {
    if (inputArray.length > 1) {
      writeInput(inputArray);
    } else $('#menublack').children('.list').addClass('displaynone');
    seeConfigBox();
    seemoreConfigOn();
  });

	var maxArray = 5;
	var baseSetArray = [];
	var inputArray = [];
	
	$('#menublack>.list>a').each(function(){
		baseSetArray.push($(this).prop('class'));
	});

  $('.seeradio').click(function() {
    var index = inputArray.indexOf($(this).val());

    if (index < 0) {
      inputArray.push($(this).val());
    } else inputArray.splice(index, 1);

    if (inputArray.length > maxArray) {
      inputArray.pop();
      $(this).prop('checked', '');
      alert("no more than " + maxArray + " items!");
    }
    writeInput(inputArray);
  });

  function writeInput(array) {
    $('#menublack').children('.list').addClass('displaynone');

    for (var i = 0; i < array.length; i++) {
      $('#menublack>.list').eq(i).removeClass('displaynone');
      $('#menublack>.list').eq(i).children('a').removeClass();
      $('#menublack>.list').eq(i).children('a').addClass(array[i]);
    }
    seeConfigBox();
  }

  function seeConfigBox() {
    $('.seeconfig').html('');

    for (var i = 0; i < (maxArray - inputArray.length); i++) {
      $('.seeconfig').append('<span class="seeconfigbox"></span>');
    }
    $('.seeconfigbox').first().addClass('seeconfigboxfisrt');
  }

  function seemoreConfigOn() {
    $('.seemoresidebegin').addClass('displaynone');
    $('.seemoresidehidden').addClass('displayblock');
    $('.seeconfig').addClass('displayinlineblock');
    $('.seeradio').addClass('displayinlineblock');
	}
	
	function seemoreConfigConfirm() {
		$('.seemoresidebegin').removeClass('displaynone');
    $('.seemoresidehidden').removeClass('displayblock');
    $('.seeconfig').removeClass('displayinlineblock');
    $('.seeradio').removeClass('displayinlineblock');
	}

  function seemoreConfigCancel() {
    $('.seemoresidebegin').removeClass('displaynone');
    $('.seemoresidehidden').removeClass('displayblock');
    $('.seeconfig').removeClass('displayinlineblock');
		$('.seeradio').removeClass('displayinlineblock');
		$('.seeradio').prop('checked', '');
		
		writeInput(baseSetArray);
		inputArray = [];
  }
});