import { atom, selector } from "recoil"

export const networkAtom = atom({
    key: 'networkAtom',
    default: 110
})

export const jobsAtom = atom({
    key: 'jobsAtom',
    default: 23
})

export const notificationAtom = atom({
    key: 'notificationAtom',
    default: 12
})

export const messagingAtom = atom({
    key: 'messagingAtom',
    default: 0
})

export const  add = selector({
  key: "add",
  get: ({get}) =>{
     const jobsNotificationCount = get(networkAtom)
     const networkNotificationCount = get(jobsAtom)

     return jobsNotificationCount + networkNotificationCount
  }
})