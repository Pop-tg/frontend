import type { URLRecord } from '@api/model'
import {
  array as yupArray,
  object as yupObject,
  string as yupString,
  number as yupNumber
} from 'yup'

const historiesSchema = yupArray().of(
  yupObject({
    key: yupString().required(),
    oldUrl: yupString().required(),
    newUrl: yupString().required(),
    token: yupString().required(),
    ttl: yupNumber().min(60).optional()
  })
)

export const isValidHistories = (histories: HistoryStored[]) =>
  historiesSchema.isValid(histories)

export const verifyHistory = (a: HistoryStored, b: URLRecord) => {
  return a.key === b.key && a.oldUrl === b.value
}

export type Callback = () => void

export interface HistoryStored {
  oldUrl: string
  newUrl: string
  token: string
  key: string
  ttl?: number
}

export enum ManageEvent {
  Copy,
  Remove,
  RemoveConfirm,
  RemoveCancel,
  Edit,
  EditConfirm,
  EditCancel
}

export enum HistoryStatus {
  Normal,
  Editing,
  Removing,
  Loading,
  Error,
  Done
}

export enum GoButtonStatus {
  Disabled = 'disabled',
  Loading = 'loading',
  Normal = 'normal'
}
