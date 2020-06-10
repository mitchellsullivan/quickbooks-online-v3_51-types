/***********
generated template classes for ./src/xsd/IntuitNamesTypes.xsd 6/10/2020, 11:36:42 AM
***********/





import * as xmlns from "";
import * as xs from "";

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
        this["@class"] = ".IntuitNamesTypes";

        (<any>Object).assign(this, <any> props);
    }
}

export class JobInfo {
    public Status?: JobStatusEnum;
    public StartDate?: Date;
    public ProjectedEndDate?: Date;
    public EndDate?: Date;
    public Description?: string;
    public JobTypeRef?: xmlns.ReferenceType;

    public constructor(props?: JobInfo) {
        this["@class"] = ".JobInfo";

        (<any>Object).assign(this, <any> props);
    }
}

export class VendorBankAccountDetail {
    public BankBranchIdentifier?: string;
    public BankAccountNumber?: string;
    public BankAccountName?: string;
    public StatementText?: string;

    public constructor(props?: VendorBankAccountDetail) {
        this["@class"] = ".VendorBankAccountDetail";

        (<any>Object).assign(this, <any> props);
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
    public PrimaryPhone?: xmlns.TelephoneNumber;
    public AlternatePhone?: xmlns.TelephoneNumber;
    public Mobile?: xmlns.TelephoneNumber;
    public Fax?: xmlns.TelephoneNumber;
    public PrimaryEmailAddr?: xmlns.EmailAddress;
    public WebAddr?: xmlns.WebSiteAddress;
    public OtherContactInfo?: xmlns.ContactInfo;
    public DefaultTaxCodeRef?: xmlns.ReferenceType;

    public constructor(props?: NameBase) {
        super();

        this["@class"] = ".NameBase";

        (<any>Object).assign(this, <any> props);
    }
}

export class Customer extends NameBase {
    public Taxable?: boolean;
    public BillAddr?: xmlns.PhysicalAddress;
    public ShipAddr?: xmlns.PhysicalAddress;
    public OtherAddr?: xmlns.PhysicalAddress;
    public ContactName?: string;
    public AltContactName?: string;
    public Notes?: string;
    public Job?: boolean;
    public BillWithParent?: boolean;
    public RootCustomerRef?: xmlns.ReferenceType;
    public ParentRef?: xmlns.ReferenceType;
    public Level?: number;
    public CustomerTypeRef?: xmlns.ReferenceType;
    public SalesTermRef?: xmlns.ReferenceType;
    public SalesRepRef?: xmlns.ReferenceType;
    public PaymentMethodRef?: xmlns.ReferenceType;
    public CCDetail?: xmlns.CreditChargeInfo;
    public PriceLevelRef?: xmlns.ReferenceType;
    public Balance?: xs.decimal;
    public OpenBalanceDate?: Date;
    public BalanceWithJobs?: xs.decimal;
    public CreditLimit?: xs.decimal;
    public AcctNum?: string;
    public CurrencyRef?: xmlns.ReferenceType;
    public OverDueBalance?: xs.decimal;
    public TotalRevenue?: xs.decimal;
    public TotalExpense?: xs.decimal;
    public PreferredDeliveryMethod?: string;
    public ResaleNum?: string;
    public JobInfo?: JobInfo;
    public TDSEnabled?: boolean;
    public CustomerEx?: xmlns.IntuitAnyType;
    public SecondaryTaxIdentifier?: string;
    public ARAccountRef?: xmlns.ReferenceType;
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

        this["@class"] = ".Customer";

        (<any>Object).assign(this, <any> props);
    }
}

export class User extends IntuitEntity {
    public DisplayName?: string;
    public Title?: string;
    public GivenName?: string;
    public MiddleName?: string;
    public FamilyName?: string;
    public Suffix?: string;
    public EmailAddr?: xmlns.EmailAddress;
    public Addr?: xmlns.PhysicalAddress;
    public PhoneNumber: xmlns.TelephoneNumber;
    public LocaleCountry?: string;
    public LocaleLanguage?: string;
    public LocalePostalCode?: string;
    public LocaleTimeZone?: string;
    public NameValueAttr?: xmlns.NameValue;

    public constructor(props?: User) {
        super();

        this["@class"] = ".User";

        (<any>Object).assign(this, <any> props);
    }
}

export class Vendor extends NameBase {
    public ContactName?: string;
    public AltContactName?: string;
    public Notes?: string;
    public BillAddr?: xmlns.PhysicalAddress;
    public ShipAddr?: xmlns.PhysicalAddress;
    public OtherAddr?: xmlns.PhysicalAddress;
    public TaxCountry?: string;
    public TaxIdentifier?: string;
    public TaxIdEffectiveDate?: Date;
    public BusinessNumber?: string;
    public ParentRef?: xmlns.ReferenceType;
    public VendorTypeRef?: xmlns.ReferenceType;
    public TermRef?: xmlns.ReferenceType;
    public PrefillAccountRef?: xmlns.ReferenceType;
    public Balance?: xs.decimal;
    public BillRate?: xs.decimal;
    public OpenBalanceDate?: Date;
    public CreditLimit?: xs.decimal;
    public AcctNum?: string;
    public Vendor1099?: boolean;
    public T4AEligible?: boolean;
    public T5018Eligible?: boolean;
    public CurrencyRef?: xmlns.ReferenceType;
    public TDSEnabled?: boolean;
    public TDSEntityTypeId?: number;
    public TDSSectionTypeId?: number;
    public TDSOverrideThreshold?: boolean;
    public TaxReportingBasis?: string;
    public APAccountRef?: xmlns.ReferenceType;
    public VendorEx?: xmlns.IntuitAnyType;
    public GSTIN?: string;
    public GSTRegistrationType?: string;
    public IsSubContractor?: boolean;
    public SubcontractorType?: string;
    public CISRate?: string;
    public HasTPAR?: boolean;
    public VendorPaymentBankDetail?: VendorBankAccountDetail;

