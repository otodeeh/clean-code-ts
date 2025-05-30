import { Controller } from '../../../../../presentation/protocols'
import { makeLogControllerDecorator } from '../../../decorators/log-controller-decorator-factory'
import { SaveSurveyResultController } from '../../../../../presentation/controllers/survey-result/save-survey-result/save-survey-result-controller'
import { makeDbSaveSurveyResult } from '../../../usecases/survey-result/save-survey-result/db-save-survey-result-factory'
import { makeDbLoadSurveyById } from '../../../usecases/survey/load-survey-by-id/db-load-survey-by-id-factory'

export const makeSaveSurveyResultController = (): Controller => {
  const controller = new SaveSurveyResultController(
    makeDbLoadSurveyById(),
    makeDbSaveSurveyResult()
  )
  return makeLogControllerDecorator(controller)
}
