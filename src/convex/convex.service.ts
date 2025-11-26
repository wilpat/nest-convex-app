import { Injectable } from '@nestjs/common';
import { ConvexHttpClient } from 'convex/browser';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

@Injectable()
export class ConvexService {
    public client: ConvexHttpClient;

    constructor() {
        const url = process.env.CONVEX_URL;
        if (!url) {
            throw new Error('CONVEX_URL is not defined');
        }
        this.client = new ConvexHttpClient(url);
    }
}