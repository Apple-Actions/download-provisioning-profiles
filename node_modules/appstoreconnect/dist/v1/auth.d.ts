import jwt from 'jsonwebtoken'
export declare function token(
    privateKey: jwt.Secret,
    issuerId: string,
    keyId: string
): string
export declare function tokenAsync(
    privateKey: jwt.Secret,
    issuerId: string,
    keyId: string
): Promise<string>
