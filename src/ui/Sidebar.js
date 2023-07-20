// import React from 'react';
import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <div class="offcanvas offcanvas-start" tabindex="-1" id="sidebarPanel">
        <div class="offcanvas-body">
            {/* <!-- profile box --> */}
            <div class="profileBox">
                <div class="image-wrapper">
                    <img src="assets/img/icons/92.png" alt="image" class="imaged rounded"/>
                </div>
                <div class="in">
                    <strong>JKD Yoga</strong>
                    <div class="text-muted">
                        <ion-icon name="location"></ion-icon>
                        Jacksonville, FL
                    </div>
                </div>
                <a href="#" class="close-sidebar-button" data-bs-dismiss="offcanvas">
                    <ion-icon name="close"></ion-icon>
                </a>
            </div>
            {/* <!-- * profile box --> */}

            <ul class="listview flush transparent no-line image-listview mt-2">
                <li>
                    <Link to="/" class="item">
                        <div class="icon-box bg-primary">
                            <ion-icon name="home-outline"></ion-icon>
                        </div>
                        <div class="in">
                            Home
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/curriculum" class="item">
                        <div class="icon-box bg-primary">
                            <ion-icon name="book-outline"></ion-icon>
                        </div>
                        <div class="in">
                            The Curriculum
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/instructors" class="item">
                        <div class="icon-box bg-primary">
                            <ion-icon name="school-outline"></ion-icon>
                        </div>
                        <div class="in">
                            The Instructors
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/events" class="item">
                        <div class="icon-box bg-primary">
                            <ion-icon name="calendar-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>Upcoming Events</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link to="/contact" class="item">
                        <div class="icon-box bg-primary">
                            <ion-icon name="chatbubble-ellipses-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>Contact</div>
                            {/* <span class="badge badge-danger">5</span> */}
                        </div>
                    </Link>
                </li>
            </ul>

            <div class="listview-title mt-2 mb-1">
                <span>Social</span>
            </div>
            <ul class="listview image-listview flush transparent no-line">
                <li>
                    <a href="https://www.instagram.com/jkd.yoga/" class="item">
                        <img src="assets/img/social-icons/Instagram.png" alt="image" class="image"/>
                        <div class="in">
                            <div>Instagram</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="page-chat.html" class="item">
                        <img src="assets/img/social-icons/Youtube.png" alt="image" class="image"/>
                        <div class="in">
                            <div>Youtube</div>
                            {/* <span class="badge badge-danger">6</span> */}
                        </div>
                    </a>
                </li>
                <li>
                    <a href="page-chat.html" class="item">
                        <img src="assets/img/social-icons/TikTok.png" alt="image" class="image"/>
                        <div class="in">
                            <div>TikTok</div>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="page-chat.html" class="item">
                        <img src="assets/img/social-icons/Facebook.png" alt="image" class="image"/>
                        <div class="in">
                            <div>Facebook</div>
                        </div>
                    </a>
                </li>
                {/* <li>
                    <a href="page-chat.html" class="item">
                        <img src="assets/img/sample/avatar/avatar5.jpg" alt="image" class="image"/>
                        <div class="in">
                            <div>Henry Doe</div>
                        </div>
                    </a>
                </li> */}
                
            </ul>
            <div class="listview-title mt-2 mb-1">
                <span>Site</span>
            </div>
            <ul class="listview image-listview flush transparent no-line">
                <li>
                    <div class="item">
                        <div class="icon-box bg-primary">
                            <ion-icon name="moon-outline"></ion-icon>
                        </div>
                        <div class="in">
                            <div>Dark Mode</div>
                            <div class="form-check form-switch">
                                <input class="form-check-input dark-mode-switch" type="checkbox" id="darkmodesidebar"/>
                                <label class="form-check-label" for="darkmodesidebar"></label>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        {/* <!-- sidebar buttons --> */}
        <div class="sidebar-buttons">
            <a href="#" class="button">
                <ion-icon name="person-outline"></ion-icon>
            </a>
            <a href="#" class="button">
                <ion-icon name="archive-outline"></ion-icon>
            </a>
            <a href="#" class="button">
                <ion-icon name="settings-outline"></ion-icon>
            </a>
            <a href="#" class="button">
                <ion-icon name="log-out-outline"></ion-icon>
            </a>
        </div>
        {/* <!-- * sidebar buttons --> */}
    </div>
  );
}

export default Sidebar;