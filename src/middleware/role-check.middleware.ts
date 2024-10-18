import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class RoleCheckMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        const role = req.headers['role'];
        if (!role) {
            throw new UnauthorizedException('Role header is missing');
        }
        next();
    }
}