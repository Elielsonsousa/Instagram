const connection = require("../../../Config/Database/connection");
const md5 = require("md5");

module.exports = {
    
    async storeCliete(request, response) {

        const { name, email, password } = request.body;

        try {
            const UserCheck = await connection('tb_cliente').where('email', email).select('email').first();

            if(UserCheck) {
               
                return response.status(403).json({ error: "User Already Registered" });
               
            }
            
            await connection('tb_cliente').insert({
                name,
                email,
                password: md5(password)
            }).catch(err=>{
                console.log(err);
            });
            return response.status(200).json({ email });

        } catch (erro) {
            return response.status(500).json({ erro });
        }
    },

    async index(request, response) {
       
        try {
            const list = await connection("tb_cliente").select("*");
            return response.json({ list });
            

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listId(request, response) {
       
        try {
            const { id } = request.params;
            console.log(id);
            const list = await connection("tb_cliente").where("id", id).select("*");
     
            return response.json({ list });
           

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async delete(request, response) {
        try {
            await connection("tb_cliente").delete("*");
            response.status(200).json({ erro: "Cadastros Excluidos" });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    }
    
}