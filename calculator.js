let mathString = '';

$('.calculator-button').on('click', function () {
  let mathDisplay = $('.text-display')
  let trimmedButtonText = $(this).text().trim();


  if (mathDisplay.text().length > 18) {
    let maxSize = mathDisplay.text().trim().substring(0, 18);

    $('.limit-alert').addClass('limit-alert-active')

    $('#clear').on('click', function () {
        maxSize = '';
        mathDisplay.text(maxSize);
    })

    mathDisplay = maxSize;

    setTimeout(() => {
      $('.limit-alert').removeClass('limit-alert-active')
    }, 3000)
  }

  if ($(this).hasClass('clear')) {
    mathString = ''
    mathString = `0`
    mathDisplay.text(mathString);
  }
  else if ($(this).hasClass('result')) {
    mathDisplay.text(eval(mathString))
  }
  else {
    if (mathDisplay.html() === '0') {
      mathString = '';
    }

    mathString += trimmedButtonText;
    mathDisplay.text(mathString)

    console.log(mathString);
  }

})