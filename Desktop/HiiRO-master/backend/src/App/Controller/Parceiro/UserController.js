const connection = require("../../../Config/Database/connection");
const md5 = require("md5");
const crypto = require("crypto");

module.exports = {
    
    async store(request, response) {

        const { name, email, password, phone, city, uf, neighborhood, street, selectedservice, textarea} = request.body;
        const { originalname: nome, size, filename: key, path: url = "" } = request.file;
        console.log(request.body);
        console.log(request.file);
        try {
            const UserCheck = await connection('tb_parceiro').where('email', email).select('email').first();
            if(UserCheck) {
                return response.status(403).json({ error: "Usuário já resgistrado!" });  
            }
            
            await connection('tb_parceiro').insert({
                name,
                email,
                password: md5(password),
                phone,
                city,
                uf,
                neighborhood,
                street,
                selectedservice,
                textarea,
                nome, 
                size,
                key,
                url  
            });
          
            return response.status(200).json({ email });
            

        } catch (erro) {
            console.log(erro);
            return response.status(500).json({ error: "Registration Failed" });
            //console.log(erro);
        }
        
    },

    async index(request, response) {

        try {
            const list = await connection("tb_parceiro").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listParceiro(request, response) {
        try {
            const { id } = request.params;
            console.log('id: ' +id);
            const list = await connection("tb_parceiro").where('id', id).select("*");
            console.log(list);
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async delete(request, response) {
        try {
            await connection("tb_parceiro").delete("*");
            response.status(200).json({ erro: "Cadastros Excluidos" });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    }
}