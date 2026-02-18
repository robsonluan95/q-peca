import prismaClient from "../../prisma";

interface PartApplicationRequest {
    id: string;
    partId?: string;
    vehicleId?: string;
    notes?: string;
}

class UpdatePartApplicationService {
    async execute({ id, partId, vehicleId, notes }: PartApplicationRequest) {
        const application = await prismaClient.partApplication.update({
            where: {
                id: id,
            },
            data: {
                partId,
                vehicleId,
                notes,
            }
        });

        return application;
    }
}

export { UpdatePartApplicationService };
