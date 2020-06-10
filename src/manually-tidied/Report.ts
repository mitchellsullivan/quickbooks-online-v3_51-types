/* eslint-disable */
import { NameValue, ReportBasisEnum } from './IntuitBaseTypes';

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
    this['@class'] = '.Report';

    Object.assign(this, props as any);
  }
}

export class Attributes {
  public Attribute?: Attribute;

  public constructor(props?: Attributes) {
    this['@class'] = '.Attributes';

    Object.assign(this, props as any);
  }
}

export class Attribute {
  public Type: string;
  public Value: string;

  public constructor(props?: Attribute) {
    this['@class'] = '.Attribute';

    Object.assign(this, props as any);
  }
}

export class Columns {
  public Column?: Column;

  public constructor(props?: Columns) {
    this['@class'] = '.Columns';

    Object.assign(this, props as any);
  }
}

export class Column {
  public ColTitle: string;
  public ColType: string;
  public MetaData?: NameValue;
  public Columns?: Columns;

  public constructor(props?: Column) {
    this['@class'] = '.Column';

    Object.assign(this, props as any);
  }
}

export class ColData {
  public Attributes?: Attributes;

  public constructor(props?: ColData) {
    this['@class'] = '.ColData';

    Object.assign(this, props as any);
  }
}

export class Row {
  public id?: string;
  public parentId?: string;

  public constructor(props?: Row) {
    this['@class'] = '.Row';

    Object.assign(this, props as any);
  }
}

export class Header {
  public ColData: ColData;

  public constructor(props?: Header) {
    this['@class'] = '.Header';

    Object.assign(this, props as any);
  }
}

export class Summary {
  public ColData: ColData;

  public constructor(props?: Summary) {
    this['@class'] = '.Summary';

    Object.assign(this, props as any);
  }
}

export class Rows {
  public Row?: Row;

  public constructor(props?: Rows) {
    this['@class'] = '.Rows';

    Object.assign(this, props as any);
  }
}

export class ReportHeader {
  public Time?: Date;
  public ReportName?: string;
  public DateMacro?: string;
  public ReportBasis?: ReportBasisEnum;
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
  public Option?: NameValue;

  public constructor(props?: ReportHeader) {
    this['@class'] = '.ReportHeader';

    Object.assign(this, props as any);
  }
}

export enum DateMacro {
  All = 'All',
  Today = 'Today',
  ThisWeek = 'This Week',
  ThisWeekToDate = 'This WeekToDate',
  ThisMonth = 'This Month',
  ThisMonthToDate = 'This MonthToDate',
  ThisFiscalQuarter = 'This Fiscal Quarter',
  ThisFiscalQuarterToDate = 'This Fiscal QuarterToDate',
  ThisFiscalYear = 'This Fiscal Year',
  ThisFiscalYearToDate = 'This Fiscal YearToDate',
  ThisCalendarQuarter = 'This Calendar Quarter',
  ThisCalendarQuarterToDate = 'This Calendar QuarterToDate',
  ThisCalendarYear = 'This Calendar Year',
  ThisCalendarYearToDate = 'This Calendar YearToDate',
  Yesterday = 'Yesterday',
  LastWeek = 'Last Week',
  LastWeekToDate = 'Last WeekToDate',
  LastMonth = 'Last Month',
  LastMonthToDate = 'Last MonthToDate',
  LastFiscalQuarter = 'Last Fiscal Quarter',
  LastFiscalQuarterToDate = 'Last Fiscal QuarterToDate',
  LastFiscalYear = 'Last Fiscal Year',
  LastFiscalYearToDate = 'Last Fiscal YearToDate',
  LastCalendarQuarter = 'Last Calendar Quarter',
  LastCalendarQuarterToDate = 'Last Calendar QuarterToDate',
  LastCalendarYear = 'Last Calendar Year',
  LastCalendarYearToDate = 'Last Calendar YearToDate',
  NextWeek = 'Next Week',
  Next4Weeks = 'Next 4 Weeks',
  NextMonth = 'Next Month',
  NextFiscalQuarter = 'Next Fiscal Quarter',
  NextFiscalYear = 'Next Fiscal Year',
  NextCalendarQuarter = 'Next Calendar Quarter',
  NextCalendarYear = 'Next Calendar Year'
}

export enum SummarizeColumnsByEnum {
  Total = 'Total',
  Year = 'Year',
  Quarter = 'Quarter',
  FiscalYear = 'FiscalYear',
  FiscalQuarter = 'FiscalQuarter',
  Month = 'Month',
  Week = 'Week',
  Days = 'Days',
  Customers = 'Customers',
  Vendors = 'Vendors',
  Employees = 'Employees',
  Departments = 'Departments',
  Classes = 'Classes',
  ProductsAndServices = 'ProductsAndServices'
}

export enum ColumnTypeEnum {
  Account = 'Account',
  Money = 'Money',
  Rate = 'Rate',
  Customer = 'Customer',
  Vendor = 'Vendor',
  Employee = 'Employee',
  ProductsAndService = 'ProductsAndService',
  Department = 'Department',
  Class = 'Class',
  String = 'String'
}

export enum RowTypeEnum {
  Section = 'Section',
  Data = 'Data'
}
