/***********
generated template classes for ./src/xsd/IntuitBaseTypes.xsd 6/10/2020, 11:36:42 AM
***********/





import * as xmlns from "";
import * as xs from "";

export class IntuitBaseTypes {
    public intuitEntity: IntuitEntity;
    public customField: CustomField;
    public attachableRef: AttachableRef;
    public customFieldDefinition: CustomFieldDefinition;
    public stringTypeCustomFieldDefinition: StringTypeCustomFieldDefinition;
    public numberTypeCustomFieldDefinition: NumberTypeCustomFieldDefinition;
    public dateTypeCustomFieldDefinition: DateTypeCustomFieldDefinition;
    public booleanTypeCustomFieldDefinition: BooleanTypeCustomFieldDefinition;
    public nameValue: NameValue;
    public modificationMetaData: ModificationMetaData;
    public money: Money;
    public contactInfo: ContactInfo;
    public physicalAddress: PhysicalAddress;
    public telephoneNumber: TelephoneNumber;
    public emailAddress: EmailAddress;
    public emailMessage: EmailMessage;
    public transactionDeliveryInfo: TransactionDeliveryInfo;
    public genericContactType: GenericContactType;
    public webSiteAddress: WebSiteAddress;
    public intuitAnyType: IntuitAnyType;
    public creditChargeInfo: CreditChargeInfo;
    public creditChargeResponse: CreditChargeResponse;
    public referenceType: ReferenceType;
    public contactTypeEnum: ContactTypeEnum;
    public deliveryTypeEnum: DeliveryTypeEnum;
    public deliveryErrorTypeEnum: DeliveryErrorTypeEnum;
    public externalKey: ExternalKey;
    public idType: IdType;
    public id: id;
    public syncToken: syncToken;
    public emailAddressTypeEnum: EmailAddressTypeEnum;
    public physicalAddressTypeEnum: PhysicalAddressTypeEnum;
    public telephoneNumberTypeEnum: TelephoneNumberTypeEnum;
    public telephoneDeviceTypeEnum: TelephoneDeviceTypeEnum;
    public gender: gender;
    public cCSecurityCodeMatchEnum: CCSecurityCodeMatchEnum;
    public cCAVSMatchEnum: CCAVSMatchEnum;
    public cCPaymentStatusEnum: CCPaymentStatusEnum;
    public cCTxnModeEnum: CCTxnModeEnum;
    public cCTxnTypeEnum: CCTxnTypeEnum;
    public creditCardTypeEnum: CreditCardTypeEnum;
    public customFieldTypeEnum: CustomFieldTypeEnum;
    public entityStatusEnum: EntityStatusEnum;
    public currencyCode: currencyCode;
    public idDomainEnum: idDomainEnum;
    public objectNameEnumType: objectNameEnumType;
    public reportBasisEnum: ReportBasisEnum;

    public constructor(props?: IntuitBaseTypes) {
        this["@class"] = ".IntuitBaseTypes";

        (<any>Object).assign(this, <any> props);
    }
}

export class IntuitEntity {
    public Id?: id;
    public SyncToken?: string;
    public MetaData?: ModificationMetaData;
    public CustomField?: xmlns.CustomField;
    public AttachableRef?: xmlns.AttachableRef;

    public constructor(props?: IntuitEntity) {
        this["@class"] = ".IntuitEntity";

        (<any>Object).assign(this, <any> props);
    }
}

export class CustomField {
    public DefinitionId?: id;
    public Name?: string;
    public Type: CustomFieldTypeEnum;

    public constructor(props?: CustomField) {
        this["@class"] = ".CustomField";

        (<any>Object).assign(this, <any> props);
    }
}

export class AttachableRef {
    public EntityRef?: ReferenceType;
    public LineInfo?: id;
    public IncludeOnSend?: boolean;
    public CustomField?: xmlns.CustomField;
    public AttachableRefEx?: IntuitAnyType;

    public constructor(props?: AttachableRef) {
        this["@class"] = ".AttachableRef";

        (<any>Object).assign(this, <any> props);
    }
}

export class NameValue {
    public Name?: string;
    public Value?: string;

    public constructor(props?: NameValue) {
        this["@class"] = ".NameValue";

        (<any>Object).assign(this, <any> props);
    }
}

export class ModificationMetaData {
    public CreatedByRef?: ReferenceType;
    public CreateTime?: Date;
    public LastModifiedByRef?: ReferenceType;
    public LastUpdatedTime?: Date;
    public LastChangedInQB?: Date;
    public Synchronized?: boolean;

