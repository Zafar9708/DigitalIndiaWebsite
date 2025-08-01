import Link from 'next/link';

export default function Treatments() {
  return (
    <div className="space-y-2">
      <h1 className="text-2xl text-primary font-bold">Our Treatments</h1>
      <ul className="list-disc pl-6">
        {[1,2,3,4,5].map(num => (
          <li key={num}>
            <Link href={`/treatments/treatment${num}`} className="text-blue-600 underline">
              Treatment {num}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
