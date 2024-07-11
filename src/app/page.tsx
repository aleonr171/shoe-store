import Banner from "@/components/ui/banner";
import Navbar from "@/components/ui/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <Banner />
    </main>
  );
}
