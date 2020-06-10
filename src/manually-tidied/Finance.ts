/* eslint-disable */
import {
  IntuitAnyType,
  IntuitEntity,
  ReferenceType,
  NameValue,
  PhysicalAddress,
  CreditChargeInfo,
  CreditChargeResponse,
  ContactInfo,
  currencyCode,
  EmailAddress,
  EmailMessage,
  WebSiteAddress,
  TelephoneNumber,
  TransactionDeliveryInfo,
  ReportBasisEnum,
  CustomFieldDefinition,
  CustomField,
} from './IntuitBaseTypes';

import {
  FifoCalculationStatus,
} from './IntuitNamesTypes';


export class Finance {
  public linkedTxn: LinkedTxn;
  public txnApprovalInfo: TxnApprovalInfo;
  public qbdtEntityIdMapping: QbdtEntityIdMapping;
  public company: Company;
  public companyInfo: CompanyInfo;
  public transaction: Transaction;
  public txnTaxDetail: TxnTaxDetail;
  public salesTransaction: SalesTransaction;
  public invoice: Invoice;
  public convenienceFeeDetail: ConvenienceFeeDetail;
  public salesReceipt: SalesReceipt;
  public estimate: Estimate;
  public emailDeliveryInfo: EmailDeliveryInfo;
  public groupLineDetail: GroupLineDetail;
  public line: Line;
  public tag: Tag;
  public discountOverride: DiscountOverride;
  public discountLineDetail: DiscountLineDetail;
  public descriptionLineDetail: DescriptionLineDetail;
  public tDSLineDetail: TDSLineDetail;
  public fixedAsset: FixedAsset;
  public itemLineDetail: ItemLineDetail;
  public salesItemLineDetail: SalesItemLineDetail;
  public itemBasedExpenseLineDetail: ItemBasedExpenseLineDetail;
  public purchaseOrderItemLineDetail: PurchaseOrderItemLineDetail;
  public salesOrderItemLineDetail: SalesOrderItemLineDetail;
  public itemReceiptLineDetail: ItemReceiptLineDetail;
  public taxCode: TaxCode;
  public taxRateDetail: TaxRateDetail;
  public taxRateList: TaxRateList;
  public taxRate: TaxRate;
  public effectiveTaxRate: EffectiveTaxRate;
  public taxLineDetail: TaxLineDetail;
  public accountBasedExpenseLineDetail: AccountBasedExpenseLineDetail;
  public depositLineDetail: DepositLineDetail;
  public journalEntryLineDetail: JournalEntryLineDetail;
  public paymentLineDetail: PaymentLineDetail;
  public subTotalLineDetail: SubTotalLineDetail;
  public entityTypeRef: EntityTypeRef;
  public markupInfo: MarkupInfo;
  public account: Account;
  public masterAccount: MasterAccount;
  public cashPurchase: CashPurchase;
  public creditCardPurchase: CreditCardPurchase;
  public checkPurchase: CheckPurchase;
  public checkPayment: CheckPayment;
  public creditCardPayment: CreditCardPayment;
  public purchase: Purchase;
  public purchaseByVendor: PurchaseByVendor;
  public bill: Bill;
  public vendorCredit: VendorCredit;
  public statementCharge: StatementCharge;
  public class: Class;
  public journalCode: JournalCode;
  public payment: Payment;
  public paymentMethod: PaymentMethod;
  public itemComponentLine: ItemComponentLine;
  public itemGroupDetail: ItemGroupDetail;
  public department: Department;
  public itemAssemblyDetail: ItemAssemblyDetail;
  public item: Item;
  public term: Term;
  public billPaymentCheck: BillPaymentCheck;
  public billPaymentCreditCard: BillPaymentCreditCard;
  public billPayment: BillPayment;
  public cashBackInfo: CashBackInfo;
  public deposit: Deposit;
  public transfer: Transfer;
  public purchaseOrder: PurchaseOrder;
  public salesOrder: SalesOrder;
  public creditMemo: CreditMemo;
  public refundReceipt: RefundReceipt;
  public creditCardPaymentTxn: CreditCardPaymentTxn;
  public currency: Currency;
  public companyCurrency: CompanyCurrency;
  public exchangeRate: ExchangeRate;
  public salesRep: SalesRep;
  public priceLevel: PriceLevel;
  public priceLevelPerItem: PriceLevelPerItem;
  public customerMsg: CustomerMsg;
  public journalEntry: JournalEntry;
  public timeActivity: TimeActivity;
  public inventorySite: InventorySite;
  public shipMethod: ShipMethod;
  public memoRef: MemoRef;
  public task: Task;
  public userAlert: UserAlert;
  public currencyPrefs: CurrencyPrefs;
  public taxPrefs: TaxPrefs;
  public financeChargePrefs: FinanceChargePrefs;
  public companyAccountingPrefs: CompanyAccountingPrefs;
  public advancedInventoryPrefs: AdvancedInventoryPrefs;
  public productAndServicesPrefs: ProductAndServicesPrefs;
  public salesFormsPrefs: SalesFormsPrefs;
  public vendorAndPurchasesPrefs: VendorAndPurchasesPrefs;
  public timeTrackingPrefs: TimeTrackingPrefs;
  public emailMessagesPrefs: EmailMessagesPrefs;
  public printDocumentPrefs: PrintDocumentPrefs;
  public reportPrefs: ReportPrefs;
  public otherPrefs: OtherPrefs;
  public preferences: Preferences;
  public uOMRef: UOMRef;
  public uOM: UOM;
  public uOMConvUnit: UOMConvUnit;
  public templateName: TemplateName;
  public attachable: Attachable;
  public oLBTxnDetail: OLBTxnDetail;
  public oLBTxn: OLBTxn;
  public oLBTransaction: OLBTransaction;
  public oLBAccount: OLBAccount;
  public oLBStatus: OLBStatus;
  public budget: Budget;
  public budgetDetail: BudgetDetail;
  public tDSMetadata: TDSMetadata;
  public reimburseCharge: ReimburseCharge;
  public chargeCredit: ChargeCredit;
  public taxReturn: TaxReturn;
  public statusInfo: StatusInfo;
  public taxClassification: TaxClassification;
  public taxPayment: TaxPayment;
  public acquiredAsEnum: AcquiredAsEnum;
  public monthEnum: MonthEnum;
  public weekEnum: WeekEnum;
  public uOMFeatureTypeEnum: UOMFeatureTypeEnum;
  public accountClassificationEnum: AccountClassificationEnum;
  public itemTypeEnum: ItemTypeEnum;
  public customerTypeEnum: CustomerTypeEnum;
  public billableStatusEnum: BillableStatusEnum;
  public taxFormTypeEnum: TaxFormTypeEnum;
  public entityTypeEnum: EntityTypeEnum;
  public taxApplicableOnEnum: TaxApplicableOnEnum;
  public postingTypeEnum: PostingTypeEnum;
  public lineDetailTypeEnum: LineDetailTypeEnum;
  public accountTypeEnum: AccountTypeEnum;
  public taxRateDisplayTypeEnum: TaxRateDisplayTypeEnum;
  public accountSubTypeEnum: AccountSubTypeEnum;
  public aPCreditCardOperationEnum: APCreditCardOperationEnum;
  public dayOfWeekEnum: DayOfWeekEnum;
  public estimateStatusEnum: EstimateStatusEnum;
  public paymentMethodEnum: PaymentMethodEnum;
  public paymentStatusEnum: PaymentStatusEnum;
  public paySalesTaxEnum: PaySalesTaxEnum;
  public perItemAdjustEnum: PerItemAdjustEnum;
  public priceLevelTypeEnum: PriceLevelTypeEnum;
  public qboEstimateStatusEnum: QboEstimateStatusEnum;
  public purchaseOrderStatusEnum: PurchaseOrderStatusEnum;
  public reimbursableTypeEnum: ReimbursableTypeEnum;
  public roundingMethodEnum: RoundingMethodEnum;
  public salesRepTypeEnum: SalesRepTypeEnum;
  public salesTermTypeEnum: SalesTermTypeEnum;
  public specialItemTypeEnum: SpecialItemTypeEnum;
  public symbolPositionEnum: SymbolPositionEnum;
  public taxTypeApplicablityEnum: TaxTypeApplicablityEnum;
  public templateTypeEnum: TemplateTypeEnum;
  public timeActivityTypeEnum: TimeActivityTypeEnum;
  public txnTypeEnum: TxnTypeEnum;
  public uOMBaseTypeEnum: UOMBaseTypeEnum;
  public paymentTypeEnum: PaymentTypeEnum;
  public billPaymentTypeEnum: BillPaymentTypeEnum;
  public printStatusEnum: PrintStatusEnum;
  public emailStatusEnum: EmailStatusEnum;
  public eTransactionStatusEnum: ETransactionStatusEnum;
  public eTransactionEnabledStatusEnum: ETransactionEnabledStatusEnum;
  public globalTaxCalculationEnum: GlobalTaxCalculationEnum;
  public txnSourceEnum: TxnSourceEnum;
  public budgetTypeEnum: BudgetTypeEnum;
  public budgetEntryTypeEnum: BudgetEntryTypeEnum;
  public itemCategoryTypeEnum: ItemCategoryTypeEnum;
  public transactionLocationTypeEnum: TransactionLocationTypeEnum;
  public journalCodeTypeEnum: JournalCodeTypeEnum;
  public discountTypeEnum: DiscountTypeEnum;
  public serviceTypeEnum: ServiceTypeEnum;
  public qboEntityTypeEnum: QboEntityTypeEnum;
  public desktopEntityTypeEnum: DesktopEntityTypeEnum;
  public taxReturnStatusEnum: TaxReturnStatusEnum;
  public agencyPaymentMethodEnum: AgencyPaymentMethodEnum;
  public taxReviewStatusEnum: TaxReviewStatusEnum;
  public convenienceFeeTypeEnum: ConvenienceFeeTypeEnum;
  public specialTaxTypeEnum: SpecialTaxTypeEnum;
  public gTMConfigTypeEnum: GTMConfigTypeEnum;
  public attachableCategoryEnum: AttachableCategoryEnum;
  public oLBTxnStatusEnum: OLBTxnStatusEnum;

  public constructor(props?: Finance) {
    this['@class'] = '.Finance';

    Object.assign(this, props as any);
  }
}

export abstract class TxnReferenceGroup {
  public TxnId?: number;
  public TxnNum?: string;

  public constructor(props?: TxnReferenceGroup) {
    this['@class'] = '.TxnReferenceGroup';

    Object.assign(this, props as any);
  }
}

export abstract class TxnLineReferenceGroup {
  public TxnId?: number;
  public TxnLineId?: number;

  public constructor(props?: TxnLineReferenceGroup) {
    this['@class'] = '.TxnLineReferenceGroup';

    Object.assign(this, props as any);
  }
}

export class LinkedTxn {
  public TxnId?: number;
  public TxnType?: string;
  public TxnLineId?: number;

  public constructor(props?: LinkedTxn) {
    this['@class'] = '.LinkedTxn';

    Object.assign(this, props as any);
  }
}

export class TxnApprovalInfo {
  public ApprovalStatus?: string;
  public ApprovalStatusDetail?: string;
  public LastChangedByUser?: string;
  public LastChangedDate?: Date;

  public constructor(props?: TxnApprovalInfo) {
    this['@class'] = '.TxnApprovalInfo';

    Object.assign(this, props as any);
  }
}

export class TxnTaxDetail {
  public DefaultTaxCodeRef?: ReferenceType;
  public TxnTaxCodeRef?: ReferenceType;
  public TotalTax?: number;
  public TaxReviewStatus?: TaxReviewStatusEnum;
  public TaxLine?: Line;
  public UseAutomatedSalesTax?: boolean;

  public constructor(props?: TxnTaxDetail) {
    this['@class'] = '.TxnTaxDetail';

    Object.assign(this, props as any);
  }
}

export class GroupLineDetail {
  public GroupItemRef: ReferenceType;
  public Quantity?: number;
  public UOMRef?: UOMRef;
  public ServiceDate?: Date;
  public Line?: Line;
  public GroupLineDetailEx?: IntuitAnyType;

  public constructor(props?: GroupLineDetail) {
    this['@class'] = '.GroupLineDetail';

    Object.assign(this, props as any);
  }
}

export class Line {
  public Id?: number;
  public LineNum?: number;
  public Description?: string;
  public Amount?: number;
  public Received?: number;
  public LinkedTxn?: LinkedTxn;
  public DetailType?: LineDetailTypeEnum;
  public CustomField?: CustomField;
  public LineEx?: IntuitAnyType;

  public constructor(props?: Line) {
    this['@class'] = '.Line';

    Object.assign(this, props as any);
  }
}

export class DiscountOverride {
  public DiscountRef?: ReferenceType;
  public PercentBased?: boolean;
  public DiscountPercent?: number;
  public DiscountAccountRef?: ReferenceType;

  public constructor(props?: DiscountOverride) {
    this['@class'] = '.DiscountOverride';

    Object.assign(this, props as any);
  }
}

export class DescriptionLineDetail {
  public ServiceDate?: Date;
  public TaxCodeRef?: ReferenceType;
  public DescriptionLineDetailEx?: IntuitAnyType;

  public constructor(props?: DescriptionLineDetail) {
    this['@class'] = '.DescriptionLineDetail';

    Object.assign(this, props as any);
  }
}

export class TDSLineDetail {
  public TDSAccountRef?: ReferenceType;
  public TDSSectionTypeId?: number;
  public TDSLineDetailEx?: IntuitAnyType;

  public constructor(props?: TDSLineDetail) {
    this['@class'] = '.TDSLineDetail';

    Object.assign(this, props as any);
  }
}

export class ItemLineDetail {
  public ItemRef?: ReferenceType;
  public ClassRef?: ReferenceType;
  public MarkupInfo?: MarkupInfo;
  public Qty?: number;
  public UOMRef?: UOMRef;
  public ItemAccountRef?: ReferenceType;
  public InventorySiteRef?: ReferenceType;
  public TaxCodeRef?: ReferenceType;
  public TaxClassificationRef?: ReferenceType;

  public constructor(props?: ItemLineDetail) {
    this['@class'] = '.ItemLineDetail';

    Object.assign(this, props as any);
  }
}

export class ItemReceiptLineDetail {
  public ItemReceiptLineDetailEx?: IntuitAnyType;

  public constructor(props?: ItemReceiptLineDetail) {
    this['@class'] = '.ItemReceiptLineDetail';

    Object.assign(this, props as any);
  }
}

export class TaxRateDetail {
  public TaxRateRef?: ReferenceType;
  public TaxTypeApplicable?: TaxTypeApplicablityEnum;
  public TaxOrder?: number;
  public TaxOnTaxOrder?: number;

  public constructor(props?: TaxRateDetail) {
    this['@class'] = '.TaxRateDetail';

    Object.assign(this, props as any);
  }
}

export class TaxRateList {
  public TaxRateDetail?: TaxRateDetail;

  public constructor(props?: TaxRateList) {
    this['@class'] = '.TaxRateList';

    Object.assign(this, props as any);
  }
}

export class EffectiveTaxRate {
  public RateValue?: number;
  public EffectiveDate?: Date;
  public EndDate?: Date;
  public EffectiveTaxRateEx?: IntuitAnyType;

