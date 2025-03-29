

const OurMission = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold text-center text-green-600 mb-8">
        Powering a Sustainable Future with Excellence
      </h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Vision
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At SKS Power Tech Nigeria Limited, we aspire to be a global leader
            in integrated power generation, recognized for our commitment to
            innovation, reliability, and sustainability.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">
            We Strive To:
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <p className="text-lg text-gray-700">
                Lead the industry in gas gensets and power generator
                manufacturing
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <p className="text-lg text-gray-700">
                Deliver unmatched value through cutting-edge and eco-friendly
                energy solutions
              </p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 text-xl">✓</span>
              <p className="text-lg text-gray-700">
                Drive sustainability-focused innovation to shape the future of
                power generation
              </p>
            </li>
          </ul>
        </section>

        <p className="text-lg text-gray-700 leading-relaxed italic border-l-4 border-green-500 pl-4">
          With a forward-thinking approach, we aim to redefine the energy
          landscape by developing environmentally responsible technologies.
        </p>
      </div>
    </div>
  );
};

export default OurMission;
