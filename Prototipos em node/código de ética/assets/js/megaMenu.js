$("document").ready(() => {
    $("#menuAF, .megaMenu").mouseover(() => {
        $("#menuAF").css("background", "#397C70")
        $(".megaMenu").show()
    }).mouseleave(() => {
        $("#menuAF").css("background", "#4A9587")
        $(".megaMenu").hide()
    })
})