$(document).ready(function() {

var onChange = function(){
    var scores = []
    $("#ELO_table").find("input.score").each(function(i){
        scores[i] = Number($(this).val())
    })

    scores = ELO.Calculate(scores,{volatility:25,scoring:function(numplayers){
        return ELO.Scoring(numplayers,2)
    }})

    $("#ELO_table").find("td.score_output").each(function(i){
        $(this).text(scores[i])
    })
}

$("#ELO_table").find("input.score").each(function(i){
    $(this).change(onChange)
})

})