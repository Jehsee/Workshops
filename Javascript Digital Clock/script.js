$(document).ready(function(){
  // setInterval(function(){
  //   var newdate = new Date()
  //   var hours = newdate.getHours()
  //   var minutes = newdate.getMinutes()
  //   var seconds = newdate.getSeconds()
  //   var milli = newdate.getMilliseconds()


  //   if (minutes % 5===0) {
  //       var color = "#"
  //       for (var i = 0; i < 6; i++) {
  //         var letterNumber= "0123456789ABCDEF".split("")
  //         var randomDigit = letterNumber[Math.floor(Math.random() * 16)]
  //         color += randomDigit
  //       }
  //     $(".clock").css("background-color", color)
  //   }
  // },1000)

  setInterval(function(){
    var newdate = new Date()
    var hours = newdate.getHours()
    var minutes = newdate.getMinutes()
    var seconds = newdate.getSeconds()
    var milli = newdate.getMilliseconds()


    if (seconds % 5===0) {
        var color = "#"
        for (var i = 0; i < 6; i++) {
          var letterNumber= "0123456789ABCDEF".split("")
          var randomDigit = letterNumber[Math.floor(Math.random() * 16)]
          color += randomDigit
        }
      $(".clock").css("background-color", color)
    }

      // change even minutes to color red
    if (minutes % 2 === 0) {
      $("#minute").css("color", "red");
    }
    else  {
      $("#minute").css("color", "black")
    }

    if (hours < 10) {
      $("#hour").text("0"+hours)
    }
    else  {
      $("#hour").text(hours)
    }

    if (minutes < 10) {
      $("#minute").text("0"+minutes)
    }
    else  {
      $("#minute").text(minutes)
    }

    if (seconds < 10) {
      $("#seconds").text("0"+seconds)
    }
    else  {
      $("#seconds").text(seconds)
    }

    if (milli < 10) {
      $("#milli").text("00"+milli)
    }
    else if (milli >9 && milli <100) {
      $("#milli").text("0"+milli)
    }
    else  {
      $("#milli").text(milli)
    }
  },1)

  })