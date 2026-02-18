import prismaClient from "../../prisma";

interface VehicleRequest {
    id: string;
    make: string;
    model: string;
    yearStart: number;
    yearEnd?: number;
}

class UpdateVehicleService {
    async execute({ id, make, model, yearStart, yearEnd }: VehicleRequest) {
        const vehicle = await prismaClient.vehicle.update({
            where: {
                id: id,
            },
            data: {
                make,
                model,
                yearStart,
                yearEnd,
            }
        });

        return vehicle;
    }
}

export { UpdateVehicleService };
