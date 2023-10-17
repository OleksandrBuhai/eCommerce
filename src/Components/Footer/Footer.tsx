export const Footer: React.FC = () => {
    return (
      <div className="p-10 text-white bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8">
            <h5 className="text-base font-semibold leading-[1.75rem] pb-5">Company</h5>
            <ul className="text-xs font-normal leading-[2.5rem]">
              <li>About</li>
              <li>Features</li>
              <li>Works</li>
              <li>Career</li>
            </ul>
          </div>
          <div className="mb-8">
            <h5 className="text-base font-semibold leading-[1.75rem] pb-5">Help</h5>
            <ul className="text-xs font-normal leading-[2.5rem] ">
              <li>Customer Support</li>
              <li>Delivery Details</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="mb-8">
            <h5 className="text-base font-semibold leading-[1.75rem] pb-5">Resources</h5>
            <ul className="text-xs font-normal leading-[2.5rem] ">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to - Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
          <div className="mb-8">
            <h5 className="text-base font-semibold leading-[1.75rem] pb-5">Links</h5>
            <ul className="text-xs font-normal leading-[2.5rem] ">
              <li>Free eBooks</li>
              <li>Development Tutorial</li>
              <li>How to Blog</li>
              <li>Youtube Playlist</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between pt-5 text-xs font-normal leading-[2.5rem] ">
          <span>© Copyright 2023</span>
          <span className="mt-2 md:mt-0">Privacy Policy | Terms & Conditions</span>
        </div>
      </div>
    );
  };
  