Arrays = {
    /**
    * Zips two arrays together using function 'f'.
    * Note that if one array is longer then the other f will be
    * called with null values for the shorter array.
    **/
    zip : function(array1, array2, f){
        if(!(Array.isArray(array1) &&
                Array.isArray(array2))){
            throw "First two parameters need to be arrays"
        }

        var newarray = []

        while(Math.max(array1.length, array2.length) > 0){
            newarray.push(f(array1.shift(), array2.shift()))
        }

        return newarray
    }
}

ELO = {

    /**
    * Calculate ELO scores for a game given input scores and settings.
    * Input scores are the current scores of the players, ordered by game
    * result (first place in the game is index 0 in the scores array).
    * Settings contains volatility (how much scores change) and the
    * scoring table.
    * See unit tests for usage examples.
    **/
    Calculate : function (scores, settings){
        var origscores = scores.slice()
        var numplayers = origscores.length
        if(numplayers == 0) return origscores

        var totalscore = origscores.reduce(function(total, score){
            return total + score
        })
        var prediction = origscores.map(function(score){
            return score / totalscore
        })

        var result = settings.scoring(numplayers)

        var changefactors = Arrays.zip(prediction, result,
        function(prediction, result){
            return result - prediction
        })

        var resultscores = Arrays.zip(origscores, changefactors,
        function(origscore, changefactor){
            return Math.round(origscore + (changefactor * numplayers * settings.volatility))
        })

        return resultscores
    },

    /**
    * Generate a scoring table that divides "1" over all
    * participants based on a power function
    **/
    Scoring : function (numplayers, power) {
        var scoring = []
        var total = 0
        for(var i = numplayers; i > 0; i--){
            var score = Math.pow(i-1,power)
            total += score
            scoring.push(score)
        }

        scoring.forEach(function(val, index){
            scoring[index] = val/total
        })

        return scoring
    }


}