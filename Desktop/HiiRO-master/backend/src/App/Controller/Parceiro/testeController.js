const connection = require("../../../Config/Database/connection");
const md5 = require("md5");

module.exports = {
    
    async store(request, response) {

        const { name, email, password, phone, city, uf, neighborhood, street, selectedservice, } = request.body;
        console.log(request.body);

        try {
            const UserCheck = await connection('userTeste').where('email', email).select('email').first();
            if(UserCheck) {
                return response.status(403).json({ error: "User Already Registered" });
            }
            
            await connection('userTeste').insert({
                name,
                email,
                password: md5(password),
                phone,
                city,
                uf,
                neighborhood,
                street,
                selectedservice, 
            });
            return response.status(200).json({ email });

        } catch (erro) {
            //return response.status(500).json({ error: "Registration Failed" });
            console.log(erro);
        }
    },

    async index(request, response) {

        try {
            const list = await connection("userTeste").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    }
}