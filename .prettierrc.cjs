module.exports = {
  singleQuote: true,
  semi: false,
  trailingComma: 'none',
  printWidth: 100,
  bracketSpacing: true,
  plugins: [require('@breathelife/prettier-plugin-sort-imports')],
  importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^[./]'],
  strictGrouping: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true
}
