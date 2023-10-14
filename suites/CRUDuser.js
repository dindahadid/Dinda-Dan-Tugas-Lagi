const { expect } = require("chai")
const request = require("supertest")
const user = require("../data/user.json")
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjkzZjQ3MGUxLWIwMDgtNGZjOS04NzdhLWRiZGNlODljZTE3YSIsImNvbXBhbnlJZCI6IjZkOTI5MTQ0LWYxNjEtNDYzNC1hMTkwLWQ5NGUwMmNlM2Q1NSIsImlhdCI6MTY5NzMwOTg4MH0.wIWLljiG7k6lyhqbkcfgN_I1r0MWdviXEyqIJ5Wkcrw'
// Get All Users Kasir Aja
describe("Get Users" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .get("/users")
        .set({ "Authorization": `Bearer ${accessToken}` })
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(200)
    })
})

// Create Users Kasir Aja
describe("Create Users" , () => {
    it("Response status is 201", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .post("/users")
        .send(user)
        .set({ "Authorization": `Bearer ${accessToken}` })
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(201)
    })
})

//Update Users Kasir Aja
    describe("Update Users" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .put("/users/85ae232e-5391-4366-bc2b-59eedb103c03")
        .send({
           "name": "Dwinda Black Pink",
           "email": "kirimkedeweay@gmail.com"
       })
        .set({ "Authorization": `Bearer ${accessToken}` })
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(200)
   })
})

//Delete Users Kasir Aja
describe("Delete Users" , () => {
    it("Response status is 200", async () =>{
        const response = await request("https://kasir-api.belajarqa.com")
        .delete("/users/85ae232e-5391-4366-bc2b-59eedb103c03")
        .set({ "Authorization": `Bearer ${accessToken}` })
        console.log(JSON.stringify(await response))
        //assertion
        expect(await response.status).equal(200)
   })
})