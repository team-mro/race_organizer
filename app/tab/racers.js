if(!("TABS" in window)) TABS = {};
TABS.racers = {}

TABS.racers.ready = function(){

    DB.allDocs({
        include_docs:true,
        startkey:'racer/',
        endkey:'racer/\uffff'
    }).then(function(result){
        var racerlist = $("#racerlist")
        racerlist.empty()
        result.rows.forEach(function(row){
            racerlist.append("<tr><td>"+row.doc.tag+"</td><td>"+row.doc.name+"</td></tr>")
        })
    });
}

