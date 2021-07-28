class HomeController{

    async index(req, res){
        res.send("Api de usuários!");
    }
    async validate(req, res){
        res.send("okay");
    }
}

module.exports = new HomeController();