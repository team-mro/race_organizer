var Arrays = {
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

var ELO = {

    Calculate : function (scores, settings){
        var origscores = scores.slice()
        var numplayers = origscores.length
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