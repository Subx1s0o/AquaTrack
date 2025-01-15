import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex size-full flex-col items-center justify-center rounded-[30px] bg-grey px-1 text-center lg:max-h-[736px]">
      <h1 className="text-9xl font-extrabold text-black">404</h1>
      <p className="mt-4 text-2xl font-semibold text-darkGrey">
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <p className="mt-2 text-gray-500">
        You may have mistyped the address or the page may have moved.
      </p>
      <button
        onClick={() => navigate(-1)}
        className="mt-6 inline-block rounded-[30px] bg-green px-6 py-3 text-darkGrey transition-colors hover:bg-green-selector active:bg-grey"
      >
        Go Back
      </button>
    </div>
  );
}
