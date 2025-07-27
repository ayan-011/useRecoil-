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

// Good approach :- It helps to make site fast  and get data fast on reload.

// export const  notificaitons = atom({
//     key: "notifications",
//     default: selector({
//         get: async()=>{
// //await new Promise(r => setTimeout(r, 5000))//artificial loading for 5 second.(page will render after 5 sec.)
//             const res = await axios.get('http//...')
//             return res.data
//         }
//     })
// })