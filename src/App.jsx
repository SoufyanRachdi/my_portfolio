export default function App() {
  return (
    <div className="flex h-screen">
      {/* Left Div - Fixed */}
      <div className="fixed left-0 top-0 w-1/2 h-full bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-bold">Soufyan Rachdi</div>
        </div>
      </div>
      
      {/* Right Div - Scrollable */}
      <div className="w-1/2 ml-auto overflow-y-auto">
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold">Science Info</div>
          </div>
        </div>
      </div>
    </div>
  );
}
