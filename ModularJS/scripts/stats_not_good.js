var stats = (function(){
    var people = 0;
    var all_people = [];
    
    // cache dom
    var $stats = $('#statsModule').find('h4').find('span');
    var $list = $('#statsModule').find('.list');
    // var $template = $('#stats-template').html();
    
    // bind the pubsub events
    events.on('peopleChanged',setPeople);
    events.on('allPeople',showPeople);
    
    render();
    
    function render(){
        $stats.html(people);
        
        $list.html('');
        for(var i=0 ; i < all_people.length; i++){
            var html = '<span>'+all_people[i]+'</span>';
            $list.append(html);
        }
    }
    
    function setPeople(newPeople){
        people = newPeople;
        render();
    }
    
    function showPeople(people){
        all_people = [];
        all_people.push(people);
        render();
    }
    
    function destroy() {
        $stats.remove();
        // events.off('peopleChanged',setPeople);
    }
   
})();