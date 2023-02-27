import { AddAccountRepository } from '@/data/protocols/add-account-repository'
import { AddAccountModel } from '@/domain/usecases/add-account'
import { AccountModel } from '@/domain/usecases/models/account'
import { MongoHelper } from '../helpers/mongo-helper'

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getCollection('accounts')
    await accountCollection.insertOne(accountData)
    const result = await accountCollection.findOne(accountData)
    return {
      id: result._id.toString(),
      name: result.name,
      email: result.email,
      password: result.password
    }
  }
}
