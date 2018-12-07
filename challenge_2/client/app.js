
const postRequest = function (data) {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/postJSON',
    data: { data: data },
    success: function (data) {
      $('.CSVdata').append(data);
    },
    error: function () {
      console.log('there has been an error')
    }
  });
}

$('form').on('submit', function (e){
  e.preventDefault()
  let input = $(".textArea").val()
  postRequest(input);
})

// this function selects the data from the text area and pushes
// it to the <p>
// $(".textArea")
//   .keyup(function () {
//     var value = $(this).val();
//     postRequest(value)
//     $("p").text(value);

//   })
//   .keyup();



