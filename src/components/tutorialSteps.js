import {
  CLEAN,
  UNIT_TEST
} from './constants'

const tutorialSteps = {
  1: {
    libraryId: '2',
    openSiteTourAtStart: true,
    worspaceType: CLEAN
  },
  2: {
    libraryId: '3',
    openSiteTourAtStart: false,
    worspaceType: CLEAN
  },
  3: {
    libraryId: '4',
    openSiteTourAtStart: false,
    worspaceType: CLEAN
  },
  4: {
    libraryId: '4',
    openSiteTourAtStart: false,
    worspaceType: CLEAN
  },
  5: {
    libraryId: '4',
    openSiteTourAtStart: false,
    worspaceType: UNIT_TEST
  }
}

export const getTutorialConfig = (step) => tutorialSteps[step]
