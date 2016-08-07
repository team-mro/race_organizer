var ELO = {

    Calculate : function (players, settings){

    },

    Scoring : function (numplayers, power) {
        var scoring = []
        var total = 0
        for(i = numplayers; i > 0; i--){
            score = Math.pow(i-1,power)
            total += score
            scoring.push(score)
        }

        scoring.forEach(function(val, index){
            scoring[index] = val/total
        })

        return scoring
    }


}