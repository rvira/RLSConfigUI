import { JsxEmit } from "typescript";
import { loader, action } from "../app/routes/$";
import axios from 'axios'
import { when } from "jest-when";

jest.mock("axios")

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

describe("loader", ()=> {

    afterEach(async () => {
        await sleep(2000);
     });
const fn=jest.fn()

    it("should return correct json", async()=>{
    const value={"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}};
  
  
    const request="https://fakestoreapi.com/products/1"
    when(fn).calledWith(request).mockReturnValue(value)
       
      
        expect(fn(request)).toEqual(value)
    })
    it("should return not return correct json", async()=>{
        const value={"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}};
      
      
        const request="https://fakestoreapi.com/products/1"
        const wrongRequest="abcd.com"
        when(fn).calledWith(request).mockReturnValue(value)
           
          
            expect(fn(wrongRequest)).not.toBe(value)
        })
})

describe("action", ()=> {

    afterEach(async () => {
        await sleep(2000);
      });
      const fn=jest.fn()

    it("should return correct json", async()=>{
        const request="https://hkdk.events/5qKuXBcslFYE"
        const value="SUCCESS"
         when(fn).calledWith(request).mockReturnValue(value)
        
        expect(fn(request)).toEqual(value)
    })
    it("should not return correct response", async()=>{
        const request="https://hkdk.events/5qKuXBcslFYE"
        const wrongRequest="abcd.com"
        const value="SUCCESS"
         when(fn).calledWith(request).mockReturnValue(value)
        
        expect(fn(wrongRequest)).not.toBe(value)
    })
    

})

