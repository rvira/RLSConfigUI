import {loader} from '../app/routes/endpoints.$service_name';

describe("loader", () => {
    it("should return correct json", async () => {

        const params = {service_name: 'EVE-RLS'}
        const response = await loader({params});
        expect(response).toEqual({service_name: 'EVE-RLS'});

    })
})