import { Schema, model } from 'mongoose'

const ProfileSchema = new Schema({
  enUserName: {
    type: String
  },
  cnUserName: {
    type: String
  },
  avatar: {
    type: String
  },
  introduction: {
    type: String
  },
  github: {
    type: String
  },
  email: {
    type: String
  },
  createTime: {
    type: Date
  },
  modifyTime: {
    type: Date
  }
})

export const ProfileSchemaModel = model('Profile', ProfileSchema)
