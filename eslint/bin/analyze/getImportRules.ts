import { fromURL } from 'cheerio'

const getImportRules = async (): Promise<string[]> => {
  const rules: string[] = []

  const $ = await fromURL(
    'https://github.com/import-js/eslint-plugin-import',
  )

  $('article.markdown-body tbody tr')
    .filter((index, element) => {
      return !$(element).text().includes('❌')
    })
    .find('td:first-child')
    .each((index, element) => {
      rules.push(`import/${$(element).text()}`)
    })

  return rules.sort()
}

export {
  getImportRules,
}
