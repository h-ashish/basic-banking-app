var mongoose = require('mongoose');

var TransferSchema = new mongoose.Schema({
	transferFrom: {type:Number, required: true,  max:999999},
	transferTo: {type:Number, required:true, max:999999},
	amount: {type:Number, required:true, min:1},
	createdAt: {type:String, required:true},
})

module.exports = mongoose.model('TransferHistory',TransferSchema );