export abstract class IDatabaseAdapter {
  abstract getConnection<Connection>(model: { url: string }): Connection;
}
