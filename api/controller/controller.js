addNumbers = (req,res)=>{
    let result = 0;
    if(req.params && req.query){
        result = parseInt(req.params.first) + parseInt(req.query.second);
    }
    res.status(200).send(`<h2>The Addition of: ${req.params.first} and ${req.query.second} is = ${result} </h2>`)
}

home = (req,res) =>{
    res.status(200).send(`<h2>Please provide the parameters in orther to be calculated accordingly;</h2>`)
}

module.exports = {
    addNumbers : addNumbers,
    home : home
}


