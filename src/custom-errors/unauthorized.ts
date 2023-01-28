import { StatusCodes } from 'http-status-codes';
import { CustomApiError } from './api-error';

export class UnAuthorizedError extends CustomApiError {
  statusCode: number;
  constructor(public messsage: string) {
    super(messsage);
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
