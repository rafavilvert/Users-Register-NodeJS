class HomeController{

    async index(req, res){
        res.send("APP EXPRESS! - By Rafael Vilvert");
    }

}

module.exports = new HomeController();