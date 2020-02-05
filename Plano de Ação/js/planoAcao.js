$(document).ready(function()
{
    renderModals();
        
    cardClick();
    subCard1Click();
    subCard2Click();

    btnAprovarClick();
    btnRejeitarClick();
    btnEnviarClick();
});

function btnAprovarClick()
{
    $("#btnAprovar").click(function(){
        openModalLoading();
        setTimeout(function(){
            openModal("APROVADO","Sua solicitação foi aprovada com sucesso.");
        },3000);
        closeModal();
    });
}

function btnRejeitarClick()
{
    $("#btnRejeitar").click(function(){
        openModalLoading();
        setTimeout(function(){
            openModal("REJEITADO","Sua solicitação foi rejeitada com sucesso.");
        },3000);
        closeModal();
    });
}

function btnEnviarClick()
{
    $("#btnEnviar").click(function(){
        openModalLoading();
        setTimeout(function(){
            openModal("ENVIADO","Sua solicitação foi enviada com sucesso.");
        },3000);
        closeModal();
    });
}

function cardClick()
{
    $(".card").click(function(e)
    {
        e.stopPropagation();
        var oLI = $(this).closest("li");
        oLI.find(".subCard1").toggle();
        
        resetArrow(oLI.find(".subCard1"));
        resetArrow(oLI.find(".subCard2"));

        oLI.find(".subCard2").hide();
        oLI.find(".subCard3").hide();
        changeArrow($(this));
    });
}

function subCard1Click()
{
    $(".subCard1").click(function(e)
    {
        var cardPai = $(this).attr("subCard1ID");
        var subCards2 = $(this).closest("li").find(".subCard2");
        var oLI = $(this).closest("li");
        
        resetArrow(oLI.find(".subCard2"));
        
        oLI.find(".subCard3").hide();

        changeArrow($(this));

        for(I=0; I<subCards2.length; I++)
        {
            if( subCards2.eq(I).attr("cardPai") == cardPai )
            {
                subCards2.eq(I).toggle();
            }
        }
    });
}

function subCard2Click()
{
    $(".subCard2").click(function(e)
    {
        var cardPai = $(this).attr("subCard2ID");
        var subCards3 = $(this).closest("li").find(".subCard3");
        changeArrow($(this));

        for(I=0; I<subCards3.length; I++)
        {
            if( subCards3.eq(I).attr("cardPai") == cardPai )
            {
                subCards3.eq(I).toggle();
            }
        }
    });
}

function changeArrow(currentCard)
{
    if( currentCard.find("div.arrowUp").length > 0 )
    {
        currentCard.find("div.arrowUp").removeClass("arrowUp").addClass("arrowDown");
    }else if( currentCard.find("div.arrowDown").length > 0 )
    {
        currentCard.find("div.arrowDown").removeClass("arrowDown").addClass("arrowUp");
    }
}

function resetArrow(card)
{
    card.find("div.arrowUp").removeClass("arrowUp").addClass("arrowDown");
}