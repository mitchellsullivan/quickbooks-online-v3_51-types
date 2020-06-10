/***********
generated template classes for ./src/xsd/Finance.xsd 6/10/2020, 11:36:42 AM
***********/





import * as xmlns from "";
import * as xs from "";

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
        this["@class"] = ".Finance";

        (<any>Object).assign(this, <any> props);
    }
}

export abstract class TxnReferenceGroup {
    public TxnId?: xmlns.id;
    public TxnNum?: string;

    public constructor(props?: TxnReferenceGroup) {
        this["@class"] = ".TxnReferenceGroup";

        (<any>Object).assign(this, <any> props);
    }
}

export abstract class TxnLineReferenceGroup {
    public TxnId?: xmlns.id;
    public TxnLineId?: xmlns.id;

    public constructor(props?: TxnLineReferenceGroup) {
        this["@class"] = ".TxnLineReferenceGroup";

        (<any>Object).assign(this, <any> props);
    }
}

export class LinkedTxn {
    public TxnId?: xmlns.id;
    public TxnType?: string;
    public TxnLineId?: xmlns.id;

    public constructor(props?: LinkedTxn) {
        this["@class"] = ".LinkedTxn";

        (<any>Object).assign(this, <any> props);
    }
}

export class TxnApprovalInfo {
    public ApprovalStatus?: string;
    public ApprovalStatusDetail?: string;
    public LastChangedByUser?: string;
    public LastChangedDate?: Date;

    public constructor(props?: TxnApprovalInfo) {
        this["@class"] = ".TxnApprovalInfo";

        (<any>Object).assign(this, <any> props);
    }
}

export class TxnTaxDetail {
    public DefaultTaxCodeRef?: xmlns.ReferenceType;
    public TxnTaxCodeRef?: xmlns.ReferenceType;
    public TotalTax?: xs.decimal;
    public TaxReviewStatus?: TaxReviewStatusEnum;
    public TaxLine?: xmlns.Line;
    public UseAutomatedSalesTax?: boolean;

