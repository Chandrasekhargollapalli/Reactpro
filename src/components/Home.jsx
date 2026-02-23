export default function Home({ user }) {
  return (
    <div className="bg-white p-10 rounded-xl shadow-md text-center">
      <h1 className="text-3xl font-bold text-green-600">
        Welcome {user?.email}
      </h1>
      <p className="mt-2">You are logged in 🎉</p>
    </div>
  );
}