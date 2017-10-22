module.exports = (app) => {

    app.get("/", function(req, res) {
        //set default
        res.sendFile('home.html', { root: './app/public/' });

    });

    app.get("/survey.js", function(req, res) {
        //reference same home page as default 
        res.sendFile('survey.js', { root: './' });

    });

    app.get("/survey", function(req, res) {
        //path to survey page.
        res.sendFile('survey.html', { root: './app/public/' });

    });

}