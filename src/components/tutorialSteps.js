import { CLEAN } from './constants'

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
  }
}

export const getTutorialConfig = (step) => tutorialSteps[step]
