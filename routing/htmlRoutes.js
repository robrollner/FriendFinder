module.exports = (app) => {

    app.get("/", function(req, res) {
        //set default
        res.sendFile('home.html', { root: './public/' });

    });

    app.get("/home", function(req, res) {
        //reference same home page as default 
        res.sendFile('home.html', { root: './public/' });

    });

    app.get("/survey", function(req, res) {
        //path to survey page.
        res.sendFile('survey.html', { root: './public/' });

    });

}