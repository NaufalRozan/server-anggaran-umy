import { PrismaClient } from '@prisma/client'
import UserService from '../src/modules/user/user.service'
const prisma = new PrismaClient()

const permissionNames = [
    'ADMIN_PERENCANAAN',
    'REVIEWER',
    'PIMPINAN_UNIT',
    'ASSESOR_AUDIT',
    'ADMIN_UNIT',
    'ADMIN_KEUANGAN',
]

async function main() {
    const superAdminAccount = await UserService.createUser({
        username: 'superadmin',
        password: 'admin123',
    })

    const permissions = await Promise.all(
        (permissionNames ?? []).map(async (permissionName) => {
            return await prisma.permission.upsert({
                where: { name: permissionName },
                update: {},
                create: { name: permissionName },
            })
        })
    )

    const superAdminRole = await prisma.role.upsert({
        where: {
            name: 'Super Admin'
        },
        update: {},
        create: {
            name: 'Super Admin',
            permissions: {
                connect: [ ...permissions ]
            }
        },
    })

    const updatedSuperAdmin = await prisma.user.update({
        where: {
            id: superAdminAccount.id
        },
        data: {
            roleId: superAdminRole.id
        }
    })

    console.log({ updatedSuperAdmin })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

function hashPassword(password: any): { hash: any; salt: any; } {
    throw new Error('Function not implemented.');
}
