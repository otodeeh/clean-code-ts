import { AddSurveyModel } from '../../../../domain/usecases/survey/add-survey'
import { AddSurveyRepository } from '../../../../data/protocols/db/survey/add-survey-repository'
import { MongoHelper } from '../helpers/mongo-helper'
import { LoadSurveysRepository } from '../../../../data/protocols/db/survey/load-surveys-repository'
import { SurveyModel } from '../../../../domain/models/survey'

import { ObjectId } from 'mongodb'

export class SurveyMongoRepository
  implements AddSurveyRepository, LoadSurveysRepository
{
  async add(surveyData: AddSurveyModel): Promise<void> {
    const surveyCollection = MongoHelper.getCollection('surveys')
    const result = await surveyCollection.insertOne(surveyData)
    await surveyCollection.findOne({ _id: result.insertedId })
  }

  async loadAll(): Promise<SurveyModel[]> {
    const surveyCollection = MongoHelper.getCollection('surveys')
    const surveys = await surveyCollection.find().toArray()
    return MongoHelper.mapCollection(surveys)
  }

  async loadById(id: string): Promise<SurveyModel> {
    const surveyCollection = MongoHelper.getCollection('surveys')
    const survey = await surveyCollection.findOne({ _id: new ObjectId(id) })
    return survey && MongoHelper.map(survey)
  }
}
