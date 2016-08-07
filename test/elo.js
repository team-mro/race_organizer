QUnit.module("ELO Scoring", function(){

    QUnit.test( "Scoring grading power 2, 2 players", function( assert ) {
          var scoring = ELO.Scoring(2,2)

          assert.deepEqual(scoring, [1,0], "ok")
    });

    QUnit.test( "Scoring grading power 2, 4 players", function( assert ) {
          var scoring = ELO.Scoring(4,2)

          assert.deepEqual(scoring, [
                                      0.6428571428571429,
                                      0.2857142857142857,
                                      0.07142857142857142,
                                      0
                                    ], "ok")
    });

});

QUnit.module("ELO Calculation", function(){

    QUnit.test( "ELO scoring 2 players", function( assert ) {
          var players = [100,100]
          var settings = { volatility: 25, scoring:function(numplayers){
            return ELO.Scoring(numplayers,2)
          }}

          assert.deepEqual(ELO.Calculate(players,settings), [125,75], "volatility 25")

          settings.volatility = 75

          assert.deepEqual(ELO.Calculate(players,settings), [175,25], "volatility 75")
    });

    QUnit.test( "ELO scoring 3 players", function( assert ) {
          var players = [100,100,100]
          var settings = { volatility: 25, scoring:function(numplayers){
            return ELO.Scoring(numplayers,2)
          }}

          assert.deepEqual(ELO.Calculate(players,settings), [135,90,75], "volatility 25")

          settings.volatility = 75

          assert.deepEqual(ELO.Calculate(players,settings), [205,70,25], "volatility 75")
    });
});