import './Profile.css';

function Profile() {
    return (
      <>
        <div className="name">Craig Cares</div>

        <div className='profile+bio'>

          <div className="profile-pic">
            <img src='profilepic.jpg' width ='60%' />
          </div>
          <div className="bio">
            <div className="prompt">Who caring for?</div>
            <div className="response">My mum</div>
            <div className="prompt">Caring alone?</div>
            <div>Relationship with caree</div>
            <div>More about me: just a very caring man</div>
          </div>

        </div>




      </>
    );
  }

  export default Profile;
