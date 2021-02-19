import React from 'react';

function MyList(props) {
    return (
        <div class="component-container-myList">
            <h3> My List </h3>
            

            
            {/* First Row */}
                        
            <div class='list-row-myList'>
                <div class="flex-column">
                    <p>Symbol</p>
                    <p>Stock name</p>
                </div>
                <div>
                    <p>Chart</p>
                </div>
                <div>
                    <p>Price</p><span><p>% change</p></span>
                </div>

            </div>
        </div>
    );
}

export default MyList;