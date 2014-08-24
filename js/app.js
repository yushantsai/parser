$(function(){
	$(".resetForm").click(function(){
		$("form#searchForm").trigger('reset');
	});
    $("button.btn").click(function(){
			var post=$(".status-box").val();

			var words = new Lexer().lex(post);
			var taggedWords = new POSTagger().tag(words);
			$('<li>').prependTo(".posts").addClass('postlist');
			for (i in taggedWords) {
				var taggedWord = taggedWords[i];
				var word = taggedWord[0];
				var tag = taggedWord[1];
				$(".postlist:first").append('<b>'+word+'</b>/'+tag+'  ');
			}

			$(".status-box").val('');
			$(this).attr('disabled',true);
    });
	$(".status-box").keyup(function(){
		var postLength=$(this).val().length;
		if(postLength>0){
			$("button.btn").attr('disabled',false);
		}		else {
			$("button.btn").attr('disabled',true);
		}
		});
});