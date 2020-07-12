var sql = require('../db.js');


var Sentence = function(sentence){
    this.podlog = sentence.podlog;
    this.glagol = sentence.glagol;
    this.skazuemo = sentence.skazuemo;
    this.dopulnenie = sentence.dopulnenie;
    this.obstoqtelstveno = sentence.obstoqtelstveno;
    this.drugi = sentence.drugi;
}



Sentence.createSentence = function(newSentence,result){

    sql.query("INSERT INTO sentence set ?",newSentence,function(err,res){
        if(err){
            console.log("error: ",err);
            result(err,null);
        }
        else{
            console.log("uspeshno turihte neshto u bazata danni");
            result(null,res.insertId)
        }

    });
}

Sentence.getAllSentences = function(result){
sql.query("Select * from sentence",function(err,res){
    if(err){
        console.log("error: ", err);
    }
    else{
        console.log('sentences: ',res);
        result(null,res);
    }

});
};

module.exports = Sentence;