  public constructor(props?: EffectiveTaxRate) {
    this['@class'] = '.EffectiveTaxRate';

    Object.assign(this, props as any);
  }
}

export class TaxLineDetail {
  public TaxRateRef?: ReferenceType;
  public PercentBased?: boolean;
  public TaxPercent?: number;
  public NetAmountTaxable?: number;
  public TaxInclusiveAmount?: number;
  public OverrideDeltaAmount?: number;
  public ServiceDate?: Date;
  public TaxLineDetailEx?: IntuitAnyType;

  public constructor(props?: TaxLineDetail) {
    this['@class'] = '.TaxLineDetail';

    Object.assign(this, props as any);
  }
}

export class AccountBasedExpenseLineDetail {
  public CustomerRef?: ReferenceType;
  public ClassRef?: ReferenceType;
  public AccountRef?: ReferenceType;
  public BillableStatus?: BillableStatusEnum;
  public MarkupInfo?: MarkupInfo;
  public TaxAmount?: number;
  public TaxCodeRef?: ReferenceType;
  public TaxInclusiveAmt?: number;
  public ExpenseDetailLineDetailEx?: IntuitAnyType;

  public constructor(props?: AccountBasedExpenseLineDetail) {
    this['@class'] = '.AccountBasedExpenseLineDetail';

    Object.assign(this, props as any);
  }
}

export class DepositLineDetail {
  public Entity?: ReferenceType;
  public ClassRef?: ReferenceType;
  public AccountRef?: ReferenceType;
  public PaymentMethodRef?: ReferenceType;
  public CheckNum?: string;
  public TxnType?: TxnTypeEnum;
  public TaxCodeRef?: ReferenceType;
  public TaxApplicableOn?: TaxApplicableOnEnum;
  public DepositLineDetailEx?: IntuitAnyType;

  public constructor(props?: DepositLineDetail) {
    this['@class'] = '.DepositLineDetail';

    Object.assign(this, props as any);
  }
}

export class JournalEntryLineDetail {
  public PostingType?: PostingTypeEnum;
  public Entity?: EntityTypeRef;
  public AccountRef?: ReferenceType;
  public ClassRef?: ReferenceType;
  public DepartmentRef?: ReferenceType;
  public TaxCodeRef?: ReferenceType;
  public TaxRateRef?: ReferenceType;
  public TaxApplicableOn?: TaxApplicableOnEnum;
  public TaxAmount?: number;
  public BillableStatus?: BillableStatusEnum;
  public JournalCodeRef?: ReferenceType;
  public JournalEntryLineDetailEx?: IntuitAnyType;

  public constructor(props?: JournalEntryLineDetail) {
    this['@class'] = '.JournalEntryLineDetail';

    Object.assign(this, props as any);
  }
}

export class PaymentLineDetail {
  public ItemRef: ReferenceType;
  public ServiceDate?: Date;
  public ClassRef?: ReferenceType;
  public Balance?: number;
  public HomeBalance?: number;
  public Discount?: DiscountOverride;
  public PaymentLineEx?: IntuitAnyType;

  public constructor(props?: PaymentLineDetail) {
    this['@class'] = '.PaymentLineDetail';

    Object.assign(this, props as any);
  }
}

export class SubTotalLineDetail {
  public ItemRef?: ReferenceType;
  public ServiceDate?: Date;

  public constructor(props?: SubTotalLineDetail) {
    this['@class'] = '.SubTotalLineDetail';

    Object.assign(this, props as any);
  }
}

export class EntityTypeRef {
  public Type?: EntityTypeEnum;
  public EntityRef?: ReferenceType;

  public constructor(props?: EntityTypeRef) {
    this['@class'] = '.EntityTypeRef';

    Object.assign(this, props as any);
  }
}

export class MarkupInfo {
  public PercentBased?: boolean;
  public Value?: number;
  public Percent?: number;
  public PriceLevelRef?: ReferenceType;
  public MarkUpIncomeAccountRef?: ReferenceType;

  public constructor(props?: MarkupInfo) {
    this['@class'] = '.MarkupInfo';

    Object.assign(this, props as any);
  }
}

export class CashPurchase {
  public AccountRef?: ReferenceType;

  public constructor(props?: CashPurchase) {
    this['@class'] = '.CashPurchase';

    Object.assign(this, props as any);
  }
}

export class CreditCardPurchase {
  public AccountRef?: ReferenceType;
  public Credit?: boolean;

  public constructor(props?: CreditCardPurchase) {
    this['@class'] = '.CreditCardPurchase';

    Object.assign(this, props as any);
  }
}

export class CheckPurchase {
  public AccountRef?: ReferenceType;
  public PayeeAddr?: PhysicalAddress;
  public MemoOnCheck?: string;
  public PrintStatus?: PrintStatusEnum;

  public constructor(props?: CheckPurchase) {
    this['@class'] = '.CheckPurchase';

    Object.assign(this, props as any);
  }
}

export class CheckPayment {
  public CheckNum?: string;
  public Status?: string;
  public NameOnAcct?: string;
  public AcctNum?: string;
  public BankName?: string;
  public CheckPaymentEx: IntuitAnyType;

  public constructor(props?: CheckPayment) {
    this['@class'] = '.CheckPayment';

    Object.assign(this, props as any);
  }
}

export class CreditCardPayment {
  public CreditChargeInfo?: CreditChargeInfo;
  public CreditChargeResponse?: CreditChargeResponse;

  public constructor(props?: CreditCardPayment) {
    this['@class'] = '.CreditCardPayment';

    Object.assign(this, props as any);
  }
}

export class ItemComponentLine {
  public ItemRef?: ReferenceType;
  public Qty?: number;
  public UOMRef?: UOMRef;

  public constructor(props?: ItemComponentLine) {
    this['@class'] = '.ItemComponentLine';

    Object.assign(this, props as any);
  }
}

export class ItemGroupDetail {
  public ItemGroupLine?: ItemComponentLine;

  public constructor(props?: ItemGroupDetail) {
    this['@class'] = '.ItemGroupDetail';

    Object.assign(this, props as any);
  }
}

export class ItemAssemblyDetail {
  public ItemAssemblyLine?: ItemComponentLine;

  public constructor(props?: ItemAssemblyDetail) {
    this['@class'] = '.ItemAssemblyDetail';

    Object.assign(this, props as any);
  }
}

export class BillPaymentCheck {
  public BankAccountRef?: ReferenceType;
  public PrintStatus?: PrintStatusEnum;
  public CheckDetail?: CheckPayment;
  public PayeeAddr?: PhysicalAddress;
  public BillPaymentCheckEx?: IntuitAnyType;

  public constructor(props?: BillPaymentCheck) {
    this['@class'] = '.BillPaymentCheck';

    Object.assign(this, props as any);
  }
}

export class BillPaymentCreditCard {
  public CCAccountRef?: ReferenceType;
  public CCDetail?: CreditCardPayment;
  public BillPaymentCreditCardEx?: IntuitAnyType;

  public constructor(props?: BillPaymentCreditCard) {
    this['@class'] = '.BillPaymentCreditCard';

    Object.assign(this, props as any);
  }
}

export class CashBackInfo {
  public AccountRef?: ReferenceType;
  public Amount?: number;
  public Memo?: string;

  public constructor(props?: CashBackInfo) {
    this['@class'] = '.CashBackInfo';

    Object.assign(this, props as any);
  }
}

export class MemoRef {
  public constructor(props?: MemoRef) {
    this['@class'] = '.MemoRef';

    Object.assign(this, props as any);
  }
}

export class CurrencyPrefs {
  public MultiCurrencyEnabled?: boolean;
  public HomeCurrency?: ReferenceType;

  public constructor(props?: CurrencyPrefs) {
    this['@class'] = '.CurrencyPrefs';

    Object.assign(this, props as any);
  }
}

export class TaxPrefs {
  public UsingSalesTax?: boolean;
  public PartnerTaxEnabled?: boolean;
  public HideTaxManagement?: boolean;
  public PaySalesTax?: PaySalesTaxEnum;
  public NonTaxableSalesTaxCodeRef?: ReferenceType;
  public TaxableSalesTaxCodeRef?: ReferenceType;

  public constructor(props?: TaxPrefs) {
    this['@class'] = '.TaxPrefs';

    Object.assign(this, props as any);
  }
}

export class FinanceChargePrefs {
  public AnnualInterestRate?: number;
  public MinFinChrg?: number;
  public GracePeriod?: number;
  public CalcFinChrgFromTxnDate?: boolean;
  public AssessFinChrgForOverdueCharges?: boolean;
  public FinChrgAccountRef?: ReferenceType;

  public constructor(props?: FinanceChargePrefs) {
    this['@class'] = '.FinanceChargePrefs';

    Object.assign(this, props as any);
  }
}

export class CompanyAccountingPrefs {
  public UseAccountNumbers?: boolean;
  public DefaultARAccount?: ReferenceType;
  public DefaultAPAccount?: ReferenceType;
  public RequiresAccounts?: boolean;
  public TrackDepartments?: boolean;
  public DepartmentTerminology?: string;
  public ClassTrackingPerTxn?: boolean;
  public ClassTrackingPerTxnLine?: boolean;
  public AutoJournalEntryNumber?: boolean;
  public FirstMonthOfFiscalYear?: MonthEnum;
  public TaxYearMonth?: MonthEnum;
  public TaxForm?: string;
  public BookCloseDate?: Date;
  public OtherContactInfo?: ContactInfo;
  public CustomerTerminology?: string;

  public constructor(props?: CompanyAccountingPrefs) {
    this['@class'] = '.CompanyAccountingPrefs';

    Object.assign(this, props as any);
  }
}

export class AdvancedInventoryPrefs {
  public MLIAvailable?: boolean;
  public MLIEnabled?: boolean;
  public EnhancedInventoryReceivingEnabled?: boolean;
  public TrackingSerialOrLotNumber?: boolean;
  public TrackingOnSalesTransactionsEnabled?: boolean;
  public TrackingOnPurchaseTransactionsEnabled?: boolean;
  public TrackingOnInventoryAdjustmentEnabled?: boolean;
  public TrackingOnBuildAssemblyEnabled?: boolean;
  public FIFOEnabled?: boolean;
  public FIFOEffectiveDate?: Date;
  public RowShelfBinEnabled?: boolean;
  public BarcodeEnabled?: boolean;

  public constructor(props?: AdvancedInventoryPrefs) {
    this['@class'] = '.AdvancedInventoryPrefs';

    Object.assign(this, props as any);
  }
}

export class ProductAndServicesPrefs {
  public ForSales?: boolean;
  public ForPurchase?: boolean;
  public InventoryAndPurchaseOrder?: boolean;
  public QuantityWithPriceAndRate?: boolean;
  public QuantityOnHand?: boolean;
  public UOM?: UOMFeatureTypeEnum;

  public constructor(props?: ProductAndServicesPrefs) {
    this['@class'] = '.ProductAndServicesPrefs';

    Object.assign(this, props as any);
  }
}

export class SalesFormsPrefs {
  public UsingProgressInvoicing?: boolean;
  public CustomField?: CustomFieldDefinition;
  public CustomTxnNumbers?: boolean;
  public DelayedCharges?: boolean;
  public SalesEmailCc?: EmailAddress;
  public SalesEmailBcc?: EmailAddress;
  public EmailCopyToCompany?: boolean;
  public AllowDeposit?: boolean;
  public AllowDiscount?: boolean;
  public DefaultDiscountAccount?: string;
  public AllowEstimates?: boolean;
  public EstimateMessage?: string;
  public ETransactionEnabledStatus?: ETransactionEnabledStatusEnum;
  public ETransactionAttachPDF?: boolean;
  public ETransactionPaymentEnabled?: boolean;
  public IPNSupportEnabled?: boolean;
  public InvoiceMessage?: string;
  public AllowServiceDate?: boolean;
  public AllowShipping?: boolean;
  public DefaultShippingAccount?: string;
  public DefaultItem?: ReferenceType;
  public DefaultTerms?: ReferenceType;
  public DefaultDeliveryMethod?: string;
  public AutoApplyCredit?: boolean;
  public AutoApplyPayments?: boolean;
  public PrintItemWithZeroAmount?: boolean;
  public DefaultShipMethodRef?: ReferenceType;
  public DefaultMarkup?: number;
  public TrackReimbursableExpensesAsIncome?: boolean;
  public UsingSalesOrders?: boolean;
  public UsingPriceLevels?: boolean;
  public DefaultFOB?: string;
  public DefaultCustomerMessage?: string;

  public constructor(props?: SalesFormsPrefs) {
    this['@class'] = '.SalesFormsPrefs';

    Object.assign(this, props as any);
  }
}

export class VendorAndPurchasesPrefs {
  public EnableBills?: boolean;
  public TrackingByCustomer?: boolean;
  public BillableExpenseTracking?: boolean;
  public DefaultTerms?: ReferenceType;
  public DefaultMarkup?: number;
  public DefaultMarkupAccount?: ReferenceType;
  public AutomaticBillPayment?: boolean;
  public TPAREnabled?: boolean;
  public POCustomField?: CustomFieldDefinition;
  public MsgToVendors?: string;
  public UsingInventory?: boolean;
  public UsingMultiLocationInventory?: boolean;
  public DaysBillsAreDue?: number;
  public DiscountAccountRef?: ReferenceType;

  public constructor(props?: VendorAndPurchasesPrefs) {
    this['@class'] = '.VendorAndPurchasesPrefs';

    Object.assign(this, props as any);
  }
}

export class TimeTrackingPrefs {
  public UseServices?: boolean;
  public DefaultTimeItem?: ReferenceType;
  public BillCustomers?: boolean;
  public ShowBillRateToAll?: boolean;
  public WorkWeekStartDate?: WeekEnum;
  public TimeTrackingEnabled?: boolean;
  public MarkTimeEntriesBillable?: boolean;
  public MarkExpensesAsBillable?: boolean;

  public constructor(props?: TimeTrackingPrefs) {
    this['@class'] = '.TimeTrackingPrefs';

    Object.assign(this, props as any);
  }
}

export class EmailMessagesPrefs {
  public NameValue?: NameValue;
  public InvoiceMessage?: EmailMessage;
  public EstimateMessage?: EmailMessage;
  public SalesReceiptMessage?: EmailMessage;
  public StatementMessage?: EmailMessage;

  public constructor(props?: EmailMessagesPrefs) {
    this['@class'] = '.EmailMessagesPrefs';

    Object.assign(this, props as any);
  }
}

export class PrintDocumentPrefs {
  public NameValue?: NameValue;

  public constructor(props?: PrintDocumentPrefs) {
    this['@class'] = '.PrintDocumentPrefs';

    Object.assign(this, props as any);
  }
}

export class ReportPrefs {
  public ReportBasis?: ReportBasisEnum;
  public CalcAgingReportFromTxnDate?: boolean;

  public constructor(props?: ReportPrefs) {
    this['@class'] = '.ReportPrefs';

    Object.assign(this, props as any);
  }
}

export class OtherPrefs {
  public NameValue?: NameValue;

  public constructor(props?: OtherPrefs) {
    this['@class'] = '.OtherPrefs';

    Object.assign(this, props as any);
  }
}

export class UOMRef {
  public Unit: string;
  public UOMSetRef: ReferenceType;

  public constructor(props?: UOMRef) {
    this['@class'] = '.UOMRef';

    Object.assign(this, props as any);
  }
}

