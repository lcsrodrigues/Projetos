var arrayFiles = []

$(document).ready(function()
{
    renderModals()
    colapseClick()
});

function colapseClick()
{
    $(".colapse").click(function()
    {
        if($(this).hasClass("close"))
        {
            $(this).removeClass("close").addClass("open")
            $(this).closest(".cardAceiteFisico").find(".expandAceiteFisico").show();
            return true;
        }

        if($(this).hasClass("open"))
        {
            $(this).removeClass("open").addClass("close")
            $(this).closest(".cardAceiteFisico").find(".expandAceiteFisico").hide();
            return true;
        }
    })
}