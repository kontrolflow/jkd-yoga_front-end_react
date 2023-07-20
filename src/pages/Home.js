import { useEffect } from 'react';

// UI Components
import Sidebar from '../ui/Sidebar';
import WelcomeNotification from '../ui/WelcomeNotification';
import BottomMenu from '../ui/BottomMenu';
import Footer from '../ui/Footer';
import SearchComponent from '../ui/SearchComponent';
import AppHeader from '../ui/AppHeader';
import Loader from '../ui/Loader';


function Home() {

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
                <h1 class="title">JKD Yoga</h1>
                <h4 class="subtitle">Teaching a blend of Yoga, Flow Arts, Martial Arts and Exercise woven together by the principles of Jeet Kune Do</h4>
            </div>

            
            {/* <div class="section mt-3 mb-3">
                <div class="card">
                    <div class="card-body d-flex justify-content-between align-items-end">
                        <div>
                            <h6 class="card-subtitle">Discover</h6>
                            <h5 class="card-title mb-0 d-flex align-items-center justify-content-between">
                                Dark Mode
                            </h5>
                        </div>
                        <div class="form-check form-switch">
                            <input class="form-check-input dark-mode-switch" type="checkbox" id="darkmodecontent"/>
                            <label class="form-check-label" for="darkmodecontent"></label>
                        </div>

                    </div>
                </div>
            </div>

            <div class="section mt-3 mb-3">
                <div class="card">
                    <img src="assets/img/sample/photo/wide4.jpg" class="card-img-top" alt="image"/>
                    <div class="card-body">
                        <h6 class="card-subtitle">Discover</h6>
                        <h5 class="card-title">Components</h5>
                        <p class="card-text">
                            Reusable components designed for the mobile interface and ready to use.
                        </p>
                        <a href="app-components.html" class="btn btn-primary">
                            <ion-icon name="cube-outline"></ion-icon>
                            Preview
                        </a>
                    </div>
                </div>
            </div>

            <div class="section mt-3 mb-3">
                <div class="card">
                    <img src="assets/img/sample/photo/wide2.jpg" class="card-img-top" alt="image"/>
                    <div class="card-body">
                        <h6 class="card-subtitle">Discover</h6>
                        <h5 class="card-title">Pages</h5>
                        <p class="card-text">
                            Mobilekit comes with basic pages you may need and use in your projects easily.
                        </p>
                        <a href="app-pages.html" class="btn btn-primary">
                            <ion-icon name="layers-outline"></ion-icon>
                            Preview
                        </a>
                    </div>
                </div>
            </div> */}

            {/* <Footer/> */}
            
        </div>
        {/* <!-- * App Capsule --> */}

        <BottomMenu/>

        <Sidebar/>

        {/* <WelcomeNotification/> */}

    </div>
  );
}

export default Home;