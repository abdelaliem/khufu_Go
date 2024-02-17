function AboutUs() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center">
        <header className="w-full max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center">
            Your ultimate guide to hassle-free public transportation
          </h1>
        </header>
  
        <main className="w-full max-w-4xl mx-auto px-4 py-8 flex-1 text-center">
          <p className="mb-8 text-xl">
            Providing real-time information on public transportation services. Focusing on bus arrival times. User-friendly interface for effortless navigation and accessibility. Real-time bus arrival updates, route information, service alerts, and more. Feedback Mechanism: Option for users to provide input and report issues.
          </p>
  
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-4">
            Sign Up
          </button>
        </main>
      </div>
    )
}

export default AboutUs
