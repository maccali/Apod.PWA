interface IDescribeBody {
  code: string;
  message: string;
  shortMessage: string;
  project: string;
  [index: string]: unknown;
}

interface IDataBody {
  items?: Array<unknown>;
  item?: unknown;
  [index: string]: unknown;
}

export class IError {
  statusCode: number;
  describe: IDescribeBody;
  result: IDataBody;

  constructor({
    statusCode,
    describe,
    result,
  }: {
    statusCode: number;
    describe: IDescribeBody;
    result?: IDataBody;
  }) {
    this.statusCode = statusCode;
    this.describe = describe;
    this.result = result;
  }
}
