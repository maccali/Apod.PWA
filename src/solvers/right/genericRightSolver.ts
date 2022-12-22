import { ISuccess } from "../ISuccess";

export class GenericRightSolver extends ISuccess {
  static successValidation(): ISuccess {
    const successValidation = new GenericRightSolver({
      statusCode: 200,
      describe: {
        code: "VS-001",
        project: "APOD PICTU",
        message: "Validation Succesfully",
        shortMessage: "validationSuccesfully",
      },
    });
    return successValidation;
  }
  static successRequest(): ISuccess {
    const successRequest = new GenericRightSolver({
      statusCode: 200,
      describe: {
        code: "RS-001",
        project: "APOD PICTU",
        message: "Request Succesfully",
        shortMessage: "requestSuccesfully",
      },
    });
    return successRequest;
  }
}
