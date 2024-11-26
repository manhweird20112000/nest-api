export enum ERole {
  admin = 1,
  viewer,
}

export class Admin {
  public id: number;
  public email: string;
  public password: string;
  public role: ERole;
  public created_at?: Date;
  public updated_at?: Date;
  public delete_at?: Date;

  constructor(id: number, email: string, password: string, role: ERole) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.role = role;
    this.created_at = new Date();
  }
}
