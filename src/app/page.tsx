import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebarClient } from "./_AppSidebarClient";

export default function HomePage() {
  return (
    <SidebarProvider className="overflow-y-hidden">
      <AppSidebarClient>
      <Sidebar collapsible="icon" className="overflow-hidden">
        <SidebarHeader className="flex-row">
          <SidebarTrigger />
          <span>CareerPilot</span>
        </SidebarHeader>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton>dfghj</SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1">arham shameem</main>
      </AppSidebarClient>
    </SidebarProvider>
  );
}
