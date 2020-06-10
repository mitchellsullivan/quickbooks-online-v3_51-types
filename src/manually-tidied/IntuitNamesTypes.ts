// eslint-disable-next-line max-classes-per-file
import {
  ReferenceType,
  AttachableRef,
  IntuitEntity,
  TelephoneNumber,
  EmailAddress,
  WebSiteAddress,
  ContactInfo,
  PhysicalAddress,
  CreditChargeInfo,
  IntuitAnyType,
  NameValue,
  Gender,
} from './IntuitBaseTypes';

export class IntuitNamesTypes {
  public nameBase: NameBase;
  public customer: Customer;
  public user: User;
  public vendor: Vendor;
  public customerType: CustomerType;
  public employee: Employee;
  public jobInfo: JobInfo;
  public jobType: JobType;
  public otherName: OtherName;
  public vendorType: VendorType;
  public taxAgency: TaxAgency;
  public vendorBankAccountDetail: VendorBankAccountDetail;
  public employeeTypeEnum: EmployeeTypeEnum;
  public subcontractorTypeEnum: SubcontractorTypeEnum;
  public cISRateEnum: CISRateEnum;
  public jobStatusEnum: JobStatusEnum;
  public timeEntryUsedForPaychecksEnum: TimeEntryUsedForPaychecksEnum;
  public taxReportBasisTypeEnum: TaxReportBasisTypeEnum;
  public fifoCalculationStatus: FifoCalculationStatus;

  public constructor(props?: IntuitNamesTypes) {
    this['@class'] = '.IntuitNamesTypes';

    Object.assign(this, props as any);
  }
}

export class JobInfo {
  public Status?: JobStatusEnum;
  public StartDate?: Date;
  public ProjectedEndDate?: Date;
  public EndDate?: Date;
  public Description?: string;
  public JobTypeRef?: ReferenceType;

  public constructor(props?: JobInfo) {
    this['@class'] = '.JobInfo';

    Object.assign(this, props as any);
  }
}

export class VendorBankAccountDetail {
  public BankBranchIdentifier?: string;
  public BankAccountNumber?: string;
  public BankAccountName?: string;
  public StatementText?: string;

  public constructor(props?: VendorBankAccountDetail) {
    this['@class'] = '.VendorBankAccountDetail';

    Object.assign(this, props as any);
  }
}

export class NameBase extends IntuitEntity {
  public IntuitId?: string;
  public Organization?: boolean;
  public Title?: string;
  public GivenName?: string;
  public MiddleName?: string;
  public FamilyName?: string;
  public Suffix?: string;
  public FullyQualifiedName?: string;
  public CompanyName?: string;
  public DisplayName?: string;
  public PrintOnCheckName?: string;
  public UserId?: string;
  public Active?: boolean;
  public PrimaryPhone?: TelephoneNumber;
  public AlternatePhone?: TelephoneNumber;
  public Mobile?: TelephoneNumber;
  public Fax?: TelephoneNumber;
  public PrimaryEmailAddr?: EmailAddress;
  public WebAddr?: WebSiteAddress;
  public OtherContactInfo?: ContactInfo;
  public DefaultTaxCodeRef?: ReferenceType;

  public constructor(props?: NameBase) {
    super();

    this['@class'] = '.NameBase';

    Object.assign(this, props as any);
  }
}

