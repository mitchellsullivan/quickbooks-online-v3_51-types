import * as xsd2ts from 'xsd2ts';

const files = [
  'SalesTax', 
  'Report', 
  'EntitlementsResponse', 
  'Finance', 
  'IntuitBaseTypes', 
  'IntuitNamesTypes', 
  'IntuitRestServiceDef'
]

for (let fn of files) {
  xsd2ts.generateTemplateClassesFromXSD(`./src/xsd/${fn}.xsd`);
}