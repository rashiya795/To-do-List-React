export default function Header() {
  return (
    <div>
      <header className="text-center py-8 bg-[#F5F5DC] text-brown rounded-t border border-amber-700 mb-10">
        <h1 className="text-2xl font-bold font-mono mb-2 md:text-4xl drop-shadow-lg">
          📝 My To-Do List
        </h1>
        <p className="text-sm md:text-shadow-md">
          Stay organized. Get things done.
        </p>
      </header>
    </div>
  );
}
