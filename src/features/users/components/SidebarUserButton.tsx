import { SidebarMenuButton } from "@/components/ui/sidebar"
import { SidebarUserButtonClient } from "@/features/_SidebarUserButtonClient"
import { SignOutButton } from "@/services/clerk/AuthButtons"
import { getCurrentUser } from "@/services/clerk/lib/getCurrentAuth"
import { auth } from "@clerk/nextjs/server"
import { LogOutIcon } from "lucide-react"
import { Suspense } from "react"

export function SidebarUserButton() {
  return (
    <Suspense>
      <SideBarUserSuspense />
    </Suspense>
  )
}

async function SideBarUserSuspense() {
  const { user } = await getCurrentUser({ allData: true })
  if (!user) {
    return (
      <SignOutButton>
        <SidebarMenuButton>
          <LogOutIcon />
          <span>Log Out</span>
        </SidebarMenuButton>
      </SignOutButton>
    )
  }

  return <SidebarUserButtonClient user={user} />
}
