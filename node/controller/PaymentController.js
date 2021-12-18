const db = require('../models/transcation')

const transcation = db.Transcation;
 
const addTranscation = async (req,res) => {

    const { TransactionId, ProductId, Payment_Id,  Price, ProductTitle} = req.body
    try{
        const transcations = await transcation.create(
            { TransactionId, ProductId, Payment_Id,  Price, ProductTitle}
        );
        return res.status(200).json(transcations)
    }
    catch(e){
        return res.status(200).json({"message":e})
    }
}


const GetTranscation = async (req,res) => {
    try{
        const transcations = await transcation. findAll();
        return res.status(200).json(transcations)
    }catch(e){
        console.log(e)
        return res.status(500).send(e)
    }
}


module.exports = { addTranscation,
    GetTranscation
 }