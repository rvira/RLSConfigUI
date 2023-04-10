import { loader, action } from "../app/routes/$";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

describe("loader", ()=> {
    it("should return correct json", async()=>{
        const request = "https://fakestoreapi.com/products/1";
        const response = await loader({request});
        expect(response).toEqual({"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}})
    })
})

describe("action", ()=> {

    afterEach(async () => {
        await sleep(2000);
      });

    it("should return correct json", async()=>{
        const request = "https://fakestoreapi.com/products/1";
        const response = await action({request});
        expect(response.status).toEqual("SUCCESS")
    })
})

