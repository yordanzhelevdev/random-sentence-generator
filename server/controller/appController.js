'use strict';
var Sentence = require('../model/appModel.js');

exports.list_all_sentences = function(req,res){
    Sentence.getAllSentences(function(err,task){

        console.log('controller');
        if(err)
        res.send(err);
        console.log('res',task)
        res.send(task);

    });

}


exports.create_a_sentence = function(req,res){
    var new_sentence = new Sentence(req.body);
    
    
    if(!new_sentence.dopulnenie || !new_sentence.skazuemo)

        res.status(400).send({error:true, message:"da si ebesh mamata"})
    else{

        Sentence.createSentence(new_sentence,function(err,task){
            if(err)
            res.send(err);
            res.json(task);

        });
    }
}