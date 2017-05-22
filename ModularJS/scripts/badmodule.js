var people = [];

var template = $('#peopleModule').html();


$('#peopleModule p').find('button').on('click',function() {
   people.push($('#peopleModule').find('input').val());
   
   $('#peopleModule').find('input').val('');
   
   $('#people').html('');

   console.log(people);
   for(var i=0; i < people.length; i++){
        var html = '<li class="list-group-item">';
        html += '<span>' + people[i] + '</span>';
        html += '<button class="btn btn-danger btn-xs" style="margin-left:20px">X</button></li>';
								
        $('#people').append(html);    
   }
});


$('#peopleModule').find('ul').delegate('button','click', function (event) {
    var $remove = $(event.target).closest('li');
    var i = $('#peopleModule').find('ul').find('li').index($remove);
    
    $remove.remove();
    people.splice(i,1);
    
    console.log('removed--');
    console.log(people);
});