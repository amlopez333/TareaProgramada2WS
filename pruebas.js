

const url = 'http://titanic.ecci.ucr.ac.cr:80/~eb43885/tp2/HangmanServiceDocumentLiteral/';

const prueba = function(){
	var pl = new SOAPClientParameters();
	SOAPClient.invoke(url, 'getWord', pl, true, function(result){
		console.log('Palabra: ' + result);
	});
};

const prueba2 = function(){
	var pl = new SOAPClientParameters();
	pl.add('letter', 'r');
	SOAPClient.invoke(url, 'checkGuess', pl, true, function(result){
		console.log('2234 ' + result);
	});
}

const prueba3 = function(){
	var pl = new SOAPClientParameters();
	SOAPClient.invoke(url, 'getRightCount', pl, true, function(result){
		console.log('Correctas: ' + result);
	});
}

const prueba4 = function(){
	var pl = new SOAPClientParameters();
	SOAPClient.invoke(url, 'getWrongCount', pl, true, function(result){
		console.log('Malas: ' + result);
	});
}

const prueba5 = function(){
	var pl = new SOAPClientParameters();
	SOAPClient.invoke(url, 'checkWon', pl, true, function(result){
		console.log('Gano?: ' + result);
	});
};

const prueba6 = function(){
	var pl = new SOAPClientParameters();
	SOAPClient.invoke(url, 'checkLost', pl, true, function(result){
		console.log('Perdio?: ' + result);
	});
};
prueba();
prueba2();
prueba3();
prueba4();
prueba5();
prueba6();