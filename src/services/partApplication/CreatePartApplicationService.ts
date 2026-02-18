import prismaClient from "../../prisma";

interface PartApplicationRequest {
    partId: string;
    vehicleId: string;
    notes?: string;
}

class CreatePartApplicationService {
    async execute({ partId, vehicleId, notes }: PartApplicationRequest) {
        const application = await prismaClient.partApplication.create({
            data: {
                partId: partId,
                vehicleId: vehicleId,
                notes: notes
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