export class UOMConvUnit {
  public Name?: string;
  public Abbrv?: string;
  public ConvRatio?: number;

  public constructor(props?: UOMConvUnit) {
    this['@class'] = '.UOMConvUnit';

    Object.assign(this, props as any);
  }
}

export class OLBTxnDetail {
  public PostDate?: Date;
  public TxnDate?: Date;
  public Amount?: number;
  public ReferenceNumber?: string;
  public TxnStatus?: string;

  public constructor(props?: OLBTxnDetail) {
    this['@class'] = '.OLBTxnDetail';

    Object.assign(this, props as any);
  }
}

export class OLBTxn {
  public AccountId?: ReferenceType;
  public LastPostingDate?: Date;
  public TxnsDownloadTime?: Date;
  public OLBTxnDetail?: OLBTxnDetail;

  public constructor(props?: OLBTxn) {
    this['@class'] = '.OLBTxn';

    Object.assign(this, props as any);
  }
}

export class OLBTransaction {
  public OLBDownloadTime?: Date;
  public OLBTxn?: OLBTxn;

  public constructor(props?: OLBTransaction) {
    this['@class'] = '.OLBTransaction';

    Object.assign(this, props as any);
  }
}

export class OLBAccount {
  public AccountId?: ReferenceType;
  public AccountDetails?: string;
  public SubscribedToApp?: boolean;
  public AppVersion?: string;
  public LastBankBalance?: number;

  public constructor(props?: OLBAccount) {
    this['@class'] = '.OLBAccount';

    Object.assign(this, props as any);
  }
}

export class OLBStatus {
  public OLBAccount?: OLBAccount;

  public constructor(props?: OLBStatus) {
    this['@class'] = '.OLBStatus';

    Object.assign(this, props as any);
  }
}

export class BudgetDetail {
  public BudgetDate?: Date;
  public Amount?: number;
  public AccountRef?: ReferenceType;
  public CustomerRef?: ReferenceType;
  public ClassRef?: ReferenceType;
  public DepartmentRef?: ReferenceType;

  public constructor(props?: BudgetDetail) {
    this['@class'] = '.BudgetDetail';

    Object.assign(this, props as any);
  }
}

export class StatusInfo {
  public status?: string;
  public statusDate?: Date;
  public callToAction?: string;

  public constructor(props?: StatusInfo) {
    this['@class'] = '.StatusInfo';

    Object.assign(this, props as any);
  }
}

export class QbdtEntityIdMapping extends IntuitEntity {
  public QboEntityId: string;
  public QbdtExportableId: string;
  public QboEntityType: string;
  public QbdtEntityType: string;

  public constructor(props?: QbdtEntityIdMapping) {
    super();

    this['@class'] = '.QbdtEntityIdMapping';

    Object.assign(this, props as any);
  }
}

export class Company extends IntuitEntity {
  public CompanyName?: string;
  public LegalName?: string;
  public CompanyAddr?: PhysicalAddress;
  public CustomerCommunicationAddr?: PhysicalAddress;
  public LegalAddr?: PhysicalAddress;
  public CompanyEmailAddr?: EmailAddress;
  public CustomerCommunicationEmailAddr?: EmailAddress;
  public CompanyURL?: WebSiteAddress;
  public PrimaryPhone?: TelephoneNumber;
  public OtherContactInfo?: ContactInfo;
  public CompanyFileName?: string;
  public FlavorStratum?: string;
  public SampleFile?: boolean;
  public CompanyUserId?: string;
  public CompanyUserAdminEmail?: string;
  public CompanyStartDate?: Date;
  public EmployerId?: string;
  public FiscalYearStartMonth?: MonthEnum;
  public TaxYearStartMonth?: MonthEnum;
  public QBVersion?: string;
  public Country?: string;
  public ShipAddr?: PhysicalAddress;
  public OtherAddr?: PhysicalAddress;
  public Mobile?: TelephoneNumber;
  public Fax?: TelephoneNumber;
  public Email?: EmailAddress;
  public WebSite?: WebSiteAddress;
  public LastImportedTime?: Date;
  public SupportedLanguages?: string;
  public DefaultTimeZone?: string;
  public MultiByteCharsSupported?: boolean;
  public NameValue?: NameValue;
  public CompanyInfoEx?: IntuitAnyType;

  public constructor(props?: Company) {
    super();

    this['@class'] = '.Company';

    Object.assign(this, props as any);
  }
}

export class CompanyInfo extends IntuitEntity {
  public CompanyName?: string;
  public LegalName?: string;
  public CompanyAddr?: PhysicalAddress;
  public CustomerCommunicationAddr?: PhysicalAddress;
  public LegalAddr?: PhysicalAddress;
  public CompanyEmailAddr?: EmailAddress;
  public CustomerCommunicationEmailAddr?: EmailAddress;
  public CompanyURL?: WebSiteAddress;
  public PrimaryPhone?: TelephoneNumber;
  public OtherContactInfo?: ContactInfo;
  public CompanyFileName?: string;
  public FlavorStratum?: string;
  public SampleFile?: boolean;
  public CompanyUserId?: string;
  public CompanyUserAdminEmail?: string;
  public CompanyStartDate?: Date;
  public EmployerId?: string;
  public FiscalYearStartMonth?: MonthEnum;
  public TaxYearStartMonth?: MonthEnum;
  public QBVersion?: string;
  public Country?: string;
  public ShipAddr?: PhysicalAddress;
  public OtherAddr?: PhysicalAddress;
  public Mobile?: TelephoneNumber;
  public Fax?: TelephoneNumber;
  public Email?: EmailAddress;
  public WebAddr?: WebSiteAddress;
  public LastImportedTime?: Date;
  public LastSyncTime?: Date;
  public SupportedLanguages?: string;
  public DefaultTimeZone?: string;
  public MultiByteCharsSupported?: boolean;
  public NameValue?: NameValue;
  public FifoCalculationStatus?: FifoCalculationStatus;
  public CompanyInfoEx?: IntuitAnyType;

  public constructor(props?: CompanyInfo) {
    super();

    this['@class'] = '.CompanyInfo';

    Object.assign(this, props as any);
  }
}

export class Transaction extends IntuitEntity {
  public DocNumber?: string;
  public TxnDate?: Date;
  public DepartmentRef?: ReferenceType;
  public CurrencyRef?: ReferenceType;
  public ExchangeRate?: number;
  public PrivateNote?: string;
  public TxnStatus?: string;
  public LinkedTxn?: LinkedTxn;
  public Line?: Line;
  public TxnTaxDetail?: TxnTaxDetail;
  public TxnSource?: string;
  public TaxFormType?: string;
  public TaxFormNum?: string;
  public TransactionLocationType?: string;
  public Tag?: Tag;
  public TxnApprovalInfo?: TxnApprovalInfo;

  public constructor(props?: Transaction) {
    super();

    this['@class'] = '.Transaction';

    Object.assign(this, props as any);
  }
}

export class SalesTransaction extends Transaction {
  public AutoDocNumber?: boolean;
  public CustomerRef?: ReferenceType;
  public CustomerMemo?: MemoRef;
  public BillAddr?: PhysicalAddress;
  public ShipAddr?: PhysicalAddress;
  public FreeFormAddress?: boolean;
  public ShipFromAddr?: PhysicalAddress;
  public RemitToRef?: ReferenceType;
  public ClassRef?: ReferenceType;
  public SalesTermRef?: ReferenceType;
  public DueDate?: Date;
  public SalesRepRef?: ReferenceType;
  public PONumber?: string;
  public FOB?: string;
  public ShipMethodRef?: ReferenceType;
  public ShipDate?: Date;
  public TrackingNum?: string;
  public GlobalTaxCalculation?: GlobalTaxCalculationEnum;
  public TotalAmt?: number;
  public HomeTotalAmt?: number;
  public ApplyTaxAfterDiscount?: boolean;
  public TemplateRef?: ReferenceType;
  public PrintStatus?: PrintStatusEnum;
  public EmailStatus?: EmailStatusEnum;
  public BillEmail?: EmailAddress;
  public BillEmailCc?: EmailAddress;
  public BillEmailBcc?: EmailAddress;
  public ARAccountRef?: ReferenceType;
  public Balance?: number;
  public HomeBalance?: number;
  public FinanceCharge?: boolean;
  public PaymentMethodRef?: ReferenceType;
  public PaymentRefNum?: string;
  public PaymentType?: PaymentTypeEnum;
  public DepositToAccountRef?: ReferenceType;
  public DeliveryInfo?: TransactionDeliveryInfo;
  public DiscountRate?: number;
  public DiscountAmt?: number;
  public GovtTxnRefIdentifier?: string;
  public TaxExemptionRef?: ReferenceType;

  public constructor(props?: SalesTransaction) {
    super();

    this['@class'] = '.SalesTransaction';

    Object.assign(this, props as any);
  }
}

export class Invoice extends SalesTransaction {
  public Deposit?: number;
  public AllowIPNPayment?: boolean;
  public AllowOnlinePayment?: boolean;
  public AllowOnlineCreditCardPayment?: boolean;
  public AllowOnlineACHPayment?: boolean;
  public EInvoiceStatus?: ETransactionStatusEnum;
  public ECloudStatusTimeStamp?: Date;
  public invoiceStatus?: string;
  public callToAction?: string;
  public invoiceStatusLog?: StatusInfo;
  public InvoiceEx?: IntuitAnyType;
  public LessCIS?: number;
  public InvoiceLink?: string;
  public PaymentDetailsMessage?: string;
  public ConvenienceFeeDetail?: ConvenienceFeeDetail;

  public constructor(props?: Invoice) {
    super();

    this['@class'] = '.Invoice';

    Object.assign(this, props as any);
  }
}

export class ConvenienceFeeDetail extends IntuitEntity {
  public ConvenienceFeeType?: ConvenienceFeeTypeEnum;
  public ConvenienceFeePercent?: number;

  public constructor(props?: ConvenienceFeeDetail) {
    super();

    this['@class'] = '.ConvenienceFeeDetail';

    Object.assign(this, props as any);
  }
}

export class SalesReceipt extends SalesTransaction {
  public SalesReceiptEx?: IntuitAnyType;
  public LessCIS?: number;

  public constructor(props?: SalesReceipt) {
    super();

    this['@class'] = '.SalesReceipt';

    Object.assign(this, props as any);
  }
}

export class Estimate extends SalesTransaction {
  public ExpirationDate?: Date;
  public AcceptedBy?: string;
  public AcceptedDate?: Date;
  public EstimateEx?: IntuitAnyType;

  public constructor(props?: Estimate) {
    super();

    this['@class'] = '.Estimate';

    Object.assign(this, props as any);
  }
}

export class EmailDeliveryInfo extends IntuitEntity {
  public DeliveryAddress?: EmailAddress;
  public DeliveryAddressCc?: EmailAddress;
  public DeliveryAddressBcc?: EmailAddress;
  public EmailMessage?: EmailMessage;
  public AllowOnlinePayment?: boolean;
  public AllowOnlineCreditCardPayment?: boolean;
  public AllowOnlineACHPayment?: boolean;
  public DeliveryInfo?: TransactionDeliveryInfo;
  public ETransactionStatus?: ETransactionStatusEnum;

  public constructor(props?: EmailDeliveryInfo) {
    super();

    this['@class'] = '.EmailDeliveryInfo';

    Object.assign(this, props as any);
  }
}

export class Tag extends IntuitEntity {
  public Name?: string;

  public constructor(props?: Tag) {
    super();

    this['@class'] = '.Tag';

    Object.assign(this, props as any);
  }
}

export class DiscountLineDetail extends DiscountOverride {
  public ServiceDate?: Date;
  public ClassRef?: ReferenceType;
  public TaxCodeRef?: ReferenceType;
  public DiscountLineDetailEx?: IntuitAnyType;

  public constructor(props?: DiscountLineDetail) {
    super();

    this['@class'] = '.DiscountLineDetail';

    Object.assign(this, props as any);
  }
}

export class FixedAsset extends IntuitEntity {
  public Name?: string;
  public Active?: boolean;
  public AcquiredAs?: AcquiredAsEnum;
  public PurchaseDesc?: string;
  public PurchaseDate?: Date;
  public PurchaseCost?: number;
  public Vendor?: string;
  public AssetAccountRef?: ReferenceType;
  public SalesDesc?: string;
  public SalesDate?: Date;
  public SalesPrice?: number;
  public SalesExpense?: number;
  public Location?: string;
  public PONumber?: string;
  public SerialNumber?: string;
  public WarrantyExpDate?: Date;
  public Description?: string;
  public Notes?: string;
  public AssetNum?: number;
  public CostBasis?: number;
  public Depreciation?: number;
  public BookValue?: number;
  public FixedAssetEx?: IntuitAnyType;

  public constructor(props?: FixedAsset) {
    super();

    this['@class'] = '.FixedAsset';

    Object.assign(this, props as any);
  }
}

export class SalesItemLineDetail extends ItemLineDetail {
  public ServiceDate?: Date;
  public TaxInclusiveAmt?: number;
  public DiscountRate?: number;
  public DiscountAmt?: number;
  public SalesItemLineDetailEx?: IntuitAnyType;

  public constructor(props?: SalesItemLineDetail) {
    super();

    this['@class'] = '.SalesItemLineDetail';

    Object.assign(this, props as any);
  }
}

export class ItemBasedExpenseLineDetail extends ItemLineDetail {
  public CustomerRef?: ReferenceType;
  public BillableStatus?: BillableStatusEnum;
  public TaxInclusiveAmt?: number;
  public ItemBasedExpenseLineDetailEx?: IntuitAnyType;

  public constructor(props?: ItemBasedExpenseLineDetail) {
    super();

    this['@class'] = '.ItemBasedExpenseLineDetail';

    Object.assign(this, props as any);
  }
}

export class PurchaseOrderItemLineDetail extends SalesItemLineDetail {
  public ManPartNum?: string;
  public ManuallyClosed?: boolean;
  public OpenQty?: number;
  public PurchaseOrderItemLineDetailEx?: IntuitAnyType;

  public constructor(props?: PurchaseOrderItemLineDetail) {
    super();

    this['@class'] = '.PurchaseOrderItemLineDetail';

    Object.assign(this, props as any);
  }
}

export class SalesOrderItemLineDetail extends SalesItemLineDetail {
  public ManuallyClosed?: boolean;

  public constructor(props?: SalesOrderItemLineDetail) {
    super();

    this['@class'] = '.SalesOrderItemLineDetail';

    Object.assign(this, props as any);
  }
}

export class TaxCode extends IntuitEntity {
  public Name?: string;
  public Description?: string;
  public Active?: boolean;
  public Hidden?: boolean;
  public Taxable?: boolean;
  public TaxGroup?: boolean;
  public SalesTaxRateList?: TaxRateList;
  public PurchaseTaxRateList?: TaxRateList;
  public AdjustmentTaxRateList?: TaxRateList;
  public TaxCodeEx?: IntuitAnyType;
  public TaxCodeConfigType?: GTMConfigTypeEnum;

  public constructor(props?: TaxCode) {
    super();

    this['@class'] = '.TaxCode';

    Object.assign(this, props as any);
  }
}

