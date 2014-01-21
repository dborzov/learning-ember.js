window.MyApp = Ember.Application.create();
MyApp.ApplicationAdapter = DS.FixtureAdapter.extend();

// setting up router
MyApp.Router.map(function() {
  this.resource('LandingPageTemplate',{path:'/'});
  this.resource('TableTemplate',{path:'/table'})
});


MyApp.VendorModel = DS.Model.extend({
	companyName: DS.attr('string'),
	Approved: DS.attr('boolean'),
	contactEmail: DS.attr('string')
});


MyApp.VendorModel.FIXTURES = [
    {
        id: 1,
        companyName: 'Glove makers',
        Approved: true,
        contactEmail: 'ceo@glovemakers.com'
    },
    {
    	id: 2,
    	companyName: 'Colonial Floss Inc',
    	Approved: false,
    	contactEmail: 'info@colonialfloss.com'
    },
    {
    	id:3,
    	companyName: 'Executive Toothbrushes, LLC',
    	Approved: true,
    	contactEmail: 'peter.borzov@gmail.com'
    }
];



// we will now tie LandingPageTemplate to VendorModel
MyApp.LandingPageTemplateRoute = Ember.Route.extend({
	model: function () {
		return this.store.find('VendorModel');
	}
});





