const nodemailer = require('nodemailer');

module.exports = {
    testServer(req, res){
        res.status(200).send({
            message: 'Servidor de Email Get Funcionando!'
        });
    },

    submit(req, res) {

        const nome = req.body.nome;
        const email = req.body.email;
        const assunto = req.body.assunto;
        const mensagem = req.body.mensagem;

        const remetente = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth:{
                user: 'seuemail@gmail.com',
                pass: 'suasenha' }

            
        });
        
        const emailASerEnviado = {
            from: email,
            to: 'email@gmail.com.br',
            subject: assunto,
            text: `Enviado por: ${nome}
        
            ${mensagem}`,
        };
        
        remetente.sendMail(emailASerEnviado, function(error){
            if (error) {
                res.status(404).send({
                    message: error
                });
            } else {
                res.status(200).send({
                    message: 'Email Enviado com sucesso!'
                });
            }
        });
    }
}

