// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Hello = {
	name: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Hello>
) {
	res.status(200).json({ name: "John Doe" });
}
