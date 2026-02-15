import { SidebarUserButtonClient } from "@/features/_SidebarUserButtonClient"
import { auth } from "@clerk/nextjs/server"
import { Suspense } from "react"

export function SidebarUserButton() {
  return (
    <Suspense>
      <SideBarUserSuspense />
    </Suspense>
  )
}

async function SideBarUserSuspense() {
  const { userId } = await auth()
  return (
    <SidebarUserButtonClient
      user={{
        email: "test@test.com",
        name: "Test User",
        imageUrl: "",
      }}
    />
  )
}
