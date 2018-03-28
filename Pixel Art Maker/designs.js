/*
Pesquisas feitas para o projeto:
	Como criar tabelas HTML em JS:
	https://stackoverflow.com/questions/11083345/creating-a-dynamic-grid-of-divs-with-javascript

	innerHTML:
	https://pt.stackoverflow.com/questions/4605/remover-elemento-da-p%C3%A1gina-com-javascript

	Pop-up alerta:
	https://www.w3schools.com/jsref/met_win_confirm.asp

	O modo como tratei o gráfico foi baseado em um exercício presente no curso Web Developer Nanodegree:
	https://classroom.udacity.com/nanodegrees/nd001-br/parts/de89d637-e42a-47fc-96a2-d74d2162b655/modules/cd56eea9-99b5-40c8-8725-a66a651e1ff0/lessons/a7c5b540-51a6-44dc-b2f2-515c9dd6ca4f/concepts/602d8cf0-7345-45e0-a52f-f0597a2dbf39
	
	Código feito por Bárbara Pegoraro Markus, aluna do curso Web Developer Nanodegree
	Todas as pesquisas foram referenciadas, não há cópia de outro programador.
*/

$('#sizePicker').submit(function (event) {
    event.preventDefault(); //impeço a página de atualizar
    $('#pixelCanvas').html(''); //apago tabelas anteriores
	const largura = $('#inputWeight').val(); //variavel recebe o valor do usuario
	const altura = $('#inputHeight').val(); //variavel recebe o valor do usuario
	$("#pixelCanvas").append(makeGrid(largura, altura)); //a table pixelCanvas irá receber 
														 // e fazer aparecer a tabela retornada
														 //pela função makeGrid
	mudarCor(); //após gráfico feito, pode mudar a cor das células
});

function makeGrid(largura, altura){
	var tabela = "<table>"; //Tratar a tabela como uma string
	for (let i = 0; i < altura; i++ ) { //for que controla linhas
        tabela += "<tr>"; //tabela recebe uma linha nova 
        for (let j = 0; j < largura; j++ ) //for que controla colunas
            tabela += "<td></td>"; //a linha[i] recebe a coluna[j] nova
        tabela += "</tr>"; //fecha a linha[i]
    } 
    return tabela;
}

function mudarCor() {
	$("td").click(function() {
		const cor = $('#colorPicker').val();
		$(this).css('background-color', cor);
	});
	$("td").dblclick(function() {
		$(this).css('background-color', '#ffff');
	});
}

$('#limpar').click(function (){
	var strconfirm = confirm("Você quer apagar sua arte?");
    if (strconfirm == true) {
    	$('#pixelCanvas').html('');
    }
});
