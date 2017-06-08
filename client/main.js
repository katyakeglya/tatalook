/// Rooting
Router.configure({
	layoutTemplate: "TataLookLayout"
});

Router.route('/', function () {
  this.render('navbar', {
	to:"navbar"
  });
  this.render('welcome', {
	to:"main"
  });
  this.render('footer', {
	to:"footer"
  });
});

Router.route('/story', function () {
  this.render('navbar', {
	to:"navbar"
  });
  this.render('story', {
	to:"main"
  });
  this.render('footer', {
	to:"footer"
  });
});

Router.route('/resume', function () {
  this.render('navbar', {
	to:"navbar"
  });
  this.render('resume', {
	to:"main"
  });
  this.render('footer', {
	to:"footer"
  });
});

Router.route('/albums', function () {
  this.render('navbar', {
	to:"navbar"
  });
  this.render('albums', {
	to:"main"
  });
  this.render('footer', {
	to:"footer"
  });
});

Router.route('/blog', function () {
  this.render('navbar', {
	to:"navbar"
  });
  this.render('blog', {
	to:"main"
  });
  this.render('footer', {
	to:"footer"
  });
});
    

