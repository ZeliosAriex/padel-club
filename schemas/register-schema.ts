import * as z from 'zod'

const RegisterSchema = z.object({
  name: z.string().min(1, 'Por favor, ingresa tu nombre'),
  email: z.string().email('Email inválido'),
  password: z
    .string()
    .min(6, 'La contraseña debe tener al menos 6 caracteres.'),
})

export default RegisterSchema
