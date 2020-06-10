/***********
generated template classes for ./src/xsd/Report.xsd 6/10/2020, 11:36:42 AM
***********/





import * as xmlns from "";

export class Report {
    public attributes: Attributes;
    public attribute: Attribute;
    public columns: Columns;
    public column: Column;
    public colData: ColData;
    public row: Row;
    public header: Header;
    public summary: Summary;
    public rows: Rows;
    public reportHeader: ReportHeader;
    public report: Report;
    public dateMacro: DateMacro;
    public summarizeColumnsByEnum: SummarizeColumnsByEnum;
    public columnTypeEnum: ColumnTypeEnum;
    public rowTypeEnum: RowTypeEnum;
    public Header?: ReportHeader;
    public Columns?: Columns;
    public Rows?: Rows;

    public constructor(props?: Report) {
        this["@class"] = ".Report";

        (<any>Object).assign(this, <any> props);
    }
}

export class Attributes {
    public Attribute?: xmlns.Attribute;

    public constructor(props?: Attributes) {
        this["@class"] = ".Attributes";

        (<any>Object).assign(this, <any> props);
    }
}

export class Attribute {
    public Type: string;
    public Value: string;

    public constructor(props?: Attribute) {
        this["@class"] = ".Attribute";

        (<any>Object).assign(this, <any> props);
    }
}

export class Columns {
    public Column?: xmlns.Column;

    public constructor(props?: Columns) {
        this["@class"] = ".Columns";

        (<any>Object).assign(this, <any> props);
    }
}

export class Column {
    public ColTitle: string;
    public ColType: string;
    public MetaData?: xmlns.NameValue;
    public Columns?: Columns;

    public constructor(props?: Column) {
        this["@class"] = ".Column";

        (<any>Object).assign(this, <any> props);
    }
}

export class ColData {
    public Attributes?: Attributes;

    public constructor(props?: ColData) {
        this["@class"] = ".ColData";

        (<any>Object).assign(this, <any> props);
    }
}

export class Row {
    public id?: string;
    public parentId?: string;

    public constructor(props?: Row) {
        this["@class"] = ".Row";

        (<any>Object).assign(this, <any> props);
    }
}

export class Header {
    public ColData: xmlns.ColData;

    public constructor(props?: Header) {
        this["@class"] = ".Header";

        (<any>Object).assign(this, <any> props);
    }
}

export class Summary {
    public ColData: xmlns.ColData;

    public constructor(props?: Summary) {
        this["@class"] = ".Summary";

        (<any>Object).assign(this, <any> props);
    }
}

export class Rows {
    public Row?: xmlns.Row;

    public constructor(props?: Rows) {
        this["@class"] = ".Rows";

        (<any>Object).assign(this, <any> props);
    }
}

export class ReportHeader {
    public Time?: Date;
    public ReportName?: string;
    public DateMacro?: string;
    public ReportBasis?: xmlns.ReportBasisEnum;
    public StartPeriod?: string;
    public EndPeriod?: string;
    public SummarizeColumnsBy?: string;
    public Currency?: string;
    public Customer?: string;
    public Vendor?: string;
    public Employee?: string;
    public Item?: string;
    public Class?: string;
    public Department?: string;
    public Option?: xmlns.NameValue;

    public constructor(props?: ReportHeader) {
        this["@class"] = ".ReportHeader";

        (<any>Object).assign(this, <any> props);
    }
}

class Report {
}

enum DateMacro {
    All = "All",
    Today = "Today",
    This Week = "This Week",
    This Week-to-date = "This Week-to-date",
    This Month = "This Month",
    This Month-to-date = "This Month-to-date",
    This Fiscal Quarter = "This Fiscal Quarter",
    This Fiscal Quarter-to-date = "This Fiscal Quarter-to-date",
    This Fiscal Year = "This Fiscal Year",
    This Fiscal Year-to-date = "This Fiscal Year-to-date",
    This Calendar Quarter = "This Calendar Quarter",
    This Calendar Quarter-to-date = "This Calendar Quarter-to-date",
    This Calendar Year = "This Calendar Year",
    This Calendar Year-to-date = "This Calendar Year-to-date",
    Yesterday = "Yesterday",
    Last Week = "Last Week",
    Last Week-to-date = "Last Week-to-date",
    Last Month = "Last Month",
    Last Month-to-date = "Last Month-to-date",
    Last Fiscal Quarter = "Last Fiscal Quarter",
    Last Fiscal Quarter-to-date = "Last Fiscal Quarter-to-date",
    Last Fiscal Year = "Last Fiscal Year",
    Last Fiscal Year-to-date = "Last Fiscal Year-to-date",
    Last Calendar Quarter = "Last Calendar Quarter",
    Last Calendar Quarter-to-date = "Last Calendar Quarter-to-date",
    Last Calendar Year = "Last Calendar Year",
    Last Calendar Year-to-date = "Last Calendar Year-to-date",
    Next Week = "Next Week",
    Next 4 Weeks = "Next 4 Weeks",
    Next Month = "Next Month",
    Next Fiscal Quarter = "Next Fiscal Quarter",
    Next Fiscal Year = "Next Fiscal Year",
    Next Calendar Quarter = "Next Calendar Quarter",
    Next Calendar Year = "Next Calendar Year"
}

enum SummarizeColumnsByEnum {
    Total = "Total",
    Year = "Year",
    Quarter = "Quarter",
    FiscalYear = "FiscalYear",
    FiscalQuarter = "FiscalQuarter",
    Month = "Month",
    Week = "Week",
    Days = "Days",
    Customers = "Customers",
    Vendors = "Vendors",
    Employees = "Employees",
    Departments = "Departments",
    Classes = "Classes",
    ProductsAndServices = "ProductsAndServices"
}

enum ColumnTypeEnum {
    Account = "Account",
    Money = "Money",
    Rate = "Rate",
    Customer = "Customer",
    Vendor = "Vendor",
    Employee = "Employee",
    ProductsAndService = "ProductsAndService",
    Department = "Department",
    Class = "Class",
    String = "String"
}

enum RowTypeEnum {
    Section = "Section",
    Data = "Data"
}
