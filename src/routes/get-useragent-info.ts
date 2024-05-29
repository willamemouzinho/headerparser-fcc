import type { Request, Response } from 'express'

export const getUserAgentInfo = async (req: Request, res: Response) => {
	try {
		const ipaddress = req.ip
		const language = req.headers['accept-language']
		const software = req.headers['user-agent']

		return res.status(200).json({
			ipaddress,
			language,
			software,
		})
	} catch (error) {
		console.error(error)
		return res.status(500).json({ message: 'internal server error' })
	}
}