    public constructor(props?: ModificationMetaData) {
        this["@class"] = ".ModificationMetaData";

        (<any>Object).assign(this, <any> props);
    }
}

export class Money {
    public CurCode?: string;
    public Amount?: xs.decimal;

    public constructor(props?: Money) {
        this["@class"] = ".Money";

        (<any>Object).assign(this, <any> props);
    }
}

export class ContactInfo {
    public Type?: ContactTypeEnum;

    public constructor(props?: ContactInfo) {
        this["@class"] = ".ContactInfo";

        (<any>Object).assign(this, <any> props);
    }
}

export class PhysicalAddress {
    public Id?: id;
    public Line1?: string;
    public Line2?: string;
    public Line3?: string;
    public Line4?: string;
    public Line5?: string;
    public City?: string;
    public Country?: string;
    public CountryCode?: string;
    public County?: string;
    public CountrySubDivisionCode?: string;
    public PostalCode?: string;
    public PostalCodeSuffix?: string;
    public Lat?: string;
    public Long?: string;
    public Tag?: string;
    public Note?: string;

    public constructor(props?: PhysicalAddress) {
        this["@class"] = ".PhysicalAddress";

        (<any>Object).assign(this, <any> props);
    }
}

export class TelephoneNumber {
    public Id?: id;
    public DeviceType?: string;
    public CountryCode?: string;
    public AreaCode?: string;
    public ExchangeCode?: string;
    public Extension?: string;
    public FreeFormNumber?: string;
    public Default?: boolean;
    public Tag?: string;

    public constructor(props?: TelephoneNumber) {
        this["@class"] = ".TelephoneNumber";

        (<any>Object).assign(this, <any> props);
    }
}

export class EmailAddress {
    public Id?: id;
    public Address?: string;
    public Default?: boolean;
    public Tag?: string;

    public constructor(props?: EmailAddress) {
        this["@class"] = ".EmailAddress";

        (<any>Object).assign(this, <any> props);
    }
}

export class EmailMessage {
    public Subject?: string;
    public Message?: string;

    public constructor(props?: EmailMessage) {
        this["@class"] = ".EmailMessage";

        (<any>Object).assign(this, <any> props);
    }
}

export class TransactionDeliveryInfo {
    public DeliveryType?: DeliveryTypeEnum;
    public DeliveryTime?: Date;
    public DeliveryErrorType?: DeliveryErrorTypeEnum;

    public constructor(props?: TransactionDeliveryInfo) {
        this["@class"] = ".TransactionDeliveryInfo";

        (<any>Object).assign(this, <any> props);
    }
}

export class GenericContactType {
    public Id?: id;
    public Name?: string;
    public Value?: string;
    public Type?: string;
    public Default?: boolean;
    public Tag?: string;

    public constructor(props?: GenericContactType) {
        this["@class"] = ".GenericContactType";

        (<any>Object).assign(this, <any> props);
    }
}

export class WebSiteAddress {
    public Id?: id;
    public URI?: xs.anyURI;
    public Default?: boolean;
    public Tag?: string;

    public constructor(props?: WebSiteAddress) {
        this["@class"] = ".WebSiteAddress";

        (<any>Object).assign(this, <any> props);
    }
}

export class IntuitAnyType {
    public constructor(props?: IntuitAnyType) {
        this["@class"] = ".IntuitAnyType";

        (<any>Object).assign(this, <any> props);
    }
}

export class CreditChargeInfo {
    public Number?: string;
    public Type?: string;
    public NameOnAcct?: string;
    public CcExpiryMonth?: number;
    public CcExpiryYear?: number;
    public BillAddrStreet?: string;
    public PostalCode?: string;
    public CommercialCardCode?: string;
    public CCTxnMode?: CCTxnModeEnum;
    public CCTxnType?: CCTxnTypeEnum;
    public PrevCCTransId?: string;
    public Amount?: xs.decimal;
    public ProcessPayment?: boolean;
    public CreditCardChargeInfoEx?: IntuitAnyType;

    public constructor(props?: CreditChargeInfo) {
        this["@class"] = ".CreditChargeInfo";

        (<any>Object).assign(this, <any> props);
    }
}

