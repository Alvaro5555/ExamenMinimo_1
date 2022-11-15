import FAQsController from '../controller/FAQsController';
import { Router } from 'express';

const router = Router();

router.post('/FAQ', FAQsController.newFAQ);
router.get('/', FAQsController.getallFAQs);
router.get('/:id', FAQsController.getOneFAQ);
router.put('update/:id', FAQsController.updateFAQ);
router.delete('/delete/:id', FAQsController.deleteFAQ);

export default router;