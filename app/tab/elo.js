if(!("TABS" in window)) TABS = {};
TABS.elo = {}

TABS.elo.ready = function(){

    var calculate_elo = function(){
        var scores = []

        $("#ELO_table").find("input.score").each(function(i){
            if($(this).val() == "") return false
            scores[i] = Number($(this).val())
        })

        return ELO.Calculate(scores,{volatility:25,scoring:function(numplayers){
            return ELO.Scoring(numplayers,2)
        }})
    }

    var onChange = function(){
        var scores = calculate_elo()

        $("#ELO_table").find("td.score_output").each(function(i){
            if(scores[i] == null){
                $(this).text("")
            }else{
                $(this).text(scores[i])
            }
        })
    }

    $("#ELO_table").find("input.score").each(function(i){
        $(this).change(onChange)
    })

    $("#ELO_table tbody").sortable({
        stop: onChange
    })

    $("button#next").click(function(){
        var scores = calculate_elo()

        $("#ELO_table").find("input.score").each(function(i){
            if(scores[i] != null){
                $(this).val(scores[i])
            }
        })

        onChange()
    })
}