    public constructor(props?: TxnTaxDetail) {
        this["@class"] = ".TxnTaxDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class GroupLineDetail {
    public GroupItemRef: xmlns.ReferenceType;
    public Quantity?: xs.decimal;
    public UOMRef?: UOMRef;
    public ServiceDate?: Date;
    public Line?: xmlns.Line;
    public GroupLineDetailEx?: xmlns.IntuitAnyType;

    public constructor(props?: GroupLineDetail) {
        this["@class"] = ".GroupLineDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class Line {
    public Id?: xmlns.id;
    public LineNum?: xs.positiveInteger;
    public Description?: string;
    public Amount?: xs.decimal;
    public Received?: xs.decimal;
    public LinkedTxn?: xmlns.LinkedTxn;
    public DetailType?: LineDetailTypeEnum;
    public CustomField?: xmlns.CustomField;
    public LineEx?: xmlns.IntuitAnyType;

    public constructor(props?: Line) {
        this["@class"] = ".Line";

        (<any>Object).assign(this, <any> props);
    }
}

export class DiscountOverride {
    public DiscountRef?: xmlns.ReferenceType;
    public PercentBased?: boolean;
    public DiscountPercent?: xs.decimal;
    public DiscountAccountRef?: xmlns.ReferenceType;

    public constructor(props?: DiscountOverride) {
        this["@class"] = ".DiscountOverride";

        (<any>Object).assign(this, <any> props);
    }
}

export class DescriptionLineDetail {
    public ServiceDate?: Date;
    public TaxCodeRef?: xmlns.ReferenceType;
    public DescriptionLineDetailEx?: xmlns.IntuitAnyType;

    public constructor(props?: DescriptionLineDetail) {
        this["@class"] = ".DescriptionLineDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class TDSLineDetail {
    public TDSAccountRef?: xmlns.ReferenceType;
    public TDSSectionTypeId?: number;
    public TDSLineDetailEx?: xmlns.IntuitAnyType;

    public constructor(props?: TDSLineDetail) {
        this["@class"] = ".TDSLineDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class ItemLineDetail {
    public ItemRef?: xmlns.ReferenceType;
    public ClassRef?: xmlns.ReferenceType;
    public MarkupInfo?: MarkupInfo;
    public Qty?: xs.decimal;
    public UOMRef?: UOMRef;
    public ItemAccountRef?: xmlns.ReferenceType;
    public InventorySiteRef?: xmlns.ReferenceType;
    public TaxCodeRef?: xmlns.ReferenceType;
    public TaxClassificationRef?: xmlns.ReferenceType;

    public constructor(props?: ItemLineDetail) {
        this["@class"] = ".ItemLineDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class ItemReceiptLineDetail {
    public ItemReceiptLineDetailEx?: xmlns.IntuitAnyType;

    public constructor(props?: ItemReceiptLineDetail) {
        this["@class"] = ".ItemReceiptLineDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class TaxRateDetail {
    public TaxRateRef?: xmlns.ReferenceType;
    public TaxTypeApplicable?: TaxTypeApplicablityEnum;
    public TaxOrder?: number;
    public TaxOnTaxOrder?: number;

    public constructor(props?: TaxRateDetail) {
        this["@class"] = ".TaxRateDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class TaxRateList {
    public TaxRateDetail?: xmlns.TaxRateDetail;

    public constructor(props?: TaxRateList) {
        this["@class"] = ".TaxRateList";

        (<any>Object).assign(this, <any> props);
    }
}

export class EffectiveTaxRate {
    public RateValue?: xs.decimal;
    public EffectiveDate?: Date;
    public EndDate?: Date;
    public EffectiveTaxRateEx?: xmlns.IntuitAnyType;

    public constructor(props?: EffectiveTaxRate) {
        this["@class"] = ".EffectiveTaxRate";

        (<any>Object).assign(this, <any> props);
    }
}

export class TaxLineDetail {
    public TaxRateRef?: xmlns.ReferenceType;
    public PercentBased?: boolean;
    public TaxPercent?: xs.decimal;
    public NetAmountTaxable?: xs.decimal;
    public TaxInclusiveAmount?: xs.decimal;
    public OverrideDeltaAmount?: xs.decimal;
    public ServiceDate?: Date;
    public TaxLineDetailEx?: xmlns.IntuitAnyType;

    public constructor(props?: TaxLineDetail) {
        this["@class"] = ".TaxLineDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class AccountBasedExpenseLineDetail {
    public CustomerRef?: xmlns.ReferenceType;
    public ClassRef?: xmlns.ReferenceType;
    public AccountRef?: xmlns.ReferenceType;
    public BillableStatus?: BillableStatusEnum;
    public MarkupInfo?: MarkupInfo;
    public TaxAmount?: xs.decimal;
    public TaxCodeRef?: xmlns.ReferenceType;
    public TaxInclusiveAmt?: xs.decimal;
    public ExpenseDetailLineDetailEx?: xmlns.IntuitAnyType;

    public constructor(props?: AccountBasedExpenseLineDetail) {
        this["@class"] = ".AccountBasedExpenseLineDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class DepositLineDetail {
    public Entity?: xmlns.ReferenceType;
    public ClassRef?: xmlns.ReferenceType;
    public AccountRef?: xmlns.ReferenceType;
    public PaymentMethodRef?: xmlns.ReferenceType;
    public CheckNum?: string;
    public TxnType?: TxnTypeEnum;
    public TaxCodeRef?: xmlns.ReferenceType;
    public TaxApplicableOn?: TaxApplicableOnEnum;
    public DepositLineDetailEx?: xmlns.IntuitAnyType;

    public constructor(props?: DepositLineDetail) {
        this["@class"] = ".DepositLineDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class JournalEntryLineDetail {
    public PostingType?: PostingTypeEnum;
    public Entity?: EntityTypeRef;
    public AccountRef?: xmlns.ReferenceType;
    public ClassRef?: xmlns.ReferenceType;
    public DepartmentRef?: xmlns.ReferenceType;
    public TaxCodeRef?: xmlns.ReferenceType;
    public TaxRateRef?: xmlns.ReferenceType;
    public TaxApplicableOn?: TaxApplicableOnEnum;
    public TaxAmount?: xs.decimal;
    public BillableStatus?: BillableStatusEnum;
    public JournalCodeRef?: xmlns.ReferenceType;
    public JournalEntryLineDetailEx?: xmlns.IntuitAnyType;

    public constructor(props?: JournalEntryLineDetail) {
        this["@class"] = ".JournalEntryLineDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class PaymentLineDetail {
    public ItemRef: xmlns.ReferenceType;
    public ServiceDate?: Date;
    public ClassRef?: xmlns.ReferenceType;
    public Balance?: xs.decimal;
    public HomeBalance?: xs.decimal;
    public Discount?: DiscountOverride;
    public PaymentLineEx?: xmlns.IntuitAnyType;

    public constructor(props?: PaymentLineDetail) {
        this["@class"] = ".PaymentLineDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class SubTotalLineDetail {
    public ItemRef?: xmlns.ReferenceType;
    public ServiceDate?: Date;

    public constructor(props?: SubTotalLineDetail) {
        this["@class"] = ".SubTotalLineDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class EntityTypeRef {
    public Type?: EntityTypeEnum;
    public EntityRef?: xmlns.ReferenceType;

    public constructor(props?: EntityTypeRef) {
        this["@class"] = ".EntityTypeRef";

        (<any>Object).assign(this, <any> props);
    }
}

export class MarkupInfo {
    public PercentBased?: boolean;
    public Value?: xs.decimal;
    public Percent?: xs.decimal;
    public PriceLevelRef?: xmlns.ReferenceType;
    public MarkUpIncomeAccountRef?: xmlns.ReferenceType;

    public constructor(props?: MarkupInfo) {
        this["@class"] = ".MarkupInfo";

        (<any>Object).assign(this, <any> props);
    }
}

export class CashPurchase {
    public AccountRef?: xmlns.ReferenceType;

    public constructor(props?: CashPurchase) {
        this["@class"] = ".CashPurchase";

        (<any>Object).assign(this, <any> props);
    }
}

export class CreditCardPurchase {
    public AccountRef?: xmlns.ReferenceType;
    public Credit?: boolean;

    public constructor(props?: CreditCardPurchase) {
        this["@class"] = ".CreditCardPurchase";

        (<any>Object).assign(this, <any> props);
    }
}

export class CheckPurchase {
    public AccountRef?: xmlns.ReferenceType;
    public PayeeAddr?: xmlns.PhysicalAddress;
    public MemoOnCheck?: string;
    public PrintStatus?: PrintStatusEnum;

    public constructor(props?: CheckPurchase) {
        this["@class"] = ".CheckPurchase";

        (<any>Object).assign(this, <any> props);
    }
}

export class CheckPayment {
    public CheckNum?: string;
    public Status?: string;
    public NameOnAcct?: string;
    public AcctNum?: string;
    public BankName?: string;
    public CheckPaymentEx: xmlns.IntuitAnyType;

    public constructor(props?: CheckPayment) {
        this["@class"] = ".CheckPayment";

        (<any>Object).assign(this, <any> props);
    }
}

export class CreditCardPayment {
    public CreditChargeInfo?: xmlns.CreditChargeInfo;
    public CreditChargeResponse?: xmlns.CreditChargeResponse;

    public constructor(props?: CreditCardPayment) {
        this["@class"] = ".CreditCardPayment";

        (<any>Object).assign(this, <any> props);
    }
}

export class ItemComponentLine {
    public ItemRef?: xmlns.ReferenceType;
    public Qty?: xs.decimal;
    public UOMRef?: UOMRef;

    public constructor(props?: ItemComponentLine) {
        this["@class"] = ".ItemComponentLine";

        (<any>Object).assign(this, <any> props);
    }
}

export class ItemGroupDetail {
    public ItemGroupLine?: xmlns.ItemComponentLine;

    public constructor(props?: ItemGroupDetail) {
        this["@class"] = ".ItemGroupDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class ItemAssemblyDetail {
    public ItemAssemblyLine?: xmlns.ItemComponentLine;

    public constructor(props?: ItemAssemblyDetail) {
        this["@class"] = ".ItemAssemblyDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class BillPaymentCheck {
    public BankAccountRef?: xmlns.ReferenceType;
    public PrintStatus?: PrintStatusEnum;
    public CheckDetail?: CheckPayment;
    public PayeeAddr?: xmlns.PhysicalAddress;
    public BillPaymentCheckEx?: xmlns.IntuitAnyType;

    public constructor(props?: BillPaymentCheck) {
        this["@class"] = ".BillPaymentCheck";

        (<any>Object).assign(this, <any> props);
    }
}

export class BillPaymentCreditCard {
    public CCAccountRef?: xmlns.ReferenceType;
    public CCDetail?: CreditCardPayment;
    public BillPaymentCreditCardEx?: xmlns.IntuitAnyType;

    public constructor(props?: BillPaymentCreditCard) {
        this["@class"] = ".BillPaymentCreditCard";

        (<any>Object).assign(this, <any> props);
    }
}

export class CashBackInfo {
    public AccountRef?: xmlns.ReferenceType;
    public Amount?: xs.decimal;
    public Memo?: string;

    public constructor(props?: CashBackInfo) {
        this["@class"] = ".CashBackInfo";

        (<any>Object).assign(this, <any> props);
    }
}

export class MemoRef {
    public constructor(props?: MemoRef) {
        this["@class"] = ".MemoRef";

        (<any>Object).assign(this, <any> props);
    }
}

export class CurrencyPrefs {
    public MultiCurrencyEnabled?: boolean;
    public HomeCurrency?: xmlns.ReferenceType;

    public constructor(props?: CurrencyPrefs) {
        this["@class"] = ".CurrencyPrefs";

        (<any>Object).assign(this, <any> props);
    }
}

export class TaxPrefs {
    public UsingSalesTax?: boolean;
    public PartnerTaxEnabled?: boolean;
    public HideTaxManagement?: boolean;
    public PaySalesTax?: PaySalesTaxEnum;
    public NonTaxableSalesTaxCodeRef?: xmlns.ReferenceType;
    public TaxableSalesTaxCodeRef?: xmlns.ReferenceType;

    public constructor(props?: TaxPrefs) {
        this["@class"] = ".TaxPrefs";

        (<any>Object).assign(this, <any> props);
    }
}

export class FinanceChargePrefs {
    public AnnualInterestRate?: xs.decimal;
    public MinFinChrg?: xs.decimal;
    public GracePeriod?: xs.positiveInteger;
    public CalcFinChrgFromTxnDate?: boolean;
    public AssessFinChrgForOverdueCharges?: boolean;
    public FinChrgAccountRef?: xmlns.ReferenceType;

    public constructor(props?: FinanceChargePrefs) {
        this["@class"] = ".FinanceChargePrefs";

        (<any>Object).assign(this, <any> props);
    }
}

export class CompanyAccountingPrefs {
    public UseAccountNumbers?: boolean;
    public DefaultARAccount?: xmlns.ReferenceType;
    public DefaultAPAccount?: xmlns.ReferenceType;
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
    public OtherContactInfo?: xmlns.ContactInfo;
    public CustomerTerminology?: string;

    public constructor(props?: CompanyAccountingPrefs) {
        this["@class"] = ".CompanyAccountingPrefs";

        (<any>Object).assign(this, <any> props);
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
        this["@class"] = ".AdvancedInventoryPrefs";

        (<any>Object).assign(this, <any> props);
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
        this["@class"] = ".ProductAndServicesPrefs";

        (<any>Object).assign(this, <any> props);
    }
}

export class SalesFormsPrefs {
    public UsingProgressInvoicing?: boolean;
    public CustomField?: xmlns.CustomFieldDefinition;
    public CustomTxnNumbers?: boolean;
    public DelayedCharges?: boolean;
    public SalesEmailCc?: xmlns.EmailAddress;
    public SalesEmailBcc?: xmlns.EmailAddress;
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
    public DefaultItem?: xmlns.ReferenceType;
    public DefaultTerms?: xmlns.ReferenceType;
    public DefaultDeliveryMethod?: string;
    public AutoApplyCredit?: boolean;
    public AutoApplyPayments?: boolean;
    public PrintItemWithZeroAmount?: boolean;
    public DefaultShipMethodRef?: xmlns.ReferenceType;
    public DefaultMarkup?: xs.decimal;
    public TrackReimbursableExpensesAsIncome?: boolean;
    public UsingSalesOrders?: boolean;
    public UsingPriceLevels?: boolean;
    public DefaultFOB?: string;
    public DefaultCustomerMessage?: string;

    public constructor(props?: SalesFormsPrefs) {
        this["@class"] = ".SalesFormsPrefs";

        (<any>Object).assign(this, <any> props);
    }
}

export class VendorAndPurchasesPrefs {
    public EnableBills?: boolean;
    public TrackingByCustomer?: boolean;
    public BillableExpenseTracking?: boolean;
    public DefaultTerms?: xmlns.ReferenceType;
    public DefaultMarkup?: xs.decimal;
    public DefaultMarkupAccount?: xmlns.ReferenceType;
    public AutomaticBillPayment?: boolean;
    public TPAREnabled?: boolean;
    public POCustomField?: xmlns.CustomFieldDefinition;
    public MsgToVendors?: string;
    public UsingInventory?: boolean;
    public UsingMultiLocationInventory?: boolean;
    public DaysBillsAreDue?: number;
    public DiscountAccountRef?: xmlns.ReferenceType;

    public constructor(props?: VendorAndPurchasesPrefs) {
        this["@class"] = ".VendorAndPurchasesPrefs";

        (<any>Object).assign(this, <any> props);
    }
}

export class TimeTrackingPrefs {
    public UseServices?: boolean;
    public DefaultTimeItem?: xmlns.ReferenceType;
    public BillCustomers?: boolean;
    public ShowBillRateToAll?: boolean;
    public WorkWeekStartDate?: WeekEnum;
    public TimeTrackingEnabled?: boolean;
    public MarkTimeEntriesBillable?: boolean;
    public MarkExpensesAsBillable?: boolean;

    public constructor(props?: TimeTrackingPrefs) {
        this["@class"] = ".TimeTrackingPrefs";

        (<any>Object).assign(this, <any> props);
    }
}

export class EmailMessagesPrefs {
    public NameValue?: xmlns.NameValue;
    public InvoiceMessage?: xmlns.EmailMessage;
    public EstimateMessage?: xmlns.EmailMessage;
    public SalesReceiptMessage?: xmlns.EmailMessage;
    public StatementMessage?: xmlns.EmailMessage;

    public constructor(props?: EmailMessagesPrefs) {
        this["@class"] = ".EmailMessagesPrefs";

        (<any>Object).assign(this, <any> props);
    }
}

export class PrintDocumentPrefs {
    public NameValue?: xmlns.NameValue;

    public constructor(props?: PrintDocumentPrefs) {
        this["@class"] = ".PrintDocumentPrefs";

        (<any>Object).assign(this, <any> props);
    }
}

export class ReportPrefs {
    public ReportBasis?: xmlns.ReportBasisEnum;
    public CalcAgingReportFromTxnDate?: boolean;

    public constructor(props?: ReportPrefs) {
        this["@class"] = ".ReportPrefs";

        (<any>Object).assign(this, <any> props);
    }
}

export class OtherPrefs {
    public NameValue?: xmlns.NameValue;

    public constructor(props?: OtherPrefs) {
        this["@class"] = ".OtherPrefs";

        (<any>Object).assign(this, <any> props);
    }
}

export class UOMRef {
    public Unit: string;
    public UOMSetRef: xmlns.ReferenceType;

    public constructor(props?: UOMRef) {
        this["@class"] = ".UOMRef";

        (<any>Object).assign(this, <any> props);
    }
}

export class UOMConvUnit {
    public Name?: string;
    public Abbrv?: string;
    public ConvRatio?: xs.decimal;

    public constructor(props?: UOMConvUnit) {
        this["@class"] = ".UOMConvUnit";

        (<any>Object).assign(this, <any> props);
    }
}

export class OLBTxnDetail {
    public PostDate?: Date;
    public TxnDate?: Date;
    public Amount?: xs.decimal;
    public ReferenceNumber?: string;
    public TxnStatus?: string;

    public constructor(props?: OLBTxnDetail) {
        this["@class"] = ".OLBTxnDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class OLBTxn {
    public AccountId?: xmlns.ReferenceType;
    public LastPostingDate?: Date;
    public TxnsDownloadTime?: Date;
    public OLBTxnDetail?: xmlns.OLBTxnDetail;

    public constructor(props?: OLBTxn) {
        this["@class"] = ".OLBTxn";

        (<any>Object).assign(this, <any> props);
    }
}

export class OLBTransaction {
    public OLBDownloadTime?: Date;
    public OLBTxn?: xmlns.OLBTxn;

    public constructor(props?: OLBTransaction) {
        this["@class"] = ".OLBTransaction";

        (<any>Object).assign(this, <any> props);
    }
}

export class OLBAccount {
    public AccountId?: xmlns.ReferenceType;
    public AccountDetails?: string;
    public SubscribedToApp?: boolean;
    public AppVersion?: string;
    public LastBankBalance?: xs.decimal;

    public constructor(props?: OLBAccount) {
        this["@class"] = ".OLBAccount";

        (<any>Object).assign(this, <any> props);
    }
}

export class OLBStatus {
    public OLBAccount?: xmlns.OLBAccount;

    public constructor(props?: OLBStatus) {
        this["@class"] = ".OLBStatus";

        (<any>Object).assign(this, <any> props);
    }
}

export class BudgetDetail {
    public BudgetDate?: Date;
    public Amount?: xs.decimal;
    public AccountRef?: xmlns.ReferenceType;
    public CustomerRef?: xmlns.ReferenceType;
    public ClassRef?: xmlns.ReferenceType;
    public DepartmentRef?: xmlns.ReferenceType;

    public constructor(props?: BudgetDetail) {
        this["@class"] = ".BudgetDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class StatusInfo {
    public status?: string;
    public statusDate?: Date;
    public callToAction?: string;

    public constructor(props?: StatusInfo) {
        this["@class"] = ".StatusInfo";

        (<any>Object).assign(this, <any> props);
    }
}

export class QbdtEntityIdMapping extends IntuitEntity {
    public QboEntityId: string;
    public QbdtExportableId: string;
    public QboEntityType: string;
    public QbdtEntityType: string;

    public constructor(props?: QbdtEntityIdMapping) {
        super();

        this["@class"] = ".QbdtEntityIdMapping";

        (<any>Object).assign(this, <any> props);
    }
}

export class Company extends IntuitEntity {
    public CompanyName?: string;
    public LegalName?: string;
    public CompanyAddr?: xmlns.PhysicalAddress;
    public CustomerCommunicationAddr?: xmlns.PhysicalAddress;
    public LegalAddr?: xmlns.PhysicalAddress;
    public CompanyEmailAddr?: xmlns.EmailAddress;
    public CustomerCommunicationEmailAddr?: xmlns.EmailAddress;
    public CompanyURL?: xmlns.WebSiteAddress;
    public PrimaryPhone?: xmlns.TelephoneNumber;
    public OtherContactInfo?: xmlns.ContactInfo;
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
    public ShipAddr?: xmlns.PhysicalAddress;
    public OtherAddr?: xmlns.PhysicalAddress;
    public Mobile?: xmlns.TelephoneNumber;
    public Fax?: xmlns.TelephoneNumber;
    public Email?: xmlns.EmailAddress;
    public WebSite?: xmlns.WebSiteAddress;
    public LastImportedTime?: Date;
    public SupportedLanguages?: string;
    public DefaultTimeZone?: string;
    public MultiByteCharsSupported?: boolean;
    public NameValue?: xmlns.NameValue;
    public CompanyInfoEx?: xmlns.IntuitAnyType;

    public constructor(props?: Company) {
        super();

        this["@class"] = ".Company";

        (<any>Object).assign(this, <any> props);
    }
}

export class CompanyInfo extends IntuitEntity {
    public CompanyName?: string;
    public LegalName?: string;
    public CompanyAddr?: xmlns.PhysicalAddress;
    public CustomerCommunicationAddr?: xmlns.PhysicalAddress;
    public LegalAddr?: xmlns.PhysicalAddress;
    public CompanyEmailAddr?: xmlns.EmailAddress;
    public CustomerCommunicationEmailAddr?: xmlns.EmailAddress;
    public CompanyURL?: xmlns.WebSiteAddress;
    public PrimaryPhone?: xmlns.TelephoneNumber;
    public OtherContactInfo?: xmlns.ContactInfo;
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
    public ShipAddr?: xmlns.PhysicalAddress;
    public OtherAddr?: xmlns.PhysicalAddress;
    public Mobile?: xmlns.TelephoneNumber;
    public Fax?: xmlns.TelephoneNumber;
    public Email?: xmlns.EmailAddress;
    public WebAddr?: xmlns.WebSiteAddress;
    public LastImportedTime?: Date;
    public LastSyncTime?: Date;
    public SupportedLanguages?: string;
    public DefaultTimeZone?: string;
    public MultiByteCharsSupported?: boolean;
    public NameValue?: xmlns.NameValue;
    public FifoCalculationStatus?: xmlns.FifoCalculationStatus;
    public CompanyInfoEx?: xmlns.IntuitAnyType;

    public constructor(props?: CompanyInfo) {
        super();

        this["@class"] = ".CompanyInfo";

        (<any>Object).assign(this, <any> props);
    }
}

export class Transaction extends IntuitEntity {
    public DocNumber?: string;
    public TxnDate?: Date;
    public DepartmentRef?: xmlns.ReferenceType;
    public CurrencyRef?: xmlns.ReferenceType;
    public ExchangeRate?: xs.decimal;
    public PrivateNote?: string;
    public TxnStatus?: string;
    public LinkedTxn?: xmlns.LinkedTxn;
    public Line?: xmlns.Line;
    public TxnTaxDetail?: TxnTaxDetail;
    public TxnSource?: string;
    public TaxFormType?: string;
    public TaxFormNum?: string;
    public TransactionLocationType?: string;
    public Tag?: xmlns.Tag;
    public TxnApprovalInfo?: TxnApprovalInfo;

    public constructor(props?: Transaction) {
        super();

        this["@class"] = ".Transaction";

        (<any>Object).assign(this, <any> props);
    }
}

export class SalesTransaction extends Transaction {
    public AutoDocNumber?: boolean;
    public CustomerRef?: xmlns.ReferenceType;
    public CustomerMemo?: MemoRef;
    public BillAddr?: xmlns.PhysicalAddress;
    public ShipAddr?: xmlns.PhysicalAddress;
    public FreeFormAddress?: boolean;
    public ShipFromAddr?: xmlns.PhysicalAddress;
    public RemitToRef?: xmlns.ReferenceType;
    public ClassRef?: xmlns.ReferenceType;
    public SalesTermRef?: xmlns.ReferenceType;
    public DueDate?: Date;
    public SalesRepRef?: xmlns.ReferenceType;
    public PONumber?: string;
    public FOB?: string;
    public ShipMethodRef?: xmlns.ReferenceType;
    public ShipDate?: Date;
    public TrackingNum?: string;
    public GlobalTaxCalculation?: GlobalTaxCalculationEnum;
    public TotalAmt?: xs.decimal;
    public HomeTotalAmt?: xs.decimal;
    public ApplyTaxAfterDiscount?: boolean;
    public TemplateRef?: xmlns.ReferenceType;
    public PrintStatus?: PrintStatusEnum;
    public EmailStatus?: EmailStatusEnum;
    public BillEmail?: xmlns.EmailAddress;
    public BillEmailCc?: xmlns.EmailAddress;
    public BillEmailBcc?: xmlns.EmailAddress;
    public ARAccountRef?: xmlns.ReferenceType;
    public Balance?: xs.decimal;
    public HomeBalance?: xs.decimal;
    public FinanceCharge?: boolean;
    public PaymentMethodRef?: xmlns.ReferenceType;
    public PaymentRefNum?: string;
    public PaymentType?: PaymentTypeEnum;
    public DepositToAccountRef?: xmlns.ReferenceType;
    public DeliveryInfo?: xmlns.TransactionDeliveryInfo;
    public DiscountRate?: xs.decimal;
    public DiscountAmt?: xs.decimal;
    public GovtTxnRefIdentifier?: string;
    public TaxExemptionRef?: xmlns.ReferenceType;

    public constructor(props?: SalesTransaction) {
        super();

        this["@class"] = ".SalesTransaction";

        (<any>Object).assign(this, <any> props);
    }
}

export class Invoice extends SalesTransaction {
    public Deposit?: xs.decimal;
    public AllowIPNPayment?: boolean;
    public AllowOnlinePayment?: boolean;
    public AllowOnlineCreditCardPayment?: boolean;
    public AllowOnlineACHPayment?: boolean;
    public EInvoiceStatus?: ETransactionStatusEnum;
    public ECloudStatusTimeStamp?: Date;
    public invoiceStatus?: string;
    public callToAction?: string;
    public invoiceStatusLog?: xmlns.StatusInfo;
    public InvoiceEx?: xmlns.IntuitAnyType;
    public LessCIS?: xs.decimal;
    public InvoiceLink?: string;
    public PaymentDetailsMessage?: string;
    public ConvenienceFeeDetail?: ConvenienceFeeDetail;

    public constructor(props?: Invoice) {
        super();

        this["@class"] = ".Invoice";

        (<any>Object).assign(this, <any> props);
    }
}

export class ConvenienceFeeDetail extends IntuitEntity {
    public ConvenienceFeeType?: ConvenienceFeeTypeEnum;
    public ConvenienceFeePercent?: xs.decimal;

    public constructor(props?: ConvenienceFeeDetail) {
        super();

        this["@class"] = ".ConvenienceFeeDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class SalesReceipt extends SalesTransaction {
    public SalesReceiptEx?: xmlns.IntuitAnyType;
    public LessCIS?: xs.decimal;

    public constructor(props?: SalesReceipt) {
        super();

        this["@class"] = ".SalesReceipt";

        (<any>Object).assign(this, <any> props);
    }
}

export class Estimate extends SalesTransaction {
    public ExpirationDate?: Date;
    public AcceptedBy?: string;
    public AcceptedDate?: Date;
    public EstimateEx?: xmlns.IntuitAnyType;

    public constructor(props?: Estimate) {
        super();

        this["@class"] = ".Estimate";

        (<any>Object).assign(this, <any> props);
    }
}

export class EmailDeliveryInfo extends IntuitEntity {
    public DeliveryAddress?: xmlns.EmailAddress;
    public DeliveryAddressCc?: xmlns.EmailAddress;
    public DeliveryAddressBcc?: xmlns.EmailAddress;
    public EmailMessage?: xmlns.EmailMessage;
    public AllowOnlinePayment?: boolean;
    public AllowOnlineCreditCardPayment?: boolean;
    public AllowOnlineACHPayment?: boolean;
    public DeliveryInfo?: xmlns.TransactionDeliveryInfo;
    public ETransactionStatus?: ETransactionStatusEnum;

    public constructor(props?: EmailDeliveryInfo) {
        super();

        this["@class"] = ".EmailDeliveryInfo";

        (<any>Object).assign(this, <any> props);
    }
}

export class Tag extends IntuitEntity {
    public Name?: string;

    public constructor(props?: Tag) {
        super();

        this["@class"] = ".Tag";

        (<any>Object).assign(this, <any> props);
    }
}

export class DiscountLineDetail extends DiscountOverride {
    public ServiceDate?: Date;
    public ClassRef?: xmlns.ReferenceType;
    public TaxCodeRef?: xmlns.ReferenceType;
    public DiscountLineDetailEx?: xmlns.IntuitAnyType;

    public constructor(props?: DiscountLineDetail) {
        super();

        this["@class"] = ".DiscountLineDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class FixedAsset extends IntuitEntity {
    public Name?: string;
    public Active?: boolean;
    public AcquiredAs?: AcquiredAsEnum;
    public PurchaseDesc?: string;
    public PurchaseDate?: Date;
    public PurchaseCost?: xs.decimal;
    public Vendor?: string;
    public AssetAccountRef?: xmlns.ReferenceType;
    public SalesDesc?: string;
    public SalesDate?: Date;
    public SalesPrice?: xs.decimal;
    public SalesExpense?: xs.decimal;
    public Location?: string;
    public PONumber?: string;
    public SerialNumber?: string;
    public WarrantyExpDate?: Date;
    public Description?: string;
    public Notes?: string;
    public AssetNum?: number;
    public CostBasis?: xs.decimal;
    public Depreciation?: xs.decimal;
    public BookValue?: xs.decimal;
    public FixedAssetEx?: xmlns.IntuitAnyType;

    public constructor(props?: FixedAsset) {
        super();

        this["@class"] = ".FixedAsset";

        (<any>Object).assign(this, <any> props);
    }
}

export class SalesItemLineDetail extends ItemLineDetail {
    public ServiceDate?: Date;
    public TaxInclusiveAmt?: xs.decimal;
    public DiscountRate?: xs.decimal;
    public DiscountAmt?: xs.decimal;
    public SalesItemLineDetailEx?: xmlns.IntuitAnyType;

    public constructor(props?: SalesItemLineDetail) {
        super();

        this["@class"] = ".SalesItemLineDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class ItemBasedExpenseLineDetail extends ItemLineDetail {
    public CustomerRef?: xmlns.ReferenceType;
    public BillableStatus?: BillableStatusEnum;
    public TaxInclusiveAmt?: xs.decimal;
    public ItemBasedExpenseLineDetailEx?: xmlns.IntuitAnyType;

    public constructor(props?: ItemBasedExpenseLineDetail) {
        super();

        this["@class"] = ".ItemBasedExpenseLineDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class PurchaseOrderItemLineDetail extends SalesItemLineDetail {
    public ManPartNum?: string;
    public ManuallyClosed?: boolean;
    public OpenQty?: xs.decimal;
    public PurchaseOrderItemLineDetailEx?: xmlns.IntuitAnyType;

    public constructor(props?: PurchaseOrderItemLineDetail) {
        super();

        this["@class"] = ".PurchaseOrderItemLineDetail";

        (<any>Object).assign(this, <any> props);
    }
}

export class SalesOrderItemLineDetail extends SalesItemLineDetail {
    public ManuallyClosed?: boolean;

    public constructor(props?: SalesOrderItemLineDetail) {
        super();

        this["@class"] = ".SalesOrderItemLineDetail";

        (<any>Object).assign(this, <any> props);
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
    public TaxCodeEx?: xmlns.IntuitAnyType;
    public TaxCodeConfigType?: GTMConfigTypeEnum;

    public constructor(props?: TaxCode) {
        super();

        this["@class"] = ".TaxCode";

        (<any>Object).assign(this, <any> props);
    }
}

export class TaxRate extends IntuitEntity {
    public Name?: string;
    public Description?: string;
    public Active?: boolean;
    public RateValue?: xs.decimal;
    public AgencyRef?: xmlns.ReferenceType;
    public TaxReturnLineRef?: xmlns.ReferenceType;
    public EffectiveTaxRate?: xmlns.EffectiveTaxRate;
    public SpecialTaxType?: SpecialTaxTypeEnum;
    public DisplayType?: TaxRateDisplayTypeEnum;
    public TaxRateEx?: xmlns.IntuitAnyType;

    public constructor(props?: TaxRate) {
        super();

        this["@class"] = ".TaxRate";

        (<any>Object).assign(this, <any> props);
    }
}

export class Account extends IntuitEntity {
    public Name?: string;
    public SubAccount?: boolean;
    public ParentRef?: xmlns.ReferenceType;
    public Description?: string;
    public FullyQualifiedName?: string;
    public AccountAlias?: string;
    public TxnLocationType?: string;
    public Active?: boolean;
    public Classification?: AccountClassificationEnum;
    public AccountType?: AccountTypeEnum;
    public AccountSubType?: string;
    public AccountPurposes?: xmlns.ReferenceType;
    public AcctNum?: string;
    public AcctNumExtn?: string;
    public BankNum?: string;
    public OpeningBalance?: xs.decimal;
    public OpeningBalanceDate?: Date;
    public CurrentBalance?: xs.decimal;
    public CurrentBalanceWithSubAccounts?: xs.decimal;
    public CurrencyRef?: xmlns.ReferenceType;
    public TaxAccount?: boolean;
    public TaxCodeRef?: xmlns.ReferenceType;
    public OnlineBankingEnabled?: boolean;
    public FIName?: string;
    public JournalCodeRef?: xmlns.ReferenceType;
    public AccountEx?: xmlns.IntuitAnyType;

    public constructor(props?: Account) {
        super();

        this["@class"] = ".Account";

        (<any>Object).assign(this, <any> props);
    }
}

export class MasterAccount extends Account {
    public AccountExistsInCompany?: boolean;

    public constructor(props?: MasterAccount) {
        super();

        this["@class"] = ".MasterAccount";

        (<any>Object).assign(this, <any> props);
    }
}

export class Purchase extends Transaction, TxnReferenceGroup {
    public AccountRef?: xmlns.ReferenceType;
    public PaymentMethodRef?: xmlns.ReferenceType;
    public PaymentRefNum?: string;
    public PaymentType?: PaymentTypeEnum;
    public EntityRef?: xmlns.ReferenceType;
    public Credit?: boolean;
    public RemitToAddr?: xmlns.PhysicalAddress;
    public TotalAmt?: xs.decimal;
    public Memo?: string;
    public PrintStatus?: PrintStatusEnum;
    public GlobalTaxCalculation?: GlobalTaxCalculationEnum;
    public PurchaseEx?: xmlns.IntuitAnyType;
    public LessCIS?: xs.decimal;
    public IncludeInAnnualTPAR?: boolean;

    public constructor(props?: Purchase) {
        super();

        this["@class"] = ".Purchase";

        (<any>Object).assign(this, <any> props);
    }
}

export class PurchaseByVendor extends Transaction {
    public VendorRef?: xmlns.ReferenceType;
    public APAccountRef?: xmlns.ReferenceType;
    public TotalAmt?: xs.decimal;
    public BillEmail?: xmlns.EmailAddress;
    public ReplyEmail?: xmlns.EmailAddress;
    public Memo?: string;
    public GlobalTaxCalculation?: GlobalTaxCalculationEnum;

    public constructor(props?: PurchaseByVendor) {
        super();

        this["@class"] = ".PurchaseByVendor";

        (<any>Object).assign(this, <any> props);
    }
}

export class Bill extends PurchaseByVendor {
    public PayerRef?: xmlns.ReferenceType;
    public SalesTermRef?: xmlns.ReferenceType;
    public DueDate?: Date;
    public RemitToAddr?: xmlns.PhysicalAddress;
    public ShipAddr?: xmlns.PhysicalAddress;
    public VendorAddr?: xmlns.PhysicalAddress;
    public Balance?: xs.decimal;
    public HomeBalance?: xs.decimal;
    public BillEx?: xmlns.IntuitAnyType;
    public LessCIS?: xs.decimal;
    public IncludeInAnnualTPAR?: boolean;

    public constructor(props?: Bill) {
        super();

        this["@class"] = ".Bill";

        (<any>Object).assign(this, <any> props);
    }
}

export class VendorCredit extends PurchaseByVendor {
    public VendorAddr?: xmlns.PhysicalAddress;
    public VendorCreditEx?: xmlns.IntuitAnyType;
    public Balance?: xs.decimal;
    public IncludeInAnnualTPAR?: boolean;

    public constructor(props?: VendorCredit) {
        super();

        this["@class"] = ".VendorCredit";

        (<any>Object).assign(this, <any> props);
    }
}

export class StatementCharge extends Transaction {
    public Credit?: boolean;
    public CustomerRef?: xmlns.ReferenceType;
    public RemitToRef?: xmlns.ReferenceType;
    public ARAccountRef?: xmlns.ReferenceType;
    public ClassRef?: xmlns.ReferenceType;
    public DueDate?: Date;
    public BilledDate?: Date;
    public TotalAmt?: xs.decimal;
    public StatementChargeEx?: xmlns.IntuitAnyType;

    public constructor(props?: StatementCharge) {
        super();

        this["@class"] = ".StatementCharge";

        (<any>Object).assign(this, <any> props);
    }
}

export class Class extends IntuitEntity {
    public Name?: string;
    public SubClass?: boolean;
    public ParentRef?: xmlns.ReferenceType;
    public FullyQualifiedName?: string;
    public Active?: boolean;
    public ClassEx?: xmlns.IntuitAnyType;

    public constructor(props?: Class) {
        super();

        this["@class"] = ".Class";

        (<any>Object).assign(this, <any> props);
    }
}

export class JournalCode extends IntuitEntity {
    public Name?: string;
    public Type?: string;
    public Description?: string;
    public Active?: boolean;
    public JournalCodeEx?: xmlns.IntuitAnyType;

    public constructor(props?: JournalCode) {
        super();

        this["@class"] = ".JournalCode";

        (<any>Object).assign(this, <any> props);
    }
}

export class Payment extends Transaction {
    public CustomerRef?: xmlns.ReferenceType;
    public RemitToRef?: xmlns.ReferenceType;
    public ARAccountRef?: xmlns.ReferenceType;
    public DepositToAccountRef?: xmlns.ReferenceType;
    public PaymentMethodRef?: xmlns.ReferenceType;
    public PaymentRefNum?: string;
    public PaymentType?: PaymentTypeEnum;
    public TotalAmt?: xs.decimal;
    public UnappliedAmt?: xs.decimal;
    public ProcessPayment?: boolean;
    public PaymentEx?: xmlns.IntuitAnyType;

    public constructor(props?: Payment) {
        super();

        this["@class"] = ".Payment";

        (<any>Object).assign(this, <any> props);
    }
}

export class PaymentMethod extends IntuitEntity {
    public Name?: string;
    public Active?: boolean;
    public Type?: string;
    public PaymentMethodEx?: xmlns.IntuitAnyType;

    public constructor(props?: PaymentMethod) {
        super();

        this["@class"] = ".PaymentMethod";

        (<any>Object).assign(this, <any> props);
    }
}

export class Department extends IntuitEntity {
    public Name?: string;
    public SubDepartment?: boolean;
    public ParentRef?: xmlns.ReferenceType;
    public FullyQualifiedName?: string;
    public Active?: boolean;
    public DepartmentEx?: xmlns.IntuitAnyType;
    public Address?: xmlns.PhysicalAddress;

    public constructor(props?: Department) {
        super();

        this["@class"] = ".Department";

        (<any>Object).assign(this, <any> props);
    }
}

export class Item extends IntuitEntity {
    public Name?: string;
    public Sku?: string;
    public Description?: string;
    public Active?: boolean;
    public SubItem?: boolean;
    public ParentRef?: xmlns.ReferenceType;
    public Level?: number;
    public FullyQualifiedName?: string;
    public Taxable?: boolean;
    public SalesTaxIncluded?: boolean;
    public PercentBased?: boolean;
    public UnitPrice?: xs.decimal;
    public RatePercent?: xs.decimal;
    public Type?: ItemTypeEnum;
    public PaymentMethodRef?: xmlns.ReferenceType;
    public UOMSetRef?: xmlns.ReferenceType;
    public IncomeAccountRef?: xmlns.ReferenceType;
    public PurchaseDesc?: string;
    public PurchaseTaxIncluded?: boolean;
    public PurchaseCost?: xs.decimal;
    public ExpenseAccountRef?: xmlns.ReferenceType;
    public COGSAccountRef?: xmlns.ReferenceType;
    public AssetAccountRef?: xmlns.ReferenceType;
    public PrefVendorRef?: xmlns.ReferenceType;
    public AvgCost?: xs.decimal;
    public TrackQtyOnHand?: boolean;
    public QtyOnHand?: xs.decimal;
    public QtyOnPurchaseOrder?: xs.decimal;
    public QtyOnSalesOrder?: xs.decimal;
    public ReorderPoint?: xs.decimal;
    public ManPartNum?: string;
    public DepositToAccountRef?: xmlns.ReferenceType;
    public SalesTaxCodeRef?: xmlns.ReferenceType;
    public PurchaseTaxCodeRef?: xmlns.ReferenceType;
    public InvStartDate?: Date;
    public BuildPoint?: xs.decimal;
    public PrintGroupedItems?: boolean;
    public SpecialItem?: boolean;
    public SpecialItemType?: SpecialItemTypeEnum;
    public ItemGroupDetail?: ItemGroupDetail;
    public ItemAssemblyDetail?: ItemAssemblyDetail;
    public AbatementRate?: xs.decimal;
    public ReverseChargeRate?: xs.decimal;
    public ServiceType?: string;
    public ItemCategoryType?: string;
    public ItemEx?: xmlns.IntuitAnyType;
    public TaxClassificationRef?: xmlns.ReferenceType;
    public UQCDisplayText?: string;
    public UQCId?: string;
    public ClassRef?: xmlns.ReferenceType;

    public constructor(props?: Item) {
        super();

        this["@class"] = ".Item";

        (<any>Object).assign(this, <any> props);
    }
}

export class Term extends IntuitEntity {
    public Name?: string;
    public Active?: boolean;
    public Type?: string;
    public DiscountPercent?: xs.decimal;
    public SalesTermEx?: xmlns.IntuitAnyType;

    public constructor(props?: Term) {
        super();

        this["@class"] = ".Term";

        (<any>Object).assign(this, <any> props);
    }
}

export class BillPayment extends Transaction {
    public VendorRef?: xmlns.ReferenceType;
    public VendorAddr?: xmlns.PhysicalAddress;
    public APAccountRef?: xmlns.ReferenceType;
    public PayType?: BillPaymentTypeEnum;
    public TotalAmt?: xs.decimal;
    public BillPaymentEx?: xmlns.IntuitAnyType;

    public constructor(props?: BillPayment) {
        super();

        this["@class"] = ".BillPayment";

        (<any>Object).assign(this, <any> props);
    }
}

export class Deposit extends Transaction {
    public DepositToAccountRef?: xmlns.ReferenceType;
    public CashBack?: CashBackInfo;
    public GlobalTaxCalculation?: GlobalTaxCalculationEnum;
    public TotalAmt?: xs.decimal;
    public HomeTotalAmt?: xs.decimal;
    public DepositEx?: xmlns.IntuitAnyType;

    public constructor(props?: Deposit) {
        super();

        this["@class"] = ".Deposit";

        (<any>Object).assign(this, <any> props);
    }
}

export class Transfer extends Transaction {
    public FromAccountRef?: xmlns.ReferenceType;
    public ToAccountRef?: xmlns.ReferenceType;
    public Amount?: xs.decimal;
    public ClassRef?: xmlns.ReferenceType;
    public TransferEx: xmlns.IntuitAnyType;

    public constructor(props?: Transfer) {
        super();

        this["@class"] = ".Transfer";

        (<any>Object).assign(this, <any> props);
    }
}

export class PurchaseOrder extends PurchaseByVendor {
    public TaxCodeRef?: xmlns.ReferenceType;
    public ClassRef?: xmlns.ReferenceType;
    public ReimbursableInfoRef?: xmlns.ReferenceType;
    public SalesTermRef?: xmlns.ReferenceType;
    public DueDate?: Date;
    public ExpectedDate?: Date;
    public VendorAddr?: xmlns.PhysicalAddress;
    public ShipTo?: xmlns.ReferenceType;
    public ShipAddr?: xmlns.PhysicalAddress;
    public ShipMethodRef?: xmlns.ReferenceType;
    public FOB?: string;
    public POEmail?: xmlns.EmailAddress;
    public TemplateRef?: xmlns.ReferenceType;
    public PrintStatus?: PrintStatusEnum;
    public EmailStatus?: EmailStatusEnum;
    public ManuallyClosed?: boolean;
    public POStatus?: PurchaseOrderStatusEnum;
    public PurchaseOrderEx?: xmlns.IntuitAnyType;

    public constructor(props?: PurchaseOrder) {
        super();

        this["@class"] = ".PurchaseOrder";

        (<any>Object).assign(this, <any> props);
    }
}

export class SalesOrder extends SalesTransaction {
    public ManuallyClosed?: boolean;
    public SalesOrderEx?: xmlns.IntuitAnyType;

    public constructor(props?: SalesOrder) {
        super();

        this["@class"] = ".SalesOrder";

        (<any>Object).assign(this, <any> props);
    }
}

export class CreditMemo extends SalesTransaction {
    public RemainingCredit?: xs.decimal;
    public InvoiceRef?: xmlns.ReferenceType;
    public CreditMemoEx?: xmlns.IntuitAnyType;

    public constructor(props?: CreditMemo) {
        super();

        this["@class"] = ".CreditMemo";

        (<any>Object).assign(this, <any> props);
    }
}

export class RefundReceipt extends SalesTransaction {
    public RemainingCredit?: xs.decimal;
    public RefundReceiptEx?: xmlns.IntuitAnyType;

    public constructor(props?: RefundReceipt) {
        super();

        this["@class"] = ".RefundReceipt";

        (<any>Object).assign(this, <any> props);
    }
}

export class CreditCardPaymentTxn extends Transaction {
    public CreditCardAccountRef?: xmlns.ReferenceType;
    public BankAccountRef?: xmlns.ReferenceType;
    public Amount?: xs.decimal;
    public CreditCardPaymentEx: xmlns.IntuitAnyType;

    public constructor(props?: CreditCardPaymentTxn) {
        super();

        this["@class"] = ".CreditCardPaymentTxn";

        (<any>Object).assign(this, <any> props);
    }
}

export class Currency extends IntuitEntity {
    public Name?: string;
    public Active?: boolean;
    public Code?: xmlns.currencyCode;
    public Separator?: string;
    public Format?: string;
    public DecimalPlaces?: xs.positiveInteger;
    public DecimalSeparator?: string;
    public Symbol?: string;
    public SymbolPosition?: SymbolPositionEnum;
    public UserDefined?: boolean;
    public ExchangeRate?: xs.decimal;
    public AsOfDate?: Date;
    public CurrencyEx?: xmlns.IntuitAnyType;

    public constructor(props?: Currency) {
        super();

        this["@class"] = ".Currency";

        (<any>Object).assign(this, <any> props);
    }
}

export class CompanyCurrency extends IntuitEntity {
    public Code?: string;
    public Name?: string;
    public Active?: boolean;
    public CompanyCurrencyEx?: xmlns.IntuitAnyType;

    public constructor(props?: CompanyCurrency) {
        super();

        this["@class"] = ".CompanyCurrency";

        (<any>Object).assign(this, <any> props);
    }
}

export class ExchangeRate extends IntuitEntity {
    public SourceCurrencyCode?: string;
    public TargetCurrencyCode?: string;
    public Rate?: xs.decimal;
    public AsOfDate?: Date;
    public ExchangeRateEx?: xmlns.IntuitAnyType;

    public constructor(props?: ExchangeRate) {
        super();

        this["@class"] = ".ExchangeRate";

        (<any>Object).assign(this, <any> props);
    }
}

export class SalesRep extends IntuitEntity {
    public NameOf?: SalesRepTypeEnum;
    public Active?: boolean;
    public Initials?: string;
    public SalesRepEx?: xmlns.IntuitAnyType;

    public constructor(props?: SalesRep) {
        super();

        this["@class"] = ".SalesRep";

        (<any>Object).assign(this, <any> props);
    }
}

export class PriceLevel extends IntuitEntity {
    public Active: boolean;
    public PriceLevelType: PriceLevelTypeEnum;
    public CurrencyRef?: xmlns.ReferenceType;
    public PriceLevelEx?: xmlns.IntuitAnyType;

    public constructor(props?: PriceLevel) {
        super();

        this["@class"] = ".PriceLevel";

        (<any>Object).assign(this, <any> props);
    }
}

export class PriceLevelPerItem extends IntuitEntity {
    public ItemRef?: xmlns.ReferenceType;
    public PriceLevelPerItemEx?: xmlns.IntuitAnyType;

    public constructor(props?: PriceLevelPerItem) {
        super();

        this["@class"] = ".PriceLevelPerItem";

        (<any>Object).assign(this, <any> props);
    }
}

export class CustomerMsg extends IntuitEntity {
    public Name?: string;
    public Active?: boolean;
    public CustomerMsgEx?: xmlns.IntuitAnyType;

    public constructor(props?: CustomerMsg) {
        super();

        this["@class"] = ".CustomerMsg";

        (<any>Object).assign(this, <any> props);
    }
}

export class JournalEntry extends Transaction {
    public Adjustment?: boolean;
    public HomeCurrencyAdjustment?: boolean;
    public EnteredInHomeCurrency?: boolean;
    public TotalAmt?: xs.decimal;
    public HomeTotalAmt?: xs.decimal;
    public JournalEntryEx?: xmlns.IntuitAnyType;

    public constructor(props?: JournalEntry) {
        super();

        this["@class"] = ".JournalEntry";

        (<any>Object).assign(this, <any> props);
    }
}

export class TimeActivity extends IntuitEntity {
    public TimeZone?: string;
    public TxnDate?: Date;
    public NameOf?: TimeActivityTypeEnum;
    public CustomerRef?: xmlns.ReferenceType;
    public DepartmentRef?: xmlns.ReferenceType;
    public ItemRef?: xmlns.ReferenceType;
    public ClassRef?: xmlns.ReferenceType;
    public PayrollItemRef?: xmlns.ReferenceType;
    public BillableStatus?: BillableStatusEnum;
    public Taxable?: boolean;
    public HourlyRate?: xs.decimal;
    public Hours?: number;
    public Minutes?: number;
    public BreakHours?: number;
    public BreakMinutes?: number;
    public StartTime?: Date;
    public EndTime?: Date;
    public Description?: string;
    public TimeActivityEx?: xmlns.IntuitAnyType;
    public HoursInEmployeeTimeZone?: boolean;

    public constructor(props?: TimeActivity) {
        super();

        this["@class"] = ".TimeActivity";

        (<any>Object).assign(this, <any> props);
    }
}

export class InventorySite extends IntuitEntity {
    public Name?: string;
    public Active?: boolean;
    public DefaultSite?: boolean;
    public Description?: string;
    public Contact?: string;
    public Addr?: xmlns.PhysicalAddress;
    public ContactInfo?: xmlns.ContactInfo;
    public InventorySiteEx?: xmlns.IntuitAnyType;

    public constructor(props?: InventorySite) {
        super();

        this["@class"] = ".InventorySite";

        (<any>Object).assign(this, <any> props);
    }
}

export class ShipMethod extends IntuitEntity {
    public Name?: string;
    public Active: boolean;
    public ShipMethodEx?: xmlns.IntuitAnyType;

    public constructor(props?: ShipMethod) {
        super();

        this["@class"] = ".ShipMethod";

        (<any>Object).assign(this, <any> props);
    }
}

export class Task extends IntuitEntity {
    public Notes?: string;
    public From?: string;
    public Active?: boolean;
    public Done?: boolean;
    public ReminderDate?: Date;
    public TaskEx?: xmlns.IntuitAnyType;

    public constructor(props?: Task) {
        super();

        this["@class"] = ".Task";

        (<any>Object).assign(this, <any> props);
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
    public NameValue?: xmlns.NameValue;
    public UserAlertEx?: xmlns.IntuitAnyType;

    public constructor(props?: UserAlert) {
        super();

        this["@class"] = ".UserAlert";

        (<any>Object).assign(this, <any> props);
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

        this["@class"] = ".Preferences";

        (<any>Object).assign(this, <any> props);
    }
}

export class UOM extends IntuitEntity {
    public Name?: string;
    public Abbrv?: string;
    public BaseType?: UOMBaseTypeEnum;
    public ConvUnit?: xmlns.UOMConvUnit;

    public constructor(props?: UOM) {
        super();

        this["@class"] = ".UOM";

        (<any>Object).assign(this, <any> props);
    }
}

export class TemplateName extends IntuitEntity {
    public Name?: string;
    public Active?: boolean;
    public Type?: TemplateTypeEnum;

    public constructor(props?: TemplateName) {
        super();

        this["@class"] = ".TemplateName";

        (<any>Object).assign(this, <any> props);
    }
}

export class Attachable extends IntuitEntity {
    public FileName?: string;
    public FileAccessUri?: string;
    public TempDownloadUri?: string;
    public Size?: xs.long;
    public ContentType?: string;
    public Category?: string;
    public Lat?: string;
    public Long?: string;
    public PlaceName?: string;
    public Note?: string;
    public Tag?: string;
    public ThumbnailFileAccessUri?: string;
    public ThumbnailTempDownloadUri?: string;
    public AttachableEx?: xmlns.IntuitAnyType;

    public constructor(props?: Attachable) {
        super();

        this["@class"] = ".Attachable";

        (<any>Object).assign(this, <any> props);
    }
}

export class Budget extends IntuitEntity {
    public Name?: string;
    public StartDate?: Date;
    public EndDate?: Date;
    public BudgetType?: BudgetTypeEnum;
    public BudgetEntryType?: BudgetEntryTypeEnum;
    public Active?: boolean;
    public BudgetDetail?: xmlns.BudgetDetail;

    public constructor(props?: Budget) {
        super();

        this["@class"] = ".Budget";

        (<any>Object).assign(this, <any> props);
    }
}

export class TDSMetadata extends IntuitEntity {
    public TDSEntityTypes?: xmlns.NameValue;
    public TDSSectionTypes?: xmlns.NameValue;

    public constructor(props?: TDSMetadata) {
        super();

        this["@class"] = ".TDSMetadata";

        (<any>Object).assign(this, <any> props);
    }
}

export class ReimburseCharge extends Transaction {
    public CustomerRef?: xmlns.ReferenceType;
    public Amount?: xs.decimal;

    public constructor(props?: ReimburseCharge) {
        super();

        this["@class"] = ".ReimburseCharge";

        (<any>Object).assign(this, <any> props);
    }
}

export class ChargeCredit extends Transaction {
    public Credit?: boolean;
    public CustomerRef?: xmlns.ReferenceType;
    public RemitToRef?: xmlns.ReferenceType;
    public ARAccountRef?: xmlns.ReferenceType;
    public ClassRef?: xmlns.ReferenceType;
    public DueDate?: Date;
    public BilledDate?: Date;
    public TotalAmt?: xs.decimal;
    public ChargeCreditEx?: xmlns.IntuitAnyType;

    public constructor(props?: ChargeCredit) {
        super();

        this["@class"] = ".ChargeCredit";

        (<any>Object).assign(this, <any> props);
    }
}

export class TaxReturn extends IntuitEntity {
    public UpcomingFiling?: boolean;
    public StartDate?: Date;
    public EndDate?: Date;
    public FileDate?: Date;
    public AgencyPaymentDate?: Date;
    public AgencyPaymentAmount?: xs.decimal;
    public NetTaxAmountDue?: xs.decimal;
    public FlatRateSavingsAmountDue?: xs.decimal;
    public PayGWithheldAmount?: xs.decimal;
    public AgencyRef?: xmlns.ReferenceType;
    public TaxReturnStatus?: TaxReturnStatusEnum;
    public TaxReturnEFilingFailureReason?: string;
    public EFileErrorFixByDate?: Date;
    public AgencyPaymentMethod?: AgencyPaymentMethodEnum;
    public TaxReturnCode?: string;

    public constructor(props?: TaxReturn) {
        super();

        this["@class"] = ".TaxReturn";

        (<any>Object).assign(this, <any> props);
    }
}

export class TaxClassification extends IntuitEntity {
    public Code?: string;
    public Name?: string;
    public Description?: string;
    public Level?: string;
    public ParentRef?: xmlns.ReferenceType;
    public ApplicableTo?: xmlns.ItemTypeEnum;

    public constructor(props?: TaxClassification) {
        super();

        this["@class"] = ".TaxClassification";

        (<any>Object).assign(this, <any> props);
    }
}

export class TaxPayment extends IntuitEntity {
    public PaymentDate?: Date;
    public PaymentAccountRef?: xmlns.ReferenceType;
    public PaymentAmount?: xs.decimal;
    public Description?: string;
    public Refund?: boolean;

    public constructor(props?: TaxPayment) {
        super();

        this["@class"] = ".TaxPayment";

        (<any>Object).assign(this, <any> props);
    }
}

enum AcquiredAsEnum {
    New = "New",
    Used = "Used"
}

enum MonthEnum {
    January = "January",
    February = "February",
    March = "March",
    April = "April",
    May = "May",
    June = "June",
    July = "July",
    August = "August",
    September = "September",
    October = "October",
    November = "November",
    December = "December"
}

enum WeekEnum {
    Sunday = "Sunday",
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday"
}

enum UOMFeatureTypeEnum {
    Disabled = "Disabled",
    SinglePerItem = "SinglePerItem",
    MultiplePerItem = "MultiplePerItem"
}

enum AccountClassificationEnum {
    Asset = "Asset",
    Equity = "Equity",
    Expense = "Expense",
    Liability = "Liability",
    Revenue = "Revenue"
}

enum ItemTypeEnum {
    Assembly = "Assembly",
    Category = "Category",
    Fixed Asset = "Fixed Asset",
    Group = "Group",
    Inventory = "Inventory",
    NonInventory = "NonInventory",
    Other Charge = "Other Charge",
    Payment = "Payment",
    Service = "Service",
    Subtotal = "Subtotal",
    Discount = "Discount",
    Tax = "Tax",
    Tax Group = "Tax Group",
    Bundle = "Bundle"
}

enum CustomerTypeEnum {
    Customer = "Customer",
    Job = "Job"
}

enum BillableStatusEnum {
    Billable = "Billable",
    NotBillable = "NotBillable",
    HasBeenBilled = "HasBeenBilled"
}

enum TaxFormTypeEnum {
    Form C = "Form C",
    Form F = "Form F",
    Form I = "Form I",
    Form H = "Form H",
    Form E1 = "Form E1",
    Form E2 = "Form E2"
}

enum EntityTypeEnum {
    Customer = "Customer",
    Employee = "Employee",
    Job = "Job",
    Other = "Other",
    Vendor = "Vendor"
}

enum TaxApplicableOnEnum {
    Purchase = "Purchase",
    Sales = "Sales"
}

enum PostingTypeEnum {
    Credit = "Credit",
    Debit = "Debit"
}

enum LineDetailTypeEnum {
    PaymentLineDetail = "PaymentLineDetail",
    DiscountLineDetail = "DiscountLineDetail",
    TaxLineDetail = "TaxLineDetail",
    SalesItemLineDetail = "SalesItemLineDetail",
    ItemBasedExpenseLineDetail = "ItemBasedExpenseLineDetail",
    AccountBasedExpenseLineDetail = "AccountBasedExpenseLineDetail",
    DepositLineDetail = "DepositLineDetail",
    PurchaseOrderItemLineDetail = "PurchaseOrderItemLineDetail",
    ItemReceiptLineDetail = "ItemReceiptLineDetail",
    JournalEntryLineDetail = "JournalEntryLineDetail",
    GroupLineDetail = "GroupLineDetail",
    DescriptionOnly = "DescriptionOnly",
    SubTotalLineDetail = "SubTotalLineDetail",
    SalesOrderItemLineDetail = "SalesOrderItemLineDetail",
    TDSLineDetail = "TDSLineDetail"
}

enum AccountTypeEnum {
    Bank = "Bank",
    Accounts Receivable = "Accounts Receivable",
    Other Current Asset = "Other Current Asset",
    Fixed Asset = "Fixed Asset",
    Other Asset = "Other Asset",
    Accounts Payable = "Accounts Payable",
    Credit Card = "Credit Card",
    Other Current Liability = "Other Current Liability",
    Long Term Liability = "Long Term Liability",
    Equity = "Equity",
    Income = "Income",
    Cost of Goods Sold = "Cost of Goods Sold",
    Expense = "Expense",
    Other Income = "Other Income",
    Other Expense = "Other Expense",
    Non-Posting = "Non-Posting"
}

enum TaxRateDisplayTypeEnum {
    ReadOnly = "ReadOnly",
    HideInTransactionForms = "HideInTransactionForms",
    HideInPrintedForms = "HideInPrintedForms",
    HideInAll = "HideInAll"
}

enum AccountSubTypeEnum {
    IncomeTaxPayable = "IncomeTaxPayable",
    IntangibleAssetsOther = "IntangibleAssetsOther",
    AccountsPayable = "AccountsPayable",
    AccountsReceivable = "AccountsReceivable",
    AccumulatedAdjustment = "AccumulatedAdjustment",
    AccumulatedAmortization = "AccumulatedAmortization",
    AccumulatedAmortizationOfOtherAssets = "AccumulatedAmortizationOfOtherAssets",
    AccumulatedDepletion = "AccumulatedDepletion",
    AccumulatedDepreciation = "AccumulatedDepreciation",
    AdvertisingPromotional = "AdvertisingPromotional",
    AllowanceForBadDebts = "AllowanceForBadDebts",
    Amortization = "Amortization",
    Auto = "Auto",
    BadDebts = "BadDebts",
    BankCharges = "BankCharges",
    Buildings = "Buildings",
    CashOnHand = "CashOnHand",
    CharitableContributions = "CharitableContributions",
    Checking = "Checking",
    CommonStock = "CommonStock",
    CostOfLabor = "CostOfLabor",
    CostOfLaborCos = "CostOfLaborCos",
    CreditCard = "CreditCard",
    DepletableAssets = "DepletableAssets",
    Depreciation = "Depreciation",
    DevelopmentCosts = "DevelopmentCosts",
    DirectDepositPayable = "DirectDepositPayable",
    DiscountsRefundsGiven = "DiscountsRefundsGiven",
    DividendIncome = "DividendIncome",
    DuesSubscriptions = "DuesSubscriptions",
    EmployeeCashAdvances = "EmployeeCashAdvances",
    Entertainment = "Entertainment",
    EntertainmentMeals = "EntertainmentMeals",
    EquipmentRental = "EquipmentRental",
    EquipmentRentalCos = "EquipmentRentalCos",
    EstimatedTaxes = "EstimatedTaxes",
    ExchangeGainOrLoss = "ExchangeGainOrLoss",
    FederalIncomeTaxPayable = "FederalIncomeTaxPayable",
    FinanceCosts = "FinanceCosts",
    FixedAssetComputers = "FixedAssetComputers",
    FixedAssetCopiers = "FixedAssetCopiers",
    FixedAssetFurniture = "FixedAssetFurniture",
    FixedAssetPhone = "FixedAssetPhone",
    FixedAssetPhotoVideo = "FixedAssetPhotoVideo",
    FixedAssetSoftware = "FixedAssetSoftware",
    FixedAssetOtherToolsEquipment = "FixedAssetOtherToolsEquipment",
    FurnitureAndFixtures = "FurnitureAndFixtures",
    GlobalTaxExpense = "GlobalTaxExpense",
    GlobalTaxPayable = "GlobalTaxPayable",
    GlobalTaxSuspense = "GlobalTaxSuspense",
    GasAndFuel = "GasAndFuel",
    Goodwill = "Goodwill",
    Gratuity = "Gratuity",
    Healthcare = "Healthcare",
    HomeOffice = "HomeOffice",
    HomeownerRentalInsurance = "HomeownerRentalInsurance",
    Insurance = "Insurance",
    InsurancePayable = "InsurancePayable",
    IntangibleAssets = "IntangibleAssets",
    InterestEarned = "InterestEarned",
    InterestPaid = "InterestPaid",
    Inventory = "Inventory",
    Investment_MortgageRealEstateLoans = "Investment_MortgageRealEstateLoans",
    Investment_Other = "Investment_Other",
    Investment_TaxExemptSecurities = "Investment_TaxExemptSecurities",
    Investment_USGovernmentObligations = "Investment_USGovernmentObligations",
    Land = "Land",
    LeaseBuyout = "LeaseBuyout",
    LeaseholdImprovements = "LeaseholdImprovements",
    LegalProfessionalFees = "LegalProfessionalFees",
    Licenses = "Licenses",
    LineOfCredit = "LineOfCredit",
    LoanPayable = "LoanPayable",
    LoansToOfficers = "LoansToOfficers",
    LoansToOthers = "LoansToOthers",
    LoansToStockholders = "LoansToStockholders",
    MachineryAndEquipment = "MachineryAndEquipment",
    MoneyMarket = "MoneyMarket",
    MortgageInterestHomeOffice = "MortgageInterestHomeOffice",
    NonProfitIncome = "NonProfitIncome",
    NotesPayable = "NotesPayable",
    OfficeGeneralAdministrativeExpenses = "OfficeGeneralAdministrativeExpenses",
    OpeningBalanceEquity = "OpeningBalanceEquity",
    OrganizationalCosts = "OrganizationalCosts",
    OtherBusinessExpenses = "OtherBusinessExpenses",
    OtherCostsOfServiceCos = "OtherCostsOfServiceCos",
    OtherCurrentAssets = "OtherCurrentAssets",
    OtherCurrentLiabilities = "OtherCurrentLiabilities",
    OtherFixedAssets = "OtherFixedAssets",
    OtherHomeOfficeExpenses = "OtherHomeOfficeExpenses",
    OtherInvestmentIncome = "OtherInvestmentIncome",
    OtherLongTermAssets = "OtherLongTermAssets",
    OtherLongTermLiabilities = "OtherLongTermLiabilities",
    OtherMiscellaneousExpense = "OtherMiscellaneousExpense",
    OtherMiscellaneousIncome = "OtherMiscellaneousIncome",
    OtherMiscellaneousServiceCost = "OtherMiscellaneousServiceCost",
    OtherPrimaryIncome = "OtherPrimaryIncome",
    OtherVehicleExpenses = "OtherVehicleExpenses",
    OwnersEquity = "OwnersEquity",
    PaidInCapitalOrSurplus = "PaidInCapitalOrSurplus",
    ParkingAndTolls = "ParkingAndTolls",
    PartnerContributions = "PartnerContributions",
    PartnerDistributions = "PartnerDistributions",
    PartnersEquity = "PartnersEquity",
    PayrollClearing = "PayrollClearing",
    PayrollExpenses = "PayrollExpenses",
    PayrollTaxPayable = "PayrollTaxPayable",
    PenaltiesSettlements = "PenaltiesSettlements",
    PersonalExpense = "PersonalExpense",
    PersonalIncome = "PersonalIncome",
    PreferredStock = "PreferredStock",
    PrepaidExpenses = "PrepaidExpenses",
    PrepaidExpensesPayable = "PrepaidExpensesPayable",
    PromotionalMeals = "PromotionalMeals",
    RentAndLeaseHomeOffice = "RentAndLeaseHomeOffice",
    RentOrLeaseOfBuildings = "RentOrLeaseOfBuildings",
    RentsHeldInTrust = "RentsHeldInTrust",
    RentsInTrustLiability = "RentsInTrustLiability",
    RepairsAndMaintainceHomeOffice = "RepairsAndMaintainceHomeOffice",
    RepairMaintenance = "RepairMaintenance",
    Retainage = "Retainage",
    RetainedEarnings = "RetainedEarnings",
    SalesOfProductIncome = "SalesOfProductIncome",
    SalesTaxPayable = "SalesTaxPayable",
    Savings = "Savings",
    SecurityDeposits = "SecurityDeposits",
    ServiceFeeIncome = "ServiceFeeIncome",
    ShareholderNotesPayable = "ShareholderNotesPayable",
    ShippingFreightDelivery = "ShippingFreightDelivery",
    ShippingFreightDeliveryCos = "ShippingFreightDeliveryCos",
    StateLocalIncomeTaxPayable = "StateLocalIncomeTaxPayable",
    SuppliesMaterials = "SuppliesMaterials",
    SuppliesMaterialsCogs = "SuppliesMaterialsCogs",
    TaxesPaid = "TaxesPaid",
    TaxExemptInterest = "TaxExemptInterest",
    Travel = "Travel",
    TravelMeals = "TravelMeals",
    TreasuryStock = "TreasuryStock",
    TrustAccounts = "TrustAccounts",
    TrustAccountsLiabilities = "TrustAccountsLiabilities",
    UnappliedCashBillPaymentExpense = "UnappliedCashBillPaymentExpense",
    UnappliedCashPaymentIncome = "UnappliedCashPaymentIncome",
    UndepositedFunds = "UndepositedFunds",
    Utilities = "Utilities",
    UtilitiesHomeOffice = "UtilitiesHomeOffice",
    Vehicle = "Vehicle",
    VehicleInsurance = "VehicleInsurance",
    VehicleLease = "VehicleLease",
    VehicleLoan = "VehicleLoan",
    VehicleLoanInterest = "VehicleLoanInterest",
    VehicleRegistration = "VehicleRegistration",
    VehicleRepairs = "VehicleRepairs",
    Vehicles = "Vehicles",
    WashAndRoadServices = "WashAndRoadServices",
    WithholdingTaxSales = "WithholdingTaxSales",
    WithholdingTaxPurchases = "WithholdingTaxPurchases",
    WithholdingAssetAmount = "WithholdingAssetAmount",
    WithholdingLiabilityAmount = "WithholdingLiabilityAmount",
    WithholdingTaxSuspense = "WithholdingTaxSuspense",
    DevelopmentCosts = "DevelopmentCosts",
    ProvisionsCurrentAssets = "ProvisionsCurrentAssets",
    OtherConsumables = "OtherConsumables",
    ExpenditureAuthorisationsAndLettersOfCredit = "ExpenditureAuthorisationsAndLettersOfCredit",
    InternalTransfers = "InternalTransfers",
    ProvisionsFixedAssets = "ProvisionsFixedAssets",
    AssetsInCourseOfConstruction = "AssetsInCourseOfConstruction",
    ParticipatingInterests = "ParticipatingInterests",
    CumulativeDepreciationOnIntangibleAssets = "CumulativeDepreciationOnIntangibleAssets",
    ProvisionsNonCurrentAssets = "ProvisionsNonCurrentAssets",
    OutstandingDuesMicroSmallEnterprise = "OutstandingDuesMicroSmallEnterprise",
    OutstandingDuesOtherThanMicroSmallEnterprise = "OutstandingDuesOtherThanMicroSmallEnterprise",
    GlobalTaxRefund = "GlobalTaxRefund",
    GlobalTaxDeferred = "GlobalTaxDeferred",
    ProvisionsCurrentLiabilities = "ProvisionsCurrentLiabilities",
    StaffAndRelatedLiabilityAccounts = "StaffAndRelatedLiabilityAccounts",
    SocialSecurityAgencies = "SocialSecurityAgencies",
    SundryDebtorsAndCreditors = "SundryDebtorsAndCreditors",
    ProvisionsNonCurrentLiabilities = "ProvisionsNonCurrentLiabilities",
    DebtsRelatedToParticipatingInterests = "DebtsRelatedToParticipatingInterests",
    StaffAndRelatedLongTermLiabilityAccounts = "StaffAndRelatedLongTermLiabilityAccounts",
    GovernmentAndOtherPublicAuthorities = "GovernmentAndOtherPublicAuthorities",
    GroupAndAssociates = "GroupAndAssociates",
    InvestmentGrants = "InvestmentGrants",
    CashReceiptIncome = "CashReceiptIncome",
    OwnWorkCapitalized = "OwnWorkCapitalized",
    OperatingGrants = "OperatingGrants",
    OtherCurrentOperatingIncome = "OtherCurrentOperatingIncome",
    CostOfSales = "CostOfSales",
    CashExpenditureExpense = "CashExpenditureExpense",
    ExternalServices = "ExternalServices",
    OtherExternalServices = "OtherExternalServices",
    PurchasesRebates = "PurchasesRebates",
    OtherRentalCosts = "OtherRentalCosts",
    ProjectStudiesSurveysAssessments = "ProjectStudiesSurveysAssessments",
    Sundry = "Sundry",
    StaffCosts = "StaffCosts",
    OtherCurrentOperatingCharges = "OtherCurrentOperatingCharges",
    ExtraordinaryCharges = "ExtraordinaryCharges",
    AppropriationsToDepreciation = "AppropriationsToDepreciation",
    AccrualsAndDeferredIncome = "AccrualsAndDeferredIncome",
    CurrentTaxLiability = "CurrentTaxLiability",
    DeferredTax = "DeferredTax",
    DistributionCosts = "DistributionCosts",
    Investments = "Investments",
    LongTermBorrowings = "LongTermBorrowings",
    OtherIntangibleAssets = "OtherIntangibleAssets",
    PrepaymentsAndAccruedIncome = "PrepaymentsAndAccruedIncome",
    ShortTermBorrowings = "ShortTermBorrowings",
    ProvisionForLiabilities = "ProvisionForLiabilities",
    CalledUpShareCapital = "CalledUpShareCapital",
    CalledUpShareCapitalNotPaid = "CalledUpShareCapitalNotPaid",
    LandAsset = "LandAsset",
    AvailableForSaleFinancialAssets = "AvailableForSaleFinancialAssets",
    ProvisionForWarrantyObligations = "ProvisionForWarrantyObligations",
    CurrentPortionEmployeeBenefitsObligations = "CurrentPortionEmployeeBenefitsObligations",
    LongTermEmployeeBenefitObligations = "LongTermEmployeeBenefitObligations",
    ObligationsUnderFinanceLeases = "ObligationsUnderFinanceLeases",
    BankLoans = "BankLoans",
    InterestPayables = "InterestPayables",
    GainLossOnSaleOfInvestments = "GainLossOnSaleOfInvestments",
    GainLossOnSaleOfFixedAssets = "GainLossOnSaleOfFixedAssets",
    ShareCapital = "ShareCapital",
    CurrentPortionOfObligationsUnderFinanceLeases = "CurrentPortionOfObligationsUnderFinanceLeases",
    AssetsHeldForSale = "AssetsHeldForSale",
    AccruedLiabilities = "AccruedLiabilities",
    AccruedLongLermLiabilities = "AccruedLongLermLiabilities",
    AccruedVacationPayable = "AccruedVacationPayable",
    CashAndCashEquivalents = "CashAndCashEquivalents",
    CommissionsAndFees = "CommissionsAndFees",
    AmortizationExpense = "AmortizationExpense",
    LossOnDiscontinuedOperationsNetOfTax = "LossOnDiscontinuedOperationsNetOfTax",
    ManagementCompensation = "ManagementCompensation",
    OtherSellingExpenses = "OtherSellingExpenses",
    LiabilitiesRelatedToAssetsHeldForSale = "LiabilitiesRelatedToAssetsHeldForSale",
    LongTermDebit = "LongTermDebit",
    EquityInEarningsOfSubsiduaries = "EquityInEarningsOfSubsiduaries",
    OtherOperatingIncome = "OtherOperatingIncome",
    RevenueGeneral = "RevenueGeneral",
    DividendDisbursed = "DividendDisbursed",
    FreightAndDeliveryCos = "FreightAndDeliveryCos",
    ShippingAndDeliveryExpense = "ShippingAndDeliveryExpense",
    TravelExpensesGeneralAndAdminExpenses = "TravelExpensesGeneralAndAdminExpenses",
    TravelExpensesSellingExpense = "TravelExpensesSellingExpense",
    UnrealisedLossOnSecuritiesNetOfTax = "UnrealisedLossOnSecuritiesNetOfTax",
    SalesRetail = "SalesRetail",
    SalesWholesale = "SalesWholesale",
    AccumulatedOtherComprehensiveIncome = "AccumulatedOtherComprehensiveIncome",
    AssetsAvailableForSale = "AssetsAvailableForSale",
    LossOnDisposalOfAssets = "LossOnDisposalOfAssets",
    NonCurrentAssets = "NonCurrentAssets",
    IncomeTaxExpense = "IncomeTaxExpense",
    LongTermInvestments = "LongTermInvestments",
    DividendsPayable = "DividendsPayable",
    TradeAndOtherReceivables = "TradeAndOtherReceivables",
    TradeAndOtherPayables = "TradeAndOtherPayables",
    CurrentLiabilities = "CurrentLiabilities",
    SavingsByTaxScheme = "SavingsByTaxScheme",
    BorrowingCost = "BorrowingCost",
    Depletion = "Depletion",
    ExceptionalItems = "ExceptionalItems",
    PriorPeriodItems = "PriorPeriodItems",
    ExtraordinaryItems = "ExtraordinaryItems",
    MatCredit = "MatCredit",
    OtherFreeReserves = "OtherFreeReserves",
    CapitalReserves = "CapitalReserves",
    Funds = "Funds",
    MoneyReceivedAgainstShareWarrants = "MoneyReceivedAgainstShareWarrants",
    ShareApplicationMoneyPendingAllotment = "ShareApplicationMoneyPendingAllotment",
    DeferredTaxLiabilities = "DeferredTaxLiabilities",
    OtherLongTermProvisions = "OtherLongTermProvisions",
    CapitalWip = "CapitalWip",
    IntangibleAssetsUnderDevelopment = "IntangibleAssetsUnderDevelopment",
    OtherLongTermInvestments = "OtherLongTermInvestments",
    LongTermLoansAndAdvancesToRelatedParties = "LongTermLoansAndAdvancesToRelatedParties",
    OtherLongTermLoansAndAdvances = "OtherLongTermLoansAndAdvances",
    ShortTermInvestmentsInRelatedParties = "ShortTermInvestmentsInRelatedParties",
    OtherEarmarkedBankAccounts = "OtherEarmarkedBankAccounts",
    ShortTermLoansAndAdvancesToRelatedParties = "ShortTermLoansAndAdvancesToRelatedParties",
    DeferredTaxExpense = "DeferredTaxExpense",
    IncomeTaxOtherExpense = "IncomeTaxOtherExpense",
    DutiesAndTaxes = "DutiesAndTaxes",
    BalWithGovtAuthorities = "BalWithGovtAuthorities",
    TaxRoundoffGainOrLoss = "TaxRoundoffGainOrLoss"
}

enum APCreditCardOperationEnum {
    Charge = "Charge",
    Credit = "Credit"
}

enum DayOfWeekEnum {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}

enum EstimateStatusEnum {
    Active = "Active",
    NotActive = "NotActive"
}

enum PaymentMethodEnum {
    AmEx = "AmEx",
    Cash = "Cash",
    Check = "Check",
    DebitCard = "DebitCard",
    Discover = "Discover",
    ECheck = "ECheck",
    GiftCard = "GiftCard",
    MasterCard = "MasterCard",
    Other = "Other",
    OtherCreditCard = "OtherCreditCard",
    Visa = "Visa"
}

enum PaymentStatusEnum {
    Draft = "Draft",
    Overdue = "Overdue",
    Pending = "Pending",
    Payable = "Payable",
    Paid = "Paid",
    Trash = "Trash",
    UnPaid = "UnPaid"
}

enum PaySalesTaxEnum {
    Annually = "Annually",
    Monthly = "Monthly",
    Quarterly = "Quarterly"
}

enum PerItemAdjustEnum {
    Cost = "Cost",
    CurrentCustomPrice = "CurrentCustomPrice",
    StandardPrice = "StandardPrice"
}

enum PriceLevelTypeEnum {
    FixedPercentage = "FixedPercentage",
    PerItem = "PerItem"
}

enum QboEstimateStatusEnum {
    Accepted = "Accepted",
    Closed = "Closed",
    Pending = "Pending",
    Rejected = "Rejected"
}

enum PurchaseOrderStatusEnum {
    Open = "Open",
    Closed = "Closed"
}

enum ReimbursableTypeEnum {
    Billable = "Billable",
    BillableHasBeenBilled = "BillableHasBeenBilled",
    NotBillable = "NotBillable"
}

enum RoundingMethodEnum {
    Down = "Down",
    Nearest = "Nearest",
    None = "None",
    Up = "Up"
}

enum SalesRepTypeEnum {
    Employee = "Employee",
    Other = "Other",
    Vendor = "Vendor"
}

enum SalesTermTypeEnum {
    DateDriven = "DateDriven",
    Standard = "Standard"
}

enum SpecialItemTypeEnum {
    FinanceCharge = "FinanceCharge",
    ReimbursableExpenseGroup = "ReimbursableExpenseGroup",
    ReimbursableExpenseSubtotal = "ReimbursableExpenseSubtotal"
}

enum SymbolPositionEnum {
    Leading = "Leading",
    Trailing = "Trailing"
}

enum TaxTypeApplicablityEnum {
    TaxOnAmount = "TaxOnAmount",
    TaxOnAmountPlusTax = "TaxOnAmountPlusTax",
    TaxOnTax = "TaxOnTax"
}

enum TemplateTypeEnum {
    BuildAssembly = "BuildAssembly",
    CreditMemo = "CreditMemo",
    Estimate = "Estimate",
    Invoice = "Invoice",
    PurchaseOrder = "PurchaseOrder",
    SalesOrder = "SalesOrder",
    SalesReceipt = "SalesReceipt",
    StatementCharge = "StatementCharge"
}

enum TimeActivityTypeEnum {
    Employee = "Employee",
    Other = "Other",
    Vendor = "Vendor"
}

enum TxnTypeEnum {
    APCreditCard = "APCreditCard",
    ARRefundCreditCard = "ARRefundCreditCard",
    Bill = "Bill",
    BillPaymentCheck = "BillPaymentCheck",
    BuildAssembly = "BuildAssembly",
    CarryOver = "CarryOver",
    CashPurchase = "CashPurchase",
    Charge = "Charge",
    Check = "Check",
    CreditCardPayment = "CreditCardPayment",
    CreditMemo = "CreditMemo",
    Deposit = "Deposit",
    EFPLiabilityCheck = "EFPLiabilityCheck",
    EFTBillPayment = "EFTBillPayment",
    EFTRefund = "EFTRefund",
    Estimate = "Estimate",
    InventoryAdjustment = "InventoryAdjustment",
    InventoryTransfer = "InventoryTransfer",
    Invoice = "Invoice",
    ItemReceipt = "ItemReceipt",
    JournalEntry = "JournalEntry",
    LiabilityAdjustment = "LiabilityAdjustment",
    Paycheck = "Paycheck",
    PayrollLiabilityCheck = "PayrollLiabilityCheck",
    PurchaseOrder = "PurchaseOrder",
    PriorPayment = "PriorPayment",
    ReceivePayment = "ReceivePayment",
    RefundCheck = "RefundCheck",
    SalesOrder = "SalesOrder",
    SalesReceipt = "SalesReceipt",
    SalesTaxPaymentCheck = "SalesTaxPaymentCheck",
    Transfer = "Transfer",
    TimeActivity = "TimeActivity",
    VendorCredit = "VendorCredit",
    YTDAdjustment = "YTDAdjustment"
}

enum UOMBaseTypeEnum {
    Area = "Area",
    Count = "Count",
    Length = "Length",
    Other = "Other",
    Time = "Time",
    Volume = "Volume",
    Weight = "Weight"
}

enum PaymentTypeEnum {
    Cash = "Cash",
    Check = "Check",
    CreditCard = "CreditCard",
    Expense = "Expense",
    Other = "Other"
}

enum BillPaymentTypeEnum {
    Check = "Check",
    CreditCard = "CreditCard"
}

enum PrintStatusEnum {
    NotSet = "NotSet",
    NeedToPrint = "NeedToPrint",
    PrintComplete = "PrintComplete"
}

enum EmailStatusEnum {
    NotSet = "NotSet",
    NeedToSend = "NeedToSend",
    EmailSent = "EmailSent"
}

enum ETransactionStatusEnum {
    Sent = "Sent",
    Viewed = "Viewed",
    Paid = "Paid",
    Delivery Error = "Delivery Error",
    Updated = "Updated",
    Error = "Error",
    Accepted = "Accepted",
    Rejected = "Rejected",
    Sent With ICN Error = "Sent With ICN Error",
    Delivered = "Delivered",
    Disputed = "Disputed"
}

enum ETransactionEnabledStatusEnum {
    Enabled = "Enabled",
    NotApplicable = "NotApplicable"
}

enum GlobalTaxCalculationEnum {
    TaxInclusive = "TaxInclusive",
    TaxExcluded = "TaxExcluded",
    NotApplicable = "NotApplicable"
}

enum TxnSourceEnum {
    QBMobile = "QBMobile",
    GoPayment = "GoPayment",
    EInvoice = "EInvoice",
    Square = "Square"
}

enum BudgetTypeEnum {
    ProfitAndLoss = "ProfitAndLoss",
    BalanceSheet = "BalanceSheet"
}

enum BudgetEntryTypeEnum {
    Yearly = "Yearly",
    Quarterly = "Quarterly",
    Monthly = "Monthly"
}

enum ItemCategoryTypeEnum {
    Product = "Product",
    Service = "Service"
}

enum TransactionLocationTypeEnum {
    WithinFrance = "WithinFrance",
    FranceOverseas = "FranceOverseas",
    OutsideFranceWithEU = "OutsideFranceWithEU",
    OutsideEU = "OutsideEU"
}

enum JournalCodeTypeEnum {
    Expenses = "Expenses",
    Sales = "Sales",
    Bank = "Bank",
    Nouveaux = "Nouveaux",
    Wages = "Wages",
    Cash = "Cash",
    Others = "Others"
}

enum DiscountTypeEnum {
    Rate = "Rate",
    Amount = "Amount"
}

enum ServiceTypeEnum {
    ADVT = "ADVT",
    AIRPORTSERVICES = "AIRPORTSERVICES",
    AIRTRANSPORT = "AIRTRANSPORT",
    AIRTRVLAGNT = "AIRTRVLAGNT",
    ARCHITECT = "ARCHITECT",
    ASSTMGMT = "ASSTMGMT",
    ATMMAINTENANCE = "ATMMAINTENANCE",
    AUCTIONSERV = "AUCTIONSERV",
    AUTHSERST = "AUTHSERST",
    BANKANDFIN = "BANKANDFIN",
    BEAUTYPARLOR = "BEAUTYPARLOR",
    BROADCAST = "BROADCAST",
    BUSINESSAUX = "BUSINESSAUX",
    BUSINESSEXHIBITION = "BUSINESSEXHIBITION",
    BUSINESSSUPPORTSERV = "BUSINESSSUPPORTSERV",
    CA = "CA",
    CABLEOPTR = "CABLEOPTR",
    CARGOHAND = "CARGOHAND",
    CLEANINGSERV = "CLEANINGSERV",
    CLEARANDFORW = "CLEARANDFORW",
    CLUBSANDASSSERVICE = "CLUBSANDASSSERVICE",
    COMMCOACHORTRAINING = "COMMCOACHORTRAINING",
    CONSENG = "CONSENG",
    CONSTRCOMMERCIALCOMPLEX = "CONSTRCOMMERCIALCOMPLEX",
    CONTAINERRAILTRANS = "CONTAINERRAILTRANS",
    CONVSERV = "CONVSERV",
    COSTACC = "COSTACC",
    COURIER = "COURIER",
    CREDITCARD = "CREDITCARD",
    CREDITRATAGNCY = "CREDITRATAGNCY",
    CRUISESHIPTOUR = "CRUISESHIPTOUR",
    CS = "CS",
    CUSHOUSEAG = "CUSHOUSEAG",
    DESIGNSERV = "DESIGNSERV",
    DEVELOPSUPPLYCONTENT = "DEVELOPSUPPLYCONTENT",
    DREDGING = "DREDGING",
    DRYCLEANING = "DRYCLEANING",
    ERECTIONCOMMORINSTALL = "ERECTIONCOMMORINSTALL",
    EVENTMGMT = "EVENTMGMT",
    FASHIONDES = "FASHIONDES",
    FOREXBROKING = "FOREXBROKING",
    FORWARDCONTRACT = "FORWARDCONTRACT",
    FRANCHISESERV = "FRANCHISESERV",
    GENERALINSURANCE = "GENERALINSURANCE",
    GOODSTRANSPORT = "GOODSTRANSPORT",
    HEALTHCLUBANDFITNESS = "HEALTHCLUBANDFITNESS",
    INFORMATIONSERV = "INFORMATIONSERV",
    INSURAUX = "INSURAUX",
    INTDEC = "INTDEC",
    INTELLECTUALPROPERTY = "INTELLECTUALPROPERTY",
    INTERNATIONALAIRTRAVEL = "INTERNATIONALAIRTRAVEL",
    INTERNETCAFE = "INTERNETCAFE",
    INTERNETTELEPHONY = "INTERNETTELEPHONY",
    LIFEINS = "LIFEINS",
    MAILLISTCOMPILE = "MAILLISTCOMPILE",
    MANDAPKEEPER = "MANDAPKEEPER",
    MANPWRRECRUIT = "MANPWRRECRUIT",
    MGMTCONSUL = "MGMTCONSUL",
    MGMTMAINTREPAIR = "MGMTMAINTREPAIR",
    MININGOIL = "MININGOIL",
    MKTRESAGNCY = "MKTRESAGNCY",
    ONLINEINFORMRETRIEVAL = "ONLINEINFORMRETRIEVAL",
    OPINIONPOLL = "OPINIONPOLL",
    OUTDOORCATERING = "OUTDOORCATERING",
    PACKAGINGSERV = "PACKAGINGSERV",
    PANDALSHAMIANA = "PANDALSHAMIANA",
    PHOTOGRAPHY = "PHOTOGRAPHY",
    PORT = "PORT",
    PORTSER = "PORTSER",
    PROCESSCLEARHOUSE = "PROCESSCLEARHOUSE",
    PUBLICRELATIONMGMT = "PUBLICRELATIONMGMT",
    RAILTRAVELAGNT = "RAILTRAVELAGNT",
    REALESTAGT = "REALESTAGT",
    RECOVERYAGENTS = "RECOVERYAGENTS",
    REGISTRARSERV = "REGISTRARSERV",
    RENTACAB = "RENTACAB",
    RENTINGIMMOVABLEPROP = "RENTINGIMMOVABLEPROP",
    RESIDENTIALCOMPLEXCONST = "RESIDENTIALCOMPLEXCONST",
    SALEOFSPACEFORADVT = "SALEOFSPACEFORADVT",
    SCANDTECHCONSUL = "SCANDTECHCONSUL",
    SECAG = "SECAG",
    SERVICESPROVIDEDFORTRANSACTION = "SERVICESPROVIDEDFORTRANSACTION",
    SHARETRANSFERSERV = "SHARETRANSFERSERV",
    SHIPMGMT = "SHIPMGMT",
    SITEPREP = "SITEPREP",
    SOUNDRECORD = "SOUNDRECORD",
    SPONSORSHIP = "SPONSORSHIP",
    STAG = "STAG",
    STOCKBROKING = "STOCKBROKING",
    STOCKEXCHGSERV = "STOCKEXCHGSERV",
    STORANDWAREHOUSING = "STORANDWAREHOUSING",
    SUPPLYTANGIBLEGOODS = "SUPPLYTANGIBLEGOODS",
    SURVEYANDMAPMAKING = "SURVEYANDMAPMAKING",
    SURVEYMINERALS = "SURVEYMINERALS",
    TECHINSPECTION = "TECHINSPECTION",
    TECHTESTING = "TECHTESTING",
    TELECOMMUNICATIONSERV = "TELECOMMUNICATIONSERV",
    TELEVISIONANDRADIO = "TELEVISIONANDRADIO",
    TOUROP = "TOUROP",
    TRANSPORTPIPELINE = "TRANSPORTPIPELINE",
    TRAVELAGENT = "TRAVELAGENT",
    ULIPMANAGEMENT = "ULIPMANAGEMENT",
    UNDERWRITER = "UNDERWRITER",
    VIDEOTAPEPROD = "VIDEOTAPEPROD",
    WORKSCONTRACT = "WORKSCONTRACT"
}

enum QboEntityTypeEnum {
    CUSTOMER = "CUSTOMER",
    VENDOR = "VENDOR",
    EMPLOYEE = "EMPLOYEE",
    CREDIT_CARD = "CREDIT_CARD",
    CHECK = "CHECK",
    INVOICE = "INVOICE",
    RECEIVED_PAYMENT = "RECEIVED_PAYMENT",
    GENERAL_JOURNAL = "GENERAL_JOURNAL",
    BILL = "BILL",
    CREDIT_CARD_CREDIT = "CREDIT_CARD_CREDIT",
    BILL_CREDIT = "BILL_CREDIT",
    CHARGE_CREDIT = "CHARGE_CREDIT",
    BILL_CHECK = "BILL_CHECK",
    BILL_CREDIT_CARD = "BILL_CREDIT_CARD",
    CHARGE = "CHARGE",
    TRANSFER = "TRANSFER",
    RECEIVED_MONEY = "RECEIVED_MONEY",
    STATEMENT = "STATEMENT",
    REIMB_CHARGE = "REIMB_CHARGE",
    CASH_PURCHASE = "CASH_PURCHASE",
    CASH_SALE = "CASH_SALE",
    CREDIT_MEMO = "CREDIT_MEMO",
    CREDIT_REFUND = "CREDIT_REFUND",
    ESTIMATE = "ESTIMATE",
    INVENTORY_QUANTITY_ADJUSTMENT = "INVENTORY_QUANTITY_ADJUSTMENT",
    PURCHASE_ORDER = "PURCHASE_ORDER",
    PAYROLL_CHECK = "PAYROLL_CHECK",
    TAX_PAYMENT = "TAX_PAYMENT",
    PAYROLL_ADJUSTMENT_V2 = "PAYROLL_ADJUSTMENT_V2",
    PAYROLL_REFUND = "PAYROLL_REFUND",
    GLOBAL_TAX_PAYMENT = "GLOBAL_TAX_PAYMENT",
    GLOBAL_TAX_ADJUSTMENT = "GLOBAL_TAX_ADJUSTMENT",
    JOB_INVOICE = "JOB_INVOICE",
    ITEM = "ITEM",
    GENERIC_EXPENSE = "GENERIC_EXPENSE",
    TIME_ACTIVITY = "TIME_ACTIVITY",
    DEPARTMENT = "DEPARTMENT",
    USERS = "USERS",
    KLASS = "KLASS",
    PAYMENT_METHOD = "PAYMENT_METHOD",
    MEMORIZED_TRANSACTION = "MEMORIZED_TRANSACTION",
    TERM = "TERM",
    BUDGET = "BUDGET",
    TAX_CODE = "TAX_CODE",
    TAX_CODE_RATE = "TAX_CODE_RATE",
    TAX_AGENCY = "TAX_AGENCY",
    ATTACHABLE = "ATTACHABLE",
    ACCOUNT = "ACCOUNT",
    PREFERENCES = "PREFERENCES",
    JOURNAL_CODE = "JOURNAL_CODE",
    DISCOUNT_RATE = "DISCOUNT_RATE",
    BANKING_TRANSACTIONS = "BANKING_TRANSACTIONS",
    BUSINESS_TERMS = "BUSINESS_TERMS",
    LIABILITY_CHECK = "LIABILITY_CHECK",
    LIABILITY_CREDIT_CARD = "LIABILITY_CREDIT_CARD",
    LIABILITY_REFUND = "LIABILITY_REFUND",
    PRIOR_LIABILITY_PAYMENTS = "PRIOR_LIABILITY_PAYMENTS",
    LIABILITY_EPAY = "LIABILITY_EPAY",
    LIABILITY_MMAP = "LIABILITY_MMAP",
    TAX_CREDIT_UTILISE = "TAX_CREDIT_UTILISE",
    TAX_CREDIT_DEFER = "TAX_CREDIT_DEFER",
    TAX_CREDIT_REVERSE = "TAX_CREDIT_REVERSE",
    TAX_CREDIT_REFUND = "TAX_CREDIT_REFUND",
    GROSS_ADJUSTMENT = "GROSS_ADJUSTMENT",
    REVERSE_CHARGE = "REVERSE_CHARGE",
    DD_CHECK = "DD_CHECK",
    PAYCHECK = "PAYCHECK",
    PAYROLL_ADJUSTMENT = "PAYROLL_ADJUSTMENT",
    PAYROLL_YTD = "PAYROLL_YTD",
    SDK_USERS = "SDK_USERS",
    PAYROLL_ITEMS = "PAYROLL_ITEMS",
    PAY_GROUPS = "PAY_GROUPS",
    PAID_TIME_OFF_ENTRIES = "PAID_TIME_OFF_ENTRIES",
    TAX_JURISDICTIONS = "TAX_JURISDICTIONS",
    MEMORIZED_REPORTS = "MEMORIZED_REPORTS",
    OLB_FINANCIAL_INSTITUTIONS = "OLB_FINANCIAL_INSTITUTIONS",
    DIRECT_DEPOSIT_BANK_INFO = "DIRECT_DEPOSIT_BANK_INFO",
    REMINDERS = "REMINDERS",
    PAYROLL_FORMS = "PAYROLL_FORMS",
    EPAY_BANK_ACCOUNT_INFO = "EPAY_BANK_ACCOUNT_INFO",
    EPAY_AGENCY_CREDENTIALS = "EPAY_AGENCY_CREDENTIALS",
    EFILE_ENROLLMENT = "EFILE_ENROLLMENT",
    TAXRETURNLINES = "TAXRETURNLINES",
    NOTES = "NOTES",
    PRINT_PREF = "PRINT_PREF",
    MANAGEMENT_REPORT = "MANAGEMENT_REPORT",
    OLB_RULES = "OLB_RULES",
    DESKTOPIMPORT_SEED_QOH = "DESKTOPIMPORT_SEED_QOH"
}

enum DesktopEntityTypeEnum {
    ANY = "ANY",
    CREDIT_CARD = "CREDIT_CARD",
    DEPOSIT = "DEPOSIT",
    CHECK = "CHECK",
    INVOICE = "INVOICE",
    CASHSALE = "CASHSALE",
    CREDIT_MEMO = "CREDIT_MEMO",
    APP_PAY = "APP_PAY",
    GENERAL_JOURNAL = "GENERAL_JOURNAL",
    BILL = "BILL",
    GENERIC = "GENERIC",
    CREDIT_CARD_REFUND = "CREDIT_CARD_REFUND",
    BILL_REFUND = "BILL_REFUND",
    AR_CREDIT_CARD_REFUND = "AR_CREDIT_CARD_REFUND",
    BILL_CHECK = "BILL_CHECK",
    BILL_CREDIT_CARD = "BILL_CREDIT_CARD",
    SALES_TAX_PAYMENT = "SALES_TAX_PAYMENT",
    PURCHASE_ORDER = "PURCHASE_ORDER",
    INVENTORY_ADJUSTMENT = "INVENTORY_ADJUSTMENT",
    INVENTORY_RECEIPT = "INVENTORY_RECEIPT",
    PAYCHECK = "PAYCHECK",
    LIABILITY_CHECK = "LIABILITY_CHECK",
    BEGIN_BALANCE_CHECK = "BEGIN_BALANCE_CHECK",
    LIABILITY_ADJUSTMENT = "LIABILITY_ADJUSTMENT",
    ESTIMATE = "ESTIMATE",
    STATEMENT_CHARGE = "STATEMENT_CHARGE",
    TRANSFER = "TRANSFER",
    SALESORDER = "SALESORDER",
    QBRSLIABCHECK = "QBRSLIABCHECK",
    BUILDASSEMBLY = "BUILDASSEMBLY",
    EFPLIABCHECK = "EFPLIABCHECK",
    PRIOR_PMT = "PRIOR_PMT",
    LIAB_REFUND_CHECK = "LIAB_REFUND_CHECK",
    ITEM_SERVICE = "ITEM_SERVICE",
    ITEM_INVENTORY = "ITEM_INVENTORY",
    ITEM_ASSEMBLY = "ITEM_ASSEMBLY",
    ITEM_PART = "ITEM_PART",
    ITEM_FIXEDASSET = "ITEM_FIXEDASSET",
    ITEM_CHARGES = "ITEM_CHARGES",
    ITEM_SUBTOTAL = "ITEM_SUBTOTAL",
    ITEM_GROUP = "ITEM_GROUP",
    ITEM_DISCOUNT = "ITEM_DISCOUNT",
    ITEM_PAYMENT = "ITEM_PAYMENT",
    ITEM_TAXCOMP = "ITEM_TAXCOMP",
    ITEM_TAXGROUP = "ITEM_TAXGROUP",
    ITEM_GROUPEND = "ITEM_GROUPEND",
    ITEM_PURCHASE = "ITEM_PURCHASE",
    ITEM_PO = "ITEM_PO",
    ITEM_INVOICE = "ITEM_INVOICE",
    ITEM_ALLITEMS = "ITEM_ALLITEMS",
    ITEM_NOTAXES = "ITEM_NOTAXES",
    ITEM_SERVICES_AND_CHARGES = "ITEM_SERVICES_AND_CHARGES",
    ITEM_REAL_GROUP_END = "ITEM_REAL_GROUP_END",
    ITEM_MAX = "ITEM_MAX",
    CUSTOMER = "CUSTOMER",
    VENDOR = "VENDOR",
    EMPLOYEE = "EMPLOYEE",
    OTHERNAME = "OTHERNAME",
    NULLLINKTYPE = "NULLLINKTYPE",
    UNUSED1 = "UNUSED1",
    REFUNDCHECKTOCRMEMO = "REFUNDCHECKTOCRMEMO",
    INVOICETOCRMEMO = "INVOICETOCRMEMO",
    INVOICETOPAYMENT = "INVOICETOPAYMENT",
    INVOICETODISCOUNT = "INVOICETODISCOUNT",
    BILLTOCHECK = "BILLTOCHECK",
    BILLTOCCARD = "BILLTOCCARD",
    BILLTOCREDIT = "BILLTOCREDIT",
    DEPOSITTOPAYMENT = "DEPOSITTOPAYMENT",
    REFUNDCHECKTOPAYMENT = "REFUNDCHECKTOPAYMENT",
    INVOICETOPMTLINE = "INVOICETOPMTLINE",
    INVOICETOCREDITLINE = "INVOICETOCREDITLINE",
    BILLTOCREDITLINE = "BILLTOCREDITLINE",
    CREDLINETODISCLINE = "CREDLINETODISCLINE",
    PURCHASEORDERTORECEIPT = "PURCHASEORDERTORECEIPT",
    BILLTODISCOUNT = "BILLTODISCOUNT",
    INVOICETODISCOUNTLINE = "INVOICETODISCOUNTLINE",
    INVOICETOESTIMATEQTY = "INVOICETOESTIMATEQTY",
    INVOICETOESTIMATEAMT = "INVOICETOESTIMATEAMT",
    INVOICETOSALESORDERQTY = "INVOICETOSALESORDERQTY",
    INVOICETOSALESORDERAMT = "INVOICETOSALESORDERAMT",
    JOURNALENTRYTOCRMEMO = "JOURNALENTRYTOCRMEMO",
    AR_CCREFUND_TO_CREDITMEMO = "AR_CCREFUND_TO_CREDITMEMO",
    AR_CCREFUND_TO_PAYMENT = "AR_CCREFUND_TO_PAYMENT",
    AR_CCREFUND_TO_JOURNAL = "AR_CCREFUND_TO_JOURNAL",
    GIRO_TO_CHECK = "GIRO_TO_CHECK",
    ITEM = "ITEM",
    DEPARTMENT = "DEPARTMENT",
    USERS = "USERS",
    KLASS = "KLASS",
    PAYMENT_METHOD = "PAYMENT_METHOD",
    TERM = "TERM",
    BUDGET = "BUDGET",
    TAX_CODE = "TAX_CODE",
    TAX_CODE_RATE = "TAX_CODE_RATE",
    TAX_AGENCY = "TAX_AGENCY",
    ATTACHABLE = "ATTACHABLE",
    ACCOUNT = "ACCOUNT",
    PREFERENCES = "PREFERENCES"
}

enum TaxReturnStatusEnum {
    FILED = "FILED",
    FILING_FAILED = "FILING_FAILED",
    FILING_FAILED_WRONG_AGENCY_CREDENTIALS = "FILING_FAILED_WRONG_AGENCY_CREDENTIALS",
    AGENCY_PAYMENT_INITIATED = "AGENCY_PAYMENT_INITIATED",
    AGENCY_PAYMENT_COMPLETED = "AGENCY_PAYMENT_COMPLETED"
}

enum AgencyPaymentMethodEnum {
    ACH_CREDIT = "ACH_CREDIT",
    ACH_DEBIT = "ACH_DEBIT",
    CHECK = "CHECK",
    WIRE = "WIRE",
    OTHER = "OTHER"
}

enum TaxReviewStatusEnum {
    NON_AST_TAX = "NON_AST_TAX",
    AST_TAX_OVERRIDE = "AST_TAX_OVERRIDE"
}

enum ConvenienceFeeTypeEnum {
    MANUAL = "MANUAL",
    AUTO = "AUTO",
    PAID = "PAID",
    DISABLED = "DISABLED"
}

enum SpecialTaxTypeEnum {
    NONE = "NONE",
    ZERO_RATE = "ZERO_RATE",
    FOREIGN_TAX = "FOREIGN_TAX",
    REVERSE_CHARGE = "REVERSE_CHARGE",
    ADJUSTMENT_RATE = "ADJUSTMENT_RATE"
}

enum GTMConfigTypeEnum {
    SYSTEM_GENERATED = "SYSTEM_GENERATED",
    USER_DEFINED = "USER_DEFINED",
    SCRA_DEFINED = "SCRA_DEFINED",
    HIDDEN_AGENCY = "HIDDEN_AGENCY"
}

enum AttachableCategoryEnum {
    Image = "Image",
    Signature = "Signature",
    Contact Photo = "Contact Photo",
    Receipt = "Receipt",
    Document = "Document",
    Sound = "Sound",
    Other = "Other"
}

enum OLBTxnStatusEnum {
    Pending = "Pending",
    Approved = "Approved",
    Deleted = "Deleted"
}