export class TaxRate extends IntuitEntity {
  public Name?: string;
  public Description?: string;
  public Active?: boolean;
  public RateValue?: number;
  public AgencyRef?: ReferenceType;
  public TaxReturnLineRef?: ReferenceType;
  public EffectiveTaxRate?: EffectiveTaxRate;
  public SpecialTaxType?: SpecialTaxTypeEnum;
  public DisplayType?: TaxRateDisplayTypeEnum;
  public TaxRateEx?: IntuitAnyType;

  public constructor(props?: TaxRate) {
    super();

    this['@class'] = '.TaxRate';

    Object.assign(this, props as any);
  }
}

export class Account extends IntuitEntity {
  public Name?: string;
  public SubAccount?: boolean;
  public ParentRef?: ReferenceType;
  public Description?: string;
  public FullyQualifiedName?: string;
  public AccountAlias?: string;
  public TxnLocationType?: string;
  public Active?: boolean;
  public Classification?: AccountClassificationEnum;
  public AccountType?: AccountTypeEnum;
  public AccountSubType?: string;
  public AccountPurposes?: ReferenceType;
  public AcctNum?: string;
  public AcctNumExtn?: string;
  public BankNum?: string;
  public OpeningBalance?: number;
  public OpeningBalanceDate?: Date;
  public CurrentBalance?: number;
  public CurrentBalanceWithSubAccounts?: number;
  public CurrencyRef?: ReferenceType;
  public TaxAccount?: boolean;
  public TaxCodeRef?: ReferenceType;
  public OnlineBankingEnabled?: boolean;
  public FIName?: string;
  public JournalCodeRef?: ReferenceType;
  public AccountEx?: IntuitAnyType;

  public constructor(props?: Account) {
    super();

    this['@class'] = '.Account';

    Object.assign(this, props as any);
  }
}

export class MasterAccount extends Account {
  public AccountExistsInCompany?: boolean;

  public constructor(props?: MasterAccount) {
    super();

    this['@class'] = '.MasterAccount';

    Object.assign(this, props as any);
  }
}

export class Purchase extends Transaction { //, TxnReferenceGroup
  public AccountRef?: ReferenceType;
  public PaymentMethodRef?: ReferenceType;
  public PaymentRefNum?: string;
  public PaymentType?: PaymentTypeEnum;
  public EntityRef?: ReferenceType;
  public Credit?: boolean;
  public RemitToAddr?: PhysicalAddress;
  public TotalAmt?: number;
  public Memo?: string;
  public PrintStatus?: PrintStatusEnum;
  public GlobalTaxCalculation?: GlobalTaxCalculationEnum;
  public PurchaseEx?: IntuitAnyType;
  public LessCIS?: number;
  public IncludeInAnnualTPAR?: boolean;

  public constructor(props?: Purchase) {
    super();

    this['@class'] = '.Purchase';

    Object.assign(this, props as any);
  }
}

export class PurchaseByVendor extends Transaction {
  public VendorRef?: ReferenceType;
  public APAccountRef?: ReferenceType;
  public TotalAmt?: number;
  public BillEmail?: EmailAddress;
  public ReplyEmail?: EmailAddress;
  public Memo?: string;
  public GlobalTaxCalculation?: GlobalTaxCalculationEnum;

  public constructor(props?: PurchaseByVendor) {
    super();

    this['@class'] = '.PurchaseByVendor';

    Object.assign(this, props as any);
  }
}

export class Bill extends PurchaseByVendor {
  public PayerRef?: ReferenceType;
  public SalesTermRef?: ReferenceType;
  public DueDate?: Date;
  public RemitToAddr?: PhysicalAddress;
  public ShipAddr?: PhysicalAddress;
  public VendorAddr?: PhysicalAddress;
  public Balance?: number;
  public HomeBalance?: number;
  public BillEx?: IntuitAnyType;
  public LessCIS?: number;
  public IncludeInAnnualTPAR?: boolean;

  public constructor(props?: Bill) {
    super();

    this['@class'] = '.Bill';

    Object.assign(this, props as any);
  }
}

export class VendorCredit extends PurchaseByVendor {
  public VendorAddr?: PhysicalAddress;
  public VendorCreditEx?: IntuitAnyType;
  public Balance?: number;
  public IncludeInAnnualTPAR?: boolean;

  public constructor(props?: VendorCredit) {
    super();

    this['@class'] = '.VendorCredit';

    Object.assign(this, props as any);
  }
}

export class StatementCharge extends Transaction {
  public Credit?: boolean;
  public CustomerRef?: ReferenceType;
  public RemitToRef?: ReferenceType;
  public ARAccountRef?: ReferenceType;
  public ClassRef?: ReferenceType;
  public DueDate?: Date;
  public BilledDate?: Date;
  public TotalAmt?: number;
  public StatementChargeEx?: IntuitAnyType;

  public constructor(props?: StatementCharge) {
    super();

    this['@class'] = '.StatementCharge';

    Object.assign(this, props as any);
  }
}

export class Class extends IntuitEntity {
  public Name?: string;
  public SubClass?: boolean;
  public ParentRef?: ReferenceType;
  public FullyQualifiedName?: string;
  public Active?: boolean;
  public ClassEx?: IntuitAnyType;

  public constructor(props?: Class) {
    super();

    this['@class'] = '.Class';

    Object.assign(this, props as any);
  }
}

export class JournalCode extends IntuitEntity {
  public Name?: string;
  public Type?: string;
  public Description?: string;
  public Active?: boolean;
  public JournalCodeEx?: IntuitAnyType;

  public constructor(props?: JournalCode) {
    super();

    this['@class'] = '.JournalCode';

    Object.assign(this, props as any);
  }
}

export class Payment extends Transaction {
  public CustomerRef?: ReferenceType;
  public RemitToRef?: ReferenceType;
  public ARAccountRef?: ReferenceType;
  public DepositToAccountRef?: ReferenceType;
  public PaymentMethodRef?: ReferenceType;
  public PaymentRefNum?: string;
  public PaymentType?: PaymentTypeEnum;
  public TotalAmt?: number;
  public UnappliedAmt?: number;
  public ProcessPayment?: boolean;
  public PaymentEx?: IntuitAnyType;

  public constructor(props?: Payment) {
    super();

    this['@class'] = '.Payment';

    Object.assign(this, props as any);
  }
}

export class PaymentMethod extends IntuitEntity {
  public Name?: string;
  public Active?: boolean;
  public Type?: string;
  public PaymentMethodEx?: IntuitAnyType;

  public constructor(props?: PaymentMethod) {
    super();

    this['@class'] = '.PaymentMethod';

    Object.assign(this, props as any);
  }
}

export class Department extends IntuitEntity {
  public Name?: string;
  public SubDepartment?: boolean;
  public ParentRef?: ReferenceType;
  public FullyQualifiedName?: string;
  public Active?: boolean;
  public DepartmentEx?: IntuitAnyType;
  public Address?: PhysicalAddress;

  public constructor(props?: Department) {
    super();

    this['@class'] = '.Department';

    Object.assign(this, props as any);
  }
}

export class Item extends IntuitEntity {
  public Name?: string;
  public Sku?: string;
  public Description?: string;
  public Active?: boolean;
  public SubItem?: boolean;
  public ParentRef?: ReferenceType;
  public Level?: number;
  public FullyQualifiedName?: string;
  public Taxable?: boolean;
  public SalesTaxIncluded?: boolean;
  public PercentBased?: boolean;
  public UnitPrice?: number;
  public RatePercent?: number;
  public Type?: ItemTypeEnum;
  public PaymentMethodRef?: ReferenceType;
  public UOMSetRef?: ReferenceType;
  public IncomeAccountRef?: ReferenceType;
  public PurchaseDesc?: string;
  public PurchaseTaxIncluded?: boolean;
  public PurchaseCost?: number;
  public ExpenseAccountRef?: ReferenceType;
  public COGSAccountRef?: ReferenceType;
  public AssetAccountRef?: ReferenceType;
  public PrefVendorRef?: ReferenceType;
  public AvgCost?: number;
  public TrackQtyOnHand?: boolean;
  public QtyOnHand?: number;
  public QtyOnPurchaseOrder?: number;
  public QtyOnSalesOrder?: number;
  public ReorderPoint?: number;
  public ManPartNum?: string;
  public DepositToAccountRef?: ReferenceType;
  public SalesTaxCodeRef?: ReferenceType;
  public PurchaseTaxCodeRef?: ReferenceType;
  public InvStartDate?: Date;
  public BuildPoint?: number;
  public PrintGroupedItems?: boolean;
  public SpecialItem?: boolean;
  public SpecialItemType?: SpecialItemTypeEnum;
  public ItemGroupDetail?: ItemGroupDetail;
  public ItemAssemblyDetail?: ItemAssemblyDetail;
  public AbatementRate?: number;
  public ReverseChargeRate?: number;
  public ServiceType?: string;
  public ItemCategoryType?: string;
  public ItemEx?: IntuitAnyType;
  public TaxClassificationRef?: ReferenceType;
  public UQCDisplayText?: string;
  public UQCId?: string;
  public ClassRef?: ReferenceType;

  public constructor(props?: Item) {
    super();

    this['@class'] = '.Item';

    Object.assign(this, props as any);
  }
}

export class Term extends IntuitEntity {
  public Name?: string;
  public Active?: boolean;
  public Type?: string;
  public DiscountPercent?: number;
  public SalesTermEx?: IntuitAnyType;

  public constructor(props?: Term) {
    super();

    this['@class'] = '.Term';

    Object.assign(this, props as any);
  }
}

export class BillPayment extends Transaction {
  public VendorRef?: ReferenceType;
  public VendorAddr?: PhysicalAddress;
  public APAccountRef?: ReferenceType;
  public PayType?: BillPaymentTypeEnum;
  public TotalAmt?: number;
  public BillPaymentEx?: IntuitAnyType;

  public constructor(props?: BillPayment) {
    super();

    this['@class'] = '.BillPayment';

    Object.assign(this, props as any);
  }
}

export class Deposit extends Transaction {
  public DepositToAccountRef?: ReferenceType;
  public CashBack?: CashBackInfo;
  public GlobalTaxCalculation?: GlobalTaxCalculationEnum;
  public TotalAmt?: number;
  public HomeTotalAmt?: number;
  public DepositEx?: IntuitAnyType;

  public constructor(props?: Deposit) {
    super();

    this['@class'] = '.Deposit';

    Object.assign(this, props as any);
  }
}

export class Transfer extends Transaction {
  public FromAccountRef?: ReferenceType;
  public ToAccountRef?: ReferenceType;
  public Amount?: number;
  public ClassRef?: ReferenceType;
  public TransferEx: IntuitAnyType;

  public constructor(props?: Transfer) {
    super();

    this['@class'] = '.Transfer';

    Object.assign(this, props as any);
  }
}

export class PurchaseOrder extends PurchaseByVendor {
  public TaxCodeRef?: ReferenceType;
  public ClassRef?: ReferenceType;
  public ReimbursableInfoRef?: ReferenceType;
  public SalesTermRef?: ReferenceType;
  public DueDate?: Date;
  public ExpectedDate?: Date;
  public VendorAddr?: PhysicalAddress;
  public ShipTo?: ReferenceType;
  public ShipAddr?: PhysicalAddress;
  public ShipMethodRef?: ReferenceType;
  public FOB?: string;
  public POEmail?: EmailAddress;
  public TemplateRef?: ReferenceType;
  public PrintStatus?: PrintStatusEnum;
  public EmailStatus?: EmailStatusEnum;
  public ManuallyClosed?: boolean;
  public POStatus?: PurchaseOrderStatusEnum;
  public PurchaseOrderEx?: IntuitAnyType;

  public constructor(props?: PurchaseOrder) {
    super();

    this['@class'] = '.PurchaseOrder';

    Object.assign(this, props as any);
  }
}

export class SalesOrder extends SalesTransaction {
  public ManuallyClosed?: boolean;
  public SalesOrderEx?: IntuitAnyType;

  public constructor(props?: SalesOrder) {
    super();

    this['@class'] = '.SalesOrder';

    Object.assign(this, props as any);
  }
}

export class CreditMemo extends SalesTransaction {
  public RemainingCredit?: number;
  public InvoiceRef?: ReferenceType;
  public CreditMemoEx?: IntuitAnyType;

  public constructor(props?: CreditMemo) {
    super();

    this['@class'] = '.CreditMemo';

    Object.assign(this, props as any);
  }
}

export class RefundReceipt extends SalesTransaction {
  public RemainingCredit?: number;
  public RefundReceiptEx?: IntuitAnyType;

  public constructor(props?: RefundReceipt) {
    super();

    this['@class'] = '.RefundReceipt';

    Object.assign(this, props as any);
  }
}

export class CreditCardPaymentTxn extends Transaction {
  public CreditCardAccountRef?: ReferenceType;
  public BankAccountRef?: ReferenceType;
  public Amount?: number;
  public CreditCardPaymentEx: IntuitAnyType;

  public constructor(props?: CreditCardPaymentTxn) {
    super();

    this['@class'] = '.CreditCardPaymentTxn';

    Object.assign(this, props as any);
  }
}

export class Currency extends IntuitEntity {
  public Name?: string;
  public Active?: boolean;
  public Code?: currencyCode;
  public Separator?: string;
  public Format?: string;
  public DecimalPlaces?: number;
  public DecimalSeparator?: string;
  public Symbol?: string;
  public SymbolPosition?: SymbolPositionEnum;
  public UserDefined?: boolean;
  public ExchangeRate?: number;
  public AsOfDate?: Date;
  public CurrencyEx?: IntuitAnyType;

  public constructor(props?: Currency) {
    super();

    this['@class'] = '.Currency';

    Object.assign(this, props as any);
  }
}

export class CompanyCurrency extends IntuitEntity {
  public Code?: string;
  public Name?: string;
  public Active?: boolean;
  public CompanyCurrencyEx?: IntuitAnyType;

  public constructor(props?: CompanyCurrency) {
    super();

    this['@class'] = '.CompanyCurrency';

    Object.assign(this, props as any);
  }
}

export class ExchangeRate extends IntuitEntity {
  public SourceCurrencyCode?: string;
  public TargetCurrencyCode?: string;
  public Rate?: number;
  public AsOfDate?: Date;
  public ExchangeRateEx?: IntuitAnyType;

  public constructor(props?: ExchangeRate) {
    super();

    this['@class'] = '.ExchangeRate';

    Object.assign(this, props as any);
  }
}

export class SalesRep extends IntuitEntity {
  public NameOf?: SalesRepTypeEnum;
  public Active?: boolean;
  public Initials?: string;
  public SalesRepEx?: IntuitAnyType;

  public constructor(props?: SalesRep) {
    super();

    this['@class'] = '.SalesRep';

    Object.assign(this, props as any);
  }
}

export class PriceLevel extends IntuitEntity {
  public Active: boolean;
  public PriceLevelType: PriceLevelTypeEnum;
  public CurrencyRef?: ReferenceType;
  public PriceLevelEx?: IntuitAnyType;

  public constructor(props?: PriceLevel) {
    super();

    this['@class'] = '.PriceLevel';

    Object.assign(this, props as any);
  }
}

export class PriceLevelPerItem extends IntuitEntity {
  public ItemRef?: ReferenceType;
  public PriceLevelPerItemEx?: IntuitAnyType;

  public constructor(props?: PriceLevelPerItem) {
    super();

    this['@class'] = '.PriceLevelPerItem';

    Object.assign(this, props as any);
  }
}

