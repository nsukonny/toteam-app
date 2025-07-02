import { z } from 'zod';

export const loginSchema = z.object({
  login: z.string().min(1, 'Введите email или имя пользователя'),
  password: z.string().min(1, 'Введите пароль').max(64, 'Слишком длинный пароль'),
});

export type LoginFormValues = z.infer<typeof loginSchema>; 