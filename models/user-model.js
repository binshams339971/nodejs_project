var db = require('./db');

module.exports={

	getById: function(id, callback){

		var sql = "select * from employeer where id=?";
		db.getResults(sql, [id], function(result){

			//console.log(result);
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	getByEmail: function(email, callback){

		var sql = "select * from user where email=?";
		db.getResults(sql, [email], function(result){

			console.log(result);
			if(result.length > 0 ){
				callback(result[0]);
			}else{
				callback([]);
			}
		});
	},
	validate: function(user, callback){
		var sql = "select * from user where email=? and password=?";

		db.getResults(sql, [user.email, user.password], function(result){

			if(result.length > 0 ) {
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from employeer";

		db.getResults(sql, [], function(results){

			if(results.length > 0 ) {
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	insert : function(user, callback){
		var sql = "insert into user values(?, ?, ?, ?)";
		db.execute(sql, [user.name, user.email, user.phone, user.password], function(status){
			callback(status);
		});
	},

	update : function(user, callback){
		var sql = "update user set name=?, phone=?, password=? where email=?";		
			db.execute(sql, [user.name, user.phone, user.password, user.email], function(status){
				callback(status);
			});
		
	},
	delete : function(user, callback){
		//var sql = "insert into user values('','"+ user.username+"', '"+user.password+"')";
		db.execute(sql, [],  function(status){
			callback(status);
		});
	}
}	

