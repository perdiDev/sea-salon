import Review from "./_component/review";

export default function Home() {
  return (
    <main className="flex-1">
      <section
        id="hero"
        className="bg-primary py-16 px-6 flex justify-center items-center"
      >
        <div className="container mx-auto text-center text-primary-foreground">
          <h1 className="text-4xl font-bold mb-4">SEA Salon</h1>
          <p className="text-xl">Beauty and Elegance Redefined</p>
        </div>
      </section>
      <section id="services" className="py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <ScissorsIcon className="h-12 w-12 mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-2">Haircuts & Styling</h2>
            <p className="text-muted-foreground">
              Expertly crafted haircuts and styling services to enhance your
              look.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <SnailIcon className="h-12 w-12 mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-2">Manicure & Pedicure</h2>
            <p className="text-muted-foreground">
              Indulge in our luxurious manicure and pedicure treatments for
              well-groomed hands and feet.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <ScanFaceIcon className="h-12 w-12 mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-2">Facial Treatments</h2>
            <p className="text-muted-foreground">
              Revitalize your skin with our rejuvenating facial treatments.
            </p>
          </div>
        </div>
      </section>
      <Review />
      <section id="contact" className="bg-muted py-12 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Thomas</h3>
              <p className="text-muted-foreground mb-2">Owner</p>
              <p className="text-lg font-medium">+1 (555) 123-4567</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-2">Sekar</h3>
              <p className="text-muted-foreground mb-2">Owner</p>
              <p className="text-lg font-medium">+1 (555) 987-6543</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ScanFaceIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5a2 2 0 0 1 2-2h2" />
      <path d="M17 3h2a2 2 0 0 1 2 2v2" />
      <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
      <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <path d="M9 9h.01" />
      <path d="M15 9h.01" />
    </svg>
  );
}

function ScissorsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="6" r="3" />
      <path d="M8.12 8.12 12 12" />
      <path d="M20 4 8.12 15.88" />
      <circle cx="6" cy="18" r="3" />
      <path d="M14.8 14.8 20 20" />
    </svg>
  );
}

function SnailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0" />
      <circle cx="10" cy="13" r="8" />
      <path d="M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6" />
      <path d="M18 3 19.1 5.2" />
      <path d="M22 3 20.9 5.2" />
    </svg>
  );
}
