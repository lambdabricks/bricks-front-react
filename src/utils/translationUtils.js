const translations = {
  en: {
    addUnitTest: 'Add unit test',
    constants: 'Constants',
    delete: 'Delete',
    deleteUnitTest: 'Delete unit test',
    empty: 'None',
    functions: 'Functions',
    tutorial: 'Tutorial',
    library: 'Library',
    loading: 'Loading...',
    noValue: '<NONE>',
    primitives: 'Primitives',
    type: 'Type: ',
    value: 'Value: ',
    workspace: 'Workspace'
  }
}

export const getMessage = (locale, key) => {
  return translations[locale][key]
}
