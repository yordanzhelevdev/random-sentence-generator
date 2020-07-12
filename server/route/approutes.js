

module.exports = function(app){
var sentenceList = require("../controller/appController");


app.route('/sentences')
.get(sentenceList.list_all_sentences)
.post(sentenceList.create_a_sentence);

// Add routes
// routes.get('/', SessionController.store);
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

};
