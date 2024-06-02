import express from 'express'
import { deleteDataLomba, getDataLomba, getDataLombaById, insertDataLomba, updateDataLomba } from '../controller/uploadLombaCntrl.js'

const router = express.Router()

router.get('/uploadlomba', getDataLomba)
router.get('/uploadlomba/:id', getDataLombaById)
router.post('/uploadlomba', insertDataLomba)
router.put('/uploadlomba/:id', updateDataLomba)
router.delete('/uploadlomba/:id', deleteDataLomba)


export default router