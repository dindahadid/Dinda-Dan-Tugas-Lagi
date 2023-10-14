const { expect } = require("chai")
const request = require("supertest")


// Login
describe("login kasir" , () => {
    it("Response status is 201", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .post("/authentications")
        .send({
            "email": "kirimkedeweay@gmail.com",
            "password": "Rahasia1",
        })
        console.log(JSON.stringify(await response.body))
        //assertion
        expect(await response.status).equal(201)
    })
})