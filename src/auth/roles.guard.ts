import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const request = context.switchToHttp().getRequest();
        const userRole = request.headers['role'];

        // For admin access, the role must be 'admin'
        if (userRole !== 'admin') {
            throw new ForbiddenException('Access denied: Admin role required');
        }
        return true;
    }
}