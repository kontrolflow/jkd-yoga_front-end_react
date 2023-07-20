import { Link } from "react-router-dom";

function BottomMenu() {

    return (
        <div class="appBottomMenu">
          <Link to="/" class="item">
              <div class="col">
                  <ion-icon name="home-outline"></ion-icon>
              </div>
          </Link>
          <Link to="/curriculum" class="item">
              <div class="col">
                  <ion-icon name="book-outline"></ion-icon>
              </div>
          </Link>
          <Link to="/instructors" class="item">
              <div class="col">
                  <ion-icon name="school-outline"></ion-icon>
                  {/* <span class="badge badge-danger">5</span> */}
              </div>
          </Link>
          <Link to="/events" class="item">
              <div class="col">
                  <ion-icon name="calendar-outline"></ion-icon>
              </div>
          </Link>
          <a href="#sidebarPanel" class="item" data-bs-toggle="offcanvas">
              <div class="col">
                  <ion-icon name="menu-outline"></ion-icon>
              </div>
          </a>
      </div>
    );

  }
  
  export default BottomMenu;