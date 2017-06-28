$('#submit').click(function(event) {
  event.preventDefault()
  var userInput = $('#textInput').val()
  callAPI(userInput)
  // $('.form')[0].style.display = 'none'
  // $('.results')[0].style.display = 'flex'
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
      console.log(data);
      var anger = (data['document_tone']['tone_categories'][0]['tones'][0]['score'] * 100).toFixed(0)
      var disgust = (data['document_tone']['tone_categories'][0]['tones'][1]['score'] * 100).toFixed(0)
      var fear = (data['document_tone']['tone_categories'][0]['tones'][2]['score'] * 100).toFixed(0)
      var joy = (data['document_tone']['tone_categories'][0]['tones'][3]['score'] * 100).toFixed(0)
      var sadness = (data['document_tone']['tone_categories'][0]['tones'][4]['score'] * 100).toFixed(0)
      var angerMessage, disgustMessage, fearMessage, joyMessage, sadnessMessage
      var toneArray = [anger, disgust, fear, joy, sadness]

      if (anger >= 75) {
        angerMessage = 'You sound Livid!'
        document.getElementById('angerBar').style.backgroundColor = '#7a1212'
        // document.body.style.background = 'url(https://media.giphy.com/media/qgZnIUPFcS3hC/giphy.gif) no-repeat center center fixed'
      } else if (anger < 75 && anger >= 50) {
        angerMessage = 'There are a lot of angry tones in your message'
        document.getElementById('angerBar').style.backgroundColor = '#ad560a'
      } else if (anger > 25 && anger < 50) {
        angerMessage = 'There are some angry tones'
        document.getElementById('angerBar').style.backgroundColor = '#afa708'
      } else {
        angerMessage = 'Minimal'
        document.getElementById('angerBar').style.backgroundColor = '#38931a'
      }

      if (disgust >= 75) {
        disgustMessage = 'You sound Apalled!'
        document.getElementById('disgustBar').style.backgroundColor = '#7a1212'
      } else if (disgust < 75 && disgust >= 50) {
        disgustMessage = 'There are a lot of disgusted tones in your message'
        document.getElementById('disgustBar').style.backgroundColor = '#ad560a'
      } else if (disgust > 25 && disgust < 50) {
        disgustMessage = 'There are some tones of disgust'
        document.getElementById('disgustBar').style.backgroundColor = '#afa708'
      } else {
        disgustMessage = 'Minimal'
        document.getElementById('disgustBar').style.backgroundColor = '#38931a'
      }

      if (fear >= 75) {
        fearMessage = 'You sound Horrified!'
        document.getElementById('fearBar').style.backgroundColor = '#7a1212'
      } else if (fear < 75 && fear >= 50) {
        fearMessage = 'There are a lot of fearful tones in your message'
        document.getElementById('fearBar').style.backgroundColor = '#ad560a'
      } else if (fear > 25 && fear < 50) {
        fearMessage = 'There are some fearful tones'
        document.getElementById('fearBar').style.backgroundColor = '#afa708'
      } else {
        fearMessage = 'Minimal'
        document.getElementById('fearBar').style.backgroundColor = '#38931a'
      }

      if (joy >= 75) {
        joyMessage = 'You sound Jubilant!'
        document.getElementById('joyBar').style.backgroundColor = '#7a1212'
      } else if (joy < 75 && joy >= 50) {
        joyMessage = 'There are a lot of joyful tones in your message'
        document.getElementById('joyBar').style.backgroundColor = '#ad560a'
      } else if (joy > 25 && joy < 50) {
        joyMessage = 'There are some joyful tones'
        document.getElementById('joyBar').style.backgroundColor = '#afa708'
      } else {
        joyMessage = 'Minimal'
        document.getElementById('joyBar').style.backgroundColor = '#38931a'
      }

      if (sadness >= 75) {
        sadnessMessage = 'You sound Depressed!'
        document.getElementById('sadnessBar').style.backgroundColor = '#7a1212'
      } else if (sadness < 75 && sadness >= 50) {
        sadnessMessage = 'There are a lot of sad tones in your message'
        document.getElementById('sadnessBar').style.backgroundColor = '#ad560a'
      } else if (sadness > 25 && sadness < 50) {
        sadnessMessage = 'There are some sad tones'
        document.getElementById('sadnessBar').style.backgroundColor = '#afa708'
      } else {
        sadnessMessage = 'Minimal'
        document.getElementById('sadnessBar').style.backgroundColor = '#38931a'
      }

      $('#anger').text(angerMessage)
      $('#disgust').text(disgustMessage)
      $('#fear').text(fearMessage)
      $('#joy').text(joyMessage)
      $('#sadness').text(sadnessMessage)

      document.getElementById('angerBar').style.width = anger + '%'
      document.getElementById('disgustBar').style.width = disgust + '%'
      document.getElementById('fearBar').style.width = fear + '%'
      document.getElementById('joyBar').style.width = joy + '%'
      document.getElementById('sadnessBar').style.width = sadness + '%'

      $('#angerBar').text(anger + '%')
      $('#disgustBar').text(disgust + '%')
      $('#fearBar').text(fear + '%')
      $('#joyBar').text(joy + '%')
      $('#sadnessBar').text(sadness + '%')

      pageFadeIn()

    }) //.then


} //callAPI

$(function () {
    $("#textInput").bind("keyup", function () {
        var textarea = $(this);
        var currentRows = parseInt(textarea.attr('rows'));

        var isScrollable = textarea.scrollTop();
        if(isScrollable) {
            textarea.attr('rows', currentRows+1);
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
