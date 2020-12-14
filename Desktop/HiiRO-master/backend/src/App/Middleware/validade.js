const schema = require("../../Utils/schemaJoi");

const SignUp = async (request, response, next) => {

    const { name, email, password } = request.body;

    try {
      const { error } = await schema.signUp.validateAsync({
        name, email, password,
      });

      if(!error) { return next(); }

        return response.status(400).json({ error }).send();

    } catch (error) {

      return response.status(400).json({ error }).send();
    }
};

const Update = async (request, response, next) => {

  const { name, email, password } = request.body;
  
  try {
    const { error } = await schema.Update.validateAsync({
      name, email, password,
    })

    if(!error) { return next(); }

      return response.status(400).json({ error }).send();

  } catch(error) {

    return response.status(400).json({ error }).send();
  }

}

module.exports = {
  SignUp,
  Update,
};