import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

declare module 'express' {
  interface Request {
    parsedQuery?: Record<string, any>;
  }
}

@Injectable()
export class QueryParserMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const query = req.query;

    if (query.limit && typeof query.limit === 'string') {
      (query as any).limit = parseInt(query.limit,10);
    } else {
      query.limit = undefined;
    }

    if (query.offset && typeof query.offset === 'string') {
      (query as any).offset = parseInt(query.offset, 10);
    } else {
      query.offset = undefined;
    }

    req.parsedQuery = query;
    next();
  }
}
