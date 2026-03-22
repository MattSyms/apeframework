import { fromURL } from 'cheerio'

const getStylisticRules = async (): Promise<string[]> => {
  const rules: string[] = []

  const $ = await fromURL(
    'https://eslint.style/rules',
  )

  $('div.vp-doc tr a')
    .each((index, element) => {
      rules.push(`stylistic/${$(element).text()}`)
    })

  return rules.sort()
}

export {
  getStylisticRules,
}