export class CustomerMsg extends IntuitEntity {
  public Name?: string;
  public Active?: boolean;
  public CustomerMsgEx?: IntuitAnyType;

  public constructor(props?: CustomerMsg) {
    super();

    this['@class'] = '.CustomerMsg';

    Object.assign(this, props as any);
  }
}

export class JournalEntry extends Transaction {
  public Adjustment?: boolean;
  public HomeCurrencyAdjustment?: boolean;
  public EnteredInHomeCurrency?: boolean;
  public TotalAmt?: number;
  public HomeTotalAmt?: number;
  public JournalEntryEx?: IntuitAnyType;

  public constructor(props?: JournalEntry) {
    super();

    this['@class'] = '.JournalEntry';

    Object.assign(this, props as any);
  }
}

export class TimeActivity extends IntuitEntity {
  public TimeZone?: string;
  public TxnDate?: Date;
  public NameOf?: TimeActivityTypeEnum;
  public CustomerRef?: ReferenceType;
  public DepartmentRef?: ReferenceType;
  public ItemRef?: ReferenceType;
  public ClassRef?: ReferenceType;
  public PayrollItemRef?: ReferenceType;
  public BillableStatus?: BillableStatusEnum;
  public Taxable?: boolean;
  public HourlyRate?: number;
  public Hours?: number;
  public Minutes?: number;
  public BreakHours?: number;
  public BreakMinutes?: number;
  public StartTime?: Date;
  public EndTime?: Date;
  public Description?: string;
  public TimeActivityEx?: IntuitAnyType;
  public HoursInEmployeeTimeZone?: boolean;

  public constructor(props?: TimeActivity) {
    super();

    this['@class'] = '.TimeActivity';

    Object.assign(this, props as any);
  }
}

export class InventorySite extends IntuitEntity {
  public Name?: string;
  public Active?: boolean;
  public DefaultSite?: boolean;
  public Description?: string;
  public Contact?: string;
  public Addr?: PhysicalAddress;
  public ContactInfo?: ContactInfo;
  public InventorySiteEx?: IntuitAnyType;

  public constructor(props?: InventorySite) {
    super();

    this['@class'] = '.InventorySite';

    Object.assign(this, props as any);
  }
}

export class ShipMethod extends IntuitEntity {
  public Name?: string;
  public Active: boolean;
  public ShipMethodEx?: IntuitAnyType;

  public constructor(props?: ShipMethod) {
    super();

    this['@class'] = '.ShipMethod';

    Object.assign(this, props as any);
  }
}

export class Task extends IntuitEntity {
  public Notes?: string;
  public From?: string;
  public Active?: boolean;
  public Done?: boolean;
  public ReminderDate?: Date;
  public TaskEx?: IntuitAnyType;

  public constructor(props?: Task) {
    super();

    this['@class'] = '.Task';

    Object.assign(this, props as any);
  }
}

export class UserAlert extends IntuitEntity {
  public Notes?: string;
  public Active?: boolean;
  public Done?: boolean;
  public Type?: string;
  public ReminderDate?: Date;
  public ExpireDate?: Date;
  public DueDate?: Date;
  public URL?: string;
  public Filter?: string;
  public NameValue?: NameValue;
  public UserAlertEx?: IntuitAnyType;

  public constructor(props?: UserAlert) {
    super();

    this['@class'] = '.UserAlert';

    Object.assign(this, props as any);
  }
}

export class Preferences extends IntuitEntity {
  public AccountingInfoPrefs?: CompanyAccountingPrefs;
  public AdvancedInventoryPrefs?: AdvancedInventoryPrefs;
  public ProductAndServicesPrefs?: ProductAndServicesPrefs;
  public SalesFormsPrefs?: SalesFormsPrefs;
  public EmailMessagesPrefs?: EmailMessagesPrefs;
  public PrintDocumentPrefs?: PrintDocumentPrefs;
  public VendorAndPurchasesPrefs?: VendorAndPurchasesPrefs;
  public TimeTrackingPrefs?: TimeTrackingPrefs;
  public TaxPrefs?: TaxPrefs;
  public FinanceChargesPrefs?: FinanceChargePrefs;
  public CurrencyPrefs?: CurrencyPrefs;
  public ReportPrefs?: ReportPrefs;
  public OtherPrefs?: OtherPrefs;

  public constructor(props?: Preferences) {
    super();

    this['@class'] = '.Preferences';

    Object.assign(this, props as any);
  }
}

export class UOM extends IntuitEntity {
  public Name?: string;
  public Abbrv?: string;
  public BaseType?: UOMBaseTypeEnum;
  public ConvUnit?: UOMConvUnit;

  public constructor(props?: UOM) {
    super();

    this['@class'] = '.UOM';

    Object.assign(this, props as any);
  }
}

export class TemplateName extends IntuitEntity {
  public Name?: string;
  public Active?: boolean;
  public Type?: TemplateTypeEnum;

  public constructor(props?: TemplateName) {
    super();

    this['@class'] = '.TemplateName';

    Object.assign(this, props as any);
  }
}

export class Attachable extends IntuitEntity {
  public FileName?: string;
  public FileAccessUri?: string;
  public TempDownloadUri?: string;
  public Size?: number;
  public ContentType?: string;
  public Category?: string;
  public Lat?: string;
  public Long?: string;
  public PlaceName?: string;
  public Note?: string;
  public Tag?: string;
  public ThumbnailFileAccessUri?: string;
  public ThumbnailTempDownloadUri?: string;
  public AttachableEx?: IntuitAnyType;

  public constructor(props?: Attachable) {
    super();

    this['@class'] = '.Attachable';

    Object.assign(this, props as any);
  }
}

export class Budget extends IntuitEntity {
  public Name?: string;
  public StartDate?: Date;
  public EndDate?: Date;
  public BudgetType?: BudgetTypeEnum;
  public BudgetEntryType?: BudgetEntryTypeEnum;
  public Active?: boolean;
  public BudgetDetail?: BudgetDetail;

  public constructor(props?: Budget) {
    super();

    this['@class'] = '.Budget';

    Object.assign(this, props as any);
  }
}

export class TDSMetadata extends IntuitEntity {
  public TDSEntityTypes?: NameValue;
  public TDSSectionTypes?: NameValue;

  public constructor(props?: TDSMetadata) {
    super();

    this['@class'] = '.TDSMetadata';

    Object.assign(this, props as any);
  }
}

export class ReimburseCharge extends Transaction {
  public CustomerRef?: ReferenceType;
  public Amount?: number;

  public constructor(props?: ReimburseCharge) {
    super();

    this['@class'] = '.ReimburseCharge';

    Object.assign(this, props as any);
  }
}

export class ChargeCredit extends Transaction {
  public Credit?: boolean;
  public CustomerRef?: ReferenceType;
  public RemitToRef?: ReferenceType;
  public ARAccountRef?: ReferenceType;
  public ClassRef?: ReferenceType;
  public DueDate?: Date;
  public BilledDate?: Date;
  public TotalAmt?: number;
  public ChargeCreditEx?: IntuitAnyType;

  public constructor(props?: ChargeCredit) {
    super();

    this['@class'] = '.ChargeCredit';

    Object.assign(this, props as any);
  }
}

export class TaxReturn extends IntuitEntity {
  public UpcomingFiling?: boolean;
  public StartDate?: Date;
  public EndDate?: Date;
  public FileDate?: Date;
  public AgencyPaymentDate?: Date;
  public AgencyPaymentAmount?: number;
  public NetTaxAmountDue?: number;
  public FlatRateSavingsAmountDue?: number;
  public PayGWithheldAmount?: number;
  public AgencyRef?: ReferenceType;
  public TaxReturnStatus?: TaxReturnStatusEnum;
  public TaxReturnEFilingFailureReason?: string;
  public EFileErrorFixByDate?: Date;
  public AgencyPaymentMethod?: AgencyPaymentMethodEnum;
  public TaxReturnCode?: string;

  public constructor(props?: TaxReturn) {
    super();

    this['@class'] = '.TaxReturn';

    Object.assign(this, props as any);
  }
}

export class TaxClassification extends IntuitEntity {
  public Code?: string;
  public Name?: string;
  public Description?: string;
  public Level?: string;
  public ParentRef?: ReferenceType;
  public ApplicableTo?: ItemTypeEnum;

  public constructor(props?: TaxClassification) {
    super();

    this['@class'] = '.TaxClassification';

    Object.assign(this, props as any);
  }
}

export class TaxPayment extends IntuitEntity {
  public PaymentDate?: Date;
  public PaymentAccountRef?: ReferenceType;
  public PaymentAmount?: number;
  public Description?: string;
  public Refund?: boolean;

  public constructor(props?: TaxPayment) {
    super();

    this['@class'] = '.TaxPayment';

    Object.assign(this, props as any);
  }
}

export enum AcquiredAsEnum {
  New = 'New',
  Used = 'Used'
}

export enum MonthEnum {
  January = 'January',
  February = 'February',
  March = 'March',
  April = 'April',
  May = 'May',
  June = 'June',
  July = 'July',
  August = 'August',
  September = 'September',
  October = 'October',
  November = 'November',
  December = 'December'
}

export enum WeekEnum {
  Sunday = 'Sunday',
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday'
}

export enum UOMFeatureTypeEnum {
  Disabled = 'Disabled',
  SinglePerItem = 'SinglePerItem',
  MultiplePerItem = 'MultiplePerItem'
}

export enum AccountClassificationEnum {
  Asset = 'Asset',
  Equity = 'Equity',
  Expense = 'Expense',
  Liability = 'Liability',
  Revenue = 'Revenue'
}

export enum ItemTypeEnum {
  Assembly = 'Assembly',
  Category = 'Category',
  FixedAsset = 'Fixed Asset',
  Group = 'Group',
  Inventory = 'Inventory',
  NonInventory = 'NonInventory',
  OtherCharge = 'Other Charge',
  Payment = 'Payment',
  Service = 'Service',
  Subtotal = 'Subtotal',
  Discount = 'Discount',
  Tax = 'Tax',
  TaxGroup = 'Tax Group',
  Bundle = 'Bundle'
}

export enum CustomerTypeEnum {
  Customer = 'Customer',
  Job = 'Job'
}

export enum BillableStatusEnum {
  Billable = 'Billable',
  NotBillable = 'NotBillable',
  HasBeenBilled = 'HasBeenBilled'
}

export enum TaxFormTypeEnum {
  FormC = 'Form C',
  FormF = 'Form F',
  FormI = 'Form I',
  FormH = 'Form H',
  FormE1 = 'Form E1',
  FormE2 = 'Form E2'
}

export enum EntityTypeEnum {
  Customer = 'Customer',
  Employee = 'Employee',
  Job = 'Job',
  Other = 'Other',
  Vendor = 'Vendor'
}

export enum TaxApplicableOnEnum {
  Purchase = 'Purchase',
  Sales = 'Sales'
}

export enum PostingTypeEnum {
  Credit = 'Credit',
  Debit = 'Debit'
}

export enum LineDetailTypeEnum {
  PaymentLineDetail = 'PaymentLineDetail',
  DiscountLineDetail = 'DiscountLineDetail',
  TaxLineDetail = 'TaxLineDetail',
  SalesItemLineDetail = 'SalesItemLineDetail',
  ItemBasedExpenseLineDetail = 'ItemBasedExpenseLineDetail',
  AccountBasedExpenseLineDetail = 'AccountBasedExpenseLineDetail',
  DepositLineDetail = 'DepositLineDetail',
  PurchaseOrderItemLineDetail = 'PurchaseOrderItemLineDetail',
  ItemReceiptLineDetail = 'ItemReceiptLineDetail',
  JournalEntryLineDetail = 'JournalEntryLineDetail',
  GroupLineDetail = 'GroupLineDetail',
  DescriptionOnly = 'DescriptionOnly',
  SubTotalLineDetail = 'SubTotalLineDetail',
  SalesOrderItemLineDetail = 'SalesOrderItemLineDetail',
  TDSLineDetail = 'TDSLineDetail'
}

export enum AccountTypeEnum {
  Bank = 'Bank',
  AccountsReceivable = 'Accounts Receivable',
  OtherCurrentAsset = 'Other Current Asset',
  FixedAsset = 'Fixed Asset',
  OtherAsset = 'Other Asset',
  AccountsPayable = 'Accounts Payable',
  CreditCard = 'Credit Card',
  OtherCurrentLiability = 'Other Current Liability',
  LongTermLiability = 'Long Term Liability',
  Equity = 'Equity',
  Income = 'Income',
  CostofGoodsSold = 'Cost of Goods Sold',
  Expense = 'Expense',
  OtherIncome = 'Other Income',
  OtherExpense = 'Other Expense',
  Non_Posting = 'Non-Posting'
}

export enum TaxRateDisplayTypeEnum {
  ReadOnly = 'ReadOnly',
  HideInTransactionForms = 'HideInTransactionForms',
  HideInPrintedForms = 'HideInPrintedForms',
  HideInAll = 'HideInAll'
}

