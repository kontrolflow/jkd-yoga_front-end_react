function WelcomeNotification() {

    return (
        <div id="notification-welcome" class="notification-box">
            <div class="notification-dialog android-style">
                <div class="notification-header">
                    <div class="in">
                        <img src="assets/img/icons/72.png" alt="image" class="imaged w24"/>
                        <strong>JKD Yoga</strong>
                        <span>just now</span>
                    </div>
                    <a href="#" class="close-button">
                        <ion-icon name="close"></ion-icon>
                    </a>
                </div>
                <div class="notification-content">
                    <div class="in">
                        <h3 class="subtitle">Welcome to JKD Yoga</h3>
                        {/* <div class="text">
                            Mobilekit is a PWA ready Mobile UI Kit Template.
                            Great way to start your mobile websites and pwa projects.
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default WelcomeNotification;