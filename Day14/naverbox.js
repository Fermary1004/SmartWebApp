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
    if (inputArray.length > 0) {
      writeInput(inputArray);
    } else $('#menublack').children('.list').addClass('displaynone');
    seeConfigBox();
    seemoreConfigOn();
  });

  $('.seeconfigconfirm').click(function() {
    seemoreConfigConfirm();
  })

  $('.seeconfigcancel').click(function() {
    seemoreConfigCancel();
  })

  $('.seeconfigreset').click(function() {
    alert("초기설정으로 돌아갑니다.");
    seemoreConfigInitialize();
    seemoreToggle();
  })

  var maxArray = 5;
  var baseSetArray = ["invdic", "invnews", "invstock", "invland", "invmap", "invmovie", "invmusic", "invbook", "invwebtoon"];
  var selectedSetArray = [];
  var inputArray = [];

  $('#menublack>.list>a').each(function() {
    baseSetArray.push($(this).prop('class'));
  });

  $('.seeradio').click(function() {
    if ($(this).prop('class').indexOf('displayinlineblock') < 0) {
      $(this).prop('checked', '');
      return;
    }
    var index = inputArray.indexOf($(this).val());

    if (index < 0) {
      inputArray.push($(this).val());
    } else inputArray.splice(index, 1);

    if (inputArray.length > maxArray) {
      inputArray.pop();
      $(this).prop('checked', '');
      alert("최대 " + maxArray + "개까지 설정할 수 있습니다.");
    } else {
      $('.seeconfigconfirm').addClass('greenlightconfirm');
      $('.seeconfigconfirm').removeClass('hoverborder');
      // 변동사항이 생겼을 경우 확인 버튼을 녹색으로 바꿔주는 클래스를 넣어주고 원래 색을 설정해주던 클래스를 빼준다
    }
    if (equalsArray(selectedSetArray, inputArray) == true) {
      removeGreenLight();
      // 두 배열을 완전하게 비교하는 함수를 하나 만들어 이를 이용하여 두 함수를 비교하고,
      // 두 배열이 완전히 같아져서 '변경한게 없어지면' 확인 버튼의 녹색을 빼준다
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
    // 배열의 길이만큼 뺀 갯수만큼 박스를 만들어준다
  }

  function seemoreConfigConfirm() {
    $('.seeconfig').html('');

    if (inputArray.length == 0) {
      alert("선택된 메뉴가 없습니다. 초기설정으로 돌아갑니다.");
      seemoreConfigInitialize();
    } else {
      selectedSetArray = [];

      for (var i = 0; i < inputArray.length; i++) {
        selectedSetArray.push(inputArray[i])
          // 굳이 두 배열을 =을 이용해서 연결하지 않는 이유는 =를 사용할 경우 두 함수가 같은 데이터를 사용하기 때문에
          // 이후에 두 배열이 아예 같은 저장소를 참조하게 되므로 원하는 대로 기작하지 않는다
          // 그러므로 일일히 데이타 수치를 옮겨주는 것
      }
      seemoreConfigOff();
    }
    seemoreToggle();
  }

  function seemoreConfigCancel() {
    seemoreConfigOff();

    if (inputArray.length > 0 && selectedSetArray.length == 0) {
      seemoreConfigInitialize();
    } else if (selectedSetArray.length > 0) {
      inputArray = [];
      for (var i = 0; i < selectedSetArray.length; i++) {
        inputArray.push(selectedSetArray[i])
      }
      writeInput(inputArray);
      $('.seeradio').prop('checked', '');
      $('.seeradio').each(function() {
        if (selectedSetArray.indexOf($(this).prop('value')) > -1) {
          $(this).prop('checked', 'checked');
        }
        // 취소를 눌렀을시 만약 이전에 확인을 통해 임시 저장된 배열이 있을 경우 그 배열의 상태로 바꿔주기 위하여
        // 라디오 버튼을 해당 배열의 값들과 비교하여 겹치는게 있을 경우 체크하고
        // 입력 배열의 값을 저장 배열과 동일하게 바꿔주고 이를 같게 만들어준다
      });
      $('.seeconfig').html('');
    } else seemoreConfigInitialize();
  }

  function seemoreConfigInitialize() {
    $('.seeradio').prop('checked', '');
    seemoreConfigOff();
    writeInput(baseSetArray);
    selectedSetArray = [];
    inputArray = [];
  }

  function seemoreConfigOn() {
    $('.seemoresidebegin').addClass('displaynone');
    $('.seemoresidehidden').addClass('displayblock');
    $('.seeconfig').addClass('displayinlineblock');
    $('.seeradio').addClass('displayinlineblock');
  }

  function seemoreConfigOff() {
    $('.seemoresidebegin').removeClass('displaynone');
    $('.seemoresidehidden').removeClass('displayblock');
    $('.seeconfig').removeClass('displayinlineblock');
    $('.seeradio').removeClass('displayinlineblock');
    removeGreenLight();
  }

  function removeGreenLight() {
    $('.seeconfigconfirm').removeClass('greenlightconfirm');
    $('.seeconfigconfirm').addClass('hoverborder');
  }

  function equalsArray(basedarray, comparedarray) {
    if (basedarray.length !== comparedarray.length) {
      return false;
    }
    for (var i = 0; i < basedarray.length; i++) {
      if (Array.isArray(basedarray[i]) && Array.isArray(comparedarray[i])) {
        if (equals(basedarray[i], comparedarray[i])) {
          continue;
        } else {
          return false;
        }
      } else {
        if (basedarray[i] !== comparedarray[i]) {
          return false;
        }
      }
    }
    return true;
  }
});