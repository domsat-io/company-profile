// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  name?: string;
  error?: string; 
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { name } = req.query;

  try {
    if (typeof name === 'string') {
      res.status(200).json({ name });
    } else {
      throw new Error('Invalid name parameter');
    }
  } catch (error) {
    res.status(500).json({ error: error.message || 'Failed to fetch data' });
  }
}
