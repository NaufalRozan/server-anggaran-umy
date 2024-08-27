import { FastifyInstance } from "fastify";

async function rk1Routes(server: FastifyInstance) {
    server.get(
        '',
        {},
        ()=> {}
    )

    server.get(
        '/:id',
        {},
        ()=> {}
    )

    server.post(
        '',
        {},
        ()=> {}
    )

    server.put(
        '/:id',
        {},
        ()=> {}
    )

    server.delete(
        '/:id',
        {},
        ()=> {}
    )
}

export default rk1Routes