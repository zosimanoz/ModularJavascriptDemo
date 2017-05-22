var people_list = (function(){
    var people = [];
    
    // cache dom
    var $list = $('#listModule');
    // var $template = $('#list-template').html();
    
    // bind the pubsub events
    events.on('allPeople',setList);
    
    render();
    
    function render(){
        console.log(people);
        $list.html('');
        for(var i=0 ; i < people.length; i++){
            var html = '<span>'+people[i]+'</span>';
            $list.append(html);
        }
    }
    
    function setList(newPeople){
        people = [];
        people.push(newPeople);
        render();
    }
    
    function destroy() {
        $list.remove();
        // events.off('peopleChanged',setPeople);
    }
   
})();