function App() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col gap-5 justify-center items-center">
      <h1>Instagram</h1>

      <div className="flex flex-col gap-3 w-[300px]">
        <input
          type="text"
          placeholder="username"
          className="px-5 py-2 border-1 border-gray-50 rounded-lg"
        />

        <input
          type="password"
          placeholder="password"
          className="px-5 py-2 border-1 border-gray-50 rounded-lg"
        />

        <button className="bg-blue-500 rounded-lg h-[30px]">Log in</button>
      </div>
    </div>
  );
}

export default App;
