const Joi = require("@hapi/joi");

const signUp = Joi.object({   

    name: Joi.string()
        .min(3)
        .max(50)
        .pattern(/^[a-zA-Z\s.]{2,80}$/)
        ,

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        ,
        
    password: Joi.string()
        .min(8)
        .max(32)
        .pattern(/^[a-zA-Z0-9?!@#$%"&*()_-]{8,20}$/)
        ,
});

const Update = Joi.object({

    name: Joi.string()
        .optional()
        .regex(/^[a-zA-Z\s.]{2,80}$/),

    email: Joi.string()
        .optional()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),

    password: Joi.string()
        .min(8)
        .max(32)
        .optional()
        .regex(/^[a-zA-Z0-9?!@#$%¨&*()_-]{8,20}$/),
});

module.exports = {
    signUp,
    Update,
};
