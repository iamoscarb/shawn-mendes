import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useThemeSwitcher } from './styles/ThemeSwitcherProvider';
import { RouterProvider } from 'react-router';
import { appRouter } from './router/app.router';

export const ShawnMendesApp = () => {

  const queryClient = new QueryClient();
  const { setThemeName } = useThemeSwitcher();
  setThemeName('home')

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRouter} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>

  )
}