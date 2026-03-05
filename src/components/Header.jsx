export default function Header({ user }) {

  const username =
    user?.name ||
    user?.email?.split("@")[0] ||
    "";

  return (
    <header className="bg-slate-900 border-b border-slate-700">

      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-green-400">
          GVVS Chanti Portfolio
        </h1>

        <div className="text-gray-300 flex gap-6">

          <a href="#skills" className="hover:text-green-400">Skills</a>
          <a href="#projects" className="hover:text-green-400">Projects</a>

          {user && (
            <span className="text-green-400 font-medium">
              👋 {username}
            </span>
          )}

        </div>

      </div>

    </header>
  );
}