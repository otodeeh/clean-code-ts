export class InvalidInUseError extends Error {
  constructor() {
    super(`The received email is already in use`)
    this.name = 'InvalidParamError'
  }
}
