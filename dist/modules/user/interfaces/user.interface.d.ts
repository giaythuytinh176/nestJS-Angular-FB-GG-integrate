import { Document } from 'mongoose';
export declare class IUser extends Document {
    method: string;
    local: {
        email: string;
        salt: string;
        hashedPassword: string;
    };
    facebook: {
        id: string;
        email: string;
        displayName: string;
        token: string;
    };
    google: {
        id: string;
        email: string;
        displayName: string;
        token: string;
    };
}
