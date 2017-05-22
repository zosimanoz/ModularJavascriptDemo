var person = (function(){

        var people = ['Manoj','Rakesh','Priya'];

        // Cache the dom
        var $el = $('#peopleModule');
        var $paragraph = $el.find('p');
        var $button = $paragraph.find('button');
        var $input = $el.find('input'); 
        var $ul = $el.find('ul'); 
        var $people_list = $el.find('#people');
        
        
        // Bind events
        $button.on('click' , addPerson); 
        $ul.delegate('button' , 'click' , deletePerson);

        
        render();
        
        // Render module
        function render(){
            console.log(people);
            $people_list.html('');
            for(var i=0; i < people.length; i++){
                var html = '<li class="list-group-item">';
                html += '<span>' + people[i] + '</span>';
                html += '<button class="btn btn-danger btn-xs" style="margin-left:20px">X</button></li>';
                                        
                $people_list.append(html);   
            } 
            
            // stats.setPeople(people.length);
            events.emit('peopleChanged',people.length);
            events.emit('allPeople',people);
        }
        
        // add new person
        function addPerson(value){
            var name = (typeof value === "string") ? value : $input.val();
            people.push(name);
            render();
            $input.val('');
        }
        
        
        // delete person
        function deletePerson(event){
            var i;
            
            if(typeof event === "number"){
                i = event;
            }else{
                var $remove = $(event.target).closest('li');
                i = $ul.find('li').index($remove);
            }
            
            people.splice(i,1);
            render();
        }
        
        
        return {
            addPerson : addPerson,
            deletePerson : deletePerson
        };
        
})();


        
       