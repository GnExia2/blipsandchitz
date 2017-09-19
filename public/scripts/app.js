$(document).ready(function(){
  $(".button-collapse").sideNav();

  $.ajax({
    method: 'GET',
    url: '/api/score',
    success: handleSuccess,
    error: handleError
  });

  $('#score-form').on('submit', function(e) {
    e.preventDefault();
    var formData = $(this).serialize();
    console.log('formData', formData);
    $.post('/api/scores', formData, function(delay) {
      console.log('score after POST', score);
      renderDelay(score);  //render the server's response
    });
    $(this).trigger("reset");
  });

}

  function handleSuccess(success){
    success.forEach(function(i){
      renderScore(i);
    });
  };

  function handleError(err){
    console.log('There has been an error: ', err);
  }


function renderScore(score) {
  console.log('rendering score', score);
  var scoreHtml = (`
    <div class="row delayclass" id="${score._id}" data-score-id="${score._id}">
      <form id="${score._id}-update" action="#" onsubmit="return false" method="PUT" class="score-update-form" name="${delay._id}-update">
        <div class="col-md-10 col-md-offset-1">
          <div class="panel panel-default">
          <div class="panel-body">
            <!-- begin delay internal row -->
            <div class='row'>
              <div class="col-md-6 col-xs-12">
                <ul class="list-group">
                  <h4 class='inline-header'>name:</h4>
                  <span id="${score._id}-destination" class='scoreData'>${score.name}</span>
                  <h4 class='inline-header'>flappybird:</h4>
                  <span id="${score._id}-timeDelay" class='scoreData'>${score.score}</span>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  `);
  $('#scores').append(delayHtml);
};

var Rating = require('rating');

var rating = new Rating([1, 2, 3, 4, 5]);
document.body.appendChild(rating.el);

rating.on('rate', function(weight) {
  console.log('rated: ' + weight);
});

rating.on('current', function(weight) {
  console.log('current: ' + weight);
});
