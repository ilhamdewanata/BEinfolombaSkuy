import express from 'express'
import uploadLombaRoute from './uploadLomba.route.js'

const router = express()

router.use(uploadLombaRoute)


export default router