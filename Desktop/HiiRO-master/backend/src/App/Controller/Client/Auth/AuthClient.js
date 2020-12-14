const connection = require("../../../../Config/Database/connection");
const md5 = require("md5");

module.exports = {

   /* async login(request, response) {

        const { email, password } = request.body;

        const emailDB = await connection("clienteRegister").where("email", email).select("email").first();
        const senhaDB = await connection("clienteRegister").where("password", md5(password)).select("password", "id").first();
        //console.log(senhaDB.id);
        try {
            if(emailDB.email == email && senhaDB.password == md5(password)) {
                return response.status(200).json({
                    id: senhaDB.id,
                    message: 'Logged in User'
                });
            }

        } catch (error) {
            return response.status(401).json("Login or Password Invalid");
        }
    }*/
    async login(request, response) {

        const { email, password } = request.body;

       const Login = await connection("tb_cliente").where("password", md5(password)).select('email', 'password', 'id').andWhere('email', email).first();
  
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