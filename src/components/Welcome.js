import React, {Fragment} from 'react'

const Welcome = () => {

  return (
    <Fragment>
    <div className="row">
      <div className="col-10-sm">
        <center>
          <h1>Welcome to Subtle</h1>
        </center>

        {/* <div className="row">
          <h4>Subtle is a social networking app akin to Pintrest. Users can make "channels" - a larger idea, like "my favorite artists" - which are comprised of "blocks" - an image with some text describing the block, like a picture of a painting with a description.</h4>
        </div>
        <div className="row">
          <h4>The main main you appears when you point your cursor at the "Subtle" icon in the top left corner.</h4>
        </div>
        <div className="row">

        <div className="row">
          <h4>Notable functionality</h4>
        </div>
        <div className="row">

          <ul>
            <li>A channel is created by a user and can be followed by many other users.</li>

            <li>If a channel is public, any user can add blocks to it.</li>

            <li>A block can belong to more than one channel. If you see a block on another user's channel that you think would work with a one you've created, you can add that block to your channel.
            </li>

            <li>You can see all of the channels you've created and followed on your profile as well as all your friends.
            </li>

            <li>You can add or remove friends on the site. You can also edit your profile and upload a new profile picture.</li>

            <li>You can add or remove friends on the site. You can also edit your profile and upload a new profile picture.</li>

            <li>The home page is a feed page which randomly fetches a user's friends' activity.</li>
          </ul>
        </div>

        </div>

        <div className="row">
          <h4>Tech Specs Subtle uses AWS S3 by way of Active Storage to store uploaded pictures for blocks and user profiles. The backend uses 'Shallow Serializers' to render nested data with more specific information. i.e - It makes it possible to see a user's friend's channel's block's image. Where as, by default, the serializer would give just the block's ID for a channel, if anything at all, rather than more specific information. Fully functional AUTH using JWT tokens generated by the backend and saved to the front end in localstorage. Allowing a user to close the page and continue to be logged in. It also fetches the relevant information of the url you're trying to go to if you have access to it. i.e you can reload on a friend's page and if you're logged in it will render with a that friend's information.</h4>
        </div>*/}
      </div>
    </div>
  </Fragment>
  )
}

export default(Welcome)
