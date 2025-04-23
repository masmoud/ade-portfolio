export const AboutSection = () => {
  return (
    <section className="py-16 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://images.pexels.com/photos/11473272/pexels-photo-11473272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Photographer"
          className="w-48 h-48 rounded-full object-cover shadow-md"
        />
        <p className="text-lg">
          I am a passionate photographer with a love for capturing life’s most beautiful and
          fleeting moments. My work spans nature, urban landscapes, and intimate portraits.
        </p>
      </div>
    </section>
  );
};
