/*Este código foi baseado no programa de Ben Cunnnigham*/

// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var linha, coluna, cor;

$('#sizePicker').submit(function (event) {
	event.preventDefault(); //impeço a página de atualizar após o submit
	linha = $('#inputHeight').val(); //pego os valores do usuário
	coluna = $('#inputWeight').val(); //pego os valores do usuário
	makeGrid(linha, coluna); //passo por parâmetro para a função makeGrid os valores do usuario
});

function makeGrid(linha, coluna) { //recebo os valores
	$('tr').remove();
	for(var i = 0; i < linha; i++) { //crio as linhas da tabela
		$('table').append('<tr></tr>'); 
		for(var j = 0; j < coluna; j++) {
			$('table') //adiciono as colunas às linhas correspondentes
				.children()
	        	.last()
	        	.append("<td></td>");
		}
	}

	$('td').click(function() { //evento clicavel nos quadrados da grade
  		cor = $('#colorPicker').val(); //a cor será a cor que o usuário escolheu
  		$(this).css('background-color', cor); //mudo a cor do quadrado
	});
}


