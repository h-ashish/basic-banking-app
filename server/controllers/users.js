console.log('came in');

var User = require('../model/users');
const {validationResult} = require('express-validator');

exports.postUsers = [
	async function(req, res, next){
		const errors = validationResult(req);
		if(!errors.isEmpty()){
			res.json({status:0, data:"validation", debug_data:errors.array()});
		} else {
			let user = await User.findOne({
				account_num: req.body.account_num
			});

			
			if(user){
				return res.status(400).json({msg:"User already exists"});
			}

			var userOb = new User({
				full_name: req.body.full_name,
				account_num: req.body.account_num,
				balance: req.body.balance
			});

			userOb.save(function(err){
				if(err){
					res.json({status: 0, debug_data:err})
				} else {
					res.json({status:1, data:"User Saved"})
				}
			})
		}
	}
]

exports.getUsers = function(req, res, next){
	User.find(function(err, user_list){
		res.json(user_list);
	})
}

exports.getSingleAuthor = function(req, res, next){
	User.findById(req.params.id, function(err, singleAuthor){
		res.json(singleAuthor);
	})
}

exports.getByAccNum = function(req, res, next){
	User.findOne({"account_num":req.params.account_num}, function(err, accNumUser){
		res.json(accNumUser);
	})
}

exports.deleteUsers = function(req, res, next){
	User.findByIdAndDelete(req.params.id, function(err){
		if(err)
			res.json(err.toString());
		res.json({status:1, msg:"succesfully deleted author with id " + req.params.id})
	})
}

exports.updateUsers = function(req, res, next){
	User.findOneAndUpdate({"account_num":req.params.account_num}, req.body, function(err){
			if(err)
			res.json(err.toString());
			res.json({status:1, msg:"succesfully edited author with account " + req.params.account_num})
		})	
}