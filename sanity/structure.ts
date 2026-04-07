import type { StructureResolver } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('SunThru CMS')
    .items([
      S.documentTypeListItem('newsArticle').title('News Articles'),
    ])
