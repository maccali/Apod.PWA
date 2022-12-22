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

  static successRequest(result: any): ISuccess {
    const successRequest = new GenericRightSolver({
      statusCode: 200,
      describe: {
        code: "RS-001",
        project: "APOD PICTU",
        message: "Request Succesfully",
        shortMessage: "requestSuccesfully",
      },
      result,
    });
    return successRequest;
  }

  static rightNasaGetData(result: any): ISuccess {
    const rightNasaGetData = new GenericRightSolver({
      statusCode: 200,
      describe: {
        code: "NS-001",
        project: "APOD PICTU",
        message: "Get Data From Nasa Succesfully",
        shortMessage: "getDataFromNasaSuccesfully",
      },
      result,
    });
    return rightNasaGetData;
  }

  static rightDalle2GetData(result: any): ISuccess {
    const rightDalle2GetData = new GenericRightSolver({
      statusCode: 200,
      describe: {
        code: "DS-001",
        project: "APOD PICTU",
        message: "Get Data From Dalle2 Succesfully",
        shortMessage: "getDataFromDalle2Succesfully",
      },
      result,
    });
    return rightDalle2GetData;
  }

  static rightNotionGetData(result: any): ISuccess {
    const rightNotionGetData = new GenericRightSolver({
      statusCode: 200,
      describe: {
        code: "NS-002",
        project: "APOD PICTU",
        message: "Get Data From Notion Succesfully",
        shortMessage: "getDataFromNotionSuccesfully",
      },
      result,
    });
    return rightNotionGetData;
  }

  static rightNotionPutData(result: any): ISuccess {
    const rightNotionPutData = new GenericRightSolver({
      statusCode: 200,
      describe: {
        code: "NS-003",
        project: "APOD PICTU",
        message: "Put Data From Notion Succesfully",
        shortMessage: "putDataFromNotionSuccesfully",
      },
      result,
    });
    return rightNotionPutData;
  }

  static rightChatGPTGetData(result: any): ISuccess {
    const rightChatGPTGetData = new GenericRightSolver({
      statusCode: 200,
      describe: {
        code: "CS-001",
        project: "APOD PICTU",
        message: "Get Data From ChatGPT Succesfully",
        shortMessage: "getDataFromChatGPTSuccesfully",
      },
      result,
    });
    return rightChatGPTGetData;
  }
}
