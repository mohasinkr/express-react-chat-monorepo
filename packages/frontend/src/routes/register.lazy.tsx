import { createLazyFileRoute } from '@tanstack/react-router'
import HeaderSection from '@/features/auth/components/Header'
import RegisterForm from '@/features/auth/components/RegisterForm'
import RegisterFormFooter from '@/features/auth/components/RegisterFooter'

export const Route = createLazyFileRoute('/register')({
  component: RegisterScreen,
})

export default function RegisterScreen() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 register-pattern">
      <div className="max-w-md w-full space-y-8 bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl">
        <HeaderSection />
        <RegisterForm />
        <RegisterFormFooter />
      </div>
    </div> 
  )
}
