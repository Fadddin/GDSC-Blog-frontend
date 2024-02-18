import React from 'react';
import './style.css'
import admin from '../assets/admin.svg'
import heart from '../assets/heart.png'


const BlogContent = () => {
  return (
    <div>
      <div className="content">
        <div id="blogimg1"></div>
        <div className="blog">
          <div className="blogtopbar">
            <div className="adminimg">
              <img src={admin} alt="" />
            </div>
            <div id="admin_name">
              <p>
                Admin <br />
                21 DEC
              </p>
            </div>

            <div className="icon-container" onClick="toggleIcons(this)">
              <img src={heart} alt="Icon 1" className="icon icon1" />
              <img src="heart filled.png" alt="Icon 2" className="icon icon2" />
            </div>
          </div>
          <a href="#">
            <div className="writing">
              <h2>TITLE</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit cum rem reiciendis optio, sed cumque
                nesciunt ducimus veritatis explicabo quam amet ipsam voluptas molestias eaque blanditiis itaque
                perferendis deserunt delectus?
              </p>
              <hr />
            </div>
          </a>
          <div className="counter">100 VIEWS</div>
        </div>
      </div>
      <div className="content">
        <div id="blogimg2"></div>
        <div className="blog">
          <div className="blogtopbar">
            <div className="adminimg">
              <img src={admin} alt="" />
            </div>
            <div id="admin_name">
              <p>
                Admin <br />
                21 DEC
              </p>
            </div>

            <div className="icon-container" onClick="toggleIcons(this)">
              <img src={heart} alt="Icon 1" className="icon icon1" />
              <img src="heart filled.png" alt="Icon 2" className="icon icon2" />
            </div>
          </div>
          <a href="https://ui.glass/generator/" target="_blank">
            <div className="writing">
              <h2>TITLE</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit cum rem reiciendis optio, sed cumque
                nesciunt ducimus veritatis explicabo quam amet ipsam voluptas molestias eaque blanditiis itaque
                perferendis deserunt delectus?
              </p>
              <hr />
            </div>
          </a>
          <div className="counter">100 VIEWS</div>
        </div>
      </div>

      <div className="content">
        <div id="blogimg3"></div>
        <div className="blog">
          <div className="blogtopbar">
            <div className="adminimg">
              <img src={admin} alt="" />
            </div>
            <div id="admin_name">
              <p>
                Admin <br />
                21 DEC
              </p>
            </div>

            <div className="icon-container" onClick="toggleIcons(this)">
              <img src={heart} alt="Icon 1" className="icon icon1" />
              <img src="heart filled.png" alt="Icon 2" className="icon icon2" />
            </div>
          </div>
          <a href="#">
            <div className="writing">
              <h2>TITLE</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit cum rem reiciendis optio, sed cumque
                nesciunt ducimus veritatis explicabo quam amet ipsam voluptas molestias eaque blanditiis itaque
                perferendis deserunt delectus?
              </p>
              <hr />
            </div>
          </a>
          <div className="counter">100 VIEWS</div>
        </div>
      </div>
      <div className="content">
        <div id="blogimg4"></div>
        <div className="blog">
          <div className="blogtopbar">
            <div className="adminimg">
              <img src={admin} alt="" />
            </div>
            <div id="admin_name">
              <p>
                Admin <br />
                21 DEC
              </p>
            </div>
            {/* Heart button */}
            <div className="icon-container" onClick="toggleIcons(this)">
              <img src={heart} alt="Icon 1" className="icon icon1" />
              <img src="heart filled.png" alt="Icon 2" className="icon icon2" />
            </div>
          </div>
          <a href="">
            <div className="writing">
              <h2>TITLE</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit cum rem reiciendis optio, sed cumque
                nesciunt ducimus veritatis explicabo quam amet ipsam voluptas molestias eaque blanditiis itaque
                perferendis deserunt delectus?
              </p>
              <hr />
            </div>
          </a>
          <div className="counter">100 VIEWS</div>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
