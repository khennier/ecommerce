const request = require('supertest');
const app = require('../index'); // Exporta `app` desde index.js

describe('API Endpoints', () => {
    it('Debe devolver todos los productos', async () => {
        const res = await request(app).get('/api/allproducts');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    it('Debe registrar un usuario', async () => {
        const res = await request(app)
            .post('/api/signup')
            .send({ username: 'John', email: 'john@example.com', password: '123456' });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('success', true);
    });
});
