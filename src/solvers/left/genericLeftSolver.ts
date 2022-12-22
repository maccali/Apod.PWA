import { IError } from "../IError";

export class GenericLeftSolver extends IError {
  static genericError(): IError {
    return new GenericLeftSolver({
      statusCode: 500,
      describe: {
        code: "GE-001",
        project: "APOD PICTU",
        message: "Generic Error",
        shortMessage: "genericError",
      },
    });
  }

  static dalle2Error(): IError {
    return new GenericLeftSolver({
      statusCode: 500,
      describe: {
        code: "DE-001",
        project: "APOD PICTU",
        message: "Dalle2 Error",
        shortMessage: "dalle2Error",
      },
    });
  }

  static chatGptError(cause?: any): IError {
    return new GenericLeftSolver({
      statusCode: 500,
      describe: {
        code: "CE-001",
        project: "APOD PICTU",
        message: "ChatGPT Request",
        shortMessage: "chatGptError",
      },
      result: cause,
    });
  }

  static notionError(cause?: any): IError {
    return new GenericLeftSolver({
      statusCode: 500,
      describe: {
        code: "NE-001",
        project: "APOD PICTU",
        message: "Notion Request",
        shortMessage: "notionError",
      },
      result: cause,
    });
  }

  static nasaError(cause?: any): IError {
    return new GenericLeftSolver({
      statusCode: 500,
      describe: {
        code: "NE-002",
        project: "APOD PICTU",
        message: "Nasa Request",
        shortMessage: "nasaError",
      },
      result: cause,
    });
  }
}
