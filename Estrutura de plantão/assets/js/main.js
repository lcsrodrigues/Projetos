const arrayInfo = [
    {
        id:"mapAppCliente",
        information:"lorem ipsum"
    },
    {
        id:"mapInternet",
        information:"lorem ipsum"
    },
    {
        id:"mapTwitterWebHook",
        information:"lorem ipsum"
    },
    {
        id:"mapApiLight",
        information:"lorem ipsum"
    },
    {
        id:"mapLightJa",
        information:"lorem ipsum"
    },
    {
        id:"mapFirewall",
        information:"lorem ipsum"
    },
    {
        id:"mapBaseOracle",
        information:"lorem ipsum"
    },
    {
        id:"mapSAP",
        information:"lorem ipsum"
    },
    {
        id:"mapGDIS",
        information:"lorem ipsum"
    },
]

$(document).ready(function(){
    $("[name='imgmaps'] area").mouseover(function(){
        let info = getInfo($(this))
        $("#targetExplicacao").html(info)
    })
})

function getInfo(map)
{
    let idMap = map.attr("id")
    let obj = findInfo(idMap)
    return obj.id +' - '+ obj.information
}

function findInfo(idMap)
{
    for(i=0; i<arrayInfo.length; i++)
    {
        if(arrayInfo[i].id == idMap)
        {
            return arrayInfo[i]
        }
    }
}