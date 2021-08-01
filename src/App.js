import mugshot from "@/assets/images/leod-mugshot.png"

const _renderCover = () => {
  return (
    <>
      <div className="col-md-5 section-header hero">
          <div className="section-header-content">
            <img src={mugshot} />
            <h1 className="display-4">Leo Diaz</h1>
            <h5 className="text-light">Software Engineer</h5>
          </div>
        </div>
        <div className="col-md-7 section-content-wrapper hero">
          <div className="section-content">
            <p>Hi, I'm a Software Engineer based in Manila, PH.</p>
            <p>I love designing and building RESTful APIs, Single page applications (and ocassionally hybrid apps) and everything in between using mainly Python and Vue.</p>
            <p>Currently, I spend most of my time working as a full-time Javascript Developer at <a href="https://www.gocre8it.com/" target="_blank">GoCre8it</a>. I'm actively shipping features for our marketplace platform and I solve bunch of interesting problems on a daily basis. </p>
            <p>Feel free to take a look at my most recent projects on <br/>"<a href="">Things I'm building</a>" section. You can also stop and say hello at my email below.</p>
            
            <ul className="soc-media mt-5 mx-auto">
              <li><a href="#" className="btn btn-outline-primary">Get My Resume</a></li>
              <li className="ml-4">
                <a href="https://gitlab.com/mrtongkatali" target="_blank" className="soc-media-icon" id="gitlab">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="gitlab" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="svg-inline--fa fa-gitlab fa-w-16 fa-2x"><path fill="currentColor" d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z" className=""></path></svg>
                </a>
              </li>
              <li>
                  <a href="https://github.com/mrtongkatali" target="_blank" className="soc-media-icon" id="github">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" className="svg-inline--fa fa-github fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                  </a>
              </li>
              <li>
                  <a href="https://www.linkedin.com/in/mrtongkatali/" target="_blank" className="soc-media-icon" id="linkedin">
                      <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" className="svg-inline--fa fa-linkedin-in fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                  </a>
              </li>
              <li className="ml-4"><a href="mailto:leo@crazyapp.cloud">leo@crazyapp.cloud</a></li>
            </ul>
          </div>
        </div>
    </>
  )
};

const _renderSkillsSection = () => {
  return (
    <>
      <div className="section-bg-opacity"></div>
        <div className="col-md-5 section-header">
          <div className="section-header-content">
            <h4 className="text-primary text-light">Skills</h4>
          </div>
        </div>
        <div className="col-md-7 section-content-wrapper">
          <div className="section-content">
            <p className="mb-3">{">"} Backend Development</p>
            <ul className="expertise-list">
              <li>
                <i className="fab fa-python fa-1x"></i>
                Nginx
              </li>
              <li>
                <i className="fab fa-python fa-1x"></i>
                Python3
              </li>
              <li>
                <i className="fab fa-python fa-1x"></i>
                Flask
              </li>
              <li>
                <i className="fab fa-python fa-1x"></i>
                Django
              </li>
              <li>
                <i className="fab fa-python fa-1x"></i>
                Gunicorn
              </li>
              <li>
                <i className="fab fa-python fa-1x"></i>
                MySQL
              </li>
              <li>
                <i className="fab fa-python fa-1x"></i>
                Elasticsearch
              </li>
              <li>
                <i className="fab fa-python fa-1x"></i>
                OpenAPI
              </li>
              <li>
                <i className="fab fa-python fa-1x"></i>
                AWS
              </li>
            </ul>
          
            <p className="mt-5">> Frontend Development</p>
            <ul className="expertise-list">
              <li>
                  <i className="fab fa-vuejs"></i>
                  Vue
              </li>
              <li>
                <i className="fab fa-js-square"></i>
                Javascript (ES6+)
              </li>
              <li>
                <i className="fab fa-node-js"></i>
                NodeJS
              </li>
              <li>
                <i className="fab fa-js-square"></i>
                Cordova
              </li>
              <li>
                <i className="fab fa-html5"></i>
                HTML5
              </li>
              <li>
                <i className="fab fa-sass"></i>
                SASS
              </li>
              <li>
                <i className="fab fa-codepen"></i>
                Webpack
              </li>
              <li>
                <i className="fab fa-bootstrap"></i>
                Bootstrap
              </li>
            </ul>
          </div>
        </div>
    </>
  );
};

