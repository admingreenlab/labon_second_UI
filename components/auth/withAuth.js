import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const withAuth = (WrappedComponent) => {
  const Auth = (props) => {
    const router = useRouter();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
      // Only run authentication check on the client side
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        
        if (!token) {
          router.replace('/login');
        } else {
          setChecking(false);
        }
      }
    }, [router]);

    // Don't render anything while checking authentication
    if (checking) {
      return null;
    }

    // Render the protected component
    return <WrappedComponent {...props} />;
  };

  return Auth;
};

export default withAuth;