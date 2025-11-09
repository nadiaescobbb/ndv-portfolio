import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'El nombre debe tener al menos 2 caracteres')
    .max(50, 'El nombre no puede exceder 50 caracteres')
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/, 'El nombre solo puede contener letras'),
  
  email: z
    .string()
    .email('Por favor ingresa un email válido')
    .min(5, 'El email es demasiado corto')
    .max(100, 'El email es demasiado largo'),
  
  subject: z
    .string()
    .min(3, 'El asunto debe tener al menos 3 caracteres')
    .max(100, 'El asunto no puede exceder 100 caracteres'),
  
  message: z
    .string()
    .min(10, 'El mensaje debe tener al menos 10 caracteres')
    .max(1000, 'El mensaje no puede exceder 1000 caracteres'),
  
  phone: z
    .string()
    .regex(/^[\d\s\-\+\(\)]*$/, 'Número de teléfono inválido')
    .optional()
    .or(z.literal('')),
});