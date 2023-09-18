import MainPageUserSelections from '@/components/MainPageUserSelections/MainPageUserSelections';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-600 col-start-2 col-end-13 row-start-2 row-end-11">
      <div>
        <MainPageUserSelections />
      </div>
    </main>
  );
}
