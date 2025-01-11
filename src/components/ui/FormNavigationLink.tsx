import { Link } from 'react-router-dom';

interface FormNavigationLinkProps {
  text: string;
  linkText: string;
  to: string;
}

export default function FormNavigationLink({
  text,
  linkText,
  to,
}: FormNavigationLinkProps) {
  return (
    <div className="mt-4 text-center">
      <p className="text-base text-black/50 md:text-md">
        {text}{' '}
        <Link
          to={to}
          className="font-bold text-[#2f2f2f] underline hover:no-underline"
        >
          {linkText}
        </Link>
      </p>
    </div>
  );
}
