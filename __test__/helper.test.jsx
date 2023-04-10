import { getAccessRole, sampleRole, getHeaders, getStoredYaml } from "../function/helper";

describe("getAccessRole", () => {
    it("should return boolean on the basis of role which is accessible ", async () => {
        const response = await getAccessRole("KYC-RLS");
        console.log(response);
        expect(response).toEqual(false);

    })
})


describe("getAccessRole", () => {
    it("should return boolean on the basis of role which is not accessible ", async () => {
        const response = await getAccessRole("EVE-RLS");
        expect(response).toEqual(true);

    })
})

describe("sampleRole", () => {
    it("should return roles after decoding in base64", async () => {
        const role = await sampleRole();
        expect(role).toEqual(["api-role-3", "avkyc_agent", "kycgw_package_ninja", "kycgw_manager"]);

    })
})

describe("getHeaders", () => {
    it("should read and return yaml details", async () => {
        const yamlData = await getHeaders();
        expect(yamlData).toEqual([
            { 
                "service_name": "EVE-RLS",
                "spec_file": "https://virtserver.swaggerhub.com/gr8Adakron/storage-service-get-signed/1.0.0",
                "url": "/endpoints/asasd",
                "roles" : [
                    "EVE_ADMIN", "EVE_WRITER", "SUPER_ADMIN", "avkyc_agent"
                ]
            },
            {
                "service_name": "DC-RLS",
                "spec_file": "https://virtserver.swaggerhub.com/gr8Adakron/storage-service-get-signed/1.0.0",
                "url": "/endpoints",
                "roles" : [
                    "DC_ADMIN", "DC_WRITER", "SUPER_ADMIN","EVE_WRITER"
                ]
            },
            {
                "service_name": "PG-RLS",
                "spec_file": "https://virtserver.swaggerhub.com/gr8Adakron/storage-service-get-signed/1.0.0",
                "url": "/endpoints",
                "roles" : [
                    "PG_ADMIN", "PG_WRITER", "SUPER_ADMIN"
                ]
            },
            {
                "service_name": "VS-RLS",
                "spec_file": "https://virtserver.swaggerhub.com/gr8Adakron/storage-service-get-signed/1.0.0",
                "url": "/endpoints",
                "roles" : [
                    "PG_ADMIN", "PG_WRITER", "SUPER_ADMIN", "avkyc_agent"
                ]
            }
        ]);

    })
})


