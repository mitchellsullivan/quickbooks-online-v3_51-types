/***********
generated template classes for ./src/xsd/IntuitRestServiceDef.xsd 6/10/2020, 11:36:42 AM
***********/





import * as xmlns from "";

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
        this["@class"] = ".IntuitRestServiceDef";

        (<any>Object).assign(this, <any> props);
    }
}

export class Warnings {
    public Warning?: xmlns.Warning;

    public constructor(props?: Warnings) {
        this["@class"] = ".Warnings";

        (<any>Object).assign(this, <any> props);
    }
}

export class Warning {
    public Message: string;
    public Detail?: string;

    public constructor(props?: Warning) {
        this["@class"] = ".Warning";

        (<any>Object).assign(this, <any> props);
    }
}

export class Error {
    public Message?: string;
    public Detail?: string;
    public DetailLink?: string;

    public constructor(props?: Error) {
        this["@class"] = ".Error";

        (<any>Object).assign(this, <any> props);
    }
}

export class Fault {
    public Error?: xmlns.Error;

    public constructor(props?: Fault) {
        this["@class"] = ".Fault";

        (<any>Object).assign(this, <any> props);
    }
}

export class IntuitResponse {
    public Warnings?: Warnings;

    public constructor(props?: IntuitResponse) {
        this["@class"] = ".IntuitResponse";

        (<any>Object).assign(this, <any> props);
    }
}

export class QueryResponse {
    public Warnings?: Warnings;

    public constructor(props?: QueryResponse) {
        this["@class"] = ".QueryResponse";

        (<any>Object).assign(this, <any> props);
    }
}

export class CDCResponse {
    public constructor(props?: CDCResponse) {
        this["@class"] = ".CDCResponse";

        (<any>Object).assign(this, <any> props);
    }
}

export class BatchItemResponse {
    public Warnings?: Warnings;

    public constructor(props?: BatchItemResponse) {
        this["@class"] = ".BatchItemResponse";

        (<any>Object).assign(this, <any> props);
    }
}

export class BatchItemRequest {
    public constructor(props?: BatchItemRequest) {
        this["@class"] = ".BatchItemRequest";

        (<any>Object).assign(this, <any> props);
    }
}

export class CDCQuery {
    public Entities?: string;
    public ChangedSince?: Date;

    public constructor(props?: CDCQuery) {
        this["@class"] = ".CDCQuery";

        (<any>Object).assign(this, <any> props);
    }
}

export class IntuitBatchRequest {
    public BatchItemRequest: xmlns.BatchItemRequest;

    public constructor(props?: IntuitBatchRequest) {
        this["@class"] = ".IntuitBatchRequest";

        (<any>Object).assign(this, <any> props);
    }
}

export class AttachableResponse {
    public constructor(props?: AttachableResponse) {
        this["@class"] = ".AttachableResponse";

        (<any>Object).assign(this, <any> props);
    }
}

export class SyncErrorResponse {
    public SyncError?: xmlns.SyncError;

    public constructor(props?: SyncErrorResponse) {
        this["@class"] = ".SyncErrorResponse";

        (<any>Object).assign(this, <any> props);
    }
}

export class SyncError {
    public Error?: Error;
    public CloudVersion?: SyncObject;
    public QBVersion?: SyncObject;

    public constructor(props?: SyncError) {
        this["@class"] = ".SyncError";

        (<any>Object).assign(this, <any> props);
    }
}

export class SyncObject {
    public constructor(props?: SyncObject) {
        this["@class"] = ".SyncObject";

        (<any>Object).assign(this, <any> props);
    }
}

export class Cascade {
    public EntityName: string;
    public Id: xmlns.id;
    public KeyValue?: xmlns.NameValue;

    public constructor(props?: Cascade) {
        this["@class"] = ".Cascade";

        (<any>Object).assign(this, <any> props);
    }
}

export class CascadeResponse {
    public Cascade?: xmlns.Cascade;

    public constructor(props?: CascadeResponse) {
        this["@class"] = ".CascadeResponse";

        (<any>Object).assign(this, <any> props);
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

        this["@class"] = ".Status";

        (<any>Object).assign(this, <any> props);
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

        this["@class"] = ".SyncActivity";

        (<any>Object).assign(this, <any> props);
    }
}

enum FaultTypeEnum {
    AuthenticationFault = "AuthenticationFault",
    AuthorizatonFault = "AuthorizatonFault",
    ValidationFault = "ValidationFault",
    SystemFault = "SystemFault"
}

enum OperationEnum {
    create = "create",
    update = "update",
    revert = "revert",
    delete = "delete",
    void = "void",
    send = "send"
}

enum SyncType {
    Upload = "Upload",
    Writeback = "Writeback"
}

enum SyncErrorType {
    OutOfSync = "OutOfSync",
    BusinessLogic = "BusinessLogic",
    SystemError = "SystemError"
}
