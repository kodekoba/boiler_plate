const parents = require("../controllers/parents.js");
const childs = require("../controllers/childs.js");

module.exports = function(app){
    app.get("/parents", function(req, res){
        parents.allparents(req, res);
    });
    app.get("/parents/:id", function(req, res){
        childs.allchilds(req, res);
    });
    app.post("/parents/new", function(req, res){
        parents.createparent(req, res);
    });
    app.put("/childs/new/:id", function(req, res){
        childs.createchild(req, res);
    });
    app.delete("/parents/remove/:id", function(req, res){
        parents.deleteparent(req, res);
    });
    app.get("/childs/remove/:pid/:cid", function(req, res){
        childs.deletechild(req, res);
    });
}