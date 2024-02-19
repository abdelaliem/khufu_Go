function AboutUs() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-white">
      {/* Left Column */}
      <div className="w-full lg:w-1/2 p-7">
        <header className="max-w-4xl mx-auto py-8">
          <h1 className="text-2xl font-bold  indent-px">
            Your ultimate guide to hassle-free public transportation
          </h1>
        </header>

        <p className="mb-8 text-lg leading-loose">
          Providing real-time information on public transportation services.
          <br />
          <br />
          Focusing on bus arrival times. <br />
          <br /> User-friendly interface for effortless navigation and
          accessibility.
          <br />
          <br />
          Real-time bus arrival updates, route information, service alerts, and
          more.
          <br />
          <br />
          Feedback Mechanism: Option for users to provide input and report
          issues.
        </p>

        <main className="max-w-4xl mx-auto text-center">
          <button
            href="#"
            className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl"
          >
            Get Started
          </button>
          <button
            href="#"
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl ml-4"
          >
            Sign Up
          </button>
        </main>
      </div>
    </div>
  );
}

export default AboutUs;
