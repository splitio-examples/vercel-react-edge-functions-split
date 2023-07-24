import type { VercelRequest, VercelResponse } from '@vercel/node';

import { Timer, createTimer } from "../../../../util/utils"
import { getSplitFlagEdge } from "../../../../src/func/split"

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Request example: https://<HOST>/api/edge/split/flag/{flagname}

// Run this API route as a Serverless Function

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
) {
    // extract Split feature flag name from request url
    const flagname = request.query.flagname;

    let stopwatch: Timer = createTimer();

    const treatment = await getSplitFlagEdge(flagname, stopwatch);

    response.status(200).json({
        body: request.body,
        treatment,
        duration: stopwatch.duration(),
    });
}