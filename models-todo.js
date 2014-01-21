Todos.Todo = DS.Model.extend({
	title: DS.attr('string'),
	isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
    {
        id: 1,
        title: 'Obey gravity',
        isCompleted: false
    },
    {
    	id: 2,
    	title: 'Love apples',
    	isCompleted: true
    },
    {
    	id:3,
    	title: 'Floss regularly',
    	isCompleted: false
    }

];