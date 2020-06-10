/***********
generated template classes for ./src/xsd/SalesTax.xsd 6/10/2020, 11:36:42 AM
***********/





import * as xmlns from "";
import * as xs from "";

export class SalesTax {
    public taxRateDetails: TaxRateDetails;
    public taxService: TaxService;
    public taxRateApplicableOnEnum: TaxRateApplicableOnEnum;

    public constructor(props?: SalesTax) {
        this["@class"] = ".SalesTax";

        (<any>Object).assign(this, <any> props);
    }
}

export class TaxRateDetails {
    public TaxRateName?: string;
    public TaxRateId?: string;
    public RateValue?: xs.decimal;
    public TaxAgencyId?: string;
    public TaxApplicableOn?: TaxRateApplicableOnEnum;

    public constructor(props?: TaxRateDetails) {
        this["@class"] = ".TaxRateDetails";

        (<any>Object).assign(this, <any> props);
    }
}

export class TaxService extends IntuitEntity {
    public TaxCode?: string;
    public TaxCodeId?: string;
    public TaxRateDetails?: xmlns.TaxRateDetails;
    public Fault?: xmlns.Fault;

    public constructor(props?: TaxService) {
        super();

        this["@class"] = ".TaxService";

        (<any>Object).assign(this, <any> props);
    }
}

enum TaxRateApplicableOnEnum {
    Sales = "Sales",
    Purchase = "Purchase",
    Adjustment = "Adjustment",
    Other = "Other"
}
