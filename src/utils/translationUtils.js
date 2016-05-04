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
    next: 'Next',
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
      input and an output slot.',
    'tutorialSteps.1':
"<p>This is a small tutorial for learning the basics of programming.</p>\
<p>All programs are composed of two primary components.\
 It doesn't matter if its a smartphone app, a web site, a game, or anything else.\
 This two components are: constants and functions.</p>\
<p>You already know this components from your math lessons in elementary school.\
<ul><li>The numbers are constants.</li>\
<li>And the math operators are functions.</li></ul>\
<p>In general functions process one or more inputs to give a result.\
 For example in the sum '3 + 4', the function '+' has two inputs: the numbers\
 '3' and '4'. And it gives the result of '7'.</p>\
<p>In the workspace you can do this kind of operations by connecting the constants\
 as inputs to the functions.</p>\
<p>Try doing a couple of operations now.\
 (Here is a video of the steps to do this if you have any doubts)</p>\
<p>When you finish doing some operations click the button 'Next' to continue.</p>",
    'tutorialSteps.2':
"<p>We can manipulate not only numbers, we can also manipulate letters.\
 Letters are usually referred as 'String' in programming.\
 And as well as the math operations, there are functions to transform them.</p>\
<p>Try to guess what do the functions in the right do. Then do some operations\
 on the workspace to see if the results of the functions are what you expected.</p>\
<ul>Some things you can try:\
<li>'concat' a 'String' with your name with a 'String' with your last name.</li>\
<li>'reverse' your name.</li>\
<li>Get the 'length' of your name.</li>\
</ul>\
<p>When you finish click the button 'Next' to continue.</p>",
    'tutorialSteps.3':
"<p>We have seen two types of constants so far: Numbers & Letters (Strings).\
 Most programs are composed by more than one type of data. And we can mix them\
 according to what we want to achieve. We can even convert from one to the\
 other in case we need it.</p>\
<p>Have you noticed that constants have different colors depending on their type?\
 Numbers are yellow and strings are orange.\
 The functions have definitions that tell us which type of data they need as input.\
 Hover on the functions of the library and you will see this information.</p>\
<p>As usual try doing a couple of operations now. See what happens when you connect\
 an input of the wrong type to a function.</p>\
<p>Try using the functions 'toNumber' and 'toString' to convert a constant\
 from one type to another.</p>\
<p>When you finish click the button 'Next' to continue.</p>"
  }
}

export const getMessage = (locale, key) => {
  return translations[locale][key]
}
