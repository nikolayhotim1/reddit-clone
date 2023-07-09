'use client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import { ReactNode } from 'react'

const queryClient = new QueryClient()

interface LayoutProps {
	children: ReactNode
}

export function Providers({ children }: LayoutProps) {
	return (
		<QueryClientProvider client={queryClient}>
			<SessionProvider>{children}</SessionProvider>
		</QueryClientProvider>
	)
}
