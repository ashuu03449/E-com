import Form from './ContactForm';

const ContactSection = () => {
  return (
    <div className="container mx-auto p-6 shadow-lg rounded-lg">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left side - Address, Phone, Working Time */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center">
            <i className="fas fa-map-marker-alt text-2xl text-yellow-500 mr-3"></i>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Address</h3>
              <p className="text-gray-600">1234 Street Name, City, Country</p>
            </div>
          </div>

          <div className="flex items-center">
            <i className="fas fa-phone-alt text-2xl text-yellow-500 mr-3"></i>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600">+123 456 7890</p>
            </div>
          </div>

          <div className="flex items-center">
            <i className="fas fa-clock text-2xl text-yellow-500 mr-3"></i>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Working Hours</h3>
              <p className="text-gray-600">Mon - Fri: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="flex-1 flex justify-center items-start  p-6 rounded-lg shadow-md">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
