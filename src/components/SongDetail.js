import React from 'react'
import {connect} from 'react-redux'

const SongDetail = (props) => {
    const song = props.song
    if(!song)
        return <div>Select a song</div>
    else
        return (
            <div>
                <h3>Detail of selected song number {(song.id)} is</h3>
                <p>
                    <b>Title: </b> {song.title}
                    <br/>
                    <b>Duration: </b> {song.duration}
                </p>
            </div>
        )
}
const mapStateToprops = (state) => {
    return {song: state.selectedSong}
}
export default connect(mapStateToprops)(SongDetail)
