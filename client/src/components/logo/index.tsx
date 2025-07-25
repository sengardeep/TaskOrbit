import { Link } from "react-router-dom";

const Logo = (props: { url?: string }) => {
  const { url = "/" } = props;
  return (
    <div className="flex items-center justify-center sm:justify-start">
      <Link to={url}>
        <div className="flex h-7 w-7 items-center justify-center rounded-md bg-transparent">
          {/* Atom/Orbit SVG icon */}
          <svg width="24" height="24" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="32" cy="32" rx="12" ry="28" stroke="#2259e6" strokeWidth="3" transform="rotate(60 32 32)" />
            <ellipse cx="32" cy="32" rx="12" ry="28" stroke="#2259e6" strokeWidth="3" transform="rotate(-60 32 32)" />
            <ellipse cx="32" cy="32" rx="28" ry="12" stroke="#2259e6" strokeWidth="3" />
            <circle cx="32" cy="32" r="6" fill="#2259e6" />
          </svg>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
