export abstract class IAdapterSecret {
  APP_NAME: string;
  APP_PORT: number;

  MYSQL_URI: string;

  JWT_SECRET: string;
  TOKEN_EXPIRATION: string;
}
