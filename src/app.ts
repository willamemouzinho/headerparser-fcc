import path from 'node:path'
import cors from 'cors'
import express, { type Request, type Response } from 'express'

import { getUserAgentInfo } from './routes/get-useragent-info'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/public', express.static(path.join(__dirname, '../public')))

app.get('/', (req: Request, res: Response) => {
	return res.status(200).sendFile(path.join(__dirname, '../views/index.html'))
})
app.get('/api/whoami', getUserAgentInfo)

const PORT = 3333
app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`)
})
