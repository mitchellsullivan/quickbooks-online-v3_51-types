/* eslint-disable */
import { Fault } from './IntuitRestServiceDef';
import { IntuitEntity } from './IntuitBaseTypes';

export class SalesTax {
  public taxRateDetails: TaxRateDetails;
  public taxService: TaxService;
  public taxRateApplicableOnEnum: TaxRateApplicableOnEnum;

  public constructor(props?: SalesTax) {
    this['@class'] = '.SalesTax';

    Object.assign(this, props as any);
  }
}

export class TaxRateDetails {
  public TaxRateName?: string;
  public TaxRateId?: string;
  public RateValue?: number;
  public TaxAgencyId?: string;
  public TaxApplicableOn?: TaxRateApplicableOnEnum;

  public constructor(props?: TaxRateDetails) {
    this['@class'] = '.TaxRateDetails';

    Object.assign(this, props as any);
  }
}

export class TaxService extends IntuitEntity {
  public TaxCode?: string;
  public TaxCodeId?: string;
  public TaxRateDetails?: TaxRateDetails;
  public Fault?: Fault;

  public constructor(props?: TaxService) {
    super();

    this['@class'] = '.TaxService';

    Object.assign(this, props as any);
  }
}

enum TaxRateApplicableOnEnum {
  Sales = 'Sales',
  Purchase = 'Purchase',
  Adjustment = 'Adjustment',
  Other = 'Other'
}
