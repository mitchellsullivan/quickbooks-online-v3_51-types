/* eslint-disable */

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
  public gender: Gender;
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
    this['@class'] = '.IntuitBaseTypes';

    Object.assign(this, props as any);
  }
}

export class IntuitEntity {
  public Id?: id;
  public SyncToken?: string;
  public MetaData?: ModificationMetaData;
  public CustomField?: CustomField;
  public AttachableRef?: AttachableRef;

  public constructor(props?: IntuitEntity) {
    this['@class'] = '.IntuitEntity';

    Object.assign(this, props as any);
  }
}

export class CustomField {
  public DefinitionId?: id;
  public Name?: string;
  public Type: CustomFieldTypeEnum;

  public constructor(props?: CustomField) {
    this['@class'] = '.CustomField';

    Object.assign(this, props as any);
  }
}

export class AttachableRef {
  public EntityRef?: ReferenceType;
  public LineInfo?: id;
  public IncludeOnSend?: boolean;
  public CustomField?: CustomField;
  public AttachableRefEx?: IntuitAnyType;

  public constructor(props?: AttachableRef) {
    this['@class'] = '.AttachableRef';

    Object.assign(this, props as any);
  }
}

export class NameValue {
  public Name?: string;
  public Value?: string;

  public constructor(props?: NameValue) {
    this['@class'] = '.NameValue';

    Object.assign(this, props as any);
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
    this['@class'] = '.ModificationMetaData';

    Object.assign(this, props as any);
  }
}

export class Money {
  public CurCode?: string;
  public Amount?: number;

  public constructor(props?: Money) {
    this['@class'] = '.Money';

    Object.assign(this, props as any);
  }
}

export class ContactInfo {
  public Type?: ContactTypeEnum;

  public constructor(props?: ContactInfo) {
    this['@class'] = '.ContactInfo';

    Object.assign(this, props as any);
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
    this['@class'] = '.PhysicalAddress';

    Object.assign(this, props as any);
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
    this['@class'] = '.TelephoneNumber';

    Object.assign(this, props as any);
  }
}

export class EmailAddress {
  public Id?: id;
  public Address?: string;
  public Default?: boolean;
  public Tag?: string;

  public constructor(props?: EmailAddress) {
    this['@class'] = '.EmailAddress';

    Object.assign(this, props as any);
  }
}

export class EmailMessage {
  public Subject?: string;
  public Message?: string;

  public constructor(props?: EmailMessage) {
    this['@class'] = '.EmailMessage';

    Object.assign(this, props as any);
  }
}

export class TransactionDeliveryInfo {
  public DeliveryType?: DeliveryTypeEnum;
  public DeliveryTime?: Date;
  public DeliveryErrorType?: DeliveryErrorTypeEnum;

  public constructor(props?: TransactionDeliveryInfo) {
    this['@class'] = '.TransactionDeliveryInfo';

    Object.assign(this, props as any);
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
    this['@class'] = '.GenericContactType';

    Object.assign(this, props as any);
  }
}

export class WebSiteAddress {
  public Id?: id;
  public URI?: string;
  public Default?: boolean;
  public Tag?: string;

  public constructor(props?: WebSiteAddress) {
    this['@class'] = '.WebSiteAddress';

    Object.assign(this, props as any);
  }
}

export class IntuitAnyType {
  public constructor(props?: IntuitAnyType) {
    this['@class'] = '.IntuitAnyType';

    Object.assign(this, props as any);
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
  public Amount?: number;
  public ProcessPayment?: boolean;
  public CreditCardChargeInfoEx?: IntuitAnyType;

  public constructor(props?: CreditChargeInfo) {
    this['@class'] = '.CreditChargeInfo';

    Object.assign(this, props as any);
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
    this['@class'] = '.CreditChargeResponse';

    Object.assign(this, props as any);
  }
}

export class ReferenceType {
  public constructor(props?: ReferenceType) {
    this['@class'] = '.ReferenceType';

    Object.assign(this, props as any);
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

    this['@class'] = '.CustomFieldDefinition';

    Object.assign(this, props as any);
  }
}

export class StringTypeCustomFieldDefinition extends CustomFieldDefinition {
  public DefaultString?: string;
  public RegularExpression?: string;
  public MaxLength?: number;

