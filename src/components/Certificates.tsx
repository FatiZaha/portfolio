import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Award } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  description?: string;
  credentialUrl?: string;
}

// Certificates from GitHub repository
const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Introduction to Agile Development and Scrum',
    issuer: 'IBM (via Coursera)',
    date: 'March 18, 2024',
    image: 'src/assets/Agile_scrum.png',
    description: 'Course certificate (non-credit) covering Agile principles, Scrum roles, ceremonies, and iterative delivery practices.',
    credentialUrl: 'https://coursera.org/verify/LCRHKMGH4NPB'
  },
  {
    id: 2,
    title: 'Introduction to Cloud Computing',
    issuer: 'IBM (via Coursera)',
    date: 'March 15, 2024',
    image: 'src/assets/Cloud-Computing.png',
    description: 'Course certificate (non-credit) focused on cloud concepts, service models, deployment models, and core cloud benefits.',
    credentialUrl: 'https://coursera.org/verify/8PQPQCSWH7MW'
  },
  {
    id: 3,
    title: 'Introduction to DevOps',
    issuer: 'IBM (via Coursera)',
    date: 'April 22, 2024',
    image: 'src/assets/DevOps.png',
    description: 'Course certificate (non-credit) introducing DevOps culture, CI/CD pipelines, automation, and collaboration practices.',
    credentialUrl: 'https://coursera.org/verify/DJ65XW3LFVJ2'
  },
  {
    id: 4,
    title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
    issuer: 'IBM (via Coursera)',
    date: 'March 26, 2024',
    image: 'src/assets/Containers-with-Docker-Kubernetes-OpenShift.png',
    description: 'Course certificate (non-credit) covering containerization fundamentals, Docker tooling, Kubernetes orchestration, and OpenShift basics.',
    credentialUrl: 'https://coursera.org/verify/JB7D43D7HZJD'
  },
  {
    id: 5,
    title: 'Introduction to Git and GitHub',
    issuer: 'Google (via Coursera)',
    date: 'May 10, 2024',
    image: 'src/assets/Git-and-GitHub.png',
    description: 'Course certificate (non-credit) focused on Git fundamentals, branching, collaboration, and GitHub workflows.',
    credentialUrl: 'https://coursera.org/verify/A4363T5FNRP9'
  },
  {
    id: 6,
    title: 'Introduction to Java and Object-Oriented Programming',
    issuer: 'University of Pennsylvania (via Coursera)',
    date: 'December 18, 2023',
    image: 'src/assets/Intro_JAVA_OOP.png',
    description: 'Course certificate (non-credit) covering Java fundamentals, classes, objects, inheritance, and OOP design principles.',
    credentialUrl: 'https://coursera.org/verify/FARNSV64NXU9'
  },
  {
    id: 7,
    title: 'Machine Learning with Python',
    issuer: 'IBM (via Coursera)',
    date: 'December 19, 2024',
    image: 'src/assets/Machine-Learning-with-Python.png',
    description: 'Specialization certificate with honors focused on supervised and unsupervised learning, model evaluation, and practical ML workflows in Python.',
    credentialUrl: 'https://coursera.org/verify/BEQPTCNZXVJW'
  },
  {
    id: 8,
    title: 'Building Scalable Java Microservices with Spring Boot and Spring Cloud',
    issuer: 'Google Cloud (via Coursera)',
    date: 'December 17, 2024',
    image: 'src/assets/Java-Microservices-with-Spring-Boot_Cloud.png',
    description: 'Course certificate (non-credit) covering microservice design, Spring Boot services, and cloud-native patterns with Spring Cloud.',
    credentialUrl: 'https://coursera.org/verify/XC6U2Q87F1UN'
  },
  {
    id: 9,
    title: 'React Native',
    issuer: 'Meta (via Coursera)',
    date: 'April 21, 2024',
    image: 'src/assets/React-Native.png',
    description: 'Course certificate (non-credit) focused on building cross-platform mobile apps with React Native components and navigation.',
    credentialUrl: 'https://coursera.org/verify/NUBR59NRPTHH'
  },
  {
    id: 10,
    title: 'React Basics',
    issuer: 'Meta (via Coursera)',
    date: 'December 24, 2023',
    image: 'src/assets/React-Basics.png',
    description: 'Course certificate (non-credit) covering core React concepts including components, JSX, props, state, and hooks fundamentals.',
    credentialUrl: 'https://coursera.org/verify/Q7ZWDZYLQEK5'
  },
  {
    id: 11,
    title: 'Python for Everybody Specialization',
    issuer: 'University of Michigan (via Coursera)',
    date: 'April 25, 2023',
    image: 'src/assets/Python-for-Everybody.png',
    description: 'Specialization certificate (5 courses) covering Python programming, data structures, web data access, databases, and a capstone project for data retrieval and visualization.',
    credentialUrl: 'https://coursera.org/verify/specialization/R9APQA75HN96'
  }
];

export function Certificates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certificates.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % certificates.length);
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + certificates.length) % certificates.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section id="certificates" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Certificates
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl">
            Professional certifications and achievements
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Certificate Card */}
          <div className="bg-gray-50 dark:bg-gray-900/80 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 p-6">
              {/* Certificate Image */}
              <div className="relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-800">
                <img
                  src={certificates[currentIndex].image}
                  alt={certificates[currentIndex].title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Certificate Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    {certificates[currentIndex].title}
                  </h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                      {certificates[currentIndex].issuer}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {certificates[currentIndex].date}
                    </p>
                  </div>
                  {certificates[currentIndex].description && (
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {certificates[currentIndex].description}
                    </p>
                  )}
                </div>

                {/* View Certificate Buttons */}
                <div className="flex flex-wrap gap-3 mt-4">
                  <a
                    href={certificates[currentIndex].credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                  >
                    <Award className="w-4 h-4" />
                    Verify on Coursera
                  </a>
                  {/*
                  <a
                    href={certificates[currentIndex].image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors hover:-translate-y-0.5 hover:shadow-md transition-all duration-300"
                  >
                    <Award className="w-4 h-4" />
                    View on GitHub
                  </a>
                  */}
                </div>

                {/* Certificate Counter */}
                <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                  Certificate {currentIndex + 1} of {certificates.length}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            aria-label="Previous certificate"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
            aria-label="Next certificate"
          >
            <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {certificates.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-8 h-3 bg-indigo-600 dark:bg-indigo-400'
                    : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
                aria-label={`Go to certificate ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}