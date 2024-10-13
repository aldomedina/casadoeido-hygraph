import logo from "@/assets/logo/horizontal-logo.svg";
import smallLogo from "@/assets/logo/small-logo-1.svg";
import { Link } from "@/navigation";

const ResponsiveLogo = () => {
  return (
    <Link href="/">
      <div>
        <img
          className="hidden lg:block cursor-pointer max-w-sm xl:max-w-lg"
          src={logo.src}
          alt="logo"
        />
        <img
          className="block lg:hidden cursor-pointer max-w-lg"
          src={smallLogo.src}
          alt="logo"
        />
      </div>
    </Link>
  );
};

export default ResponsiveLogo;
