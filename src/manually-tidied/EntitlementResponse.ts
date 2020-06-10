/* eslint-disable */
export class EntitlementResponse {
  public entitlementsResponse: EntitlementsResponse;
  public thresholds: Thresholds;

  public constructor(props?: EntitlementResponse) {
    this['@class'] = '.EntitlementResponse';

    Object.assign(this, props as any);
  }
}

export class EntitlementsResponse {
  public QboCompany: boolean;
  public PlanName?: string;
  public MaxUsers?: number;
  public CurrentUsers?: number;
  public DaysRemainingTrial?: number;
  public Entitlement?: Entitlement[];

  public constructor(props?: EntitlementsResponse) {
    this['@class'] = '.EntitlementsResponse';

    Object.assign(this, props as any);
  }
}

export class Entitlement {
  public name: string;

  constructor(props?: Entitlement[]) {
    this['@class'] = '.Entitlement[]';
    
    Object.assign(this, props as any);
  }
}

export class Thresholds {
  public Threshold?: Threshold[];

  public constructor(props?: Thresholds) {
    this['@class'] = '.Thresholds';

    Object.assign(this, props as any);
  }
}

export class Threshold {
  public name?: string;
  public limit?: string;
  public enforced?: string;
  public currentCount?: string;
  public aboveThreshold?: string;

  constructor(props?: Threshold[]) {
    this['@class'] = '.Threshold[]';

    Object.assign(this, props as any);
  }
}
