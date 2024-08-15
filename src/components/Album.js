import React from 'react'

function Album(props) {
  return (

        <div className="albumsDiv">

          <div className="audio">
            <h3>{props.audioName}</h3>
        <audio controls muted loop><source src={props.audio} type="audio/mpeg"></source></audio>
        </div>

        <div className="lyrics">
          <h3>Lyrics</h3>
          <p> {props.songLyrics} </p>
        </div>

        <div className="artists">
        <h3>Song Artists</h3>
        <dl>
          <dt>Singer</dt>
          <dd>
            <ul class="singer">
              <li>{props.singer1}</li>
              <li>{props.singer2}</li>
            </ul>
          </dd>
          <dt>Lyricist</dt>
          <dd>
            <ul class="lyricist">
              <li>{props.lyricist}</li>
            </ul>
          </dd>
        </dl>
        </div>
        </div>   

  )
}

export default Album
