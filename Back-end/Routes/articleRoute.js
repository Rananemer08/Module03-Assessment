import { Router } from 'express';
const router = Router();


import { getAll, getById, create, deleteData,update } from '../controllers/articleController.js';
router.put('/:id',update);

router.get('/', getAll);
router.get('/:id', getById);
router.post('/', create);
router.delete('/:id',deleteData)


export default router;