export class CreditChargeResponse {
    public CCProcessor?: string;
    public CCTransId?: string;
    public Status?: CCPaymentStatusEnum;
    public ResultCode?: number;
    public ResultMsg?: string;
    public MerchantAcctNum?: string;
    public CardSecurityCodeMatch?: CCSecurityCodeMatchEnum;
    public AuthCode?: string;
    public AvsStreet?: CCAVSMatchEnum;
    public AvsZip?: CCAVSMatchEnum;
    public SecurityCode?: string;
    public ReconBatchId?: string;
    public PaymentGroupingCode?: number;
    public TxnAuthorizationTime?: Date;
    public TxnAuthorizationStamp?: number;
    public ClientTransID?: string;
    public CreditChargeResponseEx?: IntuitAnyType;

    public constructor(props?: CreditChargeResponse) {
        this["@class"] = ".CreditChargeResponse";

        (<any>Object).assign(this, <any> props);
    }
}

export class ReferenceType {
    public constructor(props?: ReferenceType) {
        this["@class"] = ".ReferenceType";

        (<any>Object).assign(this, <any> props);
    }
}

export class CustomFieldDefinition extends IntuitEntity {
    public EntityType?: string;
    public Name?: string;
    public Hidden?: boolean;
    public Required?: boolean;
    public AppId?: string;

    public constructor(props?: CustomFieldDefinition) {
        super();

        this["@class"] = ".CustomFieldDefinition";

        (<any>Object).assign(this, <any> props);
    }
}

export class StringTypeCustomFieldDefinition extends CustomFieldDefinition {
    public DefaultString?: string;
    public RegularExpression?: string;
    public MaxLength?: number;

    public constructor(props?: StringTypeCustomFieldDefinition) {
        super();

        this["@class"] = ".StringTypeCustomFieldDefinition";

        (<any>Object).assign(this, <any> props);
    }
}

export class NumberTypeCustomFieldDefinition extends CustomFieldDefinition {
    public DefaultValue?: xs.decimal;
    public MinValue?: xs.decimal;
    public MaxValue?: xs.decimal;

    public constructor(props?: NumberTypeCustomFieldDefinition) {
        super();

        this["@class"] = ".NumberTypeCustomFieldDefinition";

        (<any>Object).assign(this, <any> props);
    }
}

export class DateTypeCustomFieldDefinition extends CustomFieldDefinition {
    public DefaultDate?: Date;
    public MinDate?: Date;
    public MaxDate?: Date;

    public constructor(props?: DateTypeCustomFieldDefinition) {
        super();

        this["@class"] = ".DateTypeCustomFieldDefinition";

        (<any>Object).assign(this, <any> props);
    }
}

export class BooleanTypeCustomFieldDefinition extends CustomFieldDefinition {
    public DefaultValue?: boolean;

    public constructor(props?: BooleanTypeCustomFieldDefinition) {
        super();

        this["@class"] = ".BooleanTypeCustomFieldDefinition";

        (<any>Object).assign(this, <any> props);
    }
}

enum ContactTypeEnum {
    TelephoneNumber = "TelephoneNumber",
    EmailAddress = "EmailAddress",
    WebSiteAddress = "WebSiteAddress",
    GenericContactType = "GenericContactType"
}

enum DeliveryTypeEnum {
    Email = "Email",
    Tradeshift = "Tradeshift"
}

enum DeliveryErrorTypeEnum {
    Missing Info = "Missing Info",
    Undeliverable = "Undeliverable",
    Delivery Server Down = "Delivery Server Down",
    Bounced Email = "Bounced Email"
}

enum ExternalKey {
}

enum IdType {
}

enum id {
}

enum syncToken {
}

enum EmailAddressTypeEnum {
    Primary = "Primary",
    CC = "CC"
}

enum PhysicalAddressTypeEnum {
    Billing = "Billing",
    Shipping = "Shipping"
}

enum TelephoneNumberTypeEnum {
    Business = "Business",
    Fax = "Fax",
    Home = "Home",
    Mobile = "Mobile",
    Pager = "Pager",
    Primary = "Primary",
    Secondary = "Secondary",
    Other = "Other"
}

enum TelephoneDeviceTypeEnum {
    LandLine = "LandLine",
    Mobile = "Mobile",
    Fax = "Fax",
    Pager = "Pager"
}

enum gender {
    Male = "Male",
    Female = "Female"
}

enum CCSecurityCodeMatchEnum {
    Fail = "Fail",
    NotAvailable = "NotAvailable",
    Pass = "Pass"
}

enum CCAVSMatchEnum {
    Fail = "Fail",
    NotAvailable = "NotAvailable",
    Pass = "Pass"
}

