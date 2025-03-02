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

const optionsUserSchema = {
    settings: Type.Optional(Type.Object({
        language: Type.Optional(Type.String())
    })),
    accounts: Type.Optional(Type.Object({
        telegramId: Type.Optional(Type.Number()),
        phone: Type.Optional(Type.String())
    }))
}

const strictUserSchema = {
    email: Type.String({ format: 'email' }),
    name: Type.String(),
    role: Type.Enum(EUserRoles),
    _id: Type.String()
}

const optionalUserSchema = {
    ...Object.fromEntries(Object.keys(strictUserSchema).map(key => [key, Type.Optional(strictUserSchema[key as keyof typeof strictUserSchema])]))
}

export const loginResponseSchema = Type.Object(
    {
        user: Type.Object({
            ...strictUserSchema,
            ...optionsUserSchema
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
        password: Type.Optional(Type.String()),
        ...optionalUserSchema,
        ...optionsUserSchema
    },
    {
        additionalProperties: false
    }
)

export type TUpdateUserBody = Static<typeof updateUserBodySchema>
export type TLoginBody = Static<typeof loginBodySchema>
export type TUserCookies = Static<typeof userCookiesSchema>
export type TLoginCookies = Static<typeof loginCookiesSchema>
