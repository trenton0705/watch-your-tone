$('#submit').click(function(event) {
  event.preventDefault()
  var userInput = $('#textInput').val()
  callAPI(userInput)
  // $('.form')[0].style.display = 'none'
  // $('.results')[0].style.display = 'flex'
})


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
          document.getElementById('angerBar').style.backgroundColor = 'red'
        } else if (anger < 75 && anger >= 50) {
          angerMessage = 'There are a lot of angry tones in your message'
          document.getElementById('angerBar').style.backgroundColor = 'orange'
        } else if (anger > 10 && anger < 50) {
          angerMessage = 'There are some angry tones'
          document.getElementById('angerBar').style.backgroundColor = 'yellow'
        } else {
          angerMessage = 'Minimal'
          document.getElementById('angerBar').style.backgroundColor = 'green'
        }

        if (disgust >= 75) {
          disgustMessage = 'You sound Apalled!'
          document.getElementById('disgustBar').style.backgroundColor = 'red'
        } else if (disgust < 75 && disgust >= 50) {
          disgustMessage = 'There are a lot of disgusted tones in your message'
          document.getElementById('disgustBar').style.backgroundColor = 'orange'
        } else if (disgust > 10 && disgust < 50) {
          disgustMessage = 'There are some tones of disgust'
          document.getElementById('disgustBar').style.backgroundColor = 'yellow'
        } else {
          disgustMessage = 'Minimal'
          document.getElementById('disgustBar').style.backgroundColor = 'green'
        }

        if (fear >= 75) {
          fearMessage = 'You sound Horrified!'
          document.getElementById('fearBar').style.backgroundColor = 'red'
        } else if (fear < 75 && fear >= 50) {
          fearMessage = 'There are a lot of fearful tones in your message'
          document.getElementById('fearBar').style.backgroundColor = 'orange'
        } else if (fear > 10 && fear < 50) {
          fearMessage = 'There are some fearful tones'
          document.getElementById('fearBar').style.backgroundColor = 'yellow'
        } else {
          fearMessage = 'Minimal'
          document.getElementById('fearBar').style.backgroundColor = 'green'
        }

        if (joy >= 75) {
          joyMessage = 'You sound Jubilant!'
          document.getElementById('joyBar').style.backgroundColor = 'red'
        } else if (joy < 75 && joy >= 50) {
          joyMessage = 'There are a lot of joyful tones in your message'
          document.getElementById('joyBar').style.backgroundColor = 'orange'
        } else if (joy > 10 && joy < 50) {
          joyMessage = 'There are some joyful tones'
          document.getElementById('joyBar').style.backgroundColor = 'yellow'
        } else {
          joyMessage = 'Minimal'
          document.getElementById('joyBar').style.backgroundColor = 'green'
        }

        if (sadness >= 75) {
          sadnessMessage = 'You sound Depressed!'
          document.getElementById('sadnessBar').style.backgroundColor = 'red'
        } else if (sadness < 75 && sadness >= 50) {
          sadnessMessage = 'There are a lot of sad tones in your message'
          document.getElementById('sadnessBar').style.backgroundColor = 'orange'
        } else if (sadness > 10 && sadness < 50) {
          sadnessMessage = 'There are some sad tones'
          document.getElementById('sadnessBar').style.backgroundColor = 'yellow'
        } else {
          sadnessMessage = 'Minimal'
          document.getElementById('sadnessBar').style.backgroundColor = 'green'
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

        $('.form')[0].style.display = 'none'
        $('.results')[0].style.display = 'flex'

    }) //.then
} //callAPI
