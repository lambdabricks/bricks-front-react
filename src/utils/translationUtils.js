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
    workspace: 'Workspace',
    'joyrideSteps.window': 'The window has 3 sections.',
    'joyrideSteps.tutorial':
      '<b>1. Tutorial</b>\
      <p>The instructions for following the tutorial</p>',
    'joyrideSteps.library':
      '<b>2. Library</b>\
      <p>The library has 2 components: <ul><li>Constants</li><li>Functions</li><p>',
    'joyrideSteps.constants':
      '<p>Clicking on "Number" will add a ballon to the workspace.</p>\
      <p>This ballon can hold a number.</p>',
    'joyrideSteps.functions': 'Clicking on a math operation will add a brick to the workspace.',
    'joyrideSteps.workspace':
      '<b>3. Workspace</b>\
      <p>The workspace is the playground where you can connect ballons and bricks.</p>\
      <p>Clicking on an element will show a dialog where you can change its properties.</p>\
      <p>Move the elements by drag & drop.</p>\
      <p>The elements are connected through pipes. To create a pipe click on an\
      input and an output slot.'
  }
}

export const getMessage = (locale, key) => {
  return translations[locale][key]
}
