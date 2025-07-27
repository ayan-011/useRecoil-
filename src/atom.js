import { atom } from "recoil"

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