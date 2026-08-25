import { ErrorFallback } from '@/shared/ui/ErrorFallback'

export function NotFoundPage() {
  return (
    <ErrorFallback
      code={404}
      title="Страница не найдена"
      message="Запрашиваемая страница не существует или была перемещена. Проверьте адрес или вернитесь на главную."
    />
  )
}
