var arrayMatricula = [{'matricula':2235200,'nomeEmpregado':'Igor','email':'igor@meta.com.br','telefone':21999999999}];

$(document).ready(function()
{
	btnConsultar_click();
	levarConjuge_onChange();
	levarQuantosFilhos_onChange();
	btnEnviarFormulario_click();
});

function btnEnviarFormulario_click()
{
	$("#btnEnviarFormulario").click(()=>
	{
		var dadosEmpregado = {};
		var filhos = [];
		
		dadosEmpregado.matricula = $("#iptMatricula").val()
		dadosEmpregado.nome = $("#iptNomeEmpregado").val()
		dadosEmpregado.email = $("#iptEmailEmpregado").val()
		dadosEmpregado.telefone = $("#iptContatoEmpregado").val()
		dadosEmpregado.conjuge = $("#iptNomeConjuge").val()
		
		for(let I=0; I<$("#targetFormFilhos .formFilhos").length; I++)
		{
			var dadosFilhoEmpregado = {};
			
			dadosFilhoEmpregado.nome = $("#iptNomeFilho"+I+"").val();
			dadosFilhoEmpregado.faixaEtaria = $("#faixaEtariaFilhos"+I+"").val();
			filhos.push(dadosFilhoEmpregado);
		}
		
		dadosEmpregado.filhos = filhos;
		
		console.log(dadosEmpregado);
	});
};

function levarQuantosFilhos_onChange()
{
	$("#levarQuantosFilhos").change(()=>{
		
		var qtdFilhos = $("#levarQuantosFilhos").val();
		
		switch(qtdFilhos)
		{
			case "1":
				controiFormularioFilhos(1);
			break;
			
			case "2":
				controiFormularioFilhos(2);
			break;
			
			case "3":
				controiFormularioFilhos(3);
			break;
			
			case "4":
				controiFormularioFilhos(4);
			break;
		}
	});
}

function controiFormularioFilhos(loop)
{
	var strOut = "";
	
	for(let I=0; I<loop;I++)
	{	
		strOut+="<div class='formFilhos'>";
		strOut+="	<input type='text' class='inputText' placeholder='Nome Completo' id='iptNomeFilho"+I+"' />";
		strOut+="	<select class='inputSelect' id='faixaEtariaFilhos"+I+"' >";
		strOut+="		<option selected value='0 a 2 anos'>0 a 2 anos</option>";
		strOut+="		<option value='3 a 5 anos'>3 a 5 anos</option>";
		strOut+="		<option value='6 a 12 anos'>6 a 12 anos</option>";
		strOut+="	</select>";
		strOut+="</div>";
	}
	
	$("#targetFormFilhos").html(strOut);
}

function levarConjuge_onChange()
{
	$("#levarConjuge").change(()=>{
		if($("#levarConjuge").val() == 'sim')
		{
			$("#iptNomeConjuge").show();
		}
	});
}

function btnConsultar_click()
{
	$("#btnConsultaMatricula").click(()=>
	{	
		if( $("#iptMatricula").val() != "" )
		{
			var search = $("#iptMatricula").val();
			
			result = jQuery.grep(arrayMatricula, function(el){ 
				return el.matricula.toString().indexOf(search) > -1;
			});
			
			if(result.length)
			{
				$("#detalhesEmpregado").show();
				preencheDetalhesEmpregado(result[0]);
			}
			
		}else{
			alert('Informe sua Matrícula');
		}
	});
}

function preencheDetalhesEmpregado(result)
{
	$("#iptNomeEmpregado").val( result.nomeEmpregado );
	$("#iptEmailEmpregado").val( result.email );
	$("#iptContatoEmpregado").val( result.telefone );
}