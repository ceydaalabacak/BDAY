var countDownDate = new Date("Feb 7, 2020 12:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("demo").innerHTML = days + " days  " + hours + " hours  "
    + minutes + "   minutes  " + seconds + " seconds  ";

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);


  var cardContainer = $('.card-container');
  var submit = $('.submit-btn');

  submit.on("click", appendSomeoneAwesome);

  function appendSomeoneAwesome() {
    var name = $('.name').val();

    cardContainer.append(`
      <p class="name-card"><input type="checkbox" class= "checkbox"> • Dude,remember to ${name}!</p>
    `);

    $('.name').val("");
    var checkbox= $('.checkbox');
    checkbox.on("click",remove);
  }

  function remove(){
    event.target.parentNode.remove();
  }
