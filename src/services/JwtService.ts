import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    
    const token = request.header('x-access-token'); 
    if (!token) {
      throw new UnauthorizedException('Token not provided');
    }

    try {
      const decoded = this.jwtService.verify(token);
      request['User'] = {
        Id: decoded.sub,
        username: decoded.username,
      };
      return true;
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
