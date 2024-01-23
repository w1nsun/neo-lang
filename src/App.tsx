import "./index.css";
import { PageHeader } from "./components/layouts/PageHeader.tsx";
import { Lesson } from "./pages/Lesson/Lesson.tsx";
import { Navbar } from "./components/ui/Navbar/Navbar.tsx";

function App() {
  return (
    <div className="h-screen bg-zinc-200">
      <Navbar />
      <Lesson />
    </div>
  );
}

export default App;
