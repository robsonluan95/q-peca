import { Router, Response, Request } from 'express';

import { CreateCategoryController } from './controllers/category/CreateCategoryController';
import { ListCategoryController } from './controllers/category/ListCategoryController';
import { UpdateCategoryController } from './controllers/category/UpdateCategoryController';
import { RemoveCategoryController } from './controllers/category/RemoveCategoryController';

import { CreatePartController } from './controllers/part/CreatePartController';
import { ListPartsController } from './controllers/part/ListPartsController';
import { UpdatePartController } from './controllers/part/UpdatePartController';
import { RemovePartController } from './controllers/part/RemovePartController';

import { CreatePartApplicationController } from './controllers/partApplication/CreatePartApplicationController';
import { ListPartApplicationController } from './controllers/partApplication/ListPartApplicationController';
import { UpdatePartApplicationController } from './controllers/partApplication/UpdatePartApplicationController';
import { RemovePartApplicationController } from './controllers/partApplication/RemovePartApplicationController';

import { CreateStoreController } from './controllers/store/CreateStoreController';
import { ListStoreController } from './controllers/store/ListStoreController';
import { UpdateStoreController } from './controllers/store/UpdateStoreController';
import { RemoveStoreController } from './controllers/store/RemoveStoreController';

import { CreatePriceController } from './controllers/price/CreatePriceController';
import { ListPriceController } from './controllers/price/ListPriceController';
import { UpdatePriceController } from './controllers/price/UpdatePriceController';
import { RemovePriceController } from './controllers/price/RemovePriceController';

import { CreateVehicleController } from './controllers/vehicle/CreateVehicleController';
import { ListVehicleController } from './controllers/vehicle/ListVehicleController';
import { UpdateVehicleController } from './controllers/vehicle/UpdateVehicleController';
import { RemoveVehicleController } from './controllers/vehicle/RemoveVehicleController';

const router = Router();

// --- Categories ---
router.post('/category', new CreateCategoryController().handle);
router.get('/categories', new ListCategoryController().handle);
router.put('/category', new UpdateCategoryController().handle);
router.delete('/category', new RemoveCategoryController().handle);

// --- Parts ---
router.post('/part', new CreatePartController().handle);
router.get('/parts', new ListPartsController().handle);
router.put('/part', new UpdatePartController().handle);
router.delete('/part', new RemovePartController().handle);

// --- Part Applications (Compatibilidade) ---
router.post('/part/apply', new CreatePartApplicationController().handle);
router.get('/part/applications', new ListPartApplicationController().handle);
router.put('/part/apply', new UpdatePartApplicationController().handle);
router.delete('/part/apply', new RemovePartApplicationController().handle);

// --- Stores ---
router.post('/store', new CreateStoreController().handle);
router.get('/stores', new ListStoreController().handle);
router.put('/store', new UpdateStoreController().handle);
router.delete('/store', new RemoveStoreController().handle);

// --- Prices ---
router.post('/price', new CreatePriceController().handle);
router.get('/prices', new ListPriceController().handle);
router.put('/price', new UpdatePriceController().handle);
router.delete('/price', new RemovePriceController().handle);

// --- Vehicles ---
router.post('/vehicle', new CreateVehicleController().handle);
router.get('/vehicles', new ListVehicleController().handle);
router.put('/vehicle', new UpdateVehicleController().handle);
router.delete('/vehicle', new RemoveVehicleController().handle);




router.get('/teste', (req: Request, res: Response) => {
    res.json({ ok: true })
})

export { router }