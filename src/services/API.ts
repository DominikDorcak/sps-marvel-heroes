import { Md5 } from "ts-md5"
import { Character } from "./responseInterfaces"

class API {

    baseURL: string = "https://gateway.marvel.com/v1"
    private: string = "ee933cdffab2a0170a44b71eb7a8508c5739471d"
    public: string = "4d6fc0845fdf2febb353bbef76788c2b"
    
    attributionText: string = ""



    async createResponse(path: string, params: any): Promise<any> {
        params.apikey = this.public
        params.ts = new Date().getTime().toString(16)
        params.hash = Md5.hashStr(params.ts + this.private + this.public)
        console.log(params)

        let url = this.baseURL + path + "?"
        const queryParams =
            Object.keys(params)
                .map(key => `${key}=${params[key]}`)
                .join('&');

        return fetch(url + queryParams).then(res => res.json()).then(res => res)
    }


    async getHeroes(nameStartswith: string): Promise<Character[]> {
        let params = { nameStartsWith: nameStartswith }
        const response = await this.createResponse("/public/characters", params)
        this.attributionText = response.attributionText
        return response.data.results;
    }

    async getHeroById(id:number): Promise<Character> {
        const respons = await this.createResponse("/public/characters/" + id,{})
        this.attributionText = respons.attributionText
        return respons.data.results[0];
    }


}

export default new API();