enum CCPaymentStatusEnum {
    Completed = "Completed",
    Voided = "Voided",
    Unknown = "Unknown"
}

enum CCTxnModeEnum {
    CardNotPresent = "CardNotPresent",
    CardPresent = "CardPresent"
}

enum CCTxnTypeEnum {
    Authorization = "Authorization",
    Capture = "Capture",
    Charge = "Charge",
    Refund = "Refund",
    VoiceAuthorization = "VoiceAuthorization"
}

enum CreditCardTypeEnum {
    AmEx = "AmEx",
    DebitCard = "DebitCard",
    Discover = "Discover",
    GiftCard = "GiftCard",
    MasterCard = "MasterCard",
    OtherCreditCard = "OtherCreditCard",
    Visa = "Visa"
}

enum CustomFieldTypeEnum {
    StringType = "StringType",
    BooleanType = "BooleanType",
    NumberType = "NumberType",
    DateType = "DateType"
}

enum EntityStatusEnum {
    Deleted = "Deleted",
    Voided = "Voided",
    Draft = "Draft",
    Pending = "Pending",
    InTransit = "InTransit",
    Synchronized = "Synchronized",
    SyncError = "SyncError"
}

enum currencyCode {
    AED = "AED",
    AFA = "AFA",
    ALL = "ALL",
    ANG = "ANG",
    AOA = "AOA",
    AOK = "AOK",
    ARP = "ARP",
    ARS = "ARS",
    AMD = "AMD",
    ATS = "ATS",
    AUD = "AUD",
    AWF = "AWF",
    AWG = "AWG",
    AZM = "AZM",
    BAM = "BAM",
    BBD = "BBD",
    BDT = "BDT",
    BEF = "BEF",
    BGL = "BGL",
    BHD = "BHD",
    BIF = "BIF",
    BMD = "BMD",
    BND = "BND",
    BOB = "BOB",
    BRC = "BRC",
    BRL = "BRL",
    BSD = "BSD",
    BTN = "BTN",
    BUK = "BUK",
    BWP = "BWP",
    BYR = "BYR",
    BYB = "BYB",
    BZD = "BZD",
    CAD = "CAD",
    CDF = "CDF",
    CHF = "CHF",
    CLP = "CLP",
    CNY = "CNY",
    COP = "COP",
    CRC = "CRC",
    CZK = "CZK",
    CUP = "CUP",
    CVE = "CVE",
    DDM = "DDM",
    DEM = "DEM",
    DJF = "DJF",
    DKK = "DKK",
    DOP = "DOP",
    DZD = "DZD",
    ECS = "ECS",
    EEK = "EEK",
    EGP = "EGP",
    ERN = "ERN",
    ESP = "ESP",
    ETB = "ETB",
    EUR = "EUR",
    FIM = "FIM",
    FJD = "FJD",
    FKP = "FKP",
    FRF = "FRF",
    GBP = "GBP",
    GEL = "GEL",
    GHC = "GHC",
    GIP = "GIP",
    GMD = "GMD",
    GNF = "GNF",
    GRD = "GRD",
    GTQ = "GTQ",
    GWP = "GWP",
    GYD = "GYD",
    HKD = "HKD",
    HNL = "HNL",
    HRK = "HRK",
    HTG = "HTG",
    HUF = "HUF",
    IDR = "IDR",
    IEP = "IEP",
    ILS = "ILS",
    INR = "INR",
    IQD = "IQD",
    IRR = "IRR",
    ISK = "ISK",
    ITL = "ITL",
    JMD = "JMD",
    JOD = "JOD",
    KES = "KES",
    KGS = "KGS",
    KHR = "KHR",
    KMF = "KMF",
    KPW = "KPW",
    KRW = "KRW",
    KWD = "KWD",
    KYD = "KYD",
    KZT = "KZT",
    LAK = "LAK",
    LBP = "LBP",
    LKR = "LKR",
    LRD = "LRD",
    LSL = "LSL",
    LTL = "LTL",
    LUF = "LUF",
    LVL = "LVL",
    LYD = "LYD",
    MAD = "MAD",
    MDL = "MDL",
    MGF = "MGF",
    MKD = "MKD",
    MMK = "MMK",
    MNT = "MNT",
    MOP = "MOP",
    MRO = "MRO",
    MUR = "MUR",
    MVR = "MVR",
    MWK = "MWK",
    MXN = "MXN",
    MXP = "MXP",
    MYR = "MYR",
    MZM = "MZM",
    NAD = "NAD",
    NGN = "NGN",
    NIC = "NIC",
    NIO = "NIO",
    NLG = "NLG",
    NOK = "NOK",
    NPR = "NPR",
    NZD = "NZD",
    OMR = "OMR",
    PAB = "PAB",
    PEN = "PEN",
    PES = "PES",
    PGK = "PGK",
    PHP = "PHP",
    PKR = "PKR",
    PLN = "PLN",
    PLZ = "PLZ",
    PTE = "PTE",
    PYG = "PYG",
    QAR = "QAR",
    ROL = "ROL",
    RUR = "RUR",
    RWF = "RWF",
    SAR = "SAR",
    SBD = "SBD",
    SCR = "SCR",
    SDD = "SDD",
    SDP = "SDP",
    SEK = "SEK",
    SGD = "SGD",
    SHP = "SHP",
    SIT = "SIT",
    SKK = "SKK",
    SLL = "SLL",
    SM = "SM",
    SOS = "SOS",
    SRG = "SRG",
    STD = "STD",
    SUR = "SUR",
    SVC = "SVC",
    SYP = "SYP",
    SZL = "SZL",
    THB = "THB",
    TMM = "TMM",
    TND = "TND",
    TOP = "TOP",
    TRL = "TRL",
    TTD = "TTD",
    TWD = "TWD",
    TZS = "TZS",
    UAH = "UAH",
    UGS = "UGS",
    UGX = "UGX",
    USD = "USD",
    UYP = "UYP",
    UYU = "UYU",
    UZS = "UZS",
    VND = "VND",
    VUV = "VUV",
    VAL = "VAL",
    WST = "WST",
    XAF = "XAF",
    XCD = "XCD",
    XOF = "XOF",
    XPF = "XPF",
    YER = "YER",
    YUD = "YUD",
    ZAR = "ZAR",
    ZMK = "ZMK",
    ZRZ = "ZRZ",
    ZWD = "ZWD"
}

