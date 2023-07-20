import { useEffect } from 'react';

// UI Components
import Sidebar from '../ui/Sidebar';
import WelcomeNotification from '../ui/WelcomeNotification';
import BottomMenu from '../ui/BottomMenu';
import Footer from '../ui/Footer';
import SearchComponent from '../ui/SearchComponent';
import AppHeader from '../ui/AppHeader';
import Loader from '../ui/Loader';


function Contact() {

    useEffect(() => {
        // componentDidMount() {}
        const baseScript = document.createElement('script');
        baseScript.src = '/assets/js/base.js';
        baseScript.async = true;
        document.head.append(baseScript);
    
        const splideScript = document.createElement('script');
        splideScript.src = '/assets/js/plugins/splide/splide.min.js';
        splideScript.async = true;
        document.head.append(splideScript);
    
        const bootstrapScript = document.createElement('script');
        bootstrapScript.src = '/assets/js/lib/bootstrap.min.js';
        bootstrapScript.async = true;
        document.head.append(bootstrapScript);
      
        // componentWillUnmount() {}
        return () => {
          baseScript.remove();
          splideScript.remove();
          bootstrapScript.remove();
          // inlineScript.remove();
    
          // Trigger welcome notification after 5 seconds
            setTimeout(() => {
                window.notification('notification-welcome', 5000);
            }, 2000);
        };
      }, []);

  return (
    
    <div className="App">
        
        {/* <Loader/> */}

        <AppHeader/>

        <SearchComponent/>

        {/* <!-- App Capsule --> */}
        <div id="appCapsule">

            <div class="header-large-title">
                <h1 class="title">Contact</h1>
                {/* <h4 class="subtitle">Teaching the combined principles and applications of Yoga - Martial Arts - Flow Arts- Exercise</h4> */}
            </div>
            
        </div>
        {/* <!-- * App Capsule --> */}

        <BottomMenu/>

        <Sidebar/>

        {/* <WelcomeNotification/> */}

    </div>
  );
}

export default Contact;