export enum AccountSubTypeEnum {
  IncomeTaxPayable = 'IncomeTaxPayable',
  IntangibleAssetsOther = 'IntangibleAssetsOther',
  AccountsPayable = 'AccountsPayable',
  AccountsReceivable = 'AccountsReceivable',
  AccumulatedAdjustment = 'AccumulatedAdjustment',
  AccumulatedAmortization = 'AccumulatedAmortization',
  AccumulatedAmortizationOfOtherAssets = 'AccumulatedAmortizationOfOtherAssets',
  AccumulatedDepletion = 'AccumulatedDepletion',
  AccumulatedDepreciation = 'AccumulatedDepreciation',
  AdvertisingPromotional = 'AdvertisingPromotional',
  AllowanceForBadDebts = 'AllowanceForBadDebts',
  Amortization = 'Amortization',
  Auto = 'Auto',
  BadDebts = 'BadDebts',
  BankCharges = 'BankCharges',
  Buildings = 'Buildings',
  CashOnHand = 'CashOnHand',
  CharitableContributions = 'CharitableContributions',
  Checking = 'Checking',
  CommonStock = 'CommonStock',
  CostOfLabor = 'CostOfLabor',
  CostOfLaborCos = 'CostOfLaborCos',
  CreditCard = 'CreditCard',
  DepletableAssets = 'DepletableAssets',
  Depreciation = 'Depreciation',
  DevelopmentCosts = 'DevelopmentCosts',
  DirectDepositPayable = 'DirectDepositPayable',
  DiscountsRefundsGiven = 'DiscountsRefundsGiven',
  DividendIncome = 'DividendIncome',
  DuesSubscriptions = 'DuesSubscriptions',
  EmployeeCashAdvances = 'EmployeeCashAdvances',
  Entertainment = 'Entertainment',
  EntertainmentMeals = 'EntertainmentMeals',
  EquipmentRental = 'EquipmentRental',
  EquipmentRentalCos = 'EquipmentRentalCos',
  EstimatedTaxes = 'EstimatedTaxes',
  ExchangeGainOrLoss = 'ExchangeGainOrLoss',
  FederalIncomeTaxPayable = 'FederalIncomeTaxPayable',
  FinanceCosts = 'FinanceCosts',
  FixedAssetComputers = 'FixedAssetComputers',
  FixedAssetCopiers = 'FixedAssetCopiers',
  FixedAssetFurniture = 'FixedAssetFurniture',
  FixedAssetPhone = 'FixedAssetPhone',
  FixedAssetPhotoVideo = 'FixedAssetPhotoVideo',
  FixedAssetSoftware = 'FixedAssetSoftware',
  FixedAssetOtherToolsEquipment = 'FixedAssetOtherToolsEquipment',
  FurnitureAndFixtures = 'FurnitureAndFixtures',
  GlobalTaxExpense = 'GlobalTaxExpense',
  GlobalTaxPayable = 'GlobalTaxPayable',
  GlobalTaxSuspense = 'GlobalTaxSuspense',
  GasAndFuel = 'GasAndFuel',
  Goodwill = 'Goodwill',
  Gratuity = 'Gratuity',
  Healthcare = 'Healthcare',
  HomeOffice = 'HomeOffice',
  HomeownerRentalInsurance = 'HomeownerRentalInsurance',
  Insurance = 'Insurance',
  InsurancePayable = 'InsurancePayable',
  IntangibleAssets = 'IntangibleAssets',
  InterestEarned = 'InterestEarned',
  InterestPaid = 'InterestPaid',
  Inventory = 'Inventory',
  Investment_MortgageRealEstateLoans = 'Investment_MortgageRealEstateLoans',
  Investment_Other = 'Investment_Other',
  Investment_TaxExemptSecurities = 'Investment_TaxExemptSecurities',
  Investment_USGovernmentObligations = 'Investment_USGovernmentObligations',
  Land = 'Land',
  LeaseBuyout = 'LeaseBuyout',
  LeaseholdImprovements = 'LeaseholdImprovements',
  LegalProfessionalFees = 'LegalProfessionalFees',
  Licenses = 'Licenses',
  LineOfCredit = 'LineOfCredit',
  LoanPayable = 'LoanPayable',
  LoansToOfficers = 'LoansToOfficers',
  LoansToOthers = 'LoansToOthers',
  LoansToStockholders = 'LoansToStockholders',
  MachineryAndEquipment = 'MachineryAndEquipment',
  MoneyMarket = 'MoneyMarket',
  MortgageInterestHomeOffice = 'MortgageInterestHomeOffice',
  NonProfitIncome = 'NonProfitIncome',
  NotesPayable = 'NotesPayable',
  OfficeGeneralAdministrativeExpenses = 'OfficeGeneralAdministrativeExpenses',
  OpeningBalanceEquity = 'OpeningBalanceEquity',
  OrganizationalCosts = 'OrganizationalCosts',
  OtherBusinessExpenses = 'OtherBusinessExpenses',
  OtherCostsOfServiceCos = 'OtherCostsOfServiceCos',
  OtherCurrentAssets = 'OtherCurrentAssets',
  OtherCurrentLiabilities = 'OtherCurrentLiabilities',
  OtherFixedAssets = 'OtherFixedAssets',
  OtherHomeOfficeExpenses = 'OtherHomeOfficeExpenses',
  OtherInvestmentIncome = 'OtherInvestmentIncome',
  OtherLongTermAssets = 'OtherLongTermAssets',
  OtherLongTermLiabilities = 'OtherLongTermLiabilities',
  OtherMiscellaneousExpense = 'OtherMiscellaneousExpense',
  OtherMiscellaneousIncome = 'OtherMiscellaneousIncome',
  OtherMiscellaneousServiceCost = 'OtherMiscellaneousServiceCost',
  OtherPrimaryIncome = 'OtherPrimaryIncome',
  OtherVehicleExpenses = 'OtherVehicleExpenses',
  OwnersEquity = 'OwnersEquity',
  PaidInCapitalOrSurplus = 'PaidInCapitalOrSurplus',
  ParkingAndTolls = 'ParkingAndTolls',
  PartnerContributions = 'PartnerContributions',
  PartnerDistributions = 'PartnerDistributions',
  PartnersEquity = 'PartnersEquity',
  PayrollClearing = 'PayrollClearing',
  PayrollExpenses = 'PayrollExpenses',
  PayrollTaxPayable = 'PayrollTaxPayable',
  PenaltiesSettlements = 'PenaltiesSettlements',
  PersonalExpense = 'PersonalExpense',
  PersonalIncome = 'PersonalIncome',
  PreferredStock = 'PreferredStock',
  PrepaidExpenses = 'PrepaidExpenses',
  PrepaidExpensesPayable = 'PrepaidExpensesPayable',
  PromotionalMeals = 'PromotionalMeals',
  RentAndLeaseHomeOffice = 'RentAndLeaseHomeOffice',
  RentOrLeaseOfBuildings = 'RentOrLeaseOfBuildings',
  RentsHeldInTrust = 'RentsHeldInTrust',
  RentsInTrustLiability = 'RentsInTrustLiability',
  RepairsAndMaintainceHomeOffice = 'RepairsAndMaintainceHomeOffice',
  RepairMaintenance = 'RepairMaintenance',
  Retainage = 'Retainage',
  RetainedEarnings = 'RetainedEarnings',
  SalesOfProductIncome = 'SalesOfProductIncome',
  SalesTaxPayable = 'SalesTaxPayable',
  Savings = 'Savings',
  SecurityDeposits = 'SecurityDeposits',
  ServiceFeeIncome = 'ServiceFeeIncome',
  ShareholderNotesPayable = 'ShareholderNotesPayable',
  ShippingFreightDelivery = 'ShippingFreightDelivery',
  ShippingFreightDeliveryCos = 'ShippingFreightDeliveryCos',
  StateLocalIncomeTaxPayable = 'StateLocalIncomeTaxPayable',
  SuppliesMaterials = 'SuppliesMaterials',
  SuppliesMaterialsCogs = 'SuppliesMaterialsCogs',
  TaxesPaid = 'TaxesPaid',
  TaxExemptInterest = 'TaxExemptInterest',
  Travel = 'Travel',
  TravelMeals = 'TravelMeals',
  TreasuryStock = 'TreasuryStock',
  TrustAccounts = 'TrustAccounts',
  TrustAccountsLiabilities = 'TrustAccountsLiabilities',
  UnappliedCashBillPaymentExpense = 'UnappliedCashBillPaymentExpense',
  UnappliedCashPaymentIncome = 'UnappliedCashPaymentIncome',
  UndepositedFunds = 'UndepositedFunds',
  Utilities = 'Utilities',
  UtilitiesHomeOffice = 'UtilitiesHomeOffice',
  Vehicle = 'Vehicle',
  VehicleInsurance = 'VehicleInsurance',
  VehicleLease = 'VehicleLease',
  VehicleLoan = 'VehicleLoan',
  VehicleLoanInterest = 'VehicleLoanInterest',
  VehicleRegistration = 'VehicleRegistration',
  VehicleRepairs = 'VehicleRepairs',
  Vehicles = 'Vehicles',
  WashAndRoadServices = 'WashAndRoadServices',
  WithholdingTaxSales = 'WithholdingTaxSales',
  WithholdingTaxPurchases = 'WithholdingTaxPurchases',
  WithholdingAssetAmount = 'WithholdingAssetAmount',
  WithholdingLiabilityAmount = 'WithholdingLiabilityAmount',
  WithholdingTaxSuspense = 'WithholdingTaxSuspense',
  // DevelopmentCosts = 'DevelopmentCosts',
  ProvisionsCurrentAssets = 'ProvisionsCurrentAssets',
  OtherConsumables = 'OtherConsumables',
  ExpenditureAuthorisationsAndLettersOfCredit = 'ExpenditureAuthorisationsAndLettersOfCredit',
  InternalTransfers = 'InternalTransfers',
  ProvisionsFixedAssets = 'ProvisionsFixedAssets',
  AssetsInCourseOfConstruction = 'AssetsInCourseOfConstruction',
  ParticipatingInterests = 'ParticipatingInterests',
  CumulativeDepreciationOnIntangibleAssets = 'CumulativeDepreciationOnIntangibleAssets',
  ProvisionsNonCurrentAssets = 'ProvisionsNonCurrentAssets',
  OutstandingDuesMicroSmallEnterprise = 'OutstandingDuesMicroSmallEnterprise',
  OutstandingDuesOtherThanMicroSmallEnterprise = 'OutstandingDuesOtherThanMicroSmallEnterprise',
  GlobalTaxRefund = 'GlobalTaxRefund',
  GlobalTaxDeferred = 'GlobalTaxDeferred',
  ProvisionsCurrentLiabilities = 'ProvisionsCurrentLiabilities',
  StaffAndRelatedLiabilityAccounts = 'StaffAndRelatedLiabilityAccounts',
  SocialSecurityAgencies = 'SocialSecurityAgencies',
  SundryDebtorsAndCreditors = 'SundryDebtorsAndCreditors',
  ProvisionsNonCurrentLiabilities = 'ProvisionsNonCurrentLiabilities',
  DebtsRelatedToParticipatingInterests = 'DebtsRelatedToParticipatingInterests',
  StaffAndRelatedLongTermLiabilityAccounts = 'StaffAndRelatedLongTermLiabilityAccounts',
  GovernmentAndOtherPublicAuthorities = 'GovernmentAndOtherPublicAuthorities',
  GroupAndAssociates = 'GroupAndAssociates',
  InvestmentGrants = 'InvestmentGrants',
  CashReceiptIncome = 'CashReceiptIncome',
  OwnWorkCapitalized = 'OwnWorkCapitalized',
  OperatingGrants = 'OperatingGrants',
  OtherCurrentOperatingIncome = 'OtherCurrentOperatingIncome',
  CostOfSales = 'CostOfSales',
  CashExpenditureExpense = 'CashExpenditureExpense',
  ExternalServices = 'ExternalServices',
  OtherExternalServices = 'OtherExternalServices',
  PurchasesRebates = 'PurchasesRebates',
  OtherRentalCosts = 'OtherRentalCosts',
  ProjectStudiesSurveysAssessments = 'ProjectStudiesSurveysAssessments',
  Sundry = 'Sundry',
  StaffCosts = 'StaffCosts',
  OtherCurrentOperatingCharges = 'OtherCurrentOperatingCharges',
  ExtraordinaryCharges = 'ExtraordinaryCharges',
  AppropriationsToDepreciation = 'AppropriationsToDepreciation',
  AccrualsAndDeferredIncome = 'AccrualsAndDeferredIncome',
  CurrentTaxLiability = 'CurrentTaxLiability',
  DeferredTax = 'DeferredTax',
  DistributionCosts = 'DistributionCosts',
  Investments = 'Investments',
  LongTermBorrowings = 'LongTermBorrowings',
  OtherIntangibleAssets = 'OtherIntangibleAssets',
  PrepaymentsAndAccruedIncome = 'PrepaymentsAndAccruedIncome',
  ShortTermBorrowings = 'ShortTermBorrowings',
  ProvisionForLiabilities = 'ProvisionForLiabilities',
  CalledUpShareCapital = 'CalledUpShareCapital',
  CalledUpShareCapitalNotPaid = 'CalledUpShareCapitalNotPaid',
  LandAsset = 'LandAsset',
  AvailableForSaleFinancialAssets = 'AvailableForSaleFinancialAssets',
  ProvisionForWarrantyObligations = 'ProvisionForWarrantyObligations',
  CurrentPortionEmployeeBenefitsObligations = 'CurrentPortionEmployeeBenefitsObligations',
  LongTermEmployeeBenefitObligations = 'LongTermEmployeeBenefitObligations',
  ObligationsUnderFinanceLeases = 'ObligationsUnderFinanceLeases',
  BankLoans = 'BankLoans',
  InterestPayables = 'InterestPayables',
  GainLossOnSaleOfInvestments = 'GainLossOnSaleOfInvestments',
  GainLossOnSaleOfFixedAssets = 'GainLossOnSaleOfFixedAssets',
  ShareCapital = 'ShareCapital',
  CurrentPortionOfObligationsUnderFinanceLeases = 'CurrentPortionOfObligationsUnderFinanceLeases',
  AssetsHeldForSale = 'AssetsHeldForSale',
  AccruedLiabilities = 'AccruedLiabilities',
  AccruedLongLermLiabilities = 'AccruedLongLermLiabilities',
  AccruedVacationPayable = 'AccruedVacationPayable',
  CashAndCashEquivalents = 'CashAndCashEquivalents',
  CommissionsAndFees = 'CommissionsAndFees',
  AmortizationExpense = 'AmortizationExpense',
  LossOnDiscontinuedOperationsNetOfTax = 'LossOnDiscontinuedOperationsNetOfTax',
  ManagementCompensation = 'ManagementCompensation',
  OtherSellingExpenses = 'OtherSellingExpenses',
  LiabilitiesRelatedToAssetsHeldForSale = 'LiabilitiesRelatedToAssetsHeldForSale',
  LongTermDebit = 'LongTermDebit',
  EquityInEarningsOfSubsiduaries = 'EquityInEarningsOfSubsiduaries',
  OtherOperatingIncome = 'OtherOperatingIncome',
  RevenueGeneral = 'RevenueGeneral',
  DividendDisbursed = 'DividendDisbursed',
  FreightAndDeliveryCos = 'FreightAndDeliveryCos',
  ShippingAndDeliveryExpense = 'ShippingAndDeliveryExpense',
  TravelExpensesGeneralAndAdminExpenses = 'TravelExpensesGeneralAndAdminExpenses',
  TravelExpensesSellingExpense = 'TravelExpensesSellingExpense',
  UnrealisedLossOnSecuritiesNetOfTax = 'UnrealisedLossOnSecuritiesNetOfTax',
  SalesRetail = 'SalesRetail',
  SalesWholesale = 'SalesWholesale',
  AccumulatedOtherComprehensiveIncome = 'AccumulatedOtherComprehensiveIncome',
  AssetsAvailableForSale = 'AssetsAvailableForSale',
  LossOnDisposalOfAssets = 'LossOnDisposalOfAssets',
  NonCurrentAssets = 'NonCurrentAssets',
  IncomeTaxExpense = 'IncomeTaxExpense',
  LongTermInvestments = 'LongTermInvestments',
  DividendsPayable = 'DividendsPayable',
  TradeAndOtherReceivables = 'TradeAndOtherReceivables',
  TradeAndOtherPayables = 'TradeAndOtherPayables',
  CurrentLiabilities = 'CurrentLiabilities',
  SavingsByTaxScheme = 'SavingsByTaxScheme',
  BorrowingCost = 'BorrowingCost',
  Depletion = 'Depletion',
  ExceptionalItems = 'ExceptionalItems',
  PriorPeriodItems = 'PriorPeriodItems',
  ExtraordinaryItems = 'ExtraordinaryItems',
  MatCredit = 'MatCredit',
  OtherFreeReserves = 'OtherFreeReserves',
  CapitalReserves = 'CapitalReserves',
  Funds = 'Funds',
  MoneyReceivedAgainstShareWarrants = 'MoneyReceivedAgainstShareWarrants',
  ShareApplicationMoneyPendingAllotment = 'ShareApplicationMoneyPendingAllotment',
  DeferredTaxLiabilities = 'DeferredTaxLiabilities',
  OtherLongTermProvisions = 'OtherLongTermProvisions',
  CapitalWip = 'CapitalWip',
  IntangibleAssetsUnderDevelopment = 'IntangibleAssetsUnderDevelopment',
  OtherLongTermInvestments = 'OtherLongTermInvestments',
  LongTermLoansAndAdvancesToRelatedParties = 'LongTermLoansAndAdvancesToRelatedParties',
  OtherLongTermLoansAndAdvances = 'OtherLongTermLoansAndAdvances',
  ShortTermInvestmentsInRelatedParties = 'ShortTermInvestmentsInRelatedParties',
  OtherEarmarkedBankAccounts = 'OtherEarmarkedBankAccounts',
  ShortTermLoansAndAdvancesToRelatedParties = 'ShortTermLoansAndAdvancesToRelatedParties',
  DeferredTaxExpense = 'DeferredTaxExpense',
  IncomeTaxOtherExpense = 'IncomeTaxOtherExpense',
  DutiesAndTaxes = 'DutiesAndTaxes',
  BalWithGovtAuthorities = 'BalWithGovtAuthorities',
  TaxRoundoffGainOrLoss = 'TaxRoundoffGainOrLoss'
}

