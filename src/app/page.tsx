import CounterApp from "@/components/couter-app";
import { Toaster } from 'react-hot-toast';

export default function Home() {
  return (
    <main className="w-full h-screen">
      <Toaster />
      <CounterApp />
    </main>
  );
}
