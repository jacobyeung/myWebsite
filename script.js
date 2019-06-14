import React from 'react';

const styles = {
    maxWidth: {
        maxWidth: "6000px"
    }
}
console.log("why are you here");

class Background extends React.Component {

    render() {
        return (
            <div>
                <img style={styles.maxWidth}
                    src={"hoho.jpg"}/>
            </div>
        )
    }
}