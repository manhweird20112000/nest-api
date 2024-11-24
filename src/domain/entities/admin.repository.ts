export enum ERole {
  admin = 1,
  viewer
}

export class Admin {
  constructor(
    public readonly id: number,
    public readonly email: string,
    public readonly password: string,
    public readonly role: ERole,
    public readonly created_at: Date,
    public readonly updated_at: Date,
    public readonly delete_at: Date,
  ) {}
}
