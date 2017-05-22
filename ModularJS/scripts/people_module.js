(function() {
    
    var people = {
        
        people : ['Manoj','Rakesh','Priya'],
        template :  $('#peopleModule').html(),
        init: function(){
          this.cacheDom();  
          this.bindEvents();
          this.render();
        },
        cacheDom: function(){
          this.$el = $('#peopleModule');
          this.$paragraph = this.$el.find('p');
          this.$button = this.$paragraph.find('button');
          this.$input = this.$el.find('input'); 
          this.$ul = this.$el.find('ul'); 
          this.$people_list = this.$el.find('#people');
        },
        bindEvents: function(){
          this.$button.on('click',this.addPerson.bind(this)); 
          this.$ul.delegate('button','click',this.deletePerson.bind(this));
        },
        render: function(){
          var data = {
             people: this.people
          };
          console.log(data.people);
          this.$people_list.html('');
          for(var i=0; i < data.people.length; i++){
            var html = '<li class="list-group-item">';
            html += '<span>' + data.people[i] + '</span>';
            html += '<button class="btn btn-danger btn-xs" style="margin-left:20px">X</button></li>';
                                    
            this.$people_list.append(html);    
          }
        },
        addPerson : function(value){
            
            this.people.push(this.$input.val() || value);
            this.render();
            this.$input.val('');
        },
        deletePerson: function(event){
            var $remove = $(event.target).closest('li');
            var i = this.$ul.find('li').index($remove);
            
            this.people.splice(i,1);
            this.render();
        }
    };
    
    people.init();
    
})();