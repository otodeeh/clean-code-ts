import { AddSurveyModel } from '../../../../domain/usecases/add-account/add-survey'

export interface AddSurveyRepository {
  add(surveyData: AddSurveyModel): Promise<void>
}
