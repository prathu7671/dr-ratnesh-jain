
import { useEffect, useState, useRef } from 'react';

interface CounterProps {
  end: number;
  label: string;
  prefix?: string;
  duration?: number;
}

const Counter = ({ end, label, prefix = "", duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now();
    const counter = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);
      
      countRef.current = Math.floor(progress * end);
      setCount(countRef.current);

      if (progress === 1) {
        clearInterval(counter);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration, isVisible]);

  return (
    <div ref={componentRef} className="count-card">
      <div className="counter-number">{prefix}{count}+</div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

const ImpactCounter = () => {
  const impacts = [
    { number: 50, label: 'Projects' },
    { number: 10, label: 'Startups' },
    { number: 50, label: 'Revenue Generated', prefix: '$' },
    { number: 30, label: 'Patents' },
    { number: 100, label: 'Publications' },
    { number: 20, label: 'Awards' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto px-4">
      {impacts.map((impact, index) => (
        <Counter
          key={impact.label}
          end={impact.number}
          label={impact.label}
          prefix={impact.prefix}
          duration={2000 + index * 200}
        />
      ))}
    </div>
  );
};

export default ImpactCounter;
