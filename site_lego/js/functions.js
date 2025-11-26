$(document).ready(function(){
    console.log('abriu');
    var janelaPopup = $("#popup");
    var fundoPopup = $("#background");
    var linksPopup = $(".js_popup");
    var btnFechar = $("#fecharJanela");
    var conteudoJanela = $("#conteudoJanela");
    console.log(linksPopup.length);
    
    linksPopup.on('click', function(event){
        event.preventDefault(); //desativa a função do link
        //abreJanela(janelaPopup, fundoPopup);
        janelaPopup.toggle();
        fundoPopup.toggle();
        var conteudo = $(this).attr("href");
        console.log("Abrir " + conteudo);
        var html = $("#conteudo-" + conteudo).html();
        conteudoJanela.html(html);

    });
    btnFechar.on('click', function(event){
        event.preventDefault();
        janelaPopup.toggle();
        fundoPopup.toggle();
    })
    // $("#rightbar").load("./pg_endereco.html");
	linksPg = $(".linksPg");
	linksPg.on("click",function( event ){
		// event.preventDefault();
		var pagina = $(this).attr("href");
	    $("#rightbar").load("./pg_" + pagina);
    });
});