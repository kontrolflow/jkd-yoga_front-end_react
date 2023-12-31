function AppHeader() {

    return (
        <div class="appHeader bg-primary scrolled">
          <div class="left">
              <a href="#" class="headerButton" data-bs-toggle="offcanvas" data-bs-target="#sidebarPanel">
                  <ion-icon name="menu-outline"></ion-icon>
              </a>
          </div>
          <div class="pageTitle">
              JKD Yoga
          </div>
          <div class="right">
              <a href="#" class="headerButton toggle-searchbox">
                  <ion-icon name="search-outline"></ion-icon>
              </a>
          </div>
      </div>
    );
  }
  
  export default AppHeader;