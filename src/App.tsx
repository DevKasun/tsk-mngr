import TaskBoard from "./components/board/task-board";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-pagebg min-h-screen">
        <TaskBoard />
      </main>
    </>
  );
}

export default App;
