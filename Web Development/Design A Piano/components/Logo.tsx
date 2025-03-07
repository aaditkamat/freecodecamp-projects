import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src="https://design-style-guide.freecodecamp.org/downloads/fcc_primary_large.svg"
      alt="FreeCodeCamp Logo"
      className="ml-8 mt-8"
      width={300}
      height={300}
    />
  );
};

export default Logo;
