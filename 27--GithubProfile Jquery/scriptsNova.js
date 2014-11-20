$.ajax({
    type: 'GET',
    url: 'xxNovaxx.json',
    success: function(objects){
      console.log("Objects Are", objects)
      $('#name').html(objects.name);
      $('#user').html(objects.login);
      $('#company').html(objects.company);
      $('#location').html(objects.location);
      $('#avatar').attr('src', objects.avatar_url);
      $('#link').html(objects.blog).attr('href', objects.blog);
      $('#email').html(objects.email).attr('href',objects.email);
      $('#followers').html(objects.followers);
      $('#following').html(objects.following);
      $('#created').html("Joined on " + new Data(objects.created_at).toDateString().slice(3));
  }
});

$.ajax ({
      type: 'GET',
      url: 'xxNovaxx.json',
      success: function(objects){
        console.log("Objects Are", objects)
        $('.repo1').html(objects[0].name).attr('href', 'xxNovaxx.json/' + objects[0].full_name);
        $('.repo2').html(objects[1].name).attr('href', 'xxNovaxx.json/' + objects[1].full_name);
        $('.repo3').html(objects[2].name).attr('href', 'xxNovaxx.json/' + objects[2].full_name);
        $('.repo4').html(objects[3].name).attr('href', 'xxNovaxx.json/' + objects[3].full_name);
        $('.repo5').html(objects[4].name).attr('href', 'xxNovaxx.json/' + objects[4].full_name);
        $('.repo6').html(objects[5].name).attr('href', 'xxNovaxx.json/' + objects[5].full_name);
        $('.repo7').html(objects[6].name).attr('href', 'xxNovaxx.json/' + objects[6].full_name);
        $('.repo8').html(objects[7].name).attr('href', 'xxNovaxx.json/' + objects[7].full_name);
        $('.repo9').html(objects[8].name).attr('href', 'xxNovaxx.json/' + objects[8].full_name);
      }
    });

function drop(id) {
  var navID = ['contrib', 'repos', 'activity'];
  var dropDown = document.getElementById(id);
  navID.forEach(function(value,index){
    var dropMenu = value + 'menu';
     if(value===id){
        dropDown.style.display = 'block';
        document.getElementById(dropMenu).style.borderColor = 'lightgray'
        document.getElementById(dropMenu).style.borderBottomColor = 'white'
     }else{
        document.getElementById(value).style.display = 'none';
        document.getElementById(dropMenu).style.borderColor = 'transparent'
     };
  });
}





