import { SaveSurveyResultRepository } from '../../data/protocols/db/survey-result/save-survey-result-repository'
import { LoadSurveyResultRepository } from 'data/protocols/db/survey-result/load-survey-result-repository'
import { SaveSurveyResultParams } from '../../domain/usecases/survey-result/save-survey-result'
import { SurveyResultModel } from '../../domain/models/survey-result'
import { mockSurveyResultModel } from '../../domain/test'

export const mockSaveSurveyResultRepository =
  (): SaveSurveyResultRepository => {
    class SaveSurveyResultRepositoryStub implements SaveSurveyResultRepository {
      async save(data: SaveSurveyResultParams): Promise<void> {
        return Promise.resolve()
      }
    }
    return new SaveSurveyResultRepositoryStub()
  }

export const mockLoadSurveyResultRepository =
  (): LoadSurveyResultRepository => {
    class LoadSurveyResultRepositoryStub implements LoadSurveyResultRepository {
      async loadBySurveyId(surveyId: string): Promise<SurveyResultModel> {
        return Promise.resolve(mockSurveyResultModel())
      }
    }
    return new LoadSurveyResultRepositoryStub()
  }
