import prismaClient from "../../prisma";

interface VehicleRequest {
    make: string;
    model: string;
    yearStart: number;
    yearEnd?: number;
}

class CreateVehicleService {
    async execute({ make, model, yearStart, yearEnd }: VehicleRequest) {
        if (!make || !model || !yearStart) {
            throw new Error("Missing required fields");
        }

        const vehicle = await prismaClient.vehicle.create({
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

export { CreateVehicleService };
