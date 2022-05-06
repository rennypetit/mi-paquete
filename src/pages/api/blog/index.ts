import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
	message: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	try {
		const data = await require(`./posts/${req.query.post}`);
		return res.status(200).json(data);
	} catch (error: any) {
		if (error.code === 'MODULE_NOT_FOUND')
			return res.status(404).json({ message: 'Post Not Found' });
		return res.status(503).json({ message: 'Server error' });
	}
}
