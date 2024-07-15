import { Pipe, PipeTransform } from "@angular/core";

// type DictWords = {
//     [wordId: string]: {
//         [locale: string]: string
//     }
// }

type Lang = 'fr' | 'en'
type DictWords = Record<string, Record<Lang, string>>

const WORDS: DictWords = {
    REMOVE: {
        fr: 'Supprimer',
        en: 'Delete'
    }
}

@Pipe({
    name: 'lang',
    standalone: true
})
export class LangPipe implements PipeTransform {
    transform(wordId: string, locale: Lang): string {
        return WORDS[wordId][locale]
    }
}