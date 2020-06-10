/* eslint-disable */
import { IntuitEntity, NameValue } from './IntuitBaseTypes';

export class IntuitRestServiceDef {
  public warnings: Warnings;
  public warning: Warning;
  public error: Error;
  public fault: Fault;
  public intuitResponse: IntuitResponse;
  public queryResponse: QueryResponse;
  public cDCResponse: CDCResponse;
  public batchItemResponse: BatchItemResponse;
  public batchItemRequest: BatchItemRequest;
  public cDCQuery: CDCQuery;
  public intuitBatchRequest: IntuitBatchRequest;
  public attachableResponse: AttachableResponse;
  public status: Status;
  public syncActivity: SyncActivity;
  public syncErrorResponse: SyncErrorResponse;
  public syncError: SyncError;
  public syncObject: SyncObject;
  public cascade: Cascade;
  public cascadeResponse: CascadeResponse;
  public faultTypeEnum: FaultTypeEnum;
  public operationEnum: OperationEnum;
  public syncType: SyncType;
  public syncErrorType: SyncErrorType;

  public constructor(props?: IntuitRestServiceDef) {
    this['@class'] = '.IntuitRestServiceDef';

    Object.assign(this, props as any);
  }
}

export class Warnings {
  public Warning?: Warning;

  public constructor(props?: Warnings) {
    this['@class'] = '.Warnings';

    Object.assign(this, props as any);
  }
}

export class Warning {
  public Message: string;
  public Detail?: string;

  public constructor(props?: Warning) {
    this['@class'] = '.Warning';

    Object.assign(this, props as any);
  }
}

export class Error {
  public Message?: string;
  public Detail?: string;
  public DetailLink?: string;

  public constructor(props?: Error) {
    this['@class'] = '.Error';

    Object.assign(this, props as any);
  }
}

export class Fault {
  public Error?: Error;

  public constructor(props?: Fault) {
    this['@class'] = '.Fault';

    Object.assign(this, props as any);
  }
}

export class IntuitResponse {
  public Warnings?: Warnings;

  public constructor(props?: IntuitResponse) {
    this['@class'] = '.IntuitResponse';

    Object.assign(this, props as any);
  }
}

export class QueryResponse {
  public Warnings?: Warnings;

  public constructor(props?: QueryResponse) {
    this['@class'] = '.QueryResponse';

    Object.assign(this, props as any);
  }
}

export class CDCResponse {
  public constructor(props?: CDCResponse) {
    this['@class'] = '.CDCResponse';

    Object.assign(this, props as any);
  }
}

export class BatchItemResponse {
  public Warnings?: Warnings;

  public constructor(props?: BatchItemResponse) {
    this['@class'] = '.BatchItemResponse';

    Object.assign(this, props as any);
  }
}

export class BatchItemRequest {
  public constructor(props?: BatchItemRequest) {
    this['@class'] = '.BatchItemRequest';

    Object.assign(this, props as any);
  }
}

export class CDCQuery {
  public Entities?: string;
  public ChangedSince?: Date;

  public constructor(props?: CDCQuery) {
    this['@class'] = '.CDCQuery';

    Object.assign(this, props as any);
  }
}

export class IntuitBatchRequest {
  public BatchItemRequest: BatchItemRequest;

  public constructor(props?: IntuitBatchRequest) {
    this['@class'] = '.IntuitBatchRequest';

    Object.assign(this, props as any);
  }
}

export class AttachableResponse {
  public constructor(props?: AttachableResponse) {
    this['@class'] = '.AttachableResponse';

    Object.assign(this, props as any);
  }
}

export class SyncErrorResponse {
  public SyncError?: SyncError;

  public constructor(props?: SyncErrorResponse) {
    this['@class'] = '.SyncErrorResponse';

    Object.assign(this, props as any);
  }
}

export class SyncError {
  public Error?: Error;
  public CloudVersion?: SyncObject;
  public QBVersion?: SyncObject;

  public constructor(props?: SyncError) {
    this['@class'] = '.SyncError';

    Object.assign(this, props as any);
  }
}

export class SyncObject {
  public constructor(props?: SyncObject) {
    this['@class'] = '.SyncObject';

    Object.assign(this, props as any);
  }
}

export class Cascade {
  public EntityName: string;
  public Id: number;
  public KeyValue?: NameValue;

  public constructor(props?: Cascade) {
    this['@class'] = '.Cascade';

    Object.assign(this, props as any);
  }
}

export class CascadeResponse {
  public Cascade?: Cascade;

  public constructor(props?: CascadeResponse) {
    this['@class'] = '.CascadeResponse';

    Object.assign(this, props as any);
  }
}

export class Status extends IntuitEntity {
  public RequestId?: string;
  public BatchId?: string;
  public ObjectType: string;
  public StateCode?: string;
  public StateDesc?: string;
  public MessageCode?: string;
  public MessageDesc?: string;

  public constructor(props?: Status) {
    super();

    this['@class'] = '.Status';

    Object.assign(this, props as any);
  }
}

export class SyncActivity extends IntuitEntity {
  public LatestUploadDateTime?: Date;
  public LatestWriteBackDateTime?: Date;
  public SyncType?: SyncType;
  public StartSyncTMS?: Date;
  public EndSyncTMS?: Date;
  public EntityName?: string;
  public EntityRowCount?: number;

  public constructor(props?: SyncActivity) {
    super();

    this['@class'] = '.SyncActivity';

    Object.assign(this, props as any);
  }
}

enum FaultTypeEnum {
  AuthenticationFault = 'AuthenticationFault',
  AuthorizatonFault = 'AuthorizatonFault',
  ValidationFault = 'ValidationFault',
  SystemFault = 'SystemFault'
}

enum OperationEnum {
  create = 'create',
  update = 'update',
  revert = 'revert',
  delete = 'delete',
  void = 'void',
  send = 'send'
}

enum SyncType {
  Upload = 'Upload',
  Writeback = 'Writeback'
}

enum SyncErrorType {
  OutOfSync = 'OutOfSync',
  BusinessLogic = 'BusinessLogic',
  SystemError = 'SystemError'
}
