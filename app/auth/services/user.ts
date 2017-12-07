export class RegisterData {
    public email: string;
    public password: string;
    public password2: string;

    constructor(email?: string, password?: string, password2?: string) {
        this.email = email || null;
        this.password = password || null;
        this.password2 = password2 || null;
    }
}

export class LoginData {
    public email: string;
    public password: string;

    constructor(email?: string, password?: string) {
        this.email = email || null;
        this.password = password || null;
    }
}