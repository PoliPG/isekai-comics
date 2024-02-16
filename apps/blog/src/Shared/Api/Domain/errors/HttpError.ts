export class HttpError extends Error {
  private code: number

  constructor(message: string, code: number) {
    super(message)
    this.code = code
  }

  static createFromCode(code: number): HttpError {
    switch (code) {
      case 404:
        return new HttpError('Item not found.', code)
      default:
        return new HttpError(`Error with status code: ${code}`, code)
    }
  }
}
