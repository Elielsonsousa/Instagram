const connection = require("../../../Config/Database/connection");

module.exports = {
    
    //Listar Babá's
    async ListBaba(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Babá").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    //Listar Diarista
    async LisDiarista(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Diarista (Faxina)").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listEsteticista(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Esteticista").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listEncanador(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Encanador").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listFreelancer(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Freelancer").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listGarcom(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Garçom").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listMontador(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Montador de móveis").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listPasseio(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Passeio com Pets").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listPedreiro(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Pedreiro").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listPintura(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Pintura").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listSeguranca(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Segurança").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listJardinagem(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Jardinagem").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listFazTudo(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Faz Tudo").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    // Novas Rotas
    async listCuidador(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Cuidador").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listEletricista(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Eletricista").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listGesseiro(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Gesseiro").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listManicure(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Manicure").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listMarceneiro(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Marceneiro").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listMassagista(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Massagista").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listMecanico(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Mecânico").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listTecnico(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Técnico").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    },

    async listProfessor(request, response) {

        try {
            const list = await connection("create_user").where("selectedservice", "Professor").select("*");
            return response.json({ list });

        } catch (error) {
            return response.status(500).send({ error: "List Failed" });
        }
    }

}