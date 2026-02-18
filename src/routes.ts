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

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { ApprovePartApplicationController } from './controllers/partApplication/ApprovePartApplicationController';

import { isAuthenticated } from './middlewares/isAuthenticated';
import { isAdmin } from './middlewares/isAdmin';

const router = Router();

// --- Users & Session ---
router.post('/users', new CreateUserController().handle);
router.post('/session', new AuthUserController().handle);

// --- Categories ---
router.post('/category', isAuthenticated, isAdmin, new CreateCategoryController().handle);
router.get('/categories', new ListCategoryController().handle);
router.put('/category', isAuthenticated, isAdmin, new UpdateCategoryController().handle);
router.delete('/category', isAuthenticated, isAdmin, new RemoveCategoryController().handle);

// --- Parts ---
router.post('/part', isAuthenticated, isAdmin, new CreatePartController().handle);
router.get('/parts', new ListPartsController().handle);
router.put('/part', isAuthenticated, isAdmin, new UpdatePartController().handle);
router.delete('/part', isAuthenticated, isAdmin, new RemovePartController().handle);

// --- Part Applications (Compatibilidade) ---
router.post('/part/apply', isAuthenticated, new CreatePartApplicationController().handle);
router.get('/part/applications', new ListPartApplicationController().handle);
router.put('/part/apply', isAuthenticated, isAdmin, new UpdatePartApplicationController().handle);
router.delete('/part/apply', isAuthenticated, isAdmin, new RemovePartApplicationController().handle);
router.patch('/part/approve', isAuthenticated, isAdmin, new ApprovePartApplicationController().handle);

// --- Stores ---
router.post('/store', isAuthenticated, isAdmin, new CreateStoreController().handle);
router.get('/stores', new ListStoreController().handle);
router.put('/store', isAuthenticated, isAdmin, new UpdateStoreController().handle);
router.delete('/store', isAuthenticated, isAdmin, new RemoveStoreController().handle);

// --- Prices ---
router.post('/price', isAuthenticated, isAdmin, new CreatePriceController().handle);
router.get('/prices', new ListPriceController().handle);
router.put('/price', isAuthenticated, isAdmin, new UpdatePriceController().handle);
router.delete('/price', isAuthenticated, isAdmin, new RemovePriceController().handle);

// --- Vehicles ---
router.post('/vehicle', isAuthenticated, isAdmin, new CreateVehicleController().handle);
router.get('/vehicles', new ListVehicleController().handle);
router.put('/vehicle', isAuthenticated, isAdmin, new UpdateVehicleController().handle);
router.delete('/vehicle', isAuthenticated, isAdmin, new RemoveVehicleController().handle);




router.get('/teste', (req: Request, res: Response) => {
    res.json({ ok: true })
})

export { router }