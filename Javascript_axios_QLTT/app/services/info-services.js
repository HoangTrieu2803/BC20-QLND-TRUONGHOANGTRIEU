function InfoServices(){
    this.getListInfoApi = function(){
        return axios({
            url: "https://6183cb0191d76c00172d1b6b.mockapi.io/api/qltt",
            method: "GET",
        })
    };
    this.deleteInfoApi = function(id){
        return axios({
            url: `https://6183cb0191d76c00172d1b6b.mockapi.io/api/qltt/${id}`,
            method: "DELETE"
        })
    }
    this.postInfoApi = function(info){
        return axios({
            url: "https://6183cb0191d76c00172d1b6b.mockapi.io/api/qltt",
            method: "POST",
            data: info
        })
    }
    this.getInfoApi = function(id){
        return axios({
            url: `https://6183cb0191d76c00172d1b6b.mockapi.io/api/qltt/${id}`,
            method: "GET"
        })
    }
    this.putInfoApi = function(info){
        return axios({
            url: `https://6183cb0191d76c00172d1b6b.mockapi.io/api/qltt/${info.id}`,  
            method: "PUT",
            data: info
        })
    }
}