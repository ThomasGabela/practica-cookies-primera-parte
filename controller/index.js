module.exports = {

    index: (req, res) => {

        res.render("index" , {colores: ""});
    },

    color: (req, res) => {
        
        req.session.color = req.body.color;
        let colores = req.body.color
        res.render("index", {colores})
    },

    algo : (req, res) => {
        let color = req.session.color;
        res.render("algo", {color})
    }
}