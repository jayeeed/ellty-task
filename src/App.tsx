import { PageSelector } from '@/components/PageSelector';

function App() {
  const handleDone = (selectedPages: string[]) => {
    console.log('Selected pages:', selectedPages);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f5f5f5]">
      <PageSelector onDone={handleDone} />
    </div>
  );
}

export default App;