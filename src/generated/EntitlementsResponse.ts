/***********
generated template classes for ./src/xsd/EntitlementsResponse.xsd 6/10/2020, 11:36:42 AM
***********/





export class EntitlementsResponse {
    public entitlementsResponse: EntitlementsResponse;
    public thresholds: Thresholds;
    public QboCompany: boolean;
    public PlanName?: string;
    public MaxUsers?: number;
    public CurrentUsers?: number;
    public DaysRemainingTrial?: number;
    public Entitlement?: Entitlement[];

    public constructor(props?: EntitlementsResponse) {
        this["@class"] = ".EntitlementsResponse";

        (<any>Object).assign(this, <any> props);
    }
}

class EntitlementsResponse {
}

export class Entitlement[] {
    public name: string;

    public constructor(props?: Entitlement[]) {
        this["@class"] = ".Entitlement[]";

        (<any>Object).assign(this, <any> props);
    }
}

export class Thresholds {
    public Threshold?: Threshold[];

    public constructor(props?: Thresholds) {
        this["@class"] = ".Thresholds";

        (<any>Object).assign(this, <any> props);
    }
}

export class Threshold[] {
    public name?: string;
    public limit?: string;
    public enforced?: string;
    public currentCount?: string;
    public aboveThreshold?: string;

    public constructor(props?: Threshold[]) {
        this["@class"] = ".Threshold[]";

        (<any>Object).assign(this, <any> props);
    }
}