const _renderExperience = () => {
  return (
    <>
      <div className="col-md-5 section-header">
        <div className="section-header-content">
          <h4 className="text-primary text-light">Experience</h4>
        </div>
      </div>
      <div className="col-md-7 section-content-wrapper">
        <div className="section-content">
          <ul className="timeline">
            <li>
              <p className="role">Senior Engineer (Python + React)</p>
              <p className="text-small">Experience Digital</p>
              <p className="text-small">Feb 2021 &mdash; Present</p>
              <p className="text-small description">
                &mdash; Meeting with client to define the scope and scale of the software
              </p>
              <p className="text-small description">
                &mdash; Manage small team of Frontend Developers and UI Designer in developing features.
              </p>
              <p className="text-small description">
                &mdash; Work closely with product and backend team to ensure delivery and iteration of the project.
              </p>
            </li>
            <li>
              <p className="role">Team Lead (Javascript)</p>
              <p className="text-small">GoCre8it</p>
              <p className="text-small">Jan 2020 &mdash; Feb 2021</p>
              <p className="text-small description">
                &mdash; Write modern, performant and maintainable code for various SPA projects using ES6, Vue, SASS, Maps API and Cordova
              </p>
              <p className="text-small description">
                &mdash; Manage small team of Frontend Developers and UI Designer in developing features.
              </p>
              <p className="text-small description">
                &mdash; Work closely with product and backend team to ensure delivery and iteration of the project.
              </p>
            </li>
            <li>
              <p className="role">Frontend Engineer</p>
              <p className="text-small">Kodakit</p>
              <p className="text-small">May 2017 &mdash; Dec 2019, Singapore</p>
              <p className="text-small description">
                &mdash; Contributed extensively on building the photography platform for web and mobile using ES6, Vue, SASS, Google API and Cordova
              </p>
              <p className="text-small description">
                &mdash; Performed code reviews to ensure consistency with regards to coding standards
              </p>
              <p className="text-small description">
                &mdash; Consistently maintained and improved platform frontend code base
              </p>
            </li>
            <li>
              <p className="role">Frontend Engineer</p>
              <p className="text-small">YuuZoo</p>
              <p className="text-small">July 2016 &mdash; April 2017, Singapore</p>
              <p className="text-small description">
                &mdash; Engineered and maintained features of YuuZoo's e-commerce web and mobile platform using Angular, NodeJS, Gulp, LESS and ionic framework.
              </p>
              <p className="text-small description">
                &mdash; Translated mockups into seamless and fully functional features.
              </p>
              <p className="text-small description">
                &mdash; Interfaced with UX and product team to ensure thoughtful and coherent experience on the web and mobile platform
              </p>
            </li>
            <li>
              <p className="role">Software Engineer</p>
              <p className="text-small">BaseUp</p>
              <p className="text-small">June 2016 &mdash; July 2016, Philippines</p>
              <p className="text-small description">
                &mdash; Helped develop the frontend-facing of the booking platform using Angular, LESS, HTML5
              </p>
              <p className="text-small description">
                &mdash; Shipped APIs using Django Framework, Redis, Websockets and PostgreSQL
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

const App = () => {
  return (
    <div className="container-fluid px-0 position-relative">
      <div className="row no-gutters">
        {_renderCover()}
      </div>

      <div className="row no-gutters">
        {_renderSkillsSection()}
      </div>

      <div className="row no-gutters">
        {_renderExperience()}
      </div>
    </div>
  )
};

export default App;
