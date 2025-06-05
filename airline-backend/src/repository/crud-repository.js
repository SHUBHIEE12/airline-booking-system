class CrudRepository {
    constructor(model) {
        this.model = model;
    }




    async create(data) {

        try {
            const result = await this.model.create(data);
            return result;
        } catch (error) {
            console.log("Something went wrong in the CRUD repo");

            throw{error}
        }

    }

    async destroy(id) {
        try {
             await this.model.destroy(id);
        } catch (error) {
            console.log("Something went wrong in the CRUD repo");

            throw{error}
        }
    }

    async get(modelId) {
        try {
            const result = await this.model.findByPk(modelId);
            return result;
        } catch (error) {
            console.log("Something went wrong in the CRUD repo");

            throw{error}
        }
    }

    async getAll()
    {
        try {
            const result = await this.model.findAll();
            return result;
        } catch (error) {
            console.log("Something went wrong in the CRUD repo");

            throw{error}
        }
    }

    async update(modelId) {
        try {
            const result = await this.model.update(data,{
                where:{
                    id:modelId
                },
            })

            return result;
        } catch (error) {
            console.log("Something went wrong in the CRUD repo");

            throw{error}
        }
    }
}
module.exports = CrudRepository;