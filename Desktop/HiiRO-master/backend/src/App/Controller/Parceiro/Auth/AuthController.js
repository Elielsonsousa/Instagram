const connection = require("../../../../Config/Database/connection");
const md5 = require("md5");

module.exports = {

   async login(request, response) {

        const { email, password } = request.body;
        
       const Login = await connection("tb_parceiro").where("password", md5(password)).select('email', "password", 'id').andWhere('email', email).first();
  
        try {
            if(Login.email == email && Login.password == md5(password)) {
                return response.status(200).json({
                    id: Login.id,
                    message: "Logged in User"
                });
            }

        } catch (error) {
            return response.status(401).json("Login or Password Invalid");
        }
    }
}