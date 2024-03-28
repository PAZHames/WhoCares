
import './Profile.css';
import Nav from "../components/Header";

function Profile() {
    return (
      <>
        <div className="name">Craig Cares</div>

<div className='container'>
        <div className='profilebio'>

          <div className="profile-pic">
            <img src='profilepic.jpg' width ='60%' />
          </div>
          <div className="bio">
          <div className="prompt">Name</div>
            <div className="response">Craig Charles</div>
            <div className="prompt">Who caring for?</div>
            <div className="response">My mum</div>
            <div className="prompt">Caring alone?</div>
            <div className="response">Yes</div>
            <div className="prompt">Relationship with caree</div>
            <div className="response">Son</div>
      
          </div>
        </div>
        <div className='about-me'>

          <div className="prompt">More about me</div>
          <div className="response">I'm a devoted carer for my wonderful mum. That's why I'm here, reaching out to connect 
          with others who share similar experiences. When I'm not busy taking care of my loved ones, you can find me enjoying the simple pleasures of life. Whether it's taking leisurely walks in nature, savoring a cup of tea, or diving into a good book, I find joy in the little things.</div>
          <br />
          <div className="prompt">Groups and Events</div>
          <div className="response">Currently not attending any events</div>
          

          </div>
          </div>
      <Nav/>
      </>
    );
  }

  export default Profile;
