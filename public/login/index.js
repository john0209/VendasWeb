function onLogin(){
	$("#preloader").show();
	$("#btn-login").hide();		

	firebase.auth().signInWithEmailAndPassword($("#login").val(),$("#password").val()).catch(function(error){
		var errorMessage = error.message;

		$("#error").empty();
		 
		setTimeout(function(){
			// hide the preloader
			$("#preloader").hide();
			// show the btn
			$("#btn-login").show();	
			// show in the screen, a error message
			$("#error").text(errorMessage);
		}, 1000);
		
	});
}

$(document).ready(function(){

	firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

	$(document).on("keypress", function(event){
		console.log("key pressed");
		if(event.which == 13){
			onLogin();
		}
	});

	$("#btn-login").click(function(){
		onLogin();
	});

	firebase.auth().onAuthStateChanged(function(user){
		if(user){
			window.location.href = "../manage";
		}
	})
});