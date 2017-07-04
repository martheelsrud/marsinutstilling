    //Jeg har valgt å bruke funksjonene/eventsene:
    //click, mouseleave, mouseover, dblclick / stop, fadeTo, alert, slideUp, slideDown,  next, animate.

    $(function(){

	var marsvinJSON = [
		{"id": "M01", "navn": "Pelle", "pelstype": "korthåret"},
		{"id": "M02", "navn": "Polle", "pelstype": "strihåret"},
		{"id": "M03", "navn": "Patrick", "pelstype": "korthåret"}
	];

			$("img")
				.mouseleave(function(){
					$(this)
						.stop()
						.fadeTo(500, 1.0);
				})

				.mouseover(function(){
				$(this)
					.stop()
					.fadeTo(500, 0.4);
			});

			$("#marsvinEnDiv")
				.click(function(){
					alert(marsvinJSON[0].navn);
				});

			$("#marsvinToDiv")
				.click(function(){
					alert(marsvinJSON[1].navn);
				});

			$("#marsvinTreDiv")
				.click(function(){
					alert(marsvinJSON[2].navn);
				});	

			$("#klikkHerInfo")
				.dblclick(function(){

					$("#marsvinInfo:visible")
						.slideUp(1500);

					$(this)
						.next("#marsvinInfo")
						.slideDown(1500);
				});

			$("#marsvinKrympeBtn")
				.click(function(){
					$("#marsvinToImg")
						.animate({ "width": "100px", "height": "100px" }, "slow", function(){
							alert('Du krympet marsvinet! :( Nå kan han ikke stille i utstillingen lenger.'); 
						});
				
				});



});