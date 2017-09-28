$(document).ready(function () {
  $("form").submit(function (e) {
    e.preventDefault();
    //we can check to see if the submitted data is suitable (eg. right file type)
    if (true) {
      //let the ui know that the work is happening
      $('.section').html(' is loading&hellip;');
      var fd = new FormData();
      //we can send the same form data to multiple destinations
      //or the same destination twice in this example
      $.ajax({
        url: './start',
        data: fd,
        processData: false,
        contentType: false,
        type: 'POST'
      })
      .done(function (data) {
        $('#section1').html(' took ' + data + ' seconds')
        console.log(data);
      })

      $.ajax({
        url: './start',
        data: fd,
        processData: false,
        contentType: false,
        type: 'POST'
      })
      .done(function (data) {
        $('#section2').html(' took ' + data + ' seconds')
        console.log(data);
      })
    }
  })
});