    public constructor(props?: Vendor) {
        super();

        this["@class"] = ".Vendor";

        (<any>Object).assign(this, <any> props);
    }
}

export class CustomerType extends IntuitEntity {
    public Name?: string;
    public ParentRef?: xmlns.ReferenceType;
    public FullyQualifiedName?: string;
    public Active?: boolean;

    public constructor(props?: CustomerType) {
        super();

        this["@class"] = ".CustomerType";

        (<any>Object).assign(this, <any> props);
    }
}

export class Employee extends NameBase {
    public EmployeeType?: string;
    public EmployeeNumber?: string;
    public SSN?: string;
    public PrimaryAddr?: xmlns.PhysicalAddress;
    public OtherAddr?: xmlns.PhysicalAddress;
    public BillableTime?: boolean;
    public BillRate?: xs.decimal;
    public BirthDate?: Date;
    public Gender?: xmlns.gender;
    public HiredDate?: Date;
    public ReleasedDate?: Date;
    public UseTimeEntry?: TimeEntryUsedForPaychecksEnum;
    public EmployeeEx?: xmlns.IntuitAnyType;
    public V4IDPseudonym?: string;

    public constructor(props?: Employee) {
        super();

        this["@class"] = ".Employee";

        (<any>Object).assign(this, <any> props);
    }
}

export class JobType extends IntuitEntity {
    public Name?: string;
    public ParentRef?: xmlns.ReferenceType;
    public FullyQualifiedName?: string;
    public Active?: boolean;

    public constructor(props?: JobType) {
        super();

        this["@class"] = ".JobType";

        (<any>Object).assign(this, <any> props);
    }
}

export class OtherName extends NameBase {
    public AcctNum?: string;
    public PrimaryAddr?: xmlns.PhysicalAddress;
    public OtherAddr?: xmlns.PhysicalAddress;
    public OtherNameEx?: xmlns.IntuitAnyType;

    public constructor(props?: OtherName) {
        super();

        this["@class"] = ".OtherName";

        (<any>Object).assign(this, <any> props);
    }
}

export class VendorType extends IntuitEntity {
    public Name?: string;
    public ParentRef?: xmlns.ReferenceType;
    public FullyQualifiedName?: string;
    public Active?: boolean;

    public constructor(props?: VendorType) {
        super();

        this["@class"] = ".VendorType";

        (<any>Object).assign(this, <any> props);
    }
}

export class TaxAgency extends Vendor {
    public SalesTaxCodeRef?: xmlns.ReferenceType;
    public SalesTaxCountry?: string;
    public SalesTaxReturnRef?: xmlns.ReferenceType;
    public TaxRegistrationNumber?: string;
    public ReportingPeriod?: string;
    public TaxTrackedOnPurchases?: boolean;
    public TaxOnPurchasesAccountRef?: xmlns.ReferenceType;
    public TaxTrackedOnSales?: boolean;
    public TaxTrackedOnSalesAccountRef?: xmlns.ReferenceType;
    public TaxOnTax?: boolean;
    public LastFileDate?: Date;
    public TaxAgencyExt?: xmlns.IntuitAnyType;
    public TaxAgencyConfig?: string;

    public constructor(props?: TaxAgency) {
        super();

        this["@class"] = ".TaxAgency";

        (<any>Object).assign(this, <any> props);
    }
}

enum EmployeeTypeEnum {
    Officer = "Officer",
    Owner = "Owner",
    Regular = "Regular",
    Statutory = "Statutory"
}

enum SubcontractorTypeEnum {
    Individual = "Individual",
    Company = "Company",
    Partnership = "Partnership",
    Trust = "Trust"
}

enum CISRateEnum {
    CIS gross rate (0%) = "CIS gross rate (0%)",
    CIS standard rate (20%) = "CIS standard rate (20%)",
    CIS higher rate (30%) = "CIS higher rate (30%)"
}

enum JobStatusEnum {
    Awarded = "Awarded",
    Closed = "Closed",
    InProgress = "InProgress",
    None = "None",
    NotAwarded = "NotAwarded",
    Pending = "Pending"
}

enum TimeEntryUsedForPaychecksEnum {
    NotSet = "NotSet",
    DoNotUseTimeEntry = "DoNotUseTimeEntry",
    UseTimeEntry = "UseTimeEntry"
}

enum TaxReportBasisTypeEnum {
    Cash = "Cash",
    Accrual = "Accrual"
}

enum FifoCalculationStatus {
    None = "None",
    InProgress = "InProgress",
    Completed = "Completed",
    Error = "Error"
}
