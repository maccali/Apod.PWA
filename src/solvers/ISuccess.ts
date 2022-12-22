interface IMeta {
  meta: {
    lastItemKey?: string
    lastTime?: number
    firstItemKey: string
    LIMIT: string
  }
}
interface ISuccessBody {
  code?: string
  shortMessage?: string
  message?: string
  items?: Array<unknown>
  item?: unknown
  meta?: IMeta
  [index: string]: unknown
}

interface IDecribeBody {
  code: string
  message: string
  shortMessage: string
  project: string
}

export class ISuccess {
  statusCode: number
  result: ISuccessBody
  describe: IDecribeBody
  meta?: IMeta
  patients?: any

  constructor({
    statusCode,
    result,
    describe,
    meta,
    patients
  }: {
    statusCode: number
    result?: ISuccessBody
    describe: IDecribeBody
    meta?: IMeta
    patients?: any
  }) {
    this.statusCode = statusCode
    this.describe = describe
    this.meta = meta
    this.patients = patients
    this.result = result
  }
}