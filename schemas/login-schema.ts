import * as z from 'zod'

const LoginSchema = z.object({
  email: z
    .string()
    .email('Por favor, introduce una dirección de correo electrónico válida'),
  password: z.string().min(1, 'Es necesario proporcionar una contraseña'),
})

export default LoginSchema
