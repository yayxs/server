import { Schema, model, Document } from 'mongoose';

export interface IProfile extends Document {
  enUserName?: string;
  cnUserName?: string;
  avatar?: string;
  introduction?: string;
  github?: string;
  email?: string;
  createTime: Date;
  modifyTime: Date;
}

const ProfileSchema = new Schema<IProfile>({
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
});

export const ProfileModel = model<IProfile>('Profile', ProfileSchema); 