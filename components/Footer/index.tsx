import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer
        className="footer-bg wow fadeInUp relative z-10  bg-opacity-5 pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo3.png"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo3.png"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="mb-9 text-base font-medium leading-relaxed text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lobortis.
                </p>
                <div className="flex items-center">
                  <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg
                      width="9"
                      height="18"
                      viewBox="0 0 9 18"
                      className="fill-current"
                    >
                      <path d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      className="fill-current"
                    >
                      <path d="M16.3024 2.26027L17.375 1.0274C17.6855 0.693493 17.7702 0.436644 17.7984 0.308219C16.9516 0.770548 16.1613 0.924658 15.6532 0.924658H15.4556L15.3427 0.821918C14.6653 0.282534 13.8185 0 12.9153 0C10.9395 0 9.3871 1.48973 9.3871 3.21062C9.3871 3.31336 9.3871 3.46747 9.41532 3.57021L9.5 4.0839L8.90726 4.05822C5.29435 3.95548 2.33065 1.13014 1.85081 0.642123C1.06048 1.92637 1.5121 3.15925 1.99194 3.92979L2.95161 5.36815L1.42742 4.5976C1.45565 5.67637 1.90726 6.52397 2.78226 7.14041L3.54435 7.65411L2.78226 7.93665C3.2621 9.24658 4.33468 9.78596 5.125 9.99144L6.16935 10.2483L5.18145 10.8647C3.60081 11.8921 1.625 11.8151 0.75 11.738C2.52823 12.8682 4.64516 13.125 6.1129 13.125C7.21371 13.125 8.03226 13.0223 8.22984 12.9452C16.1331 11.25 16.5 4.82877 16.5 3.54452V3.36473L16.6694 3.26199C17.629 2.44007 18.0242 2.00342 18.25 1.74658C18.1653 1.77226 18.0524 1.82363 17.9395 1.84932L16.3024 2.26027Z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                    >
                      <path d="M17.5058 2.07119C17.3068 1.2488 16.7099 0.609173 15.9423 0.395963C14.5778 7.26191e-08 9.0627 0 9.0627 0C9.0627 0 3.54766 7.26191e-08 2.18311 0.395963C1.41555 0.609173 0.818561 1.2488 0.619565 2.07119C0.25 3.56366 0.25 6.60953 0.25 6.60953C0.25 6.60953 0.25 9.68585 0.619565 11.1479C0.818561 11.9703 1.41555 12.6099 2.18311 12.8231C3.54766 13.2191 9.0627 13.2191 9.0627 13.2191C9.0627 13.2191 14.5778 13.2191 15.9423 12.8231C16.7099 12.6099 17.3068 11.9703 17.5058 11.1479C17.8754 9.68585 17.8754 6.60953 17.8754 6.60953C17.8754 6.60953 17.8754 3.56366 17.5058 2.07119ZM7.30016 9.44218V3.77687L11.8771 6.60953L7.30016 9.44218Z" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    aria-label="social-link"
                    className="mr-6 text-[#CED3F6] hover:text-primary"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                    >
                      <path d="M15.0511 0H1.63439C0.73171 0 0 0.73171 0 1.63439V15.0511C0 15.9538 0.73171 16.6855 1.63439 16.6855H15.0511C15.9538 16.6855 16.6855 15.9538 16.6855 15.0511V1.63439C16.6855 0.73171 15.9538 0 15.0511 0ZM5.33674 14.3726H2.66839V6.24024H5.33674V14.3726ZM4.00299 5.2685H3.98484C3.10394 5.2685 2.43476 4.58039 2.43476 3.71855C2.43476 2.83766 3.12287 2.18799 4.02339 2.18799C4.92391 2.18799 5.57476 2.85626 5.59291 3.71855C5.59291 4.58039 4.92391 5.2685 4.00299 5.2685ZM14.3726 14.3726H11.7222V10.2505C11.7222 9.29763 11.7009 8.06594 10.3885 8.06594C9.05472 8.06594 8.86039 9.12795 8.86039 10.1795V14.3726H6.20992V6.24024H8.74984V7.28346H8.78661C9.10567 6.68091 9.87354 6.03937 10.9923 6.03937C13.2752 6.03937 14.3726 7.51543 14.3726 9.85638V14.3726Z" />
                    </svg>
                  </a>
                  
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-dark">
                  About Us
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium leading-loose text-body-color hover:text-primary"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium leading-loose text-body-color hover:text-primary"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium leading-loose text-body-color hover:text-primary"
                    >
                      News
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium leading-loose text-body-color hover:text-primary"
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-dark">
                  Resources
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium leading-loose text-body-color hover:text-primary"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium leading-loose text-body-color hover:text-primary"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium leading-loose text-body-color hover:text-primary"
                    >
                      App Directory
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium leading-loose text-body-color hover:text-primary"
                    >
                      Resources
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-dark">
                  Support
                </h2>
                <ul>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium leading-loose text-body-color hover:text-primary"
                    >
                      Help Center
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium leading-loose text-body-color hover:text-primary"
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium leading-loose text-body-color hover:text-primary"
                    >
                      Legal
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      className="mb-4 inline-block text-base font-medium leading-loose text-body-color hover:text-primary"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
        
          </div>
        </div>
        <div className="footer-bottom">
        <div className="footer-bottom-text">&copy; 2023 Qode Interactive, All Rights Reserved

</div>
       
      </div>
      </footer>
    </>
  );
};

export default Footer;