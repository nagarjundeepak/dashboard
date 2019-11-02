import React from 'react';
import {FaPhone} from 'react-icons/fa';
import Ratings from './ratings';
import Ae from './ae';
import NotesHOC from './notes';
import {SortHOC, SearchHOC} from './extra/';

function UserDetails({users, filter}) {
  let {userData, filtered} = users;

  userData = filter ? filtered : userData;
  if (!userData) {
    return <div>loading...</div>;
  }
  console.log (userData);
  return (
    <div className="mt-3 user-details">
      <div className="mt-3 mb-3 row">
        <SearchHOC />
        <SortHOC />
      </div>
      <div className="mb-3 title">Show Details (Subjects and Tags)</div>
      {userData.map ((user, i) => {
        return (
          <div key={user.id}>
            <div className="row">
              <div className="ml-3">
                <div className="row">
                  <div className="user-name col">{user.name}</div>
                  <Ratings ratingCount={user.ratings} />
                </div>
                <div className="user-mobile">
                  <FaPhone style={{color: '#d3d3d3', marginRight: '3px'}} />
                  {user.mobile}
                </div>
              </div>

              <Ae aeData={user.ae} />
              <NotesHOC id={user.id} notesData={user.notes} />

            </div>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default UserDetails;
