const player = require('../models/Players');
exports.homePage = (req, res, next) => {
    res.render('index', { title: 'Tanveer Kalia' });
  };

 

  exports.table = (req, res) => {
    player.find((err, playerTable) => {
      if (err) {
        res.render('error');
      } else {
        res.render('players', { 
          title: 'Players',
          playerTable,
        }); 
      }
    });
  };