export enum APCreditCardOperationEnum {
  Charge = 'Charge',
  Credit = 'Credit'
}

export enum DayOfWeekEnum {
  Monday = 'Monday',
  Tuesday = 'Tuesday',
  Wednesday = 'Wednesday',
  Thursday = 'Thursday',
  Friday = 'Friday',
  Saturday = 'Saturday',
  Sunday = 'Sunday'
}

export enum EstimateStatusEnum {
  Active = 'Active',
  NotActive = 'NotActive'
}

export enum PaymentMethodEnum {
  AmEx = 'AmEx',
  Cash = 'Cash',
  Check = 'Check',
  DebitCard = 'DebitCard',
  Discover = 'Discover',
  ECheck = 'ECheck',
  GiftCard = 'GiftCard',
  MasterCard = 'MasterCard',
  Other = 'Other',
  OtherCreditCard = 'OtherCreditCard',
  Visa = 'Visa'
}

export enum PaymentStatusEnum {
  Draft = 'Draft',
  Overdue = 'Overdue',
  Pending = 'Pending',
  Payable = 'Payable',
  Paid = 'Paid',
  Trash = 'Trash',
  UnPaid = 'UnPaid'
}

export enum PaySalesTaxEnum {
  Annually = 'Annually',
  Monthly = 'Monthly',
  Quarterly = 'Quarterly'
}

export enum PerItemAdjustEnum {
  Cost = 'Cost',
  CurrentCustomPrice = 'CurrentCustomPrice',
  StandardPrice = 'StandardPrice'
}

export enum PriceLevelTypeEnum {
  FixedPercentage = 'FixedPercentage',
  PerItem = 'PerItem'
}

export enum QboEstimateStatusEnum {
  Accepted = 'Accepted',
  Closed = 'Closed',
  Pending = 'Pending',
  Rejected = 'Rejected'
}

export enum PurchaseOrderStatusEnum {
  Open = 'Open',
  Closed = 'Closed'
}

export enum ReimbursableTypeEnum {
  Billable = 'Billable',
  BillableHasBeenBilled = 'BillableHasBeenBilled',
  NotBillable = 'NotBillable'
}

export enum RoundingMethodEnum {
  Down = 'Down',
  Nearest = 'Nearest',
  None = 'None',
  Up = 'Up'
}

export enum SalesRepTypeEnum {
  Employee = 'Employee',
  Other = 'Other',
  Vendor = 'Vendor'
}

export enum SalesTermTypeEnum {
  DateDriven = 'DateDriven',
  Standard = 'Standard'
}

export enum SpecialItemTypeEnum {
  FinanceCharge = 'FinanceCharge',
  ReimbursableExpenseGroup = 'ReimbursableExpenseGroup',
  ReimbursableExpenseSubtotal = 'ReimbursableExpenseSubtotal'
}

export enum SymbolPositionEnum {
  Leading = 'Leading',
  Trailing = 'Trailing'
}

export enum TaxTypeApplicablityEnum {
  TaxOnAmount = 'TaxOnAmount',
  TaxOnAmountPlusTax = 'TaxOnAmountPlusTax',
  TaxOnTax = 'TaxOnTax'
}

export enum TemplateTypeEnum {
  BuildAssembly = 'BuildAssembly',
  CreditMemo = 'CreditMemo',
  Estimate = 'Estimate',
  Invoice = 'Invoice',
  PurchaseOrder = 'PurchaseOrder',
  SalesOrder = 'SalesOrder',
  SalesReceipt = 'SalesReceipt',
  StatementCharge = 'StatementCharge'
}

export enum TimeActivityTypeEnum {
  Employee = 'Employee',
  Other = 'Other',
  Vendor = 'Vendor'
}

export enum TxnTypeEnum {
  APCreditCard = 'APCreditCard',
  ARRefundCreditCard = 'ARRefundCreditCard',
  Bill = 'Bill',
  BillPaymentCheck = 'BillPaymentCheck',
  BuildAssembly = 'BuildAssembly',
  CarryOver = 'CarryOver',
  CashPurchase = 'CashPurchase',
  Charge = 'Charge',
  Check = 'Check',
  CreditCardPayment = 'CreditCardPayment',
  CreditMemo = 'CreditMemo',
  Deposit = 'Deposit',
  EFPLiabilityCheck = 'EFPLiabilityCheck',
  EFTBillPayment = 'EFTBillPayment',
  EFTRefund = 'EFTRefund',
  Estimate = 'Estimate',
  InventoryAdjustment = 'InventoryAdjustment',
  InventoryTransfer = 'InventoryTransfer',
  Invoice = 'Invoice',
  ItemReceipt = 'ItemReceipt',
  JournalEntry = 'JournalEntry',
  LiabilityAdjustment = 'LiabilityAdjustment',
  Paycheck = 'Paycheck',
  PayrollLiabilityCheck = 'PayrollLiabilityCheck',
  PurchaseOrder = 'PurchaseOrder',
  PriorPayment = 'PriorPayment',
  ReceivePayment = 'ReceivePayment',
  RefundCheck = 'RefundCheck',
  SalesOrder = 'SalesOrder',
  SalesReceipt = 'SalesReceipt',
  SalesTaxPaymentCheck = 'SalesTaxPaymentCheck',
  Transfer = 'Transfer',
  TimeActivity = 'TimeActivity',
  VendorCredit = 'VendorCredit',
  YTDAdjustment = 'YTDAdjustment'
}

export enum UOMBaseTypeEnum {
  Area = 'Area',
  Count = 'Count',
  Length = 'Length',
  Other = 'Other',
  Time = 'Time',
  Volume = 'Volume',
  Weight = 'Weight'
}

export enum PaymentTypeEnum {
  Cash = 'Cash',
  Check = 'Check',
  CreditCard = 'CreditCard',
  Expense = 'Expense',
  Other = 'Other'
}

export enum BillPaymentTypeEnum {
  Check = 'Check',
  CreditCard = 'CreditCard'
}

export enum PrintStatusEnum {
  NotSet = 'NotSet',
  NeedToPrint = 'NeedToPrint',
  PrintComplete = 'PrintComplete'
}

export enum EmailStatusEnum {
  NotSet = 'NotSet',
  NeedToSend = 'NeedToSend',
  EmailSent = 'EmailSent'
}

export enum ETransactionStatusEnum {
  Sent = 'Sent',
  Viewed = 'Viewed',
  Paid = 'Paid',
  DeliveryError = 'Delivery Error',
  Updated = 'Updated',
  Error = 'Error',
  Accepted = 'Accepted',
  Rejected = 'Rejected',
  SentWithICNError = 'Sent With ICN Error',
  Delivered = 'Delivered',
  Disputed = 'Disputed'
}

export enum ETransactionEnabledStatusEnum {
  Enabled = 'Enabled',
  NotApplicable = 'NotApplicable'
}

export enum GlobalTaxCalculationEnum {
  TaxInclusive = 'TaxInclusive',
  TaxExcluded = 'TaxExcluded',
  NotApplicable = 'NotApplicable'
}

export enum TxnSourceEnum {
  QBMobile = 'QBMobile',
  GoPayment = 'GoPayment',
  EInvoice = 'EInvoice',
  Square = 'Square'
}

export enum BudgetTypeEnum {
  ProfitAndLoss = 'ProfitAndLoss',
  BalanceSheet = 'BalanceSheet'
}

export enum BudgetEntryTypeEnum {
  Yearly = 'Yearly',
  Quarterly = 'Quarterly',
  Monthly = 'Monthly'
}

export enum ItemCategoryTypeEnum {
  Product = 'Product',
  Service = 'Service'
}

export enum TransactionLocationTypeEnum {
  WithinFrance = 'WithinFrance',
  FranceOverseas = 'FranceOverseas',
  OutsideFranceWithEU = 'OutsideFranceWithEU',
  OutsideEU = 'OutsideEU'
}

export enum JournalCodeTypeEnum {
  Expenses = 'Expenses',
  Sales = 'Sales',
  Bank = 'Bank',
  Nouveaux = 'Nouveaux',
  Wages = 'Wages',
  Cash = 'Cash',
  Others = 'Others'
}

export enum DiscountTypeEnum {
  Rate = 'Rate',
  Amount = 'Amount'
}

export enum ServiceTypeEnum {
  ADVT = 'ADVT',
  AIRPORTSERVICES = 'AIRPORTSERVICES',
  AIRTRANSPORT = 'AIRTRANSPORT',
  AIRTRVLAGNT = 'AIRTRVLAGNT',
  ARCHITECT = 'ARCHITECT',
  ASSTMGMT = 'ASSTMGMT',
  ATMMAINTENANCE = 'ATMMAINTENANCE',
  AUCTIONSERV = 'AUCTIONSERV',
  AUTHSERST = 'AUTHSERST',
  BANKANDFIN = 'BANKANDFIN',
  BEAUTYPARLOR = 'BEAUTYPARLOR',
  BROADCAST = 'BROADCAST',
  BUSINESSAUX = 'BUSINESSAUX',
  BUSINESSEXHIBITION = 'BUSINESSEXHIBITION',
  BUSINESSSUPPORTSERV = 'BUSINESSSUPPORTSERV',
  CA = 'CA',
  CABLEOPTR = 'CABLEOPTR',
  CARGOHAND = 'CARGOHAND',
  CLEANINGSERV = 'CLEANINGSERV',
  CLEARANDFORW = 'CLEARANDFORW',
  CLUBSANDASSSERVICE = 'CLUBSANDASSSERVICE',
  COMMCOACHORTRAINING = 'COMMCOACHORTRAINING',
  CONSENG = 'CONSENG',
  CONSTRCOMMERCIALCOMPLEX = 'CONSTRCOMMERCIALCOMPLEX',
  CONTAINERRAILTRANS = 'CONTAINERRAILTRANS',
  CONVSERV = 'CONVSERV',
  COSTACC = 'COSTACC',
  COURIER = 'COURIER',
  CREDITCARD = 'CREDITCARD',
  CREDITRATAGNCY = 'CREDITRATAGNCY',
  CRUISESHIPTOUR = 'CRUISESHIPTOUR',
  CS = 'CS',
  CUSHOUSEAG = 'CUSHOUSEAG',
  DESIGNSERV = 'DESIGNSERV',
  DEVELOPSUPPLYCONTENT = 'DEVELOPSUPPLYCONTENT',
  DREDGING = 'DREDGING',
  DRYCLEANING = 'DRYCLEANING',
  ERECTIONCOMMORINSTALL = 'ERECTIONCOMMORINSTALL',
  EVENTMGMT = 'EVENTMGMT',
  FASHIONDES = 'FASHIONDES',
  FOREXBROKING = 'FOREXBROKING',
  FORWARDCONTRACT = 'FORWARDCONTRACT',
  FRANCHISESERV = 'FRANCHISESERV',
  GENERALINSURANCE = 'GENERALINSURANCE',
  GOODSTRANSPORT = 'GOODSTRANSPORT',
  HEALTHCLUBANDFITNESS = 'HEALTHCLUBANDFITNESS',
  INFORMATIONSERV = 'INFORMATIONSERV',
  INSURAUX = 'INSURAUX',
  INTDEC = 'INTDEC',
  INTELLECTUALPROPERTY = 'INTELLECTUALPROPERTY',
  INTERNATIONALAIRTRAVEL = 'INTERNATIONALAIRTRAVEL',
  INTERNETCAFE = 'INTERNETCAFE',
  INTERNETTELEPHONY = 'INTERNETTELEPHONY',
  LIFEINS = 'LIFEINS',
  MAILLISTCOMPILE = 'MAILLISTCOMPILE',
  MANDAPKEEPER = 'MANDAPKEEPER',
  MANPWRRECRUIT = 'MANPWRRECRUIT',
  MGMTCONSUL = 'MGMTCONSUL',
  MGMTMAINTREPAIR = 'MGMTMAINTREPAIR',
  MININGOIL = 'MININGOIL',
  MKTRESAGNCY = 'MKTRESAGNCY',
  ONLINEINFORMRETRIEVAL = 'ONLINEINFORMRETRIEVAL',
  OPINIONPOLL = 'OPINIONPOLL',
  OUTDOORCATERING = 'OUTDOORCATERING',
  PACKAGINGSERV = 'PACKAGINGSERV',
  PANDALSHAMIANA = 'PANDALSHAMIANA',
  PHOTOGRAPHY = 'PHOTOGRAPHY',
  PORT = 'PORT',
  PORTSER = 'PORTSER',
  PROCESSCLEARHOUSE = 'PROCESSCLEARHOUSE',
  PUBLICRELATIONMGMT = 'PUBLICRELATIONMGMT',
  RAILTRAVELAGNT = 'RAILTRAVELAGNT',
  REALESTAGT = 'REALESTAGT',
  RECOVERYAGENTS = 'RECOVERYAGENTS',
  REGISTRARSERV = 'REGISTRARSERV',
  RENTACAB = 'RENTACAB',
  RENTINGIMMOVABLEPROP = 'RENTINGIMMOVABLEPROP',
  RESIDENTIALCOMPLEXCONST = 'RESIDENTIALCOMPLEXCONST',
  SALEOFSPACEFORADVT = 'SALEOFSPACEFORADVT',
  SCANDTECHCONSUL = 'SCANDTECHCONSUL',
  SECAG = 'SECAG',
  SERVICESPROVIDEDFORTRANSACTION = 'SERVICESPROVIDEDFORTRANSACTION',
  SHARETRANSFERSERV = 'SHARETRANSFERSERV',
  SHIPMGMT = 'SHIPMGMT',
  SITEPREP = 'SITEPREP',
  SOUNDRECORD = 'SOUNDRECORD',
  SPONSORSHIP = 'SPONSORSHIP',
  STAG = 'STAG',
  STOCKBROKING = 'STOCKBROKING',
  STOCKEXCHGSERV = 'STOCKEXCHGSERV',
  STORANDWAREHOUSING = 'STORANDWAREHOUSING',
  SUPPLYTANGIBLEGOODS = 'SUPPLYTANGIBLEGOODS',
  SURVEYANDMAPMAKING = 'SURVEYANDMAPMAKING',
  SURVEYMINERALS = 'SURVEYMINERALS',
  TECHINSPECTION = 'TECHINSPECTION',
  TECHTESTING = 'TECHTESTING',
  TELECOMMUNICATIONSERV = 'TELECOMMUNICATIONSERV',
  TELEVISIONANDRADIO = 'TELEVISIONANDRADIO',
  TOUROP = 'TOUROP',
  TRANSPORTPIPELINE = 'TRANSPORTPIPELINE',
  TRAVELAGENT = 'TRAVELAGENT',
  ULIPMANAGEMENT = 'ULIPMANAGEMENT',
  UNDERWRITER = 'UNDERWRITER',
  VIDEOTAPEPROD = 'VIDEOTAPEPROD',
  WORKSCONTRACT = 'WORKSCONTRACT'
}

