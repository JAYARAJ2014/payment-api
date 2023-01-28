import { StatusCodes } from 'http-status-codes';
import { CustomApiError } from './api-error';

export class NotFoundError extends CustomApiError {
  statusCode: number;
  constructor(public messsage: string) {
    super(messsage);
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