export class Customer extends NameBase {
  public Taxable?: boolean;
  public BillAddr?: PhysicalAddress;
  public ShipAddr?: PhysicalAddress;
  public OtherAddr?: PhysicalAddress;
  public ContactName?: string;
  public AltContactName?: string;
  public Notes?: string;
  public Job?: boolean;
  public BillWithParent?: boolean;
  public RootCustomerRef?: ReferenceType;
  public ParentRef?: ReferenceType;
  public Level?: number;
  public CustomerTypeRef?: ReferenceType;
  public SalesTermRef?: ReferenceType;
  public SalesRepRef?: ReferenceType;
  public PaymentMethodRef?: ReferenceType;
  public CCDetail?: CreditChargeInfo;
  public PriceLevelRef?: ReferenceType;
  public Balance?: number;
  public OpenBalanceDate?: Date;
  public BalanceWithJobs?: number;
  public CreditLimit?: number;
  public AcctNum?: string;
  public CurrencyRef?: ReferenceType;
  public OverDueBalance?: number;
  public TotalRevenue?: number;
  public TotalExpense?: number;
  public PreferredDeliveryMethod?: string;
  public ResaleNum?: string;
  public JobInfo?: JobInfo;
  public TDSEnabled?: boolean;
  public CustomerEx?: IntuitAnyType;
  public SecondaryTaxIdentifier?: string;
  public ARAccountRef?: ReferenceType;
  public PrimaryTaxIdentifier?: string;
  public TaxExemptionReasonId?: string;
  public IsProject?: boolean;
  public BusinessNumber?: string;
  public GSTIN?: string;
  public GSTRegistrationType?: string;
  public IsCISContractor?: boolean;
  public ClientCompanyId?: string;
  public ClientEntityId?: string;

  public constructor(props?: Customer) {
    super();

    this['@class'] = '.Customer';

    Object.assign(this, props as any);
  }
}

export class User extends IntuitEntity {
  public DisplayName?: string;
  public Title?: string;
  public GivenName?: string;
  public MiddleName?: string;
  public FamilyName?: string;
  public Suffix?: string;
  public EmailAddr?: EmailAddress;
  public Addr?: PhysicalAddress;
  public PhoneNumber: TelephoneNumber;
  public LocaleCountry?: string;
  public LocaleLanguage?: string;
  public LocalePostalCode?: string;
  public LocaleTimeZone?: string;
  public NameValueAttr?: NameValue;

  public constructor(props?: User) {
    super();

    this['@class'] = '.User';

    Object.assign(this, props as any);
  }
}

export class Vendor extends NameBase {
  public ContactName?: string;
  public AltContactName?: string;
  public Notes?: string;
  public BillAddr?: PhysicalAddress;
  public ShipAddr?: PhysicalAddress;
  public OtherAddr?: PhysicalAddress;
  public TaxCountry?: string;
  public TaxIdentifier?: string;
  public TaxIdEffectiveDate?: Date;
  public BusinessNumber?: string;
  public ParentRef?: ReferenceType;
  public VendorTypeRef?: ReferenceType;
  public TermRef?: ReferenceType;
  public PrefillAccountRef?: ReferenceType;
  public Balance?: number;
  public BillRate?: number;
  public OpenBalanceDate?: Date;
  public CreditLimit?: number;
  public AcctNum?: string;
  public Vendor1099?: boolean;
  public T4AEligible?: boolean;
  public T5018Eligible?: boolean;
  public CurrencyRef?: ReferenceType;
  public TDSEnabled?: boolean;
  public TDSEntityTypeId?: number;
  public TDSSectionTypeId?: number;
  public TDSOverrideThreshold?: boolean;
  public TaxReportingBasis?: string;
  public APAccountRef?: ReferenceType;
  public VendorEx?: IntuitAnyType;
  public GSTIN?: string;
  public GSTRegistrationType?: string;
  public IsSubContractor?: boolean;
  public SubcontractorType?: string;
  public CISRate?: string;
  public HasTPAR?: boolean;
  public VendorPaymentBankDetail?: VendorBankAccountDetail;

  public constructor(props?: Vendor) {
    super();

    this['@class'] = '.Vendor';

    Object.assign(this, props as any);
  }
}

export class CustomerType extends IntuitEntity {
  public Name?: string;
  public ParentRef?: ReferenceType;
  public FullyQualifiedName?: string;
  public Active?: boolean;

  public constructor(props?: CustomerType) {
    super();

    this['@class'] = '.CustomerType';

    Object.assign(this, props as any);
  }
}

