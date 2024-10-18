import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,  // Load clientID from environment variables
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,  // Load clientSecret from environment variables
            callbackURL: 'http://localhost:3000/api/auth/callback/google',
            scope: ['email', 'profile'],
        });
    }

    async validate(accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        const { name, emails } = profile;
        const user = {
            email: emails[0].value,
            name: name.givenName + ' ' + name.familyName,
        };
        done(null, user);
    }
}