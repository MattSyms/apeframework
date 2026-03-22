import { fromURL } from 'cheerio'

const getTypescriptDisabledRules = async (): Promise<string[]> => {
  const rules: string[] = []
  const urls: string[] = []

  const $ = await fromURL(
    'https://typescript-eslint.io/rules/',
  )

  $('div.theme-doc-markdown tr')
    .filter((index, element) => {
      return $(element).find('td[title=deprecated]').length === 0
        && $(element).find('td[title="extends base rule"]').length === 1
    })
    .find('a')
    .each((index, element) => {
      urls.push(`https://typescript-eslint.io${$(element).attr('href')}/`)
    })

  for (const url of urls) {
    const $rule = await fromURL(url)

    $rule('div.theme-doc-markdown code')
      .filter((index, element) => {
        return $rule(element).text().includes('you must disable the base rule')
      })
      .find('span.token-line')
      .filter((index, element) => {
        return $rule(element).text().includes(': "off"')
      })
      .each((index, element) => {
        rules.push($rule(element).text().split('"')[1])
      })
  }

  return rules.sort()
}

export {
  getTypescriptDisabledRules,
}
