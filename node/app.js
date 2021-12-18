const {sequelize} = require('./models')
const express = require('express');
const open = require ('open')

class Server {
    constructor(port,app){
        this.port = port;
        this.app = app;
    }
   post(){
       this.app.post('/post',(req,res)=>{
        res.send( { TransactionId, ProductId, Payment_Id,  Price, ProductTitle})
       })
   }
    get(){
      this.app.get('/transaction',(req,res)=>{
    //     db.query("SELECT * FROM products",(err, result)=>{
    //             if(err){
    //               console.log(err);
    //             }
    //             res.send(result);
    //   })
    res.send(200)
    })
    }
    listen() {
		this.app.listen(this.port, async(err) =>{
            open(`http://localhost:${this.port}`)
            try {
                await sequelize.sync({force:true})
              } catch (e) {
                console.log(e)
              }
		});
	}
}


let server = new Server(7060, express());
server.get();
server.listen();