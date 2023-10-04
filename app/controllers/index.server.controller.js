//<!--Jarod Wakeman, 301321980 Assignment 1, 2023 oct 4-->
exports.render = function (req, res){
    res.render('index', {
        title: 'New Express Application'
    })
};