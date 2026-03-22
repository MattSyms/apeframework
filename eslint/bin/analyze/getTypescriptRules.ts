import { fromURL } from 'cheerio'

const getTypescriptRules = async (): Promise<string[]> => {
  const rules: string[] = []

  const $ = await fromURL(
    'https://typescript-eslint.io/rules/',
  )

  $('div.theme-doc-markdown tr')
    .filter((index, element) => {
      return $(element).find('td[title=deprecated]').length === 0
    })
    .find('a')
    .each((index, element) => {
      rules.push($(element).text().replace('@typescript-eslint', 'typescript'))
    })

  return rules.sort()
}

export {
  getTypescriptRules,
}
