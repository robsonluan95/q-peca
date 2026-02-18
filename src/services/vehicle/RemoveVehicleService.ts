import prismaClient from "../../prisma";

interface VehicleRequest {
    id: string;
}

class RemoveVehicleService {
    async execute({ id }: VehicleRequest) {
        const vehicle = await prismaClient.vehicle.delete({
            where: {
                id: id,
            }
        });

        return vehicle;
    }
}

export { RemoveVehicleService };
