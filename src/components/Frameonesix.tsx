// src/components/FeatureSection.tsx
import Image from 'next/image';

const FeatureSection = () => {
  return (
    <div className="w-full mt-8 h-auto flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-5 py-6 bg-custom-beige">
      
      {/* Feature Item 1 */}
      <div className="flex flex-col items-center text-center px-2 py-6">
        <div className="w-20 h-20 relative mb-4">
          <Image
            src="/assets/group.png"
            alt="Group"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">High Quality</h3>
        <p className="text-gray-500">Crafted from top materials.</p>
      </div>

      {/* Feature Item 2 */}
      <div className="flex flex-col items-center text-center px-2 py-6">
        <div className="w-20 h-20 relative mb-4">
          <Image
            src="/assets/guarantee.png"
            alt="Guarantee"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Warranty Protection</h3>
        <p className="text-gray-500">Over 2 years</p>
      </div>

      {/* Feature Item 3 */}
      <div className="flex flex-col items-center text-center px-2 py-6 ">
        <div className="w-20 h-20 relative mb-4">
          <Image
            src="/assets/shipping.png"
            alt="Shipping"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Free Shipping</h3>
        <p className="text-gray-500">Order over 150 $</p>
      </div>

      {/* Feature Item 4 */}
      <div className="flex flex-col items-center text-center px-2 py-6">
        <div className="w-20 h-20 relative mb-4">
          <Image
            src="/assets/customer-support.png"
            alt="Customer Support"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">24 / 7 Support</h3>
        <p className="text-gray-500">Dedicated support</p>
      </div>

    </div>
  );
};

export default FeatureSection;
