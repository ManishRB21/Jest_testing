const mongoose = require('mongoose')
const request = require('supertest')
const app = require('../app')
const { describe, test } = require('node:test')
require('dotenv').config({path:'.env'})

beforeEach(async()=>{
    await mongoose.connect(process.env.MONGODB_URI)
})

afterEach(async()=>{
    await mongoose.connection.close
})

describe("Test 1 : GET", ()=>{
    jest.setTimeout(10000)
    it("should return all products", async()=>{
        const res = await request(app).get('/api/products')
        expect(res.status).toBe(200);
        expect(res.body.length).toBeGreaterThan(0)
    })
})

describe("Test 2 : GET ",()=>{
    it("should return single product with mentioned ID", async()=>{
        const key = {name :"manish behera"}
        const res = await request(app).get('/api/products/64ba6d3a1ddba4e2acdcc6ce')
        expect(res.status).toBe(200)
        expect(res.body).toMatchObject(key)
    })
})

describe("Test 3 : POST",()=>{
    it("should add new product", async()=>{
        const data = {
            name : "product 2",
            price: 9999,
            description:"abc"
        }
        const res = await request(app).post('/api/products').send(data)
        expect(res.status).toBe(201)
        expect(res.body.name).toBe("product 2")
    })
})

describe("Test 4 : PUT", ()=>{
    it("should replace product by id", async()=>{
        const data = {
            name :"product 3",
            price :1000,
            description:"qwerty"
        }
        const res= await request(app).patch('/api/products/64ba6e269b099cec6ca61adb').send(data)
        expect(res.status).toBe(200)
        expect(res.body.name).toBe("product 3")
    })

})

describe("Test 5 : delete", ()=>{
    it("should delete product by id", async()=>{
        const res= await request(app).delete('/api/products/64ba6e15386919a82703ca5b')
        expect(res.status).toBe(200)
    })
})