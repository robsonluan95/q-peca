import prismaClient from "../../prisma";

interface PartApplicationRequest {
    partId: string;
    vehicleId: string;
    userId: string;
    notes?: string;
}

class CreatePartApplicationService {
    async execute({ partId, vehicleId, userId, notes }: PartApplicationRequest) {
        const application = await prismaClient.partApplication.create({
            data: {
                partId: partId,
                vehicleId: vehicleId,
                userId: userId,
                notes: notes,
                status: "PENDING"
            },
            include: {
                vehicle: true,
                part: true
            }
        });

        return application;
    }
}

export { CreatePartApplicationService };
