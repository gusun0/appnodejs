const http = require('http');
const moment = require('moment');

function serverCallback(req,res){

	var begin_time = moment('14:00','HH:mm');
	var end_time = moment('14:00','HH:mm');

	var message = "Hello " + process.argv[2] + "\n";
	message += "Welcome to our page";
	message += " Now, it is " + moment().format('HH:mm') + "\n";
	message += "Our business hours is from " + begin_time.format('HH:mm') + " to " + end_time.format('HH:mm') +"\n"; 

	var begin_difference = begin_time.diff(moment(), 'minutes');
	var end_difference = moment().diff(end_time, 'minutes');
	//	.diff(end_time, 'minutes'); 
	//moment()
	//	.diff(end_time, 'minutes');

	console.log(begin_difference);
	console.log(end_difference);


	if(begin_difference > 0){
		message += "Please come back in " + begin_difference + " minutes \n";		
	}

	if(end_difference > 0){
		message += "Please come back tomorrow \n";
	}


	res.writeHead(200,{'Content-Type': 'text/plain'});
//	res.end('HOLA '  + process.argv[2] + " It is " +  moment().format('LLLL') + ' now.');
	res.end(message);
}
//console.log(process.argv);

http.createServer(serverCallback).listen(3000);
