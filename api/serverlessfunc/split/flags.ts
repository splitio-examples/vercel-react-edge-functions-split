// just a template taken from https://vercel.com/docs/concepts/functions/serverless-functions/quickstart
// "Other frameworks" example

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    response.status(200).json({
        body: request.body,
        op: "not implemented",
    });
}