export class Employee extends NameBase {
  public EmployeeType?: string;
  public EmployeeNumber?: string;
  public SSN?: string;
  public PrimaryAddr?: PhysicalAddress;
  public OtherAddr?: PhysicalAddress;
  public BillableTime?: boolean;
  public BillRate?: number;
  public BirthDate?: Date;
  public Gender?: Gender;
  public HiredDate?: Date;
  public ReleasedDate?: Date;
  public UseTimeEntry?: TimeEntryUsedForPaychecksEnum;
  public EmployeeEx?: IntuitAnyType;
  public V4IDPseudonym?: string;

  public constructor(props?: Employee) {
    super();

    this['@class'] = '.Employee';

    Object.assign(this, props as any);
  }
}

export class JobType extends IntuitEntity {
  public Name?: string;
  public ParentRef?: ReferenceType;
  public FullyQualifiedName?: string;
  public Active?: boolean;

  public constructor(props?: JobType) {
    super();

    this['@class'] = '.JobType';

    Object.assign(this, props as any);
  }
}

export class OtherName extends NameBase {
  public AcctNum?: string;
  public PrimaryAddr?: PhysicalAddress;
  public OtherAddr?: PhysicalAddress;
  public OtherNameEx?: IntuitAnyType;

  public constructor(props?: OtherName) {
    super();

    this['@class'] = '.OtherName';

    Object.assign(this, props as any);
  }
}

export class VendorType extends IntuitEntity {
  public Name?: string;
  public ParentRef?: ReferenceType;
  public FullyQualifiedName?: string;
  public Active?: boolean;

  public constructor(props?: VendorType) {
    super();

    this['@class'] = '.VendorType';

    Object.assign(this, props as any);
  }
}

export class TaxAgency extends Vendor {
  public SalesTaxCodeRef?: ReferenceType;
  public SalesTaxCountry?: string;
  public SalesTaxReturnRef?: ReferenceType;
  public TaxRegistrationNumber?: string;
  public ReportingPeriod?: string;
  public TaxTrackedOnPurchases?: boolean;
  public TaxOnPurchasesAccountRef?: ReferenceType;
  public TaxTrackedOnSales?: boolean;
  public TaxTrackedOnSalesAccountRef?: ReferenceType;
  public TaxOnTax?: boolean;
  public LastFileDate?: Date;
  public TaxAgencyExt?: IntuitAnyType;
  public TaxAgencyConfig?: string;

  public constructor(props?: TaxAgency) {
    super();

    this['@class'] = '.TaxAgency';

    Object.assign(this, props as any);
  }
}

export enum EmployeeTypeEnum {
  Officer = 'Officer',
  Owner = 'Owner',
  Regular = 'Regular',
  Statutory = 'Statutory'
}

export enum SubcontractorTypeEnum {
  Individual = 'Individual',
  Company = 'Company',
  Partnership = 'Partnership',
  Trust = 'Trust'
}

export enum CISRateEnum {
  CISGrossRate0 = 'CIS gross rate (0%)',
  CISStandardRate20 = 'CIS standard rate (20%)',
  CISHigherRate30 = 'CIS higher rate (30%)'
}

export enum JobStatusEnum {
  Awarded = 'Awarded',
  Closed = 'Closed',
  InProgress = 'InProgress',
  None = 'None',
  NotAwarded = 'NotAwarded',
  Pending = 'Pending'
}

export enum TimeEntryUsedForPaychecksEnum {
  NotSet = 'NotSet',
  DoNotUseTimeEntry = 'DoNotUseTimeEntry',
  UseTimeEntry = 'UseTimeEntry'
}

export enum TaxReportBasisTypeEnum {
  Cash = 'Cash',
  Accrual = 'Accrual'
}

export enum FifoCalculationStatus {
  None = 'None',
  InProgress = 'InProgress',
  Completed = 'Completed',
  Error = 'Error'
}
