export default function WelcomeSection() {
  return (
    <div className="welcome-section text-white bg-primary p-7 lg:flex flex-col items-center justify-center  hidden">
      <span className="text-4xl font-semibold mb-4 block">
        welcome to task manager
      </span>
      <p className="text-white/80">
        orgnize your tasks and stay on top of your productivity
      </p>
    </div>
  );
}