enum idDomainEnum {
    BM = "BM",
    NG = "NG",
    PMT = "PMT",
    QB = "QB",
    QBO = "QBO",
    QBSDK = "QBSDK"
}

enum objectNameEnumType {
    Account = "Account",
    All = "All",
    Attachable = "Attachable",
    Bill = "Bill",
    BillPayment = "BillPayment",
    BOMComponent = "BOMComponent",
    ChargeCredit = "ChargeCredit",
    Class = "Class",
    Company = "Company",
    CompanyInfo = "CompanyInfo",
    CreditCardPaymentTxn = "CreditCardPaymentTxn",
    CreditMemo = "CreditMemo",
    Customer = "Customer",
    CustomerType = "CustomerType",
    Discount = "Discount",
    Department = "Department",
    Deposit = "Deposit",
    Employee = "Employee",
    Estimate = "Estimate",
    FixedAsset = "FixedAsset",
    InventoryAdjustment = "InventoryAdjustment",
    InventorySite = "InventorySite",
    Invoice = "Invoice",
    Item = "Item",
    ItemReceipt = "ItemReceipt",
    JournalEntry = "JournalEntry",
    ListObjectType = "ListObjectType",
    Names = "Names",
    OtherName = "OtherName",
    Payment = "Payment",
    PaymentMethod = "PaymentMethod",
    Preferences = "Preferences",
    PriceLevel = "PriceLevel",
    Purchase = "Purchase",
    PurchaseOrder = "PurchaseOrder",
    RefundReceipt = "RefundReceipt",
    ReimburseCharge = "ReimburseCharge",
    Report = "Report",
    SalesOrder = "SalesOrder",
    SalesReceipt = "SalesReceipt",
    SalesRep = "SalesRep",
    ShipMethod = "ShipMethod",
    StatementCharge = "StatementCharge",
    Tag = "Tag",
    TaxCode = "TaxCode",
    TaxClassification = "TaxClassification",
    TaxPayment = "TaxPayment",
    TaxRate = "TaxRate",
    TaxReturn = "TaxReturn",
    Term = "Term",
    TimeActivity = "TimeActivity",
    Transfer = "Transfer",
    Transaction = "Transaction",
    TxnLocation = "TxnLocation",
    UOM = "UOM",
    Vendor = "Vendor",
    VendorCredit = "VendorCredit",
    CustomFieldDefinition = "CustomFieldDefinition"
}

enum ReportBasisEnum {
    Accrual = "Accrual",
    Cash = "Cash"
}
