import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/auth'
import AdminDashboard from '@/components/admin/AdminDashboard'

export default function AdminPage() {
  if (!isAuthenticated()) {
    redirect('/admin/login')
  }

  return <AdminDashboard />
}
