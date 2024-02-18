import Navbar from "@/components/homepage/navbar/Navbar";
import { AuthContextProvider } from "@/Context/CommunityAuthContext";
export const metadata = {
  title: "Edunity",
  description: "Education opportunity for all",
};

export default function RootLayout({ children }) {
  return (
    <AuthContextProvider>
      <Navbar community={true} />
      <div className="w-full h-full">{children}</div>
    </AuthContextProvider>
  );
}
