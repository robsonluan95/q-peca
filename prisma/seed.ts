import { PrismaClient } from '@prisma/client'
import { hash } from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
    // 0. Create an Admin User
    const passwordHash = await hash('admin123', 8);
    const admin = await prisma.user.upsert({
        where: { email: 'admin@qpeca.com' },
        update: {},
        create: {
            name: 'Admin Robson',
            email: 'admin@qpeca.com',
            password: passwordHash,
            role: 'ADMIN',
        },
    })

    console.log('Admin User Ready:', admin.email)

    // 1. Create a Category
    const category = await prisma.category.create({
        data: {
            name: 'Carroceria',
        },
    })

    console.log('Created Category:', category)

    // 2. Create a Vehicle (Fiat Strada)
    const vehicle = await prisma.vehicle.create({
        data: {
            make: 'Fiat',
            model: 'Strada',
            yearStart: 2020,
            yearEnd: 2024,
        },
    })

    console.log('Created Vehicle:', vehicle)

    // 3. Create a Part (Porta Dianteira)
    const part = await prisma.part.create({
        data: {
            name: 'Porta Dianteira Esquerda',
            partNumber: 'FT-12345',
            description: 'Porta original Fiat',
            categoryId: category.id,
        },
    })

    console.log('Created Part:', part)

    // 4. Link Part to Vehicle (The "Magic")
    const application = await prisma.partApplication.create({
        data: {
            partId: part.id,
            vehicleId: vehicle.id,
            userId: admin.id,
            status: 'APPROVED',
            notes: 'Compatível com modelos 1.4 e 1.8',
        },
    })

    console.log('Linked Part to Vehicle:', application)
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
