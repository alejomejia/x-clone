import { Header } from '@/components/Header/Header'

export default function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-center">
      <Header />
      <main>{children}</main>
    </div>
  )
}
