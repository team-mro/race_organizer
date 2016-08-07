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