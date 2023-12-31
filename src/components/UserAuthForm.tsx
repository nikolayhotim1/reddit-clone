'use client'

import { cn } from '@/lib/utils'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/Button'
import { useToast } from '@/hooks/use-toast'
import { Icons } from './Icons'
import { useState } from 'react'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
	const { toast } = useToast()
	const [isLoading, setIsLoading] = useState<boolean>(false)

	async function loginWithGoogle() {
		setIsLoading(true)
		try {
			await signIn('google')
		} catch (error) {
			toast({
				title: 'Error',
				description: 'There was an error logging in with Google',
				variant: 'destructive'
			})
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className={cn('flex justify-center', className)} {...props}>
			<Button
				isLoading={isLoading}
				type='button'
				size='sm'
				className='w-full'
				onClick={loginWithGoogle}
				disabled={isLoading}
			>
				{isLoading ? null : <Icons.google className='h-4 w-4 mr-2' />}
				Google
			</Button>
		</div>
	)
}
