export class ResponnseError extends Error {
  constructor(public status: number, public message: string) {
    super(message);
  }
}
