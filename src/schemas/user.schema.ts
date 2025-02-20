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
            role: Type.Enum(EUserRoles),
            id: Type.String(),
            settings: Type.Optional(Type.Object({
                language: Type.Optional(Type.String())
            }))
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

export const updateUserBodySchema = Type.Object(
    {
        name: Type.Optional(Type.String({ minLength: 2 })),
        email: Type.Optional(Type.String({ format: 'email' })),
        password: Type.Optional(Type.String({ minLength: 6 })),
        settings: Type.Optional(Type.Object({
            language: Type.Optional(Type.String({ minLength: 2 }))
        }))
    },
    {
        additionalProperties: false
    }
)

export type TUpdateUserBody = Static<typeof updateUserBodySchema>
export type TLoginBody = Static<typeof loginBodySchema>
export type TUserCookies = Static<typeof userCookiesSchema>
export type TLoginCookies = Static<typeof loginCookiesSchema>