  public constructor(props?: StringTypeCustomFieldDefinition) {
    super();

    this['@class'] = '.StringTypeCustomFieldDefinition';

    Object.assign(this, props as any);
  }
}

export class NumberTypeCustomFieldDefinition extends CustomFieldDefinition {
  public DefaultValue?: number;
  public MinValue?: number;
  public MaxValue?: number;

  public constructor(props?: NumberTypeCustomFieldDefinition) {
    super();

    this['@class'] = '.NumberTypeCustomFieldDefinition';

    Object.assign(this, props as any);
  }
}

export class DateTypeCustomFieldDefinition extends CustomFieldDefinition {
  public DefaultDate?: Date;
  public MinDate?: Date;
  public MaxDate?: Date;

  public constructor(props?: DateTypeCustomFieldDefinition) {
    super();

    this['@class'] = '.DateTypeCustomFieldDefinition';

    Object.assign(this, props as any);
  }
}

export class BooleanTypeCustomFieldDefinition extends CustomFieldDefinition {
  public DefaultValue?: boolean;

  public constructor(props?: BooleanTypeCustomFieldDefinition) {
    super();

    this['@class'] = '.BooleanTypeCustomFieldDefinition';

    Object.assign(this, props as any);
  }
}

export enum ContactTypeEnum {
  TelephoneNumber = 'TelephoneNumber',
  EmailAddress = 'EmailAddress',
  WebSiteAddress = 'WebSiteAddress',
  GenericContactType = 'GenericContactType'
}

export enum DeliveryTypeEnum {
  Email = 'Email',
  Tradeshift = 'Tradeshift'
}

export enum DeliveryErrorTypeEnum {
  MissingInfo = 'Missing Info',
  Undeliverable = 'Undeliverable',
  DeliveryServerDown = 'Delivery Server Down',
  BouncedEmail = 'Bounced Email',
}

export enum ExternalKey {
}

export enum IdType {
}

export enum id {
}

export enum syncToken {
}

export enum EmailAddressTypeEnum {
  Primary = 'Primary',
  CC = 'CC'
}

export enum PhysicalAddressTypeEnum {
  Billing = 'Billing',
  Shipping = 'Shipping'
}

export enum TelephoneNumberTypeEnum {
  Business = 'Business',
  Fax = 'Fax',
  Home = 'Home',
  Mobile = 'Mobile',
  Pager = 'Pager',
  Primary = 'Primary',
  Secondary = 'Secondary',
  Other = 'Other'
}

export enum TelephoneDeviceTypeEnum {
  LandLine = 'LandLine',
  Mobile = 'Mobile',
  Fax = 'Fax',
  Pager = 'Pager'
}

export enum Gender {
  Male = 'Male',
  Female = 'Female'
}

export enum CCSecurityCodeMatchEnum {
  Fail = 'Fail',
  NotAvailable = 'NotAvailable',
  Pass = 'Pass'
}

export enum CCAVSMatchEnum {
  Fail = 'Fail',
  NotAvailable = 'NotAvailable',
  Pass = 'Pass'
}

export enum CCPaymentStatusEnum {
  Completed = 'Completed',
  Voided = 'Voided',
  Unknown = 'Unknown'
}

export enum CCTxnModeEnum {
  CardNotPresent = 'CardNotPresent',
  CardPresent = 'CardPresent'
}

export enum CCTxnTypeEnum {
  Authorization = 'Authorization',
  Capture = 'Capture',
  Charge = 'Charge',
  Refund = 'Refund',
  VoiceAuthorization = 'VoiceAuthorization'
}

export enum CreditCardTypeEnum {
  AmEx = 'AmEx',
  DebitCard = 'DebitCard',
  Discover = 'Discover',
  GiftCard = 'GiftCard',
  MasterCard = 'MasterCard',
  OtherCreditCard = 'OtherCreditCard',
  Visa = 'Visa'
}

export enum CustomFieldTypeEnum {
  StringType = 'StringType',
  BooleanType = 'BooleanType',
  NumberType = 'NumberType',
  DateType = 'DateType'
}

export enum EntityStatusEnum {
  Deleted = 'Deleted',
  Voided = 'Voided',
  Draft = 'Draft',
  Pending = 'Pending',
  InTransit = 'InTransit',
  Synchronized = 'Synchronized',
  SyncError = 'SyncError'
}

export enum currencyCode {
  AED = 'AED',
  AFA = 'AFA',
  ALL = 'ALL',
  ANG = 'ANG',
  AOA = 'AOA',
  AOK = 'AOK',
  ARP = 'ARP',
  ARS = 'ARS',
  AMD = 'AMD',
  ATS = 'ATS',
  AUD = 'AUD',
  AWF = 'AWF',
  AWG = 'AWG',
  AZM = 'AZM',
  BAM = 'BAM',
  BBD = 'BBD',
  BDT = 'BDT',
  BEF = 'BEF',
  BGL = 'BGL',
  BHD = 'BHD',
  BIF = 'BIF',
  BMD = 'BMD',
  BND = 'BND',
  BOB = 'BOB',
  BRC = 'BRC',
  BRL = 'BRL',
  BSD = 'BSD',
  BTN = 'BTN',
  BUK = 'BUK',
  BWP = 'BWP',
  BYR = 'BYR',
  BYB = 'BYB',
  BZD = 'BZD',
  CAD = 'CAD',
  CDF = 'CDF',
  CHF = 'CHF',
  CLP = 'CLP',
  CNY = 'CNY',
  COP = 'COP',
  CRC = 'CRC',
  CZK = 'CZK',
  CUP = 'CUP',
  CVE = 'CVE',
  DDM = 'DDM',
  DEM = 'DEM',
  DJF = 'DJF',
  DKK = 'DKK',
  DOP = 'DOP',
  DZD = 'DZD',
  ECS = 'ECS',
  EEK = 'EEK',
  EGP = 'EGP',
  ERN = 'ERN',
  ESP = 'ESP',
  ETB = 'ETB',
  EUR = 'EUR',
  FIM = 'FIM',
  FJD = 'FJD',
  FKP = 'FKP',
  FRF = 'FRF',
  GBP = 'GBP',
  GEL = 'GEL',
  GHC = 'GHC',
  GIP = 'GIP',
  GMD = 'GMD',
  GNF = 'GNF',
  GRD = 'GRD',
  GTQ = 'GTQ',
  GWP = 'GWP',
  GYD = 'GYD',
  HKD = 'HKD',
  HNL = 'HNL',
  HRK = 'HRK',
  HTG = 'HTG',
  HUF = 'HUF',
  IDR = 'IDR',
  IEP = 'IEP',
  ILS = 'ILS',
  INR = 'INR',
  IQD = 'IQD',
  IRR = 'IRR',
  ISK = 'ISK',
  ITL = 'ITL',
  JMD = 'JMD',
  JOD = 'JOD',
  KES = 'KES',
  KGS = 'KGS',
  KHR = 'KHR',
  KMF = 'KMF',
  KPW = 'KPW',
  KRW = 'KRW',
  KWD = 'KWD',
  KYD = 'KYD',
  KZT = 'KZT',
  LAK = 'LAK',
  LBP = 'LBP',
  LKR = 'LKR',
  LRD = 'LRD',
  LSL = 'LSL',
  LTL = 'LTL',
  LUF = 'LUF',
  LVL = 'LVL',
  LYD = 'LYD',
  MAD = 'MAD',
  MDL = 'MDL',
  MGF = 'MGF',
  MKD = 'MKD',
  MMK = 'MMK',
  MNT = 'MNT',
  MOP = 'MOP',
  MRO = 'MRO',
  MUR = 'MUR',
  MVR = 'MVR',
  MWK = 'MWK',
  MXN = 'MXN',
  MXP = 'MXP',
  MYR = 'MYR',
  MZM = 'MZM',
  NAD = 'NAD',
  NGN = 'NGN',
  NIC = 'NIC',
  NIO = 'NIO',
  NLG = 'NLG',
  NOK = 'NOK',
  NPR = 'NPR',
  NZD = 'NZD',
  OMR = 'OMR',
  PAB = 'PAB',
  PEN = 'PEN',
  PES = 'PES',
  PGK = 'PGK',
  PHP = 'PHP',
  PKR = 'PKR',
  PLN = 'PLN',
  PLZ = 'PLZ',
  PTE = 'PTE',
  PYG = 'PYG',
  QAR = 'QAR',
  ROL = 'ROL',
  RUR = 'RUR',
  RWF = 'RWF',
  SAR = 'SAR',
  SBD = 'SBD',
  SCR = 'SCR',
  SDD = 'SDD',
  SDP = 'SDP',
  SEK = 'SEK',
  SGD = 'SGD',
  SHP = 'SHP',
  SIT = 'SIT',
  SKK = 'SKK',
  SLL = 'SLL',
  SM = 'SM',
  SOS = 'SOS',
  SRG = 'SRG',
  STD = 'STD',
  SUR = 'SUR',
  SVC = 'SVC',
  SYP = 'SYP',
  SZL = 'SZL',
  THB = 'THB',
  TMM = 'TMM',
  TND = 'TND',
  TOP = 'TOP',
  TRL = 'TRL',
  TTD = 'TTD',
  TWD = 'TWD',
  TZS = 'TZS',
  UAH = 'UAH',
  UGS = 'UGS',
  UGX = 'UGX',
  USD = 'USD',
  UYP = 'UYP',
  UYU = 'UYU',
  UZS = 'UZS',
  VND = 'VND',
  VUV = 'VUV',
  VAL = 'VAL',
  WST = 'WST',
  XAF = 'XAF',
  XCD = 'XCD',
  XOF = 'XOF',
  XPF = 'XPF',
  YER = 'YER',
  YUD = 'YUD',
  ZAR = 'ZAR',
  ZMK = 'ZMK',
  ZRZ = 'ZRZ',
  ZWD = 'ZWD'
}

export enum idDomainEnum {
  BM = 'BM',
  NG = 'NG',
  PMT = 'PMT',
  QB = 'QB',
  QBO = 'QBO',
  QBSDK = 'QBSDK'
}

export enum objectNameEnumType {
  Account = 'Account',
  All = 'All',
  Attachable = 'Attachable',
  Bill = 'Bill',
  BillPayment = 'BillPayment',
  BOMComponent = 'BOMComponent',
  ChargeCredit = 'ChargeCredit',
  Class = 'Class',
  Company = 'Company',
  CompanyInfo = 'CompanyInfo',
  CreditCardPaymentTxn = 'CreditCardPaymentTxn',
  CreditMemo = 'CreditMemo',
  Customer = 'Customer',
  CustomerType = 'CustomerType',
  Discount = 'Discount',
  Department = 'Department',
  Deposit = 'Deposit',
  Employee = 'Employee',
  Estimate = 'Estimate',
  FixedAsset = 'FixedAsset',
  InventoryAdjustment = 'InventoryAdjustment',
  InventorySite = 'InventorySite',
  Invoice = 'Invoice',
  Item = 'Item',
  ItemReceipt = 'ItemReceipt',
  JournalEntry = 'JournalEntry',
  ListObjectType = 'ListObjectType',
  Names = 'Names',
  OtherName = 'OtherName',
  Payment = 'Payment',
  PaymentMethod = 'PaymentMethod',
  Preferences = 'Preferences',
  PriceLevel = 'PriceLevel',
  Purchase = 'Purchase',
  PurchaseOrder = 'PurchaseOrder',
  RefundReceipt = 'RefundReceipt',
  ReimburseCharge = 'ReimburseCharge',
  Report = 'Report',
  SalesOrder = 'SalesOrder',
  SalesReceipt = 'SalesReceipt',
  SalesRep = 'SalesRep',
  ShipMethod = 'ShipMethod',
  StatementCharge = 'StatementCharge',
  Tag = 'Tag',
  TaxCode = 'TaxCode',
  TaxClassification = 'TaxClassification',
  TaxPayment = 'TaxPayment',
  TaxRate = 'TaxRate',
  TaxReturn = 'TaxReturn',
  Term = 'Term',
  TimeActivity = 'TimeActivity',
  Transfer = 'Transfer',
  Transaction = 'Transaction',
  TxnLocation = 'TxnLocation',
  UOM = 'UOM',
  Vendor = 'Vendor',
  VendorCredit = 'VendorCredit',
  CustomFieldDefinition = 'CustomFieldDefinition'
}

export enum ReportBasisEnum {
  Accrual = 'Accrual',
  Cash = 'Cash'
}
