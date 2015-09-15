function Ticket(name, time, age) {
  this.movieName = name;
  this.movieTime = time;
  this.userAge = age;
}

Ticket.prototype.ticketPrice = function() {
  var price = 0;

  if (this.userAge <= 12) {
    price += 3;
  } else if (this.userAge <= 17) {
    price += 5;
  } else if (this.userAge <= 64) {
    price += 7;
  } else if (this.userAge > 64) {
    price += 3;
  }

  if (this.movieTime <= 5) {
    price += 2;
  } else if (this.movieTime > 5) {
    price += 4;
  }

  return price.toString();
};

$(document).ready(function() {

  var movieNames = ["Mazerunner: Scorch Trials", "Avengers: Age of Ultra", "Captain America: Civil War", "Big Hero 6"];
  var movieTimes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  movieNames.forEach(function(name) {
    $("select#movie-list").append("<option><span class='chosen-movie'>" + name + "</span></option>");
  });

  movieTimes.forEach(function(time) {
    $("select#time-list").append("<option value='" + time + "'><span class='chosen-time'>" + time + ":00 PM" + "</span></option>");
  });

  $("form#user-info").submit(function(event) {

    var movieChoice = $("#movie-list option:selected").text();
    var timeChoice = parseInt($("#time-list option:selected").val());
    var ageChoice = parseInt($("input#user-age").val());
    debugger;
    userTicket = new Ticket(movieChoice, timeChoice, ageChoice);

    userPrice = userTicket.ticketPrice();

    $(".ticket-price").text(userPrice);

    $("#result").show();
    event.preventDefault();
  });
});
