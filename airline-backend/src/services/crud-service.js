class crudService{

    constructor(repository){
        this.repository = repository;
    }

    async create(data)
    {
        try {
            const result = await this.repository.create(data);
            return result;
            
        } catch (error) {
            console.log("something went wrong in crus-service")
            throw{error}
        }
    }

    async destroy(id)
    {
         try {
             await this.repository.destroy(id)
        } catch (error) {
            console.log("something went wrong in crus-service")
            throw{error}
        }
    }
    async get(id)
    {
         try {
            const result = await this.repository.get(id);
            return result
        } catch (error) {
            console.log("something went wrong in crus-service")
            throw{error}
        }
    }

    async getAll()
    {
         try {
            const result = await this.repository.findALL()
        } catch (error) {
            console.log("something went wrong in crus-service")
            throw{error}
        }
    }

    async update(id,data)
    {
         try {
            const result = await this.repository.update(id,data);
            return result;
        } catch (error) {
            console.log("something went wrong in crus-service")
            throw{error}
        }
    }
}

module.exports= crudService