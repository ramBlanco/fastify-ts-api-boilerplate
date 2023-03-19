import { join } from 'path'
import { I18n } from 'i18n'

/**
 * LocaleService
 */
export class LocaleService {
  private i18nProvider: I18n

  constructor() {
    this.i18nProvider = new I18n()
    this.i18nProvider.configure({
      locales: ['en'],
      defaultLocale: 'en',
      directory: join(__dirname, '../../', 'locale'),
      objectNotation: true,
    })
  }
  /**
   *
   * @returns {string} The current locale code
   */
  public getCurrentLocale(): string {
    return this.i18nProvider.getLocale()
  }
  /**
   *
   * @returns string[] The list of available locale codes
   */
  public getLocales(): string[] {
    return this.i18nProvider.getLocales()
  }
  /**
   *
   * @param locale The locale to set. Must be from the list of available locales.
   */
  public setLocale(locale: string): void {
    if (this.getLocales().indexOf(locale) !== -1) {
      this.i18nProvider.setLocale(locale)
    } else {
      throw new Error('LOCALE NOT EXISTS IN CONFIG')
    }
  }
  /**
   *
   * @param text String to translate
   * @param args Extra parameters
   * @returns {string} Translated string
   * 
   * @example
   *  __('Hello') -> "Hallo"
      __('Hello %s', 'Marcus') -> "Hallo Marcus"
      __('Hello {{name}}', { name: 'Marcus' }) -> "Hallo Marcus"
   */
  public translate(text: string, args?: Record<string, string>): string {
    if (args) {
      return this.i18nProvider.__(text, args)
    }
    return this.i18nProvider.__(text)
  }
  /**
   *
   * @param phrase Object to translate
   * @param count The plural number
   * @returns {string} Translated string
   * @example
   *  __n('%s cat', 1) // --> "1 Katze"
      __n('%s cat', 3) // --> "3 Katzen"
   */
  translatePlurals(phrase: string, count: number): string {
    return this.i18nProvider.__n(phrase, count)
  }
}
