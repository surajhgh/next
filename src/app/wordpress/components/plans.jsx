import Image from 'next/image';
// import Workspace from './components/workspace'
// import Blogs from './components/blogs';

// import x from './public/asset/x.png';
// import A from './public/asset/a.png';
// import D from './public/asset/d.png';
// import E from './public/asset/e.png';
// import Q from './public/asset/q.png';
// import S from './public/asset/s.png';

function Plans() {
  const features = [
    {
      icon: '/assest/x.png',
      title: 'Automatic software updates',
      description: 'Keep your website secured with Automatic Updates',
    },
    {
      icon: '/assest/x.png',
      title: 'Automatic Backups',
      description: 'Your data is automatically backed up for easy recovery',
    },
    {
      icon: '/assest/x.png',
      title: 'Built-in SEO Tools',
      description: 'Boost your site rankings with built-in SEO tools',
    },
    {
      icon: '/assest/x.png',
      title: 'Scalability and traffic handling',
      description: 'Scale effortlessly to handle increased traffic and support business growth',
    },
    {
      icon: '/assest/x.png',
      title: 'Unlimited Bandwidth',
      description: 'Enjoy unlimited bandwidth for seamless performance',
    },
    {
      icon: '/assest/x.png',
      title: 'Easy migration',
      description: 'Migrate your site quickly with minimal downtime',
    },
  ];

  return (
    <>
    {/* <Workspace></Workspace>
    <Blogs></Blogs> */}
    <div className="bg-gray-100">
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-center text-gray-900 mb-4">
          All <span className='text-[#2246EE] to-[#4969FF]'>Reseller Hosting</span> plans consist of
          </h2>
          <p className="text-center text-gray-600 mb-8 lg:mb-12">
          Get all these features with our Reseller VPS hosting plans.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out lg:max-h-[294.72px] lg-max-w-[
400.32px] "
              >
                <div className="text-blue-600 mb-4 flex justify-start">
                  <Image 
                    src={feature.icon}
                    alt={feature.title}
                    width={40}
                    height={40}
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-5">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

export default Plans;