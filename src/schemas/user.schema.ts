import { Type, Static } from '@sinclair/typebox'

import { EUserRoles } from '../types/user.types'

export const loginBodySchema = Type.Object(
    {
        email: Type.String({ format: 'email' }),
        password: Type.String()
    },
    {
        additionalProperties: false
    }
)

export const loginResponseSchema = Type.Object(
    {
        user: Type.Object({
            email: Type.String({ format: 'email' }),
            name: Type.String(),
            role: Type.Enum(EUserRoles)
        }, {
            additionalProperties: false
        })
    },
    {
        additionalProperties: false
    }
)

export const userCookiesSchema = Type.Object({
    refreshToken: Type.String(),
    deviceUUID: Type.String()
}, {
    additionalProperties: false
})

export const loginCookiesSchema = Type.Pick(userCookiesSchema, ['deviceUUID'])

export type TLoginBody = Static<typeof loginBodySchema>
export type TUserCookies = Static<typeof userCookiesSchema>
export type TLoginCookies = Static<typeof loginCookiesSchema>
