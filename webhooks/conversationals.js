
module.exports = function(app){
    const types = require('../services/types.service'); 
    const AppContexts = {
        OVERTIME: 'OverTime',
        NO_OVERTIME: 'NoOverTime'
      }

    app.intent('Decision Model - Relationship', conv => {
        request(elastic_url + 'covid_canada',{json: true}, function(err,res,body) {
          //console.log(body.covid_canada.mappings.properties) // 200
          if(types.check_date(body.covid_canada.mappings.properties)) {
            conv.contexts.set(AppContexts.OVERTIME,5);
          } else {
            conv.contexts.set(AppContexts.NO_OVERTIME,5);
          }
        });
    })
}