export enum QboEntityTypeEnum {
  CUSTOMER = 'CUSTOMER',
  VENDOR = 'VENDOR',
  EMPLOYEE = 'EMPLOYEE',
  CREDIT_CARD = 'CREDIT_CARD',
  CHECK = 'CHECK',
  INVOICE = 'INVOICE',
  RECEIVED_PAYMENT = 'RECEIVED_PAYMENT',
  GENERAL_JOURNAL = 'GENERAL_JOURNAL',
  BILL = 'BILL',
  CREDIT_CARD_CREDIT = 'CREDIT_CARD_CREDIT',
  BILL_CREDIT = 'BILL_CREDIT',
  CHARGE_CREDIT = 'CHARGE_CREDIT',
  BILL_CHECK = 'BILL_CHECK',
  BILL_CREDIT_CARD = 'BILL_CREDIT_CARD',
  CHARGE = 'CHARGE',
  TRANSFER = 'TRANSFER',
  RECEIVED_MONEY = 'RECEIVED_MONEY',
  STATEMENT = 'STATEMENT',
  REIMB_CHARGE = 'REIMB_CHARGE',
  CASH_PURCHASE = 'CASH_PURCHASE',
  CASH_SALE = 'CASH_SALE',
  CREDIT_MEMO = 'CREDIT_MEMO',
  CREDIT_REFUND = 'CREDIT_REFUND',
  ESTIMATE = 'ESTIMATE',
  INVENTORY_QUANTITY_ADJUSTMENT = 'INVENTORY_QUANTITY_ADJUSTMENT',
  PURCHASE_ORDER = 'PURCHASE_ORDER',
  PAYROLL_CHECK = 'PAYROLL_CHECK',
  TAX_PAYMENT = 'TAX_PAYMENT',
  PAYROLL_ADJUSTMENT_V2 = 'PAYROLL_ADJUSTMENT_V2',
  PAYROLL_REFUND = 'PAYROLL_REFUND',
  GLOBAL_TAX_PAYMENT = 'GLOBAL_TAX_PAYMENT',
  GLOBAL_TAX_ADJUSTMENT = 'GLOBAL_TAX_ADJUSTMENT',
  JOB_INVOICE = 'JOB_INVOICE',
  ITEM = 'ITEM',
  GENERIC_EXPENSE = 'GENERIC_EXPENSE',
  TIME_ACTIVITY = 'TIME_ACTIVITY',
  DEPARTMENT = 'DEPARTMENT',
  USERS = 'USERS',
  KLASS = 'KLASS',
  PAYMENT_METHOD = 'PAYMENT_METHOD',
  MEMORIZED_TRANSACTION = 'MEMORIZED_TRANSACTION',
  TERM = 'TERM',
  BUDGET = 'BUDGET',
  TAX_CODE = 'TAX_CODE',
  TAX_CODE_RATE = 'TAX_CODE_RATE',
  TAX_AGENCY = 'TAX_AGENCY',
  ATTACHABLE = 'ATTACHABLE',
  ACCOUNT = 'ACCOUNT',
  PREFERENCES = 'PREFERENCES',
  JOURNAL_CODE = 'JOURNAL_CODE',
  DISCOUNT_RATE = 'DISCOUNT_RATE',
  BANKING_TRANSACTIONS = 'BANKING_TRANSACTIONS',
  BUSINESS_TERMS = 'BUSINESS_TERMS',
  LIABILITY_CHECK = 'LIABILITY_CHECK',
  LIABILITY_CREDIT_CARD = 'LIABILITY_CREDIT_CARD',
  LIABILITY_REFUND = 'LIABILITY_REFUND',
  PRIOR_LIABILITY_PAYMENTS = 'PRIOR_LIABILITY_PAYMENTS',
  LIABILITY_EPAY = 'LIABILITY_EPAY',
  LIABILITY_MMAP = 'LIABILITY_MMAP',
  TAX_CREDIT_UTILISE = 'TAX_CREDIT_UTILISE',
  TAX_CREDIT_DEFER = 'TAX_CREDIT_DEFER',
  TAX_CREDIT_REVERSE = 'TAX_CREDIT_REVERSE',
  TAX_CREDIT_REFUND = 'TAX_CREDIT_REFUND',
  GROSS_ADJUSTMENT = 'GROSS_ADJUSTMENT',
  REVERSE_CHARGE = 'REVERSE_CHARGE',
  DD_CHECK = 'DD_CHECK',
  PAYCHECK = 'PAYCHECK',
  PAYROLL_ADJUSTMENT = 'PAYROLL_ADJUSTMENT',
  PAYROLL_YTD = 'PAYROLL_YTD',
  SDK_USERS = 'SDK_USERS',
  PAYROLL_ITEMS = 'PAYROLL_ITEMS',
  PAY_GROUPS = 'PAY_GROUPS',
  PAID_TIME_OFF_ENTRIES = 'PAID_TIME_OFF_ENTRIES',
  TAX_JURISDICTIONS = 'TAX_JURISDICTIONS',
  MEMORIZED_REPORTS = 'MEMORIZED_REPORTS',
  OLB_FINANCIAL_INSTITUTIONS = 'OLB_FINANCIAL_INSTITUTIONS',
  DIRECT_DEPOSIT_BANK_INFO = 'DIRECT_DEPOSIT_BANK_INFO',
  REMINDERS = 'REMINDERS',
  PAYROLL_FORMS = 'PAYROLL_FORMS',
  EPAY_BANK_ACCOUNT_INFO = 'EPAY_BANK_ACCOUNT_INFO',
  EPAY_AGENCY_CREDENTIALS = 'EPAY_AGENCY_CREDENTIALS',
  EFILE_ENROLLMENT = 'EFILE_ENROLLMENT',
  TAXRETURNLINES = 'TAXRETURNLINES',
  NOTES = 'NOTES',
  PRINT_PREF = 'PRINT_PREF',
  MANAGEMENT_REPORT = 'MANAGEMENT_REPORT',
  OLB_RULES = 'OLB_RULES',
  DESKTOPIMPORT_SEED_QOH = 'DESKTOPIMPORT_SEED_QOH'
}

export enum DesktopEntityTypeEnum {
  ANY = 'ANY',
  CREDIT_CARD = 'CREDIT_CARD',
  DEPOSIT = 'DEPOSIT',
  CHECK = 'CHECK',
  INVOICE = 'INVOICE',
  CASHSALE = 'CASHSALE',
  CREDIT_MEMO = 'CREDIT_MEMO',
  APP_PAY = 'APP_PAY',
  GENERAL_JOURNAL = 'GENERAL_JOURNAL',
  BILL = 'BILL',
  GENERIC = 'GENERIC',
  CREDIT_CARD_REFUND = 'CREDIT_CARD_REFUND',
  BILL_REFUND = 'BILL_REFUND',
  AR_CREDIT_CARD_REFUND = 'AR_CREDIT_CARD_REFUND',
  BILL_CHECK = 'BILL_CHECK',
  BILL_CREDIT_CARD = 'BILL_CREDIT_CARD',
  SALES_TAX_PAYMENT = 'SALES_TAX_PAYMENT',
  PURCHASE_ORDER = 'PURCHASE_ORDER',
  INVENTORY_ADJUSTMENT = 'INVENTORY_ADJUSTMENT',
  INVENTORY_RECEIPT = 'INVENTORY_RECEIPT',
  PAYCHECK = 'PAYCHECK',
  LIABILITY_CHECK = 'LIABILITY_CHECK',
  BEGIN_BALANCE_CHECK = 'BEGIN_BALANCE_CHECK',
  LIABILITY_ADJUSTMENT = 'LIABILITY_ADJUSTMENT',
  ESTIMATE = 'ESTIMATE',
  STATEMENT_CHARGE = 'STATEMENT_CHARGE',
  TRANSFER = 'TRANSFER',
  SALESORDER = 'SALESORDER',
  QBRSLIABCHECK = 'QBRSLIABCHECK',
  BUILDASSEMBLY = 'BUILDASSEMBLY',
  EFPLIABCHECK = 'EFPLIABCHECK',
  PRIOR_PMT = 'PRIOR_PMT',
  LIAB_REFUND_CHECK = 'LIAB_REFUND_CHECK',
  ITEM_SERVICE = 'ITEM_SERVICE',
  ITEM_INVENTORY = 'ITEM_INVENTORY',
  ITEM_ASSEMBLY = 'ITEM_ASSEMBLY',
  ITEM_PART = 'ITEM_PART',
  ITEM_FIXEDASSET = 'ITEM_FIXEDASSET',
  ITEM_CHARGES = 'ITEM_CHARGES',
  ITEM_SUBTOTAL = 'ITEM_SUBTOTAL',
  ITEM_GROUP = 'ITEM_GROUP',
  ITEM_DISCOUNT = 'ITEM_DISCOUNT',
  ITEM_PAYMENT = 'ITEM_PAYMENT',
  ITEM_TAXCOMP = 'ITEM_TAXCOMP',
  ITEM_TAXGROUP = 'ITEM_TAXGROUP',
  ITEM_GROUPEND = 'ITEM_GROUPEND',
  ITEM_PURCHASE = 'ITEM_PURCHASE',
  ITEM_PO = 'ITEM_PO',
  ITEM_INVOICE = 'ITEM_INVOICE',
  ITEM_ALLITEMS = 'ITEM_ALLITEMS',
  ITEM_NOTAXES = 'ITEM_NOTAXES',
  ITEM_SERVICES_AND_CHARGES = 'ITEM_SERVICES_AND_CHARGES',
  ITEM_REAL_GROUP_END = 'ITEM_REAL_GROUP_END',
  ITEM_MAX = 'ITEM_MAX',
  CUSTOMER = 'CUSTOMER',
  VENDOR = 'VENDOR',
  EMPLOYEE = 'EMPLOYEE',
  OTHERNAME = 'OTHERNAME',
  NULLLINKTYPE = 'NULLLINKTYPE',
  UNUSED1 = 'UNUSED1',
  REFUNDCHECKTOCRMEMO = 'REFUNDCHECKTOCRMEMO',
  INVOICETOCRMEMO = 'INVOICETOCRMEMO',
  INVOICETOPAYMENT = 'INVOICETOPAYMENT',
  INVOICETODISCOUNT = 'INVOICETODISCOUNT',
  BILLTOCHECK = 'BILLTOCHECK',
  BILLTOCCARD = 'BILLTOCCARD',
  BILLTOCREDIT = 'BILLTOCREDIT',
  DEPOSITTOPAYMENT = 'DEPOSITTOPAYMENT',
  REFUNDCHECKTOPAYMENT = 'REFUNDCHECKTOPAYMENT',
  INVOICETOPMTLINE = 'INVOICETOPMTLINE',
  INVOICETOCREDITLINE = 'INVOICETOCREDITLINE',
  BILLTOCREDITLINE = 'BILLTOCREDITLINE',
  CREDLINETODISCLINE = 'CREDLINETODISCLINE',
  PURCHASEORDERTORECEIPT = 'PURCHASEORDERTORECEIPT',
  BILLTODISCOUNT = 'BILLTODISCOUNT',
  INVOICETODISCOUNTLINE = 'INVOICETODISCOUNTLINE',
  INVOICETOESTIMATEQTY = 'INVOICETOESTIMATEQTY',
  INVOICETOESTIMATEAMT = 'INVOICETOESTIMATEAMT',
  INVOICETOSALESORDERQTY = 'INVOICETOSALESORDERQTY',
  INVOICETOSALESORDERAMT = 'INVOICETOSALESORDERAMT',
  JOURNALENTRYTOCRMEMO = 'JOURNALENTRYTOCRMEMO',
  AR_CCREFUND_TO_CREDITMEMO = 'AR_CCREFUND_TO_CREDITMEMO',
  AR_CCREFUND_TO_PAYMENT = 'AR_CCREFUND_TO_PAYMENT',
  AR_CCREFUND_TO_JOURNAL = 'AR_CCREFUND_TO_JOURNAL',
  GIRO_TO_CHECK = 'GIRO_TO_CHECK',
  ITEM = 'ITEM',
  DEPARTMENT = 'DEPARTMENT',
  USERS = 'USERS',
  KLASS = 'KLASS',
  PAYMENT_METHOD = 'PAYMENT_METHOD',
  TERM = 'TERM',
  BUDGET = 'BUDGET',
  TAX_CODE = 'TAX_CODE',
  TAX_CODE_RATE = 'TAX_CODE_RATE',
  TAX_AGENCY = 'TAX_AGENCY',
  ATTACHABLE = 'ATTACHABLE',
  ACCOUNT = 'ACCOUNT',
  PREFERENCES = 'PREFERENCES'
}

export enum TaxReturnStatusEnum {
  FILED = 'FILED',
  FILING_FAILED = 'FILING_FAILED',
  FILING_FAILED_WRONG_AGENCY_CREDENTIALS = 'FILING_FAILED_WRONG_AGENCY_CREDENTIALS',
  AGENCY_PAYMENT_INITIATED = 'AGENCY_PAYMENT_INITIATED',
  AGENCY_PAYMENT_COMPLETED = 'AGENCY_PAYMENT_COMPLETED'
}

export enum AgencyPaymentMethodEnum {
  ACH_CREDIT = 'ACH_CREDIT',
  ACH_DEBIT = 'ACH_DEBIT',
  CHECK = 'CHECK',
  WIRE = 'WIRE',
  OTHER = 'OTHER'
}

export enum TaxReviewStatusEnum {
  NON_AST_TAX = 'NON_AST_TAX',
  AST_TAX_OVERRIDE = 'AST_TAX_OVERRIDE'
}

export enum ConvenienceFeeTypeEnum {
  MANUAL = 'MANUAL',
  AUTO = 'AUTO',
  PAID = 'PAID',
  DISABLED = 'DISABLED'
}

export enum SpecialTaxTypeEnum {
  NONE = 'NONE',
  ZERO_RATE = 'ZERO_RATE',
  FOREIGN_TAX = 'FOREIGN_TAX',
  REVERSE_CHARGE = 'REVERSE_CHARGE',
  ADJUSTMENT_RATE = 'ADJUSTMENT_RATE'
}

export enum GTMConfigTypeEnum {
  SYSTEM_GENERATED = 'SYSTEM_GENERATED',
  USER_DEFINED = 'USER_DEFINED',
  SCRA_DEFINED = 'SCRA_DEFINED',
  HIDDEN_AGENCY = 'HIDDEN_AGENCY'
}

export enum AttachableCategoryEnum {
  Image = 'Image',
  Signature = 'Signature',
  ContactPhoto = 'Contact Photo',
  Receipt = 'Receipt',
  Document = 'Document',
  Sound = 'Sound',
  Other = 'Other'
}

export enum OLBTxnStatusEnum {
  Pending = 'Pending',
  Approved = 'Approved',
  Deleted = 'Deleted',
}
