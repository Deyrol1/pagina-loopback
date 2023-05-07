import { TokenService } from '@loopback/authentication';
import { Credentials } from '@loopback/authentication-jwt';
import { SchemaObject } from '@loopback/rest';
import { UserProfile } from '@loopback/security';
import { User } from '../models';
import { UserRepository } from '../repositories';
import { CustomUserService } from '../services';
export declare class NewUserRequest extends User {
    password: string;
}
export declare const CredentialsRequestBody: {
    description: string;
    required: boolean;
    content: {
        'application/json': {
            schema: SchemaObject;
        };
    };
};
export declare class UserController {
    jwtService: TokenService;
    userService: CustomUserService;
    user: UserProfile;
    protected userRepository: UserRepository;
    constructor(jwtService: TokenService, userService: CustomUserService, user: UserProfile, userRepository: UserRepository);
    login(credentials: Credentials): Promise<{
        userProfile: object;
        token: string;
    }>;
    whoAmI(currentUserProfile: UserProfile): Promise<string>;
    signUp(newUserRequest: NewUserRequest): Promise<User>;
}
