import { z } from 'zod';

export const registerSchema = z.object({
  full_name: z.string().min(2, 'Введите имя и фамилию'),
  email: z.string().email('Введите корректный email'),
  username: z.string().min(3, 'Минимум 3 символа').max(32, 'Максимум 32 символа'),
  password: z.string().min(8, 'Минимум 8 символов').max(64, 'Максимум 64 символа'),
  password_confirm: z.string(),
  agree: z.literal(true, { errorMap: () => ({ message: 'Необходимо согласие с условиями' }) }),
}).refine((data) => data.password === data.password_confirm, {
  message: 'Пароли не совпадают',
  path: ['password_confirm'],
});

export type RegisterFormValues = z.infer<typeof registerSchema>; 