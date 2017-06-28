$('#submit').click(function(event) {
  event.preventDefault()
  var userInput = $('#textInput').val()
  callAPI(userInput)
})

$(function() {
  $("#textInput").keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault()
      var userInput = $('#textInput').val()
      callAPI(userInput)
    }
  });
});

function callAPI(inputText) {
  $.get(`https://newproxywhodis.herokuapp.com/?text=${ inputText }`)
    .then(function(data) {

      var anger = (data['document_tone']['tone_categories'][0]['tones'][0]['score'] * 100).toFixed(0)
      var disgust = (data['document_tone']['tone_categories'][0]['tones'][1]['score'] * 100).toFixed(0)
      var fear = (data['document_tone']['tone_categories'][0]['tones'][2]['score'] * 100).toFixed(0)
      var joy = (data['document_tone']['tone_categories'][0]['tones'][3]['score'] * 100).toFixed(0)
      var sadness = (data['document_tone']['tone_categories'][0]['tones'][4]['score'] * 100).toFixed(0)
      var toneArray = [anger, disgust, fear, joy, sadness]
      var toneNames = ['anger', 'disgust', 'fear', 'joy', 'sadness']

      for (let i = 0; i < 5; i++) {
        document.getElementById(toneNames[i] + 'Bar').style.width = toneArray[i] + '%'
        $('#' + toneNames[i] + 'Percent').text(toneArray[i] + '%')

        if (toneArray[i] >= 75) {
          document.getElementById(toneNames[i] + 'Bar').style.backgroundColor = '#7a1212'
        } else if (toneArray[i] < 75 && toneArray[i] >= 50) {
          document.getElementById(toneNames[i] + 'Bar').style.backgroundColor = '#ad560a'
        } else if (toneArray[i] > 20 && toneArray[i] < 50) {
          document.getElementById(toneNames[i] + 'Bar').style.backgroundColor = '#afa708'
        } else {
          document.getElementById(toneNames[i] + 'Bar').style.backgroundColor = '#38931a'
        }
      }
      pageFadeIn()
    })
}

$(function() {
  $("#textInput").bind("keyup", function() {
    var textarea = $(this);
    var currentRows = parseInt(textarea.attr('rows'));
    var isScrollable = textarea.scrollTop();

    if (isScrollable) {
      textarea.attr('rows', currentRows + 1);
    }
  });
});

function pageFadeIn() {
  setTimeout(showPage, 500);
}

function showPage() {
  document.getElementById("form").style.display = "none";
  document.getElementById("results").style.display = "flex";
}
