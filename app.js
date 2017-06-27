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
        var anger = (data['document_tone']['tone_categories'][0]['tones'][0]['score'] * 100).toFixed(2)
        var disgust = (data['document_tone']['tone_categories'][0]['tones'][1]['score'] * 100).toFixed(2)
        var fear = (data['document_tone']['tone_categories'][0]['tones'][2]['score'] * 100).toFixed(2)
        var joy = (data['document_tone']['tone_categories'][0]['tones'][3]['score'] * 100).toFixed(2)
        var sadness = (data['document_tone']['tone_categories'][0]['tones'][4]['score'] * 100).toFixed(2)
        var angerMessage, disgustMessage, fearMessage, joyMessage, sadnessMessage
        var toneArray = [anger, disgust, fear, joy, sadness]

        if (anger >= 75) {
          angerMessage = 'You sound Livid!'
        } else if (anger < 75 && anger >= 50) {
          angerMessage = 'There are a decent amount of angry tones in your message'
        } else if (anger > 10 && anger < 50) {
          angerMessage = 'There are some angry tones, but they are subtle'
        } else {
          angerMessage = 'Minimal'
        }

        if (disgust >= 75) {
          disgustMessage = 'You sound Apalled!'
        } else if (disgust < 75 && disgust >= 50) {
          disgustMessage = 'There are a decent amount of disgusted tones in your message'
        } else if (disgust > 10 && disgust < 50) {
          disgustMessage = 'There are some tones of disgust, but they are subtle'
        } else {
          disgustMessage = 'Minimal'
        }

        if (fear >= 75) {
          fearMessage = 'You sound Horrified!'
        } else if (fear < 75 && fear >= 50) {
          fearMessage = 'There are a decent amount of fearful tones in your message'
        } else if (fear > 10 && fear < 50) {
          fearMessage = 'There are some fearful tones, but they are subtle'
        } else {
          fearMessage = 'Minimal'
        }

        if (joy >= 75) {
          joyMessage = 'You sound Jubilant!'
        } else if (joy < 75 && joy >= 50) {
          joyMessage = 'There are a decent amount of joyful tones in your message'
        } else if (joy > 10 && joy < 50) {
          joyMessage = 'There are some joyful tones, but they are subtle'
        } else {
          joyMessage = 'Minimal'
        }

        if (sadness >= 75) {
          sadnessMessage = 'You sound Depressed!'
        } else if (sadness < 75 && sadness >= 50) {
          sadnessMessage = 'There are a decent amount of sad tones in your message'
        } else if (sadness > 10 && sadness < 50) {
          sadnessMessage = 'There are some sad tones, but they are subtle'
        } else {
          sadnessMessage = 'Minimal'
        }

        $('#anger').text(angerMessage)
        $('#disgust').text(disgustMessage)
        $('#fear').text(fearMessage)
        $('#joy').text(joyMessage)
        $('#sadness').text(sadnessMessage)

        $('.form')[0].style.display = 'none'
        $('.results')[0].style.display = 'flex'

    }) //.then